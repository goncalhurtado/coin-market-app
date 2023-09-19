import axios from "axios"
import { generateId } from "../feedHelpers/getUser";
import format from "date-fns/format";

export const getNews = async(lenguage = "es") => {
    const apiNews = "8uzwwV1oM9yZ2zvsyG2HstF6m4o3QVfbDKeehFth";
    const url = `https://api.marketaux.com/v1/news/all?&language=${lenguage}&api_token=${apiNews}`
    const response = await axios.get(url)

    const { data } = response.data;

    let news = data.map((data) => {

        return {
            news_id: generateId(),
            description: data.description,
            date: setDate(data.published_at),
            title: data.title,
            url: data.url,
            img: data.image_url
        }

    })
    return news;
    // console.log(news);
}

const setDate = (date) => {
    const dateFromApi = new Date(date);
    const newDate = format(dateFromApi, 'dd/MM/yyyy HH:mm');
    return newDate;
}