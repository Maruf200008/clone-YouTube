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
      async onQueryStarted({ id, data }, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          console.log(data);
          dispatch(
            apiSlice.util.updateQueryData(
              "getVideo",
              id.toString(),
              (draft) => {
                console.log(JSON.stringify(draft));
              }
            )
          );
        } catch (err) {
          console.log(err);
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
