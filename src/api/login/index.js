import http from "utils/request";
export const loginApi =(username,password)=>http({
    method:"POST",
    url: "/users/login",
    data: {
        username,
        password
    },
})
