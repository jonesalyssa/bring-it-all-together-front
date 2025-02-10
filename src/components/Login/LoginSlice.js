import { api } from "../../app/api";

const loginApi = api.injectEndpoints({
    endpoints:(builder) => ({
        login: builder.mutation({
            query: ({email, password}) => ({
                url: "/login",
                method: "POST",
                body:{
                    email,
                    password,
                },
            }),
            invalidatesTags: ["User"],
            transformResponse: (response) => response,
        }),
    }),
});

export const {useLoginMutation} = loginApi;
