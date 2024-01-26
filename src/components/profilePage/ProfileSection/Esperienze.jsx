import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setExperience } from "../../../redux/actions";
import { useEffect } from "react";
import ButtonLink from "../../utility components/ButtonLink";

const Esperienze = (userId) => {
	const dispatch = useDispatch();

	const getExperience = async () => {
		const endpoint = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`;
		try {
			let response = await fetch(endpoint, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlNjI4MDYwMGJlMTAwMTgzYTg2YjUiLCJpYXQiOjE3MDU5MjczMTgsImV4cCI6MTcwNzEzNjkxOH0.pDglMvdYjnNomxK6G4zXcsal92m3qQmF2T7fIUx_lzA",
				},
			});
			let data = await response.json();
			console.log("Experience", data);
			dispatch(setExperience(data));
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		console.log("ciao");
		getExperience("65ae4351600be100183a869f");
	}, []);

	return (
		<Card className="position-relative mt-4">
			<Container className="p-4 border-bottom">
				<div className="d-flex justify-content-between">
					<h3 className="m-0 mb-md-3">Esperienza</h3>
					<div>
						<ButtonLink>
							<FontAwesomeIcon
								className="fs-5 text-secondary"
								icon={faPlus}
							/>
						</ButtonLink>
						<ButtonLink>
							<FontAwesomeIcon
								className="text-secondary ms-3"
								icon={faPencil}
							/>
						</ButtonLink>
					</div>
				</div>

				<Row className="d-flex">
					<Col xs={1}>
						<img
							src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp"
							alt="logo"
							style={{ height: "50px", width: "50px" }}
						/>
					</Col>
					<Col xs={11}>
						<p className="m-0">Sviluppatore React</p>
						<p className="text-secondary">
							{" "}
							A tempo pieno - 10 anni
						</p>
					</Col>
					<Col xs={1}></Col>
					<Col xs={11} className="p-0">
						<ul>
							<li>Sviluppato sito della madonna</li>
							<li>Sviluppato silk road 3.0</li>
						</ul>
					</Col>
				</Row>
				<hr />
				<Row className="d-flex">
					<Col xs={1}>
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS99AQoL4gEdJW6SjpiSpmR6hgdVy4NkdmeBA&usqp=CAU"
							alt="logo"
							style={{ height: "50px", width: "50px" }}
						/>
					</Col>
					<Col xs={11}>
						<p className="m-0">Presidente Usasu</p>
						<p className="text-secondary">
							{" "}
							A tempo pieno - 10 anni
						</p>
					</Col>
					<Col xs={1}></Col>
					<Col xs={11} className="p-0">
						<ul>
							<li>Causato guerre in tutto il mondo</li>
							<li>Fatto pipì sulla gggggente</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</Card>
	);
};

export default Esperienze;
