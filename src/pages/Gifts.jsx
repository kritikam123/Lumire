import CategoryPage from "./CategoryPage";

const GIFT_MAX_PRICE = 150; // used when a product has no `gift` flag

// Shows products flagged `gift: true`; if a product has no flag,
// anything at or under GIFT_MAX_PRICE counts as a gift.
const getGifts = (all) =>
  all.filter((item) => item.gift ?? Number(item.price) <= GIFT_MAX_PRICE);

const Gifts = () => (
  <CategoryPage
    getProducts={getGifts}
    title="Gifts"
    description="Thoughtful pieces for birthdays, anniversaries and just because."
  />
);

export default Gifts;
