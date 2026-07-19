export default function Stats() {
  const stats = [
    { title: "Participants", value: "50+" },
    { title: "Teams", value: "20+" },
    { title: "Prize ", value: "Exciting Goodies" },
   // { title: "Mentors", value: "20+" },
  ];

  return (
    <section className="bg-black py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-yellow-500/20 bg-zinc-900 p-8 text-center"
          >
            <h2 className="text-4xl font-bold text-yellow-400">
              {item.value}
            </h2>

            <p className="mt-3 text-gray-300">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}