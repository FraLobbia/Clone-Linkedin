import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useSelector } from "react-redux";

function FormEditProfile() {
	const profile = useSelector((state) => state.profilo.info);

	return (
		<Form noValidate>
			<Row className="mb-3">
				<Form.Group as={Col} md="4">
					<Form.Label>Nome</Form.Label>
					<Form.Control
						required
						type="text"
						placeholder="First name"
						defaultValue={profile.name}
					/>
				</Form.Group>

				<Form.Group as={Col} md="4">
					<Form.Label>Cognome</Form.Label>
					<Form.Control
						required
						type="text"
						placeholder="Last name"
						defaultValue={profile.surname}
					/>
				</Form.Group>

				<Form.Group as={Col} md="4">
					<Form.Label>Username</Form.Label>
					<InputGroup>
						<Form.Control
							type="text"
							placeholder="Username"
							aria-describedby="inputGroupPrepend"
							defaultValue={profile.username}
							required
						/>
					</InputGroup>
				</Form.Group>

				<Form.Group as={Col} md="6">
					<Form.Label>Title</Form.Label>
					<Form.Control
						required
						type="text"
						placeholder="Il tuo titolo"
						defaultValue={profile.title}
					/>
				</Form.Group>

				<Form.Group as={Col} md="6">
					<Form.Label>Email</Form.Label>
					<Form.Control
						required
						type="email"
						placeholder="La tua email"
						defaultValue={profile.email}
					/>
				</Form.Group>

				<Form.Group as={Col} md="12">
					<Form.Label>Città</Form.Label>
					<Form.Control
						required
						type="text"
						placeholder="Città"
						defaultValue={profile.area}
					/>
				</Form.Group>

				<Form.Group as={Col} md="12">
					<Form.Label>Immagine profilo</Form.Label>
					<InputGroup>
						<Form.Control
							type="text"
							placeholder="Username"
							aria-describedby="inputGroupPrepend"
							defaultValue={profile.image}
							required
						/>
					</InputGroup>
				</Form.Group>

				<Form.Group as={Col} md="12">
					<Form.Label>Bio</Form.Label>
					<InputGroup>
						<Form.Control
							as="textarea"
							placeholder="Username"
							aria-describedby="inputGroupPrepend"
							defaultValue={profile.bio}
							required
						/>
					</InputGroup>
				</Form.Group>
			</Row>
		</Form>
	);
}

export default FormEditProfile;
