export default [
    {
        path: "/",
        name: "Home",
        component: () => import("@/layouts/default.vue"),
        children: [
            {
                path: "",
                component: () => import("@/modules/home/views/Home.vue"),
                meta: {
                    layout: "default",
                },
            },
        ],
    },
    {
        path: "/products",
        name: "Products",
        component: () => import("@/layouts/Common.vue"),
        children: [
            {
                path: "",
                component: () =>
                    import("@/modules/products/views/Products.vue"),
                meta: {
                    layout: "Common",
                },
            },
        ],
    },
];
