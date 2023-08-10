import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: ({ tag, search }) =>
        tag
          ? tag
            ? `/videos?tag=${tag}`
            : "/videos"
          : search
          ? `/videos?title_like=${search}`
          : "/videos",
    }),

    getVideo: builder.query({
      query: (id) => `/videos?id=${id}`,
    }),
    getRelatedVideos: builder.query({
      query: (tag) => `/videos?tag=${tag}`,
    }),
    updateVideo: builder.mutation({
      query: ({ id, data }) => ({
        url: `/videos/${id}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted({ id, data }, { dispatch, queryFulfilled }) {
        console.log(id);
        dispatch(
          apiSlice.util.updateQueryData("getVideo", id, (draft) => {
            console.log(draft); // Logging the updated draft here
          })
        );

        try {
          await queryFulfilled;
        } catch {
          // Handle errors
        }
      },
    }),
  }),
});

export const {
  useGetVideosQuery,
  useGetVideoQuery,
  useGetRelatedVideosQuery,
  useUpdateVideoMutation,
} = apiSlice;
