import { c as create_ssr_component, g as each, v as validate_component } from "../../../../chunks/index-343a5359.js";
import { T as Tag } from "../../../../chunks/tag-dc4a2355.js";
const load = async ({ params, fetch }) => {
  const response = await fetch("/api/posts.json");
  const posts = await response.json();
  let tagList = [];
  posts.forEach((post) => {
    if (post.meta.tags)
      post.meta.tags.forEach((tag) => tagList.push(tag));
  });
  tagList = [...new Set(tagList)];
  return { props: { tags: tagList } };
};
const Tag_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tags } = $$props;
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  return `<section class="${"center"}"><h2>Tag catalog</h2>

    <a href="${"/posts"}">Back to all posts</a></section>

<section class="${"block dropshadow"}">${tags.length > 0 ? `<ul class="${"tags"}">${each(tags, (tag) => {
    return `${validate_component(Tag, "Tag").$$render($$result, { tag }, {}, {})}`;
  })}</ul>` : `<p>No tags found!</p>`}</section>`;
});
export { Tag_1 as default, load };
