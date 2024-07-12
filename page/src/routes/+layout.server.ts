import { error } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ route }) => {
    if (route.id === null) error(404, "Not found")
    const routes = route.id?.split("/").filter(x => x !== '');

    return { routes }
}