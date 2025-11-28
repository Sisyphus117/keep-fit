import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import { lazy, Suspense, useEffect, useState } from "react";
import { useInitData } from "./hooks/useInitData";
import PreservedRoute from "./ui/components/PreservedRoute";
import PageNotFound from "./ui/PageNotFound";
import useAuth from "./hooks/useAuth";
import { Toaster } from "react-hot-toast";
import useDarkMode from "./hooks/useDarkmode";
import Spinner from "./ui/components/Spinner";

const DashBoard = lazy(() => import("./pages/Dashboard"));
const Diet = lazy(() => import("./pages/Diet"));
const Fitness = lazy(() => import("./pages/Fitness"));
const Plan = lazy(() => import("./pages/Plan"));
const User = lazy(() => import("./pages/User"));
const Login = lazy(() => import("./pages/Login"));

function App() {
  const { authenticated, id } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const { isDarkMode } = useDarkMode();
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const { initData } = useInitData();
  useEffect(() => {
    async function init() {
      if (authenticated) {
        setIsLoading(true);
        await initData(id);
        setIsLoading(false);
      }
    }
    init();
  }, [authenticated, initData, id]);

  return (
    <BrowserRouter>
      {isLoading && (
        <AppLayout>
          <Spinner />
        </AppLayout>
      )}
      <AppLayout>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Spinner />}>
                <DashBoard />
              </Suspense>
            }
          />
          <Route element={<PreservedRoute />}>
            <Route
              path="/diet"
              element={
                <Suspense fallback={<Spinner />}>
                  <Diet />
                </Suspense>
              }
            />
            <Route
              path="/fitness"
              element={
                <Suspense fallback={<Spinner />}>
                  <Fitness />
                </Suspense>
              }
            />
            <Route
              path="/plan"
              element={
                <Suspense fallback={<Spinner />}>
                  <Plan />
                </Suspense>
              }
            />
            <Route
              path="/user"
              element={
                <Suspense fallback={<Spinner />}>
                  <User />
                </Suspense>
              }
            />
          </Route>
          <Route
            path="/login"
            element={
              <Suspense fallback={<Spinner />}>
                <Login />
              </Suspense>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AppLayout>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
