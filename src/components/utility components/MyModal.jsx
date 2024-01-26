import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const MyModal = (props) => {
	const modal = useSelector((state) => state.modalInfo);
	const dispatch = useDispatch();
	return (
		<>
			<Modal show={modal.show} centered>
				<Modal.Header>
					<Modal.Title>
						{modal.title}
						{modal.idToDelete}
					</Modal.Title>
					<Button
						variant="link"
						onClick={() => dispatch(closeModal())}>
						<FontAwesomeIcon
							className="text-secondary"
							icon={faXmark}
						/>
					</Button>
				</Modal.Header>

				<Modal.Body>
					{modal.body}
					{props.children}
				</Modal.Body>

				<Modal.Footer>
					<Button
						variant="secondary"
						onClick={() => dispatch(closeModal())}>
						Close
					</Button>
					<Button
						variant="success"
						// qua tramite props posso passare qualsiasi funzione che accetti un id, quindi ad esempio una fetch DELETE o una PUT, in questo modo posso riutilizzare il modal per diversi utilizzi
						onClick={() => {
							props.func(modal.id);
						}}>
						{modal.confirmText}
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default MyModal;
