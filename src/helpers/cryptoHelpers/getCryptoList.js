import axios from "axios";
import { dbCoins } from "../../db/dbToTest";

export const getCoinList = async(currency = "usd") => {
    try {
        const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`

        const response = await axios.get(url);
        const coins = response.data
        console.log("conectado a la base de datos real");
        return coins
    } catch (error) {
        console.log(error, "error dentro de getCinList");
        console.log("Se ejecuto la base de datos alternativa");
        return dbCoins;
    }

}