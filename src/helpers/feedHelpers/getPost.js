import axios from "axios"
import { getUser, generateId } from "./getUser";

export const getPosts = async(number = 5) => {
    const url = `https://jsonplaceholder.typicode.com/posts`
    const response = await axios.get(url)
    const { data } = response;


    let posts = data.map((data) => {
        return {
            postId: generateId(),
            post: data.body,
            likes: generateNumber("likes"),
            shared: generateNumber("shared"),
            comments: generateNumber("comments"),
        }

    })
    let postLimited = posts.slice(0, number)
        // console.log(postLimited);
    return postLimited;

}

export const getImg = async(number = 5) => {
    const url = `https://picsum.photos/v2/list?page=1&limit=${number}`
    const response = await axios.get(url)
    const { data } = response;

    let img = data.map((data) => {
        return {
            img: data.url
        }

    })
    return img;
}



export const getPublications = async(number = 5) => {
    let users = await getUser(number);
    let posts = await getPosts(number);
    let img = await getImg(number)

    const result = users.map((user, index) => ({
        ...user,
        postId: posts[index].postId,
        post: posts[index].post,
        likes: posts[index].likes,
        shared: posts[index].shared,
        comments: posts[index].comments,
        img: img[index].img

    }));
    console.log(result);

}




let generateNumber = (number) => {
    let result = ""
    switch (number) {
        case "likes":
            result = Math.floor(Math.random() * 900);
            break
        case "shared":
            result = Math.floor(15 + Math.random() * 300);
            break
        case "comments":
            result = Math.floor(Math.random() * 11);
            break

    }
    return result
}

getPublications(5)