import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import ButtonLink from "../../utility components/ButtonLink";
import MyModal from "../../utility components/MyModal";
import FormEditProfile from "./FormEditProfile";
import { editProfile, showModal } from "../../../redux/actions";

const Preview = () => {
	const profile = useSelector((state) => state.profilo.info);
	const dispatch = useDispatch();

	const handleFormEditProfile = () => {
		dispatch(editProfile());
	};

	return (
		<Card className="position-relative mt-4">
			<Button
				className="bg-white position-absolute d-flex justify-content-center align-items-center border-0"
				style={{
					borderRadius: "50%",
					width: "32px",
					height: "32px",
					top: "20px",
					right: "20px",
				}}>
				<FontAwesomeIcon className="text-primary " icon={faPencil} />
			</Button>
			<Card.Img
				variant="top"
				src="https://media.licdn.com/dms/image/D4E16AQFX1VYtIB7Gsw/profile-displaybackgroundimage-shrink_350_1400/0/1670241902799?e=1711584000&v=beta&t=Y1TCjyHZN68WHlbtVLAmIK98zJGu5kYfcfWhr95q0BA"
				className="mb-4"
			/>
			<Card.Body className="p-4">
				<img
					src={
						profile.image
							? profile.image
							: "https://m.media-amazon.com/images/I/51zf0DXxT-L._AC_UF1000,1000_QL80_.jpg"
					}
					alt="profilo"
					style={{
						width: "120px",
						height: "120px",
						borderRadius: "50%",
						marginTop: "-170px",
						marginLeft: "10px",
					}}
					className="border border-3 border-white"
				/>
				<div className="d-flex justify-content-between">
					<h3>
						{profile.name ? profile.name : "no data name"}{" "}
						{profile.surname ? profile.surname : "no data surname"}
					</h3>
					<ButtonLink className={"p-0"}>
						<FontAwesomeIcon
							className="text-secondary me-3 "
							icon={faPencil}
							onClick={() => dispatch(showModal())}
						/>
						<MyModal func={handleFormEditProfile}>
							<FormEditProfile />
						</MyModal>
					</ButtonLink>
				</div>
				<p className="mb-1">
					{profile.title ? profile.title : "no data title"}
				</p>
				<p className="text-secondary ">
					{profile.area ? profile.area : "no data area"}{" "}
					<Link className="p-0 fw-bold">
						<span>Informazioni di contatto</span>
					</Link>
				</p>
				<div className="d-flex gap-2 flex-wrap">
					<Button variant="primary">Disponibile per</Button>
					<Button variant="outline-primary">
						Aggiungi sezione del profilo
					</Button>
					<Button variant="outline-secondary">Altro</Button>
				</div>
			</Card.Body>
		</Card>
	);
};

export default Preview;
