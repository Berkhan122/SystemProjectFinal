/*
* 'https://newsapi.org/v2/everything?' +
    'q=Apple&' +
    'from=2022-04-05&' +
    'sortBy=popularity&' +
    * */

// export async function getNews() {
//     let result = await fetch(url).then(response => response.json());
//     return result.articles;
// }
import { apiKey } from "./config.js";
export const getNews = async () => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=Ukraine&from=2022-05-20&sortBy=popularity&apiKey=${apiKey}`
    );
    const json = await response.json();
    //console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
};

export const getNewsTopic = async (topic) => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${topic}&from=2022-05-20&sortBy=popularity&apiKey=${apiKey}`
    );
    const json = await response.json();
    //console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
};
