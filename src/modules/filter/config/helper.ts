export default {
    sortItems(
        items: any,
        sortBy: "asc" | "desc",
        sortByProp: string,
        type: string
    ) {
        if (!items.length) {
            return;
        }

        const hasProp = Object.keys(items[0]).includes(sortByProp);

        if (!hasProp) {
            throw new Error("Key not found.");
        }

        if (sortBy === "asc") {
            return items.sort((a: any, b: any) => {
                const compareA = a[sortByProp];
                const compareB = b[sortByProp];

                if (type === "number") {
                    return parseFloat(compareA) - parseFloat(compareB);
                }

                if (type === "date") {
                    return (
                        new Date(compareA).getTime() -
                        new Date(compareB).getTime()
                    );
                }

                if (type === "string") {
                    return compareA.localeCompare(compareB);
                }
            });
        } else {
            const sortedItems: any[] = this.sortItems(
                items,
                "asc",
                sortByProp,
                type
            );

            return sortedItems.reverse();
        }
    },

    readablePriceRange(range: number[]) {
        let [min, max] = range;

        if (isNaN(min) && isNaN(max)) {
            min = max = 0;
        }

        const numberFormat = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        });

        return `${numberFormat.format(min)} - ${numberFormat.format(max)}`;
    },
};
