function ItemContainer({ children }) {
  return (
    <div className="mx-auto my-1.5 flex justify-between gap-4 rounded-lg bg-primary-darker px-4 py-1">
      {children}
    </div>
  );
}

export default ItemContainer;
