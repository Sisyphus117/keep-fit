function ItemContainer({ children }) {
  return (
    <div className="mx-auto my-1.5 flex items-center justify-between gap-4 border-l-8 border-grape-light bg-primary-darker px-6 py-1">
      {children}
    </div>
  );
}

export default ItemContainer;
