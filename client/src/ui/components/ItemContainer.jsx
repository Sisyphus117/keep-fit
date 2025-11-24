function ItemContainer({ children }) {
  return (
    <div className="mx-auto my-2 justify-between rounded-lg bg-zinc-700 px-4 py-1.5">
      {children}
    </div>
  );
}

export default ItemContainer;
