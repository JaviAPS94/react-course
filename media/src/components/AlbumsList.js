import { useGetAlbumQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import AlbumsListItem from "./AlbumsListItem";

function AlbumsList({ user }) {
  const { data, error, isLoading } = useGetAlbumQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  let content;

  if (isLoading) {
    content = <Skeleton className="h-10 w-full" />;
  } else if (error) {
    content = <div>Error: {error}</div>;
  } else {
    content = data.map((album) => {
      return <AlbumsListItem key={album.id} album={album} />;
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Albums for {user.name}</h3>
        <Button loading={results.isLoading} onClick={() => addAlbum(user)}>
          + Add Album
        </Button>
      </div>
      <div>
        {content}
      </div>
    </div>
  );
}

export default AlbumsList;