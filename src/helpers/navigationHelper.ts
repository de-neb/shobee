import router from "@/router";
import sharedFilter from "@/shared/filter";

export default {
    to(routeName: string) {
        router.push({ name: sharedFilter.titleCase(routeName) });
    },
};
