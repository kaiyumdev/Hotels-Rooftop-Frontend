import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const blogApi = createApi({
    reducerPath: 'blogsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/',
        credentials: 'include'
    }),
    endpoints: (builder) => (
        {
            fetchBlogs: builder.query({
                query: ({ search = '', category = '', location = '' }) => `blogs?search=${search}&category=${category}&location=${location}`
            }),
            fetchBlogsById: builder.query({
                query: (id) => `/blogs/${id}`
            }),
            fetchRelatedBlogs: builder.query({
                query: (id) => `/blogs/related/${id}`
            })
        }
    )
});

export const { useFetchBlogsQuery, useFetchBlogsByIdQuery, useFetchRelatedBlogsQuery } = blogApi;  