import { c as create_ssr_component, f as add_attribute } from "../../chunks/index-343a5359.js";
var ANOMALY = "/_app/immutable/assets/ANOMALY-48171cfb.png";
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".tags.svelte-1y0hge8{display:inline-flex}")();
const css = {
  code: ".tags.svelte-1y0hge8{display:inline-flex}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="${"center d-block margin-top"}"><img class="${"thumbnail"}" alt="${"introduction avatar"}"${add_attribute("src", ANOMALY, 0)}>
    <h1>Welcome!</h1>
    <p>My name is Jake. I&#39;m a student in software development who likes to create things that help people in some shape or form.</p></section>

<section class="${"gapped"}"><div class="${"block dropshadow center"}"><ul class="${"tags svelte-1y0hge8"}"><li><a class="${"tag-text"}" href="${"https://twitter.com/fxlmine"}">Twitter</a></li>
            <li><a class="${"tag-text"}" href="${"https://github.com/draconizations"}">Github</a></li></ul>
        <p>The main project I work on right now is <a href="${"https://dash.pluralkit.me"}">the dashboard for the discord bot PluralKit</a>.
        I have a couple of side-projects as well, but who knows if they&#39;ll ever see the light of day.</p>
        <p>This is my personal/development-talk related blog!</p></div>
</section>`;
});
export { Routes as default };
