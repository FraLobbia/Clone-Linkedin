import { Card, CardText, CardTitle, Col, Row } from "react-bootstrap";
import ButtonLink from "../utility components/ButtonLink";

const JobsSearch = () => {
  return (
    <Card className="mt-3">
      <Row className="row-cols-2 px-3 mt-3 pointer">
        <Col xs={8} className="">
          <CardTitle>Ricerche di lavoro recenti</CardTitle>
          <CardText className="jside-left mt-3 mb-0">Junior web developer</CardText>
          <CardText className="footer-small">Milan, Italy</CardText>
        </Col>
        <Col xs={4} className="text-end">
          <ButtonLink className="p-0 text-dark">Cancella</ButtonLink>
        </Col>
      </Row>
      <Row className="px-3 mt-3 pointer">
        <Col>
          <CardText className="jside-left m-0">Amazon warehouse manager</CardText>
          <CardText className="footer-small">Vercelli, Italy</CardText>
        </Col>
      </Row>
      <Row className="px-3 my-3 pointer">
        <Col>
          <CardText className="jside-left m-0">Videogames Reviewer</CardText>
          <CardText className="footer-small">Rome, Italy</CardText>
        </Col>
      </Row>
    </Card>
  );
};

export default JobsSearch;
