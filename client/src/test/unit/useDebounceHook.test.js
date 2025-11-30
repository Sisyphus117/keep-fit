import { useDebounce } from "../../hooks/useDebounce";
import { renderHook, act } from "@testing-library/react";
describe("useDebounce", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  test("should debounce", () => {
    const func = jest.fn();

    const { current: debouncedFunc } = renderHook(() =>
      useDebounce(func, 500),
    ).result;

    debouncedFunc("call1");
    debouncedFunc("call2");
    debouncedFunc("call3");

    expect(func).not.toHaveBeenCalled();

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith("call3");
  });

  test("reset timeout", () => {
    const func = jest.fn();
    const { current: debouncedFunc } = renderHook(() =>
      useDebounce(func, 500),
    ).result;

    debouncedFunc("call1");

    act(() => {
      jest.advanceTimersByTime(200);
      expect(func).not.toHaveBeenCalled();
      debouncedFunc("call2");
    });

    act(() => {
      jest.advanceTimersByTime(300);
      expect(func).not.toHaveBeenCalled();
    });

    jest.advanceTimersByTime(200);

    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith("call2");
  });

  test("call on twice", () => {
    const func = jest.fn();
    const { current: debouncedFunc } = renderHook(() =>
      useDebounce(func, 500),
    ).result;

    debouncedFunc("call1");

    act(() => {
      jest.advanceTimersByTime(500);
      debouncedFunc("call2");
      expect(func).toHaveBeenCalledTimes(1);
    });

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(func).toHaveBeenCalledTimes(2);
  });
});
