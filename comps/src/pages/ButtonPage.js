import Button from "../components/Button";
import { GoBell, GoCloud, GoFlame } from "react-icons/go";

function ButtonPage() {
    const handleClick = () => {}

    return (
        <div>
            <div>
                <Button success outline rounded className="mb-5" onClick={handleClick}>
                    <GoBell className="mr-2" />
                    Click here
                </Button>
            </div>
            <div>
                <Button danger onMouseEnter={handleClick}>
                    <GoCloud className="mr-2" />
                    Buy now
                </Button>
            </div>
            <div>
                <Button warning onMouseLeave={handleClick}>
                    <GoFlame className="mr-2" />
                    See Deal
                </Button>
            </div>
            <div>
                <Button secondary>
                    Hide Ads
                </Button>
            </div>
            <div>
                <Button primary rounded>
                    Somenthing
                </Button>
            </div>
        </div>
    );
}

export default ButtonPage;