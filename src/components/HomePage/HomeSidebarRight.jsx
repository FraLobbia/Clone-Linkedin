import { faChevronDown, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";

const HomeSidebarRight = () => {
	return (
		<Card className="mt-4">
			<div className="d-flex justify-content-between align-items-center mt-2 px-3">
				<span className="fw-bold">LinkedIn Notizie</span>
				<FontAwesomeIcon icon={faCircleInfo} />
			</div>
			<div className="mt-2">
				<ul>
					<li className="mb-1 mostraTutto" style={{ cursor: "pointer" }}>
						<span className="fw-bold news-text">I 15 lavori più in rapida crescita in Italia</span>
						<span className="text-secondary d-block news-small">
							Notizie principali <strong>·</strong> 283 lettori
						</span>
					</li>
					<li className="mb-1 mostraTutto" style={{ cursor: "pointer" }}>
						<span className="fw-bold news-text">Una Ferrari a vela</span>
						<span className="fw-light d-block news-small">17 ore fa</span>
					</li>
					<li className="mb-1 mostraTutto" style={{ cursor: "pointer" }}>
						<span className="fw-bold news-text">Per essere più visibili sul lavoro</span>
						<span className="fw-light d-block news-small">3 giorni fa</span>
					</li>
					<li className="mb-1 mostraTutto" style={{ cursor: "pointer" }}>
						<span className="fw-bold news-text">Aprirsi al cambiamento</span>
						<span className="fw-light d-block news-small">1 giorno fa</span>
					</li>
					<li className="mb-1 mostraTutto" style={{ cursor: "pointer" }}>
						<span className="fw-bold news-text">SONDAGGIO: Cosa valuti di più in Pietro</span>
						<span className="fw-light d-block news-small">2 giorni fa</span>
					</li>
				</ul>
				<div className="px-4 mb-3">
					<span className="text-secondary fw-bold me-1 mostraTutto" style={{ cursor: "pointer" }}>
						Show more &nbsp;
						<FontAwesomeIcon icon={faChevronDown} />
					</span>
				</div>
			</div>
		</Card>
	);
};

export default HomeSidebarRight;
