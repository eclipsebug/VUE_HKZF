import request from "@/utils/request";

export const getHouses = (city) => {
  return request({
    method: "GET",
    url: "/houses",
    params: {
      cityId: city,
      stat: 20,
      end: 29,
    },
  });
};

export const housesCondition = (cityArea) => {
  return request({
    method: "GET",
    url: "/houses/condition",
    params: {
      id: cityArea,
    },
  });
};
