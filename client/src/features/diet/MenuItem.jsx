function MenuItem({ item }) {
  const { image, title, restaurantChain } = item;
  return (
    <div className="flex justify-between bg-primary-darker px-4 py-3">
      <div className="flex flex-col justify-between">
        <h2>{title}</h2>
        <p>{restaurantChain}</p>
      </div>
      <div className="rounded-full bg-white">
        <img
          className="h-20 w-20 rounded-full"
          src={image}
          alt={restaurantChain}
        />
      </div>
    </div>
  );
}

export default MenuItem;
