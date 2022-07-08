import { c as create_ssr_component, e as escape, v as validate_component, g as each } from "../../../../chunks/index-343a5359.js";
import { P as Pagination, S as ShortPost } from "../../../../chunks/Pagination-51d5cdf3.js";
const load = async ({ params, fetch }) => {
  const currentTag = params.tag;
  const response = await fetch("/api/posts.json");
  const posts = await response.json();
  const matchingPosts = posts.filter((post) => post.meta.tags ? post.meta.tags.includes(currentTag) : false);
  return {
    props: { posts: matchingPosts, tag: currentTag }
  };
};
const itemsPerpage = 5;
const U5Btagu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let indexOfLastItem;
  let indexOfFirstItem;
  let amountOfPages;
  let slicedList;
  let { posts } = $$props;
  let { tag } = $$props;
  let currentPage = 1;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    indexOfLastItem = currentPage * itemsPerpage;
    indexOfFirstItem = indexOfLastItem - itemsPerpage;
    amountOfPages = Math.ceil(posts.length / itemsPerpage);
    slicedList = posts.slice(indexOfFirstItem, indexOfLastItem);
    $$rendered = `${posts.length ? `<section class="${"center"}"><h2>Posts tagged #${escape(tag)}</h2>

    <a href="${"/posts"}">Back to all posts</a>

    ${validate_component(Pagination, "Pagination").$$render($$result, { amountOfPages, currentPage }, {
      currentPage: ($$value) => {
        currentPage = $$value;
        $$settled = false;
      }
    }, {})}</section>

  <section class="${"gapped"}">${each(slicedList, (post, index) => {
      return `${validate_component(ShortPost, "ShortPost").$$render($$result, { post }, {}, {})}`;
    })}</section>` : `<section class="${"center margin-top"}"><h2>There are no posts tagged as #${escape(tag)}!</h2>
  <a href="${"/posts/tag"}">Back to tag catalog</a></section>`}`;
  } while (!$$settled);
  return $$rendered;
});
export { U5Btagu5D as default, load };
