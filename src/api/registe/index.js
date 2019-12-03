import http from "utils/request";

export const registeApi = (username, password) => http({
    method: "POST",
    url: "/users/register",
    data: {
        username,
        password
    },
})