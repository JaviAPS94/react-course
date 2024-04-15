import useNavigationContext from "../hooks/use-navigation-context";

function Route({ path, children }) {
    const { currentPath } = useNavigationContext();

    return (currentPath === path) ? children : null;
}

export default Route;