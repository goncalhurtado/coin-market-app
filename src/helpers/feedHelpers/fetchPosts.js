import { getPublications } from "./getPublications";

export const fetchPosts = async(number) => {
    let result = await getPublications(number)
    try {
        console.log(result);

        return result;

    } catch (error) {
        console.log(error, "error en fetch");
    }

}