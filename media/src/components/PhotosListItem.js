import { useRemovePhotoMutation } from "../store";
import { GoTrashcan } from "react-icons/go";

function PhotosListItem({ photo }) {
  const [removePhoto] = useRemovePhotoMutation();
  
  return (
    <div onClick={() => removePhoto(photo)} className="relative m-2 cursor-pointer">
      <img src={photo.photo} alt="album" className="h-20 w-20" />
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <GoTrashcan className="text-3xl"/>
      </div>
    </div>
  );
}

export default PhotosListItem;