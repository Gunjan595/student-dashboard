export default function ActivityTile() {
  return (
    <section className="glass-card rounded-3xl p-6">
      <h3 className="text-xl font-semibold">
        Activity
      </h3>

      <p className="text-zinc-400 mt-2">
        Weekly Learning Activity
      </p>

      <div className="mt-6 flex items-end gap-2 h-24">
        <div className="w-4 h-10 bg-purple-500 rounded"></div>
        <div className="w-4 h-16 bg-purple-500 rounded"></div>
        <div className="w-4 h-8 bg-purple-500 rounded"></div>
        <div className="w-4 h-20 bg-purple-500 rounded"></div>
        <div className="w-4 h-12 bg-purple-500 rounded"></div>
        <div className="w-4 h-16 bg-purple-500 rounded"></div>
      </div>

    </section>
  );
}