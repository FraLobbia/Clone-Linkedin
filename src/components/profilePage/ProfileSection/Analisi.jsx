import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowRight,
	faChartBar,
	faEye,
	faSearch,
	faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import ButtonLink from "../../utility components/ButtonLink";

const Analisi = () => {
	return (
		<Card className="position-relative mt-4  ">
			<Card.Body className="p-4 border-bottom">
				<h3 className="m-0">Analisi</h3>
				<div className="d-flex align-items-center">
					<FontAwesomeIcon className="text-secondary" icon={faEye} />
					<span className="text-secondary ms-2">Solo per te</span>
				</div>
				<Container fluid className="mt-4">
					<Row className=" gap-xl-0 gap-4">
						<Col xs={12} xl={4}>
							<div className="d-flex gap-2">
								<FontAwesomeIcon icon={faUserFriends} />
								<div>
									<h5>44 visualizzazione del profilo</h5>
									<p>
										Scopri chi ha visualizzato il tuo
										profilo.
									</p>
								</div>
							</div>
						</Col>
						<Col xs={12} xl={4}>
							<div className="d-flex gap-2">
								<FontAwesomeIcon icon={faChartBar} />
								<div>
									<h5>271 impressioni del post</h5>
									<p>
										Scopri chi sta interagendo con i tuoi
										post.
									</p>
								</div>
							</div>
						</Col>
						<Col xs={12} xl={4}>
							<div className="d-flex gap-2">
								<FontAwesomeIcon icon={faSearch} />
								<div>
									<h5>14 comparse nei motori di ricerca</h5>
									<p>
										Vedi quante volte compari nei risultati
										di ricerca.
									</p>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</Card.Body>
			<ButtonLink margin={"mx-auto my-3"} className="text-secondary">
				<h4>
					Mostra tutte le analisi{" "}
					<FontAwesomeIcon icon={faArrowRight} />
				</h4>
			</ButtonLink>
		</Card>
	);
};
export default Analisi;
