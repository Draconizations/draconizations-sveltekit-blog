export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-74a17376.js","imports":["start-74a17376.js","chunks/index-01d1497b.js","chunks/index-b63fab89.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/6.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "posts",
				pattern: /^\/posts\/?$/,
				names: [],
				types: [],
				path: "/posts",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "api/posts.json",
				pattern: /^\/api\/posts\.json$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/api/posts.json.js')
			},
			{
				type: 'page',
				id: "pages/about",
				pattern: /^\/pages\/about\/?$/,
				names: [],
				types: [],
				path: "/pages/about",
				shadow: null,
				a: [0,4,5],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/contact",
				pattern: /^\/pages\/contact\/?$/,
				names: [],
				types: [],
				path: "/pages/contact",
				shadow: null,
				a: [0,4,6],
				b: [1]
			},
			{
				type: 'page',
				id: "posts/tag",
				pattern: /^\/posts\/tag\/?$/,
				names: [],
				types: [],
				path: "/posts/tag",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "posts/tag/[tag]",
				pattern: /^\/posts\/tag\/([^/]+?)\/?$/,
				names: ["tag"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				id: "posts/[post]",
				pattern: /^\/posts\/([^/]+?)\/?$/,
				names: ["post"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,9],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
