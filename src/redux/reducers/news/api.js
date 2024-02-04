import { getData } from "../../../api";

export const getLatestNews = async() => {
  const responce = await getData('search_by_date?tags=story');
  return responce;
};

export const getPopularNews = async() => {
  const responce = await getData('search?tags=front_page');
  return responce;
};