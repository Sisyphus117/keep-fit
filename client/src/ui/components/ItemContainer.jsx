function ItemContainer({ children }) {
  return (
    <div className="bg-primary-darker mx-auto my-2 justify-between rounded-lg px-4 py-1.5">
      {children}
    </div>
  );
}

export default ItemContainer;
