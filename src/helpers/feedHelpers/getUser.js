import axios from "axios"

export const getUser = async(number) => {
    const url = `https://randomuser.me/api/?exc=login?&results=${number}&nat=random`
    const response = await axios.get(url)
    const { results } = response.data;
    let users = results.map((data) => {

        return {
            id: generateId(),
            username: data.login.username,
            mail: data.email,
            first_name: data.name.first,
            last_name: data.name.last,
            profile_picture: data.picture.thumbnail,
        }

    })
    return users;
    // console.log(users);
}

let generateId = () => {
    let result = Math.floor(100000 + Math.random() * 900000);
    return result
}