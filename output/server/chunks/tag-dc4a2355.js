import { c as create_ssr_component, f as add_attribute, e as escape } from "./index-343a5359.js";
const Tag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tag } = $$props;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  return `<li><a class="${"tag-text"}"${add_attribute("href", `/posts/tag/${tag}`, 0)}>#${escape(tag)}</a></li>`;
});
export { Tag as T };
