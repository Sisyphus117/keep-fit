function StatCard({ icon, title, value }) {
  return (
    <div className="flex min-w-28 flex-col gap-2 rounded-xl bg-zinc-400 px-5 py-3">
      <div className="flex items-end justify-between gap-6">
        <div className="">{icon}</div>
        <h2 className="text-xl">{title}</h2>
      </div>

      <p className="self-end text-3xl">{value}</p>
    </div>
  );
}

export default StatCard;
