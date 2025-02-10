import {fetchBaseQuery, createApi} from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://bring-it-j8wm.onrender.com/api/",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            headers.set("Content-Type","application/json");
            return headers;
        },
    }),
    tagTypes:["User"],
    endpoints:() => ({}),
});