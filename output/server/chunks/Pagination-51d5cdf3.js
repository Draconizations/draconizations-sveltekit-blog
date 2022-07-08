import { c as create_ssr_component, f as add_attribute, e as escape } from "./index-343a5359.js";
function trimPostContent(post) {
  const parsedContent = post.contents.html.replace(/(<([^>]+)>)/gi, "");
  let trimmedContent = parsedContent.split(" ").slice(0, 42).join(" ");
  if (trimmedContent !== parsedContent) {
    trimmedContent += "...";
  }
  return trimmedContent;
}
var ShortPost_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "h3.svelte-viazfp{margin-top:0rem}")();
const css$1 = {
  code: "h3.svelte-viazfp{margin-top:0rem}",
  map: null
};
const ShortPost = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  $$result.css.add(css$1);
  return `<div class="${"block dropshadow"}"><h3 class="${"svelte-viazfp"}"><a class="${"title"}"${add_attribute("href", post.path, 0)}>\u{1F517} ${escape(post.meta.title)}</a></h3>
    <span class="${"italic"}">Posted on: ${escape(post.meta.date)}</span>
    <hr>
    <!-- HTML_TAG_START -->${trimPostContent(post)}<!-- HTML_TAG_END -->
</div>`;
});
var Pagination_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "div.svelte-1b3xl6i{display:inline-flex;flex-direction:row;flex-wrap:wrap;gap:0.75rem;justify-content:center}")();
const css = {
  code: "div.svelte-1b3xl6i{display:inline-flex;flex-direction:row;flex-wrap:wrap;gap:0.75rem;justify-content:center}",
  map: null
};
const Pagination = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { currentPage } = $$props;
  let { amountOfPages } = $$props;
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0)
    $$bindings.currentPage(currentPage);
  if ($$props.amountOfPages === void 0 && $$bindings.amountOfPages && amountOfPages !== void 0)
    $$bindings.amountOfPages(amountOfPages);
  $$result.css.add(css);
  return `${amountOfPages > 1 ? `<div class="${"margin-top svelte-1b3xl6i"}"><a href="${"#"}" class="${"normal"}">first</a> /
    ${currentPage !== 1 ? `<a href="${"#"}" class="${"normal"}">prev</a>` : `....`}
    /
    ${currentPage !== amountOfPages ? `<a href="${"#"}" class="${"normal"}">next</a>` : `...`}
    / <a href="${"#"}" class="${"normal"}">last</a></div>` : ``}`;
});
export { Pagination as P, ShortPost as S };
