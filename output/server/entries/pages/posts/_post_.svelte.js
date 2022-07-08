import { c as create_ssr_component, g as each, e as escape, v as validate_component } from "../../../chunks/index-343a5359.js";
import { T as Tag } from "../../../chunks/tag-dc4a2355.js";
var _post__svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "h2.svelte-186kvq{margin-top:0}.block.svelte-186kvq{margin-bottom:1.5rem}")();
const css = {
  code: "h2.svelte-186kvq{margin-top:0}.block.svelte-186kvq{margin-bottom:1.5rem}",
  map: null
};
const load = async ({ params, fetch }) => {
  const currentPath = params.post;
  const response = await fetch("/api/posts.json");
  const posts = await response.json();
  const matchingPosts = posts.filter((post) => post.meta.path ? post.meta.path == currentPath : false);
  return {
    props: { posts: matchingPosts, path: currentPath }
  };
};
const U5Bpostu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  let { path } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  $$result.css.add(css);
  return `${posts.length ? `<div class="${"gapped"}">${each(posts, (post, index) => {
    return `<div class="${"gapped margins"}"><section class="${"block dropshadow svelte-186kvq"}"><h2 class="${"svelte-186kvq"}">${escape(post.meta.title)}</h2>
        <span>Posted on: ${escape(post.meta.date)}</span>
        <hr>
        <!-- HTML_TAG_START -->${post.contents.html}<!-- HTML_TAG_END --></section>
      ${post.meta.tags ? `<i>tagged as</i>
      <ul class="${"tags"}">${each(post.meta.tags, (tag) => {
      return `${validate_component(Tag, "Tag").$$render($$result, { tag }, {}, {})}`;
    })}
      </ul>` : `<i>no tags</i>`}
    </div>`;
  })}</div>` : `<section class="${"block dropshadow svelte-186kvq"}">post ${escape(path)} doesn&#39;t exist!
</section>`}`;
});
export { U5Bpostu5D as default, load };
