import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowRight,
	faEye,
	faSatelliteDish,
	faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import ButtonLink from "../../utility components/ButtonLink";

const Risorse = () => {
	return (
		<Card className="position-relative mt-4  ">
			<Card.Body className="p-4 border-bottom">
				<h3 className="m-0">Risorse</h3>
				<div className="d-flex align-items-center">
					<FontAwesomeIcon className="text-secondary" icon={faEye} />
					<span className="text-secondary ms-2">Solo per te</span>
				</div>

				<div className="d-flex gap-3 mt-3">
					<FontAwesomeIcon className="fs-4" icon={faSatelliteDish} />
					<div>
						<h5>
							Modalità creazione di contenuti{" "}
							<span className="badge badge-secondary">no</span>
						</h5>
						<p>
							Fatti scoprire, metti in risalto sul tuo profilo e
							accedi agli strumetni di creazione.
						</p>
					</div>
				</div>
				<hr />
				<div className="d-flex gap-3 mt-3">
					<FontAwesomeIcon className="" icon={faUserFriends} />
					<div>
						<h5>La mia rete</h5>
						<p>Salva e gestisci i tuoi collegamenti e interessi</p>
					</div>
				</div>
			</Card.Body>
			<ButtonLink margin={"mx-auto my-3"}>
				<h4 className="text-secondary">
					Mostra tutte le risorse (5){" "}
					<FontAwesomeIcon icon={faArrowRight} />
				</h4>
			</ButtonLink>
		</Card>
	);
};
export default Risorse;
