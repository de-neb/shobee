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
                    breadCrumb: [{ text: "Home", disabled: true }],
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
                                disabled: false,
                            },
                            {
                                text: name,
                                disabled: true,
                            },
                        ];
                    },
                },
            },
        ],
    },
    {
        path: "/category",
        component: () => import("@/layouts/Common.vue"),
        children: [
            {
                path: ":id",
                name: "Category",
                component: () => import("@/modules/filter/views/Filter.vue"),
                meta: {},
            },
        ],
    },
    {
        path: "/search",
        component: () => import("@/layouts/Common.vue"),
        children: [
            {
                path: "",
                name: "Search",
                component: () => import("@/modules/filter/views/Filter.vue"),
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
                            disabled: false,
                        },
                        {
                            text: "Cart",
                            disabled: true,
                        },
                    ],
                },
            },
            {
                path: "checkout",
                name: "Checkout",
                component: () => import("@/modules/cart/views/Checkout.vue"),
                meta: {
                    breadCrumb: [
                        {
                            text: "Home",
                            to: { name: "Home" },
                            disabled: false,
                        },
                        {
                            text: "Cart",
                            to: { name: "Cart" },
                            disabled: false,
                        },
                        {
                            text: "Checkout",
                            disabled: true,
                        },
                    ],
                },
            },
            {
                path: "success",
                name: "Success",
                component: () => import("@/modules/cart/views/Success.vue"),
                //todo: add route guard for success
            },
        ],
    },
    {
        path: "/:pathMatch(.*)",
        component: () => import("@/modules/404/views/PageNotFound.vue"),
    },
];
