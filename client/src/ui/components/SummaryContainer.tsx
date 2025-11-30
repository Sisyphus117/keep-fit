function SummaryContainer({ children }) {
  return (
    <div className="mb-2 mt-2.5 flex items-center justify-between border-l-8 border-indigo-light bg-primary-darker px-4 py-3">
      {children}
    </div>
  );
}

export default SummaryContainer;
