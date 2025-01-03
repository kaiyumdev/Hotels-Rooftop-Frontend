import { createApi } from "@reduxjs/toolkit/query";
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/auth",
        credentials: "include"
    }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (newUser) => ({
                url: '/register',
                method: 'POST',
                body: newUser
            })
        })
    }),
})