import { Col, Container, Row } from "react-bootstrap";
import logo from "../../media/LinkedinLogo.png";
import ButtonLink from "../utility components/ButtonLink";

const JobsFooter = () => {
  return (
    <Container>
      <Row className="row-cols-sm-1 row-cols-xl-2 mt-3">
        <Col>
          <ButtonLink className="footer-small">
            <span>Informazioni</span>
          </ButtonLink>
        </Col>
        <Col>
          <ButtonLink className="footer-small">
            <span>Accessibilità</span>
          </ButtonLink>
        </Col>
      </Row>
      <Row className="row-cols-sm-1 row-cols-xl-2">
        <Col>
          <ButtonLink className="footer-small">
            <span>Centro Assistenza</span>
          </ButtonLink>
        </Col>
        <Col>
          <ButtonLink className="footer-small">
            <span>Privacy e Condizioni</span>
          </ButtonLink>
        </Col>
      </Row>
      <Row className="row-cols-lg-1 d-sm-none d-lg-block">
        <Col className="text-xl-center ps-xl-0">
          <ButtonLink className="footer-small">
            <span>Opzioni per gli annunci pubblicitari</span>
          </ButtonLink>
        </Col>
      </Row>
      <Row className="row-cols-sm-1 row-cols-xl-2">
        <Col>
          <ButtonLink className="footer-small">
            <span>Pubblicità</span>
          </ButtonLink>
        </Col>
        <Col>
          <ButtonLink className="footer-small">
            <span>Servizi alle aziende</span>
          </ButtonLink>
        </Col>
      </Row>
      <Row className="row-cols-sm-1 row-cols-xl-2">
        <Col className="pe-0">
          <ButtonLink className="footer-small">
            <span>Scarica l'app LinkedIn</span>
          </ButtonLink>
        </Col>
        <Col>
          <ButtonLink className="footer-small">
            <span>Altro</span>
          </ButtonLink>
        </Col>
      </Row>

      <p className="fjobs-down mt-3">
        <img src={logo} alt="LinkedIn logo" height={35} className="me-2" />
        LinkedIn Corporation © 2024
      </p>
    </Container>
  );
};

export default JobsFooter;
