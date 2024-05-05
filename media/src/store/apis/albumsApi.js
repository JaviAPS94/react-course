import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

const albumsApi = createApi({
    reducerPath: 'albumsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    endpoints: (builder) => ({
        getAlbum: builder.query({
            providesTags: (result, error, user) => {
                const tags = result.map(album => {
                    return { type: 'Album', id: album.id };
                })
                tags.push({ type: 'UsersAlbums', id: user.id });
                return tags;
            },
            query: (user) => ({
                    url: `/albums`,
                    params: {
                        userId: user.id,
                    },
                    method: 'GET',
            }),
        }),
        addAlbum: builder.mutation({
            invalidatesTags: (result, error, user) => {
                return [{ type: 'UsersAlbums', id: user.id }];
            },
            query: (user) => ({
                url: '/albums',
                method: 'POST',
                body: {
                    userId: user.id,
                    title: faker.commerce.productName(),
                }
            }),
        }),
        removeAlbum: builder.mutation({
            invalidatesTags: (result, error, album) => {
                return [{ type: 'Album', id: album.id }];
            },
            query: (album) => ({
                url: `/albums/${album.id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const { useGetAlbumQuery, useAddAlbumMutation, useRemoveAlbumMutation  } = albumsApi;
export { albumsApi };