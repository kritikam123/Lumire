const store = [
  {
    city: "Melbourne",
    lines: ["100 Flinders Street", "Melbourne VIC 3000 AU"],
  },
  {
    city: "Sydney",
    lines: ["100 George Street", "Sydney NSW 2000 AU"],
  },
  {
    city: "Byron Bay",
    lines: ["100 Jonson Street", "Byron Bay NSW 2481 AU"],
  },
  {
    city: "London",
    lines: ["100 Oxford Street", "London W1D 1LL UK"],
  },
];

const StoreLocation = () => {
  return (
    <section className="px-10 py-12">
      <h2 className="font-serif text-6xl text-[#1a1a1a]">Visit our stores</h2>
      <p className="mt-4 text-gray-500">Find us at these locations.</p>

      <div className="grid grid-cols-4 gap-8 mt-10">
        {store.map((store) => (
          <div key={store.city}>
            <p className="font-semibold text-xl">{store.city}</p>
            {store.lines.map((line) => (
              <p key={line} className="text-l text-gray-500 mt-1">
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default StoreLocation;
