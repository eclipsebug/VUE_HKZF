import axios from "@/utils/request";

export const getUser = (a) => {
  return axios({
    method: "GET",
    url: "/user",

    headers: {
      authorization: `${a}`,
    },
  });
};

export const getFavorites = (a) => {
  return axios({
    method: "GET",
    url: "/user/favorites",

    headers: {
      authorization: `${a}`,
    },
  });
};

// 房屋管理
export const getRent = (a) => {
  return axios({
    method: "GET",
    url: "/user/houses",

    headers: {
      authorization: `${a}`,
    },
  });
};
// 房屋收藏 取消和收藏
