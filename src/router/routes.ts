export default [
    {
        path: "/",
        component: () => import("@/layouts/default.vue"),
        children: [
            {
                path: "",
                name: "Home",
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
                path: ":id",
                name: "Product",
                component: () =>
                    import("@/modules/products/views/Products.vue"),
                meta: {
                    layout: "Common",
                },
            },
        ],
    },
    {
        path: "/category",
        name: "Filter",
        component: () => import("@/layouts/Common.vue"),
        children: [
            {
                path: ":id",
                component: () => import("@/modules/filter/views/Filter.vue"),
                meta: {
                    layout: "Common",
                },
            },
        ],
    },
];
