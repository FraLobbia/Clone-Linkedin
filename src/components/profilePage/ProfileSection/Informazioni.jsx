import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import ButtonLink from "../../utility components/ButtonLink";

const Informazioni = () => {
	const profile = useSelector((state) => state.profilo.info);
	return (
		<Card className="position-relative mt-4  ">
			<Card.Body className="p-4 border-bottom">
				<div className="d-flex justify-content-between">
					<h3 className="m-0 mb-md-3">Informazioni</h3>
					<ButtonLink>
						<FontAwesomeIcon
							className="text-secondary"
							icon={faPencil}
						/>
					</ButtonLink>
				</div>
				<p>{profile.bio ? profile.bio : "no data bio"}</p>
			</Card.Body>
		</Card>
	);
};

export default Informazioni;
