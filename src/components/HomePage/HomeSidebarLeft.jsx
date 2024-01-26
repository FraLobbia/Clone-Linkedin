import { faBookmark, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";
import SidebarPic from "../../media/homesidebarleftpic.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomeSidebarLeft = () => {
	const profilo = useSelector((state) => state.profilo.info);

	return (
		<>
			<Card className="position-relative mt-4 rounded-bottom-sm-3 rounded-bottom-md-0 border-bottom">
				<Card.Img
					variant="top"
					src="https://media.licdn.com/dms/image/D4E16AQFX1VYtIB7Gsw/profile-displaybackgroundimage-shrink_350_1400/0/1670241902799?e=1711584000&v=beta&t=Y1TCjyHZN68WHlbtVLAmIK98zJGu5kYfcfWhr95q0BA"
					className="mb-4"
				/>
				<Card.Body className="p-4">
					<Link to="/profile/me" className="text-decoration-none text-dark">
						<img
							src={profilo.image}
							alt="profilo"
							style={{
								width: "72px",
								height: "72px",
								borderRadius: "50%",
								marginTop: "-85px",
								marginInline: "auto",
								display: "block",
							}}
							className="border border-3 border-white mb-3"
						/>
						<div className="d-flex flex-column text-center">
							<h3 className="fs-5">
								{profilo.name} {profilo.surname}
							</h3>
							<p className="mb-1 text-secondary">{profilo.title}</p>
						</div>
					</Link>
				</Card.Body>
			</Card>
			<Card
				className="border-top-0 border-bottom-0 rounded-0 pt-4 pb-2 px-3 mostraTutto d-none d-md-block"
				style={{ cursor: "pointer" }}>
				<div className="d-flex justify-content-between lh-1">
					<span className="text-secondary">Collegamenti</span>
					<span className="text-primary">3</span>
				</div>
				<div>
					<span className="fw-bold">Espandi la tua rete</span>
				</div>
			</Card>
			<Card
				className="d-flex flex-row border-top-0 border-bottom-0 rounded-0 py-2 px-3 mostraTutto d-none d-md-block"
				style={{ cursor: "pointer" }}>
				<div className="d-flex justify-content-between">
					<span className="text-secondary">Invito</span>
					<span className="text-primary">1</span>
				</div>
			</Card>
			<Card
				className="border-top border-bottom-0 rounded-0 py-4 px-3 mostraTutto d-none d-md-block"
				style={{ cursor: "pointer" }}>
				<span className="fw-light text-secondary">Accedi a strumenti e informazioni in esclusiva</span>
				<div className="d-flex align-items-center">
					<img src={SidebarPic} alt="" width={14} height={14} />
					<span className="fw-bold homeSidebarHover ms-2">Prova Premium gratis</span>
				</div>
			</Card>
			<Card
				className="border-top rounded-bottom-3 rounded-top-0 py-4 px-3 d-flex flex-row align-items-center mostraTutto d-none d-md-block"
				style={{ cursor: "pointer" }}>
				<FontAwesomeIcon icon={faBookmark} style={{ color: "#575757" }} />
				<span className="fw-bold ms-3">I miei elementi</span>
			</Card>
			<Card className="bg-white mt-3 pt-4 pb-1 px-3 text-primary fw-bold rounded-bottom-0 d-none d-md-block">
				<div className="homeSidebarHover">
					<span style={{ cursor: "pointer" }}>Gruppi</span>
				</div>
				<div className="d-flex justify-content-between mt-3 homeSidebarHover">
					<span style={{ cursor: "pointer" }}>Eventi</span>
					<FontAwesomeIcon icon={faPlus} style={{ color: "#575757", cursor: "pointer" }} />
				</div>
				<div className="my-3 homeSidebarHover">
					<span style={{ cursor: "pointer" }}>Hashtag seguiti</span>
				</div>
			</Card>
			<Card className="border-top-0 rounded-top-0 d-none d-md-block">
				<a
					href="/"
					className="text-secondary border-top text-decoration-none d-flex justify-content-center mostraTutto py-2 fw-bold">
					Scopri di più
				</a>
			</Card>
		</>
	);
};

export default HomeSidebarLeft;
