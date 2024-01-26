import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import {
	GearFill,
	QuestionCircleFill,
	ShieldShaded,
} from "react-bootstrap-icons";
import ButtonLink from "../utility components/ButtonLink";

const MyFooter = () => {
	return (
		<Container className="text-secondary mt-4">
			<Row>
				<Col xl={9} lg={8} md={12} id="footer-up" className="px-2">
					<Row>
						<Col sm={4}>
							<ButtonLink className="text-sm-start footer-small">
								<p>Informazioni</p>
							</ButtonLink>
						</Col>
						<Col sm={4} className="text-sm-center text-lg-start">
							<ButtonLink className="footer-small">
								<p>Accessibilità</p>
							</ButtonLink>
						</Col>
						<Col sm={4} className="text-sm-end text-lg-start">
							<ButtonLink className="footer-small">
								<p>Talent Solutions</p>
							</ButtonLink>
						</Col>
					</Row>

					<Row>
						<Col sm={4}>
							<ButtonLink className="footer-small text-sm-start">
								<p>Linee guida della community</p>
							</ButtonLink>
						</Col>
						<Col sm={4} className="text-sm-center text-lg-start">
							<ButtonLink className="footer-small">
								<p>Carriera</p>
							</ButtonLink>
						</Col>
						<Col sm={4} className="text-sm-end text-lg-start">
							<ButtonLink className="footer-small">
								<p>Soluzioni di marketing</p>
							</ButtonLink>
						</Col>
					</Row>

					<Row>
						<Col sm={4}>
							<ButtonLink className="footer-small text-sm-start">
								<p>Privacy e condizioni</p>
							</ButtonLink>
						</Col>
						<Col sm={4} className="text-sm-center text-lg-start">
							<ButtonLink className="footer-small">
								<p>Opzioni per gli annunci pubblicitari</p>
							</ButtonLink>
						</Col>
						<Col sm={4} className="text-sm-end text-lg-start">
							<ButtonLink className="footer-small">
								<p>Pubblicità</p>
							</ButtonLink>
						</Col>
					</Row>

					<Row>
						<Col sm={4}>
							<ButtonLink className="footer-small text-sm-start">
								<p>Sales Solutions</p>
							</ButtonLink>
						</Col>
						<Col sm={4} className="text-sm-center text-lg-start">
							<ButtonLink className="footer-small">
								<p>Mobile</p>
							</ButtonLink>
						</Col>
						<Col sm={4} className="text-sm-end text-lg-start">
							<ButtonLink className="footer-small">
								<p>Piccole imprese</p>
							</ButtonLink>
						</Col>
					</Row>

					<Row>
						<Col sm={6}>
							<ButtonLink className="footer-small">
								<p>Centro sicurezza</p>
							</ButtonLink>
						</Col>
						<Col sm={6}></Col>
					</Row>
					<div className="py-2">
						<ButtonLink className="footer-small">
							<p>LinkedIn Corporation © 2024</p>
						</ButtonLink>
					</div>
				</Col>
				<Col xl={3} lg={4} md={12}>
					<Container id="footer-down" fluid="lg" className="p-0 my-3">
						<div className="d-flex mb-2">
							<QuestionCircleFill
								color="dark"
								size={20}
								className="me-3 mt-2"
							/>
							<div className="d-flex flex-column">
								<ButtonLink className="footer-right">
									<p>Domande?</p>
								</ButtonLink>
								<ButtonLink className="footer-small text-start">
									<p>Visita il nostro centro assistenza.</p>
								</ButtonLink>
							</div>
						</div>
						<div className="d-flex mb-2">
							<GearFill
								color="dark"
								size={22}
								className="me-3 mt-sm-2 mt-xxl-2 mt-xl-1"
							/>
							<div className="d-flex flex-column">
								<ButtonLink className="footer-right text-start">
									Gestisci il tuo account e la tua privacy
								</ButtonLink>
								<ButtonLink className="footer-small">
									Vai alle impostazioni
								</ButtonLink>
							</div>
						</div>
						<div id="trasparenza" className="d-flex mb-2">
							<ShieldShaded
								color="dark"
								size={23}
								className="me-3 mt-sm-2 mt-xxl-2 mt-xl-1"
							/>
							<div className="d-flex flex-column">
								<ButtonLink className="footer-right text-start">
									<p>Trasparenza sui contenuti consigliati</p>
								</ButtonLink>
								<ButtonLink className="footer-small">
									<p>
										Scopri di più sui contenuti consigliati.
									</p>
								</ButtonLink>
							</div>
						</div>
					</Container>
				</Col>
			</Row>
		</Container>
	);
};

export default MyFooter;
