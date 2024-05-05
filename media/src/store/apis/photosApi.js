import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

const photosApi = createApi({
    reducerPath: 'photos',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    endpoints: (builder) => ({
        getPhotos: builder.query({
            providesTags: (result, error, album) => {
                const tags = result.map(photo => {
                    return { type: 'Photo', id: photo.id };
                });
                tags.push({ type: 'AlbumPhoto', id: album.id });
                return tags
            },
            query: (album) => ({
                url: '/photos',
                params: {
                    albumId: album.id,
                },
                method: 'GET',
            }),
        }),
        addPhoto: builder.mutation({
            invalidatesTags: (result, error, album) => {
                return [{ type: 'AlbumPhoto', id: album.id }];
            },
            query: (album) => ({
                url: '/photos',
                method: 'POST',
                body: {
                    albumId: album.id,
                    photo: faker.image.abstract(150, 150, true),
                }
            }),
        }),
        removePhoto: builder.mutation({
            invalidatesTags: (result, error, photo) => {
                return [{ type: 'Photo', id: photo.id }];
            },
            query: (photo) => ({
                url: `/photos/${photo.id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const { 
    useGetPhotosQuery, 
    useAddPhotoMutation, 
    useRemovePhotoMutation
 } = photosApi;

 export { photosApi };