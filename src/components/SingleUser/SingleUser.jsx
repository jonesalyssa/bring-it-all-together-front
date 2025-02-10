import { api } from "../../app/api";

const SingleUserApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getSingleUser: builder.query({
            query:(id) => ({
                url: `/user/${id}`,
                method: "GET",
            }),
            providesTags: ["User"]
        }),
        updateUser: builder.mutation({
            query: ({ id, token}) => ({
                url: `/user/${id}`,
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${token}`, },
            body: 
                JSON.stringify({
                    available: false }),
                }),
        }),
        deleteUser: builder.mutation({
            query: ({id}) => ({
                url: `/user/${id}`,
            method: "Delete",
                }),  invalidatesTags: ["User"],
        }),
    }),
});

export const {useGetSingleUserQuery, useUpdateUserMutation, useDeleteUserMutation } = SingleUserApi;