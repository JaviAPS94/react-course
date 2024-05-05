import PhotosListItem from "./PhotosListItem";
import { useGetPhotosQuery, useAddPhotoMutation } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";

function PhotosList ({ album }) {
    const {data, isLoading, error} =  useGetPhotosQuery(album);
    const [addPhoto, addPhotoResults] = useAddPhotoMutation();

    let content;

    if (isLoading) {
        content = <Skeleton className="h-8 w-8" count={5} />;
    } else if (error) {
        content = <div>Error: {error.message}</div>;
    } else {
        content = data.map(photo => <PhotosListItem key={photo.id} photo={photo} />);
    }

    return <div>
        <div className="mr-2 flex flex-row items-center justify-between">
            <h3 className="text-lg font-bold">Photos In {album.title}</h3>
            <Button onClick={() => addPhoto(album)} loading={addPhotoResults.isLoading}>+ Add Photo</Button>
        </div>
        <div className="mx-8 flex flex-row flex-wrap justify-center">
            {content}
        </div>
    </div>
}

export default PhotosList;