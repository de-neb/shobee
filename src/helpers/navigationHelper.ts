import router from "@/router";
import sharedFilter from "@/shared/filter";

export default {
    isCurrentRouteCategory: router.currentRoute.value.name == "Category",

    getCurrentRouteName() {
        return router.currentRoute.value.name;
    },

    to(routeName: string, params: any = {}) {
        router.push({ name: sharedFilter.titleCase(routeName), ...params });
    },
};
