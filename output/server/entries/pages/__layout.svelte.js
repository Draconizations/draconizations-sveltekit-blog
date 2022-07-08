import { n as noop, a as safe_not_equal, c as create_ssr_component, e as escape, b as null_to_empty, d as subscribe, f as add_attribute, v as validate_component } from "../../chunks/index-343a5359.js";
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
let defaultValue$1 = "light";
const initialValue$1 = defaultValue$1;
const theme$1 = writable(initialValue$1);
theme$1.subscribe((value) => {
});
let defaultValue = "blue";
const initialValue = defaultValue;
const accent$1 = writable(initialValue);
accent$1.subscribe((value) => {
});
var style = /* @__PURE__ */ (() => '@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap");\n* {\n  box-sizing: border-box;\n}\nbody {\n  margin: 0;\n}\n#sveltekit-body {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-height: 100vh;\n  font-family: "Roboto Mono", "Courier New", monospace;\n  flex: 1;\n}\nmain {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  gap: 1.5rem;\n}\nsection {\n  display: flex;\n  flex-direction: column;\n}\na {\n  text-decoration: none;\n}\na:hover {\n  text-decoration: underline;\n}\nh1, h2, h3, h4 {\n  margin-top: 0.5rem;\n}\nselect {\n  border: none;\n  padding: 0.25rem 0.5rem;\n  font-family: "Roboto Mono", "Courier New", monospace;\n}\n.theme-wrapper {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  width: 100%;\n}\n.container {\n  display: flex;\n  flex-direction: column;\n  margin: 2.5rem calc(1.5rem + 8px) 2.5rem 1.5rem;\n  width: 100%;\n  gap: 1rem;\n}\n.block {\n  padding: 1rem;\n}\n.title {\n  font-weight: bold;\n}\n.gapped {\n  gap: 2.5rem;\n}\n.margins {\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.margin-top {\n  margin-top: 1.5rem;\n}\n.center {\n  text-align: center;\n}\n.italic {\n  font-style: italic;\n}\n.tags {\n  list-style-type: none;\n  margin: 1rem 0;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n.tag-text {\n  display: block;\n  padding: 0.25rem 0.5rem;\n}\n.thumbnail {\n  object-fit: cover;\n  max-width: 200px;\n  height: 200px;\n}\n.margin-center {\n  margin-left: auto;\n  margin-right: auto;\n}\n.d-block {\n  display: block;\n}\n@media (min-width: 900px) {\n  .container {\n    width: 70%;\n    max-width: 750px;\n    margin: 2.5rem auto;\n  }\n}\n@media (min-width: 1200px) {\n  .container {\n    width: 69%;\n    max-width: 900px;\n  }\n}')();
var accent = /* @__PURE__ */ (() => ".drgn-black .dropshadow {\n  box-shadow: 8px 8px 0px 0px #000000;\n}\n.drgn-black a {\n  color: #000000;\n}\n.drgn-black .tag-text {\n  background-color: #000000;\n}\n.drgn-black select {\n  background: #000000;\n}\n\n.drgn-red .dropshadow {\n  box-shadow: 8px 8px 0px 0px #ff4043;\n}\n.drgn-red a {\n  color: #ff4043;\n}\n.drgn-red .tag-text {\n  background-color: #ff4043;\n}\n.drgn-red select {\n  background: #ff4043;\n}\n\n.drgn-orange .dropshadow {\n  box-shadow: 8px 8px 0px 0px #ff732d;\n}\n.drgn-orange a {\n  color: #ff732d;\n}\n.drgn-orange .tag-text {\n  background-color: #ff732d;\n}\n.drgn-orange select {\n  background: #ff732d;\n}\n\n.drgn-peachy .dropshadow {\n  box-shadow: 8px 8px 0px 0px #ff9c63;\n}\n.drgn-peachy a {\n  color: #ff9c63;\n}\n.drgn-peachy .tag-text {\n  background-color: #ff9c63;\n}\n.drgn-peachy select {\n  background: #ff9c63;\n}\n\n.drgn-yellow .dropshadow {\n  box-shadow: 8px 8px 0px 0px #ffff31;\n}\n.drgn-yellow a {\n  color: #ffff31;\n}\n.drgn-yellow .tag-text {\n  background-color: #ffff31;\n}\n.drgn-yellow select {\n  background: #ffff31;\n}\n\n.drgn-lime .dropshadow {\n  box-shadow: 8px 8px 0px 0px #a0ff41;\n}\n.drgn-lime a {\n  color: #a0ff41;\n}\n.drgn-lime .tag-text {\n  background-color: #a0ff41;\n}\n.drgn-lime select {\n  background: #a0ff41;\n}\n\n.drgn-green .dropshadow {\n  box-shadow: 8px 8px 0px 0px #3ad96f;\n}\n.drgn-green a {\n  color: #3ad96f;\n}\n.drgn-green .tag-text {\n  background-color: #3ad96f;\n}\n.drgn-green select {\n  background: #3ad96f;\n}\n\n.drgn-teal .dropshadow {\n  box-shadow: 8px 8px 0px 0px #1ac7c4;\n}\n.drgn-teal a {\n  color: #1ac7c4;\n}\n.drgn-teal .tag-text {\n  background-color: #1ac7c4;\n}\n.drgn-teal select {\n  background: #1ac7c4;\n}\n\n.drgn-sky .dropshadow {\n  box-shadow: 8px 8px 0px 0px #66a7ff;\n}\n.drgn-sky a {\n  color: #66a7ff;\n}\n.drgn-sky .tag-text {\n  background-color: #66a7ff;\n}\n.drgn-sky select {\n  background: #66a7ff;\n}\n\n.drgn-blue .dropshadow {\n  box-shadow: 8px 8px 0px 0px #2574ff;\n}\n.drgn-blue a {\n  color: #2574ff;\n}\n.drgn-blue .tag-text {\n  background-color: #2574ff;\n}\n.drgn-blue select {\n  background: #2574ff;\n}\n\n.drgn-purple .dropshadow {\n  box-shadow: 8px 8px 0px 0px #b656fd;\n}\n.drgn-purple a {\n  color: #b656fd;\n}\n.drgn-purple .tag-text {\n  background-color: #b656fd;\n}\n.drgn-purple select {\n  background: #b656fd;\n}\n\n.drgn-magenta .dropshadow {\n  box-shadow: 8px 8px 0px 0px #f034c7;\n}\n.drgn-magenta a {\n  color: #f034c7;\n}\n.drgn-magenta .tag-text {\n  background-color: #f034c7;\n}\n.drgn-magenta select {\n  background: #f034c7;\n}\n\n.drgn-pink .dropshadow {\n  box-shadow: 8px 8px 0px 0px #ff83b3;\n}\n.drgn-pink a {\n  color: #ff83b3;\n}\n.drgn-pink .tag-text {\n  background-color: #ff83b3;\n}\n.drgn-pink select {\n  background: #ff83b3;\n}\n\n.drgn-white .dropshadow {\n  box-shadow: 8px 8px 0px 0px #ffffff;\n}\n.drgn-white a {\n  color: #ffffff;\n}\n.drgn-white .tag-text {\n  background-color: #ffffff;\n}\n.drgn-white select {\n  background: #ffffff;\n}")();
var theme = /* @__PURE__ */ (() => ".theme-wrapper.drgn-dark {\n  background-color: #000000;\n  color: #ffffff;\n}\n\n.theme-wrapper.drgn-light {\n  background-color: #ffffff;\n  color: #000000;\n}\n\n.theme-wrapper.drgn-faded {\n  background-color: #3d3f45;\n  color: #faf9fb;\n}\n\n.drgn-light .block {\n  border: 1px solid #000000;\n  background-color: #ffffff;\n}\n.drgn-light hr {\n  border: none;\n  border-top: 1px solid #000000;\n  width: 100%;\n}\n.drgn-light .title {\n  color: #000000;\n}\n.drgn-light select, .drgn-light .tag-text {\n  color: #ffffff;\n}\n.drgn-light .tag-text:hover {\n  background-color: #000000;\n  text-decoration: none;\n}\n.drgn-light .thumbnail {\n  border: 1px solid #000000;\n}\n.drgn-light .normal {\n  color: #000000;\n}\n\n.drgn-dark .block {\n  border: 1px solid #ffffff;\n  background-color: #000000;\n}\n.drgn-dark hr {\n  border: none;\n  border-top: 1px solid #ffffff;\n  width: 100%;\n}\n.drgn-dark .title {\n  color: #ffffff;\n}\n.drgn-dark select, .drgn-dark .tag-text {\n  color: #000000;\n}\n.drgn-dark .tag-text:hover {\n  background-color: #ffffff;\n  text-decoration: none;\n}\n.drgn-dark .thumbnail {\n  border: 1px solid #ffffff;\n}\n.drgn-dark .normal {\n  color: #ffffff;\n}\n\n.drgn-faded .block {\n  border: 1px solid #c1bdd0;\n  background-color: #3d3f45;\n}\n.drgn-faded hr {\n  border: none;\n  border-top: 1px solid #c1bdd0;\n  width: 100%;\n}\n.drgn-faded .title {\n  color: #faf9fb;\n}\n.drgn-faded select, .drgn-faded .tag-text {\n  color: #3d3f45;\n}\n.drgn-faded .tag-text:hover {\n  background-color: #faf9fb;\n  text-decoration: none;\n}\n.drgn-faded .thumbnail {\n  border: 1px solid #c1bdd0;\n}\n.drgn-faded .normal {\n  color: #faf9fb;\n}")();
var prismLaserwave = /* @__PURE__ */ (() => '/*\r\n * Laserwave Theme originally by Jared Jones for Visual Studio Code\r\n * https://github.com/Jaredk3nt/laserwave\r\n *\r\n * Ported for PrismJS by Simon Jespersen [https://github.com/simjes]\r\n */\r\n\r\n code[class*="language-"],\r\n pre[class*="language-"] {\r\n     background: #27212e;\r\n     color: #ffffff;\r\n     font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace; /* this is the default */\r\n     /* The following properties are standard, please leave them as they are */\r\n     font-size: 1em;\r\n     direction: ltr;\r\n     text-align: left;\r\n     white-space: pre;\r\n     word-spacing: normal;\r\n     word-break: normal;\r\n     line-height: 1.5;\r\n     -moz-tab-size: 2;\r\n     -o-tab-size: 2;\r\n     tab-size: 2;\r\n     /* The following properties are also standard */\r\n     -webkit-hyphens: none;\r\n     -moz-hyphens: none;\r\n     -ms-hyphens: none;\r\n     hyphens: none;\r\n }\r\n \r\n code[class*="language-"]::-moz-selection,\r\n code[class*="language-"] ::-moz-selection,\r\n pre[class*="language-"]::-moz-selection,\r\n pre[class*="language-"] ::-moz-selection {\r\n     background: #eb64b927;\r\n     color: inherit;\r\n }\r\n \r\n code[class*="language-"]::selection,\r\n code[class*="language-"] ::selection,\r\n pre[class*="language-"]::selection,\r\n pre[class*="language-"] ::selection {\r\n     background: #eb64b927;\r\n     color: inherit;\r\n }\r\n \r\n /* Properties specific to code blocks */\r\n pre[class*="language-"] {\r\n     padding: 1em; /* this is standard */\r\n     margin: 0.5em 0; /* this is the default */\r\n     overflow: auto; /* this is standard */\r\n     border-radius: 0.5em;\r\n }\r\n \r\n /* Properties specific to inline code */\r\n :not(pre) > code[class*="language-"] {\r\n     padding: 0.2em 0.3em;\r\n     border-radius: 0.5rem;\r\n     white-space: normal; /* this is standard */\r\n }\r\n \r\n .token.comment,\r\n .token.prolog,\r\n .token.cdata {\r\n     color: #91889b;\r\n }\r\n \r\n .token.punctuation {\r\n     color: #7b6995;\r\n }\r\n \r\n .token.builtin,\r\n .token.constant,\r\n .token.boolean {\r\n     color: #ffe261;\r\n }\r\n \r\n .token.number {\r\n     color: #b381c5;\r\n }\r\n \r\n .token.important,\r\n .token.atrule,\r\n .token.property,\r\n .token.keyword {\r\n     color: #40b4c4;\r\n }\r\n \r\n .token.doctype,\r\n .token.operator,\r\n .token.inserted,\r\n .token.tag,\r\n .token.class-name,\r\n .token.symbol {\r\n     color: #74dfc4;\r\n }\r\n \r\n .token.attr-name,\r\n .token.function,\r\n .token.deleted,\r\n .token.selector {\r\n     color: #eb64b9;\r\n }\r\n \r\n .token.attr-value,\r\n .token.regex,\r\n .token.char,\r\n .token.string {\r\n     color: #b4dce7;\r\n }\r\n \r\n .token.entity,\r\n .token.url,\r\n .token.variable {\r\n     color: #ffffff;\r\n }\r\n \r\n /* The following rules are pretty similar across themes, but feel free to adjust them */\r\n .token.bold {\r\n     font-weight: bold;\r\n }\r\n \r\n .token.italic {\r\n     font-style: italic;\r\n }\r\n \r\n .token.entity {\r\n     cursor: help;\r\n }\r\n \r\n .token.namespace {\r\n     opacity: 0.7;\r\n }')();
var Header_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "header.svelte-3n9utm.svelte-3n9utm{width:100%;display:flex;flex-direction:row;align-items:center;justify-content:space-between;flex-wrap:wrap}.title.svelte-3n9utm.svelte-3n9utm{font-size:1.25rem}.collapse.svelte-3n9utm.svelte-3n9utm{width:100%;display:none;flex-direction:column;gap:0.5rem}.collapse.show.svelte-3n9utm.svelte-3n9utm{display:flex}nav.svelte-3n9utm ul.svelte-3n9utm{display:flex;flex-direction:column;list-style-type:none;padding-left:0;padding:0.5rem;margin:0;gap:1rem}@media(min-width: 640px){header.svelte-3n9utm.svelte-3n9utm{gap:1.5rem;padding:0.75rem}.collapse.svelte-3n9utm.svelte-3n9utm{flex-direction:row;display:flex;flex:1}nav.svelte-3n9utm ul.svelte-3n9utm{margin-left:auto;flex-direction:row}.hide-large.svelte-3n9utm.svelte-3n9utm{display:none}}")();
const css$1 = {
  code: "header.svelte-3n9utm.svelte-3n9utm{width:100%;display:flex;flex-direction:row;align-items:center;justify-content:space-between;flex-wrap:wrap}.title.svelte-3n9utm.svelte-3n9utm{font-size:1.25rem}.collapse.svelte-3n9utm.svelte-3n9utm{width:100%;display:none;flex-direction:column;gap:0.5rem}.collapse.show.svelte-3n9utm.svelte-3n9utm{display:flex}nav.svelte-3n9utm ul.svelte-3n9utm{display:flex;flex-direction:column;list-style-type:none;padding-left:0;padding:0.5rem;margin:0;gap:1rem}@media(min-width: 640px){header.svelte-3n9utm.svelte-3n9utm{gap:1.5rem;padding:0.75rem}.collapse.svelte-3n9utm.svelte-3n9utm{flex-direction:row;display:flex;flex:1}nav.svelte-3n9utm ul.svelte-3n9utm{margin-left:auto;flex-direction:row}.hide-large.svelte-3n9utm.svelte-3n9utm{display:none}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<header class="${"block dropshadow svelte-3n9utm"}"><a class="${"title svelte-3n9utm"}" href="${"/"}">${slots.default ? slots.default({}) : ``}</a>
    <button class="${"hide-large svelte-3n9utm"}">Menu</button>
    
    <div class="${escape(null_to_empty(`collapse ${""}`), true) + " svelte-3n9utm"}"><nav class="${"svelte-3n9utm"}"><hr class="${"hide-large svelte-3n9utm"}">
            <ul class="${"svelte-3n9utm"}"><li><a href="${"/posts"}">Posts</a></li>
                <li><a href="${"/pages/about"}">About</a></li>
                <li><a href="${"/pages/contact"}">Contact</a></li></ul></nav></div>
</header>`;
});
var Footer_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "footer.svelte-oxz3xx{display:flex;flex-direction:row;gap:0.75rem;flex-wrap:wrap;justify-content:center}select.svelte-oxz3xx{width:7.5rem}")();
const css = {
  code: "footer.svelte-oxz3xx{display:flex;flex-direction:row;gap:0.75rem;flex-wrap:wrap;justify-content:center}select.svelte-oxz3xx{width:7.5rem}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $accent, $$unsubscribe_accent;
  $$unsubscribe_accent = subscribe(accent$1, (value) => $accent = value);
  let emojis = "\u{1F409}\u2728";
  function switchFooterEmojis(accent2) {
    switch (accent2) {
      case "black":
        emojis = "\u{1F311}\u{1F408}\u200D\u2B1B";
        break;
      case "red":
        emojis = "\u{1FA78}\u{1F352}";
        break;
      case "orange":
        emojis = "\u{1F525}\u{1F9E8}";
        break;
      case "peachy":
        emojis = "\u{1F351}\u{1F3F5}\uFE0F";
        break;
      case "yellow":
        emojis = "\u{1F34B}\u2600\uFE0F";
        break;
      case "lime":
        emojis = "\u{1F331}\u{1F3D4}\uFE0F";
        break;
      case "green":
        emojis = "\u{1F409}\u{1F332}";
        break;
      case "teal":
        emojis = "\u{1F48E}\u{1F42C}";
        break;
      case "sky":
        emojis = "\u{1F327}\uFE0F\u{1F499}";
        break;
      case "blue":
        emojis = "\u{1F300}\u{1FAD0}";
        break;
      case "purple":
        emojis = "\u{1F347}\u{1F52E}";
        break;
      case "magenta":
        emojis = "\u{1F377}\u{1F33A}";
        break;
      case "pink":
        emojis = "\u{1F337}\u{1F3F3}\uFE0F\u200D\u26A7\uFE0F";
        break;
      case "white":
        emojis = "\u{1F90D}\u{1F378}";
    }
  }
  $$result.css.add(css);
  {
    switchFooterEmojis($accent);
  }
  $$unsubscribe_accent();
  return `<footer class="${"svelte-oxz3xx"}"><span>${escape(emojis)}</span>

    <select aria-label="${"Change theme"}" class="${"svelte-oxz3xx"}"><option default disabled value="${"theme"}">theme</option><option value="${"drgn-light"}">light</option><option value="${"drgn-dark"}">dark</option><option value="${"drgn-faded"}">faded</option></select>
    <select aria-label="${"Change accent color"}" class="${"svelte-oxz3xx"}"><option default disabled value="${"accent"}">accent</option><option value="${"black"}">black</option><option value="${"red"}">red</option><option value="${"orange"}">orange</option><option value="${"peachy"}">peachy</option><option value="${"yellow"}">yellow</option><option value="${"lime"}">lime</option><option value="${"green"}">green</option><option value="${"teal"}">teal</option><option value="${"sky"}">sky</option><option value="${"blue"}">blue</option><option value="${"purple"}">purple</option><option value="${"magenta"}">magenta</option><option value="${"pink"}">pink</option><option value="${"white"}">white</option></select>

    <span>made with <a href="${"https://kit.svelte.dev/"}">sveltekit</a></span>
</footer>`;
});
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentTheme;
  let currentAccentColor;
  let $accent, $$unsubscribe_accent;
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_accent = subscribe(accent$1, (value) => $accent = value);
  $$unsubscribe_theme = subscribe(theme$1, (value) => $theme = value);
  currentTheme = $theme;
  currentAccentColor = $accent;
  $$unsubscribe_accent();
  $$unsubscribe_theme();
  return `<div${add_attribute("class", `theme-wrapper ${currentTheme} drgn-${currentAccentColor}`, 0)}><div class="${"container"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `Draconizations`;
    }
  })}

        <main>${slots.default ? slots.default({}) : ``}</main>
        <br>
        ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></div>`;
});
export { _layout as default };
