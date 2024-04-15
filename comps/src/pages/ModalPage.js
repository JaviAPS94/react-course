import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false);
    }

    const actionBar = <div>
        <Button onClick={handleClose} primary>
            I Accept
        </Button>
    </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            I'm a modal test
        </p>
    </Modal>

    return (
        <div>
            <Button primary rounded onClick={() => setShowModal(true)}>
                Show Modal
            </Button>
            {showModal && modal}
        </div>
    );
}

export default ModalPage;