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
                    breadCrumb: [{ text: "Home" }],
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
                    breadCrumb: (name: string) => {
                        return [
                            {
                                text: "Home",
                                to: { name: "Home" },
                            },
                            {
                                text: name,
                            },
                        ];
                    },
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
                meta: {},
            },
        ],
    },
    {
        path: "/cart",
        component: () => import("@/layouts/Common.vue"),
        children: [
            {
                path: "",
                name: "Cart",
                component: () => import("@/modules/cart/views/Cart.vue"),
                meta: {
                    breadCrumb: [
                        {
                            text: "Home",
                            to: { name: "Home" },
                        },
                        {
                            text: "Cart",
                        },
                    ],
                },
            },
        ],
    },
];
