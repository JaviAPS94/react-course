import Button from "./Button";
import ExtendablePanel from "./ExtendablePanel";
import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";
import PhotosList from "./PhotosList";

function AlbumsListItem({ album }) {
    const [removeAlbum, results] = useRemoveAlbumMutation();

    const header = <div className="flex flex-row justify-between">
        <Button className="mr-2" onClick={() => removeAlbum(album)} loading={results.isLoading}>
            <GoTrashcan />
        </Button>
        {album.title}
        </div>;

    return <ExtendablePanel key={album.id} header={header}>
        <PhotosList album={album}/>
    </ExtendablePanel>
}

export default AlbumsListItem;