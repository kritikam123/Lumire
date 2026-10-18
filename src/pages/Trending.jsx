import CategoryPage from "./CategoryPage";

const TRENDING_COUNT = 12;

// Shows products flagged `trending: true`; if none are flagged,
// falls back to the highest-rated products.
const getTrending = (all) => {
  const flagged = all.filter((item) => item.trending);
  if (flagged.length > 0) return flagged;
  return [...all]
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, TRENDING_COUNT);
};

const Trending = () => (
  <CategoryPage
    getProducts={getTrending}
    title="Trending"
    description="The pieces everyone is wearing right now."
  />
);

export default Trending;
