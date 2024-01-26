import { Button, Card, CardBody, CardText, Col, Row } from "react-bootstrap";
import { BookmarkFill, Clipboard2Check, GearFill, ListUl, PencilSquare, PlayBtnFill } from "react-bootstrap-icons";

const JSidebarLeft = () => {
  return (
    <>
      <Card className="mt-3 sticky-top">
        <CardBody>
          <CardText>
            <Row className="row-cols-2">
              <Col xs={2} className="fs-5 pe-0">
                <BookmarkFill />
              </Col>
              <Col xs={10} className="jside-left pt-2">
                Le mie offerte di lavoro
              </Col>
            </Row>
          </CardText>
          <CardText>
            <Row className="row-cols-2">
              <Col xs={2} className="fs-5 pe-0">
                <ListUl />
              </Col>
              <Col xs={10} className="jside-left pt-2">
                Preferenze
              </Col>
            </Row>
          </CardText>
          <CardText>
            <Row className="row-cols-2">
              <Col xs={2} className="fs-5 pe-0">
                <Clipboard2Check />
              </Col>
              <Col xs={10} className="jside-left pt-1">
                Valutazioni delle competenze
              </Col>
            </Row>
          </CardText>
          <CardText>
            <Row className="row-cols-2">
              <Col xs={2} className="fs-5 pe-0">
                <PlayBtnFill />
              </Col>
              <Col xs={10} className="jside-left pt-1">
                Indicazioni per chi cerca lavoro
              </Col>
            </Row>
          </CardText>
          <CardText>
            <Row className="row-cols-2">
              <Col xs={2} className="fs-5 pe-0">
                <GearFill />
              </Col>
              <Col xs={10} className="jside-left pt-2">
                Impostazioni candidatura
              </Col>
            </Row>
          </CardText>
        </CardBody>
      </Card>
      <Button variant="outline-primary" className="mt-3 py-2 sticky-top">
        <Row className="row-cols-2">
          <Col xs={2} className="fs-5 pe-0">
            <PencilSquare />
          </Col>
          <Col xs={10} className="jside-left ps-2">
            Pubblica offerta gratuita
          </Col>
        </Row>
      </Button>
    </>
  );
};

export default JSidebarLeft;
