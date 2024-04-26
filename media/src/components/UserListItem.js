import { GoTrashcan } from "react-icons/go";
import Button from './Button';
import { removeUser } from "../store";
import { useThunk } from "../hooks/thunk";
import ExtendablePanel from "./ExtendablePanel";
import AlbumsList from "./AlbumsList";

function UserListItem({ user }) {
    const [doRemoveUser, isRemovingUser, removingUserError] = useThunk(removeUser);

    const handleClick = () => {
        doRemoveUser(user);
    }

    const header = <>
        <Button className="mr-3" loading={isRemovingUser} onClick={handleClick}>
            <GoTrashcan />
        </Button>
        {removingUserError && <div>'Error removing user'</div>}
        {user.name}
    </>

    return (
        <ExtendablePanel header={header}>
            <AlbumsList user={user}/>
        </ExtendablePanel>
    )
}

export default UserListItem;