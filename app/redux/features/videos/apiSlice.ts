import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => "/videos",
    }),
    getVideo: builder.query({
      query: (id) => `/videos?id=${id}`,
    }),
    getRelatedVideos: builder.query({
      query: (tag) => `/videos?tag=${tag}`,
    }),
    updateLikeAndDislike: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/videos?id=${id}`,
        method: "PATCH",
        body: patch,
      }),

      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          apiSlice.util.updateQueryData("getVideo", id, (draft) => {
            console.log(JSON.stringify(draft));
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const {
  useGetVideosQuery,
  useGetVideoQuery,
  useGetRelatedVideosQuery,
  useUpdateLikeAndDislikeMutation,
} = apiSlice;
