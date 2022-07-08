import { c as create_ssr_component, v as validate_component, g as each } from "../../../chunks/index-343a5359.js";
import { P as Pagination, S as ShortPost } from "../../../chunks/Pagination-51d5cdf3.js";
const load = async ({ fetch }) => {
  const posts = await fetch("/api/posts.json");
  const allPosts = await posts.json();
  return { props: { posts: allPosts } };
};
const itemsPerpage = 5;
const Posts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let indexOfLastItem;
  let indexOfFirstItem;
  let amountOfPages;
  let slicedList;
  let { posts } = $$props;
  let currentPage = 1;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    indexOfLastItem = currentPage * itemsPerpage;
    indexOfFirstItem = indexOfLastItem - itemsPerpage;
    amountOfPages = Math.ceil(posts.length / itemsPerpage);
    slicedList = posts.slice(indexOfFirstItem, indexOfLastItem);
    $$rendered = `<section class="${"center"}"><h2>Recent posts</h2>

  <a href="${"/posts/tag"}">search by tag</a>
  ${validate_component(Pagination, "Pagination").$$render($$result, { amountOfPages, currentPage }, {
      currentPage: ($$value) => {
        currentPage = $$value;
        $$settled = false;
      }
    }, {})}</section>

<section class="${"gapped"}">${posts.length ? `${each(slicedList, (post) => {
      return `${validate_component(ShortPost, "ShortPost").$$render($$result, { post }, {}, {})}`;
    })}` : `<section class="${"block dropshadow"}"><p>No posts found.</p></section>`}</section>`;
  } while (!$$settled);
  return $$rendered;
});
export { Posts as default, load };
