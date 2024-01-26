import { Col, Container, Row } from "react-bootstrap";
import Preview from "./ProfileSection/Preview";
import SidebarProfileRight from "./SidebarProfileRight";
import Analisi from "./ProfileSection/Analisi";
import Risorse from "./ProfileSection/Risorse";
import Informazioni from "./ProfileSection/Informazioni";
import Esperienze from "./ProfileSection/Esperienze";
import MyFooter from "./MyFooter";
import FormEditProfile from "./ProfileSection/FormEditProfile";
import MyModal from "../utility components/MyModal";

const Profile = () => {
	return (
		<>
			<Container className="d-flex align-items-start gap-2">
				<Row>
					<Col xs={12} md={7} lg={8} xl={9}>
						<Preview />
						<Analisi />
						<Risorse />
						<Informazioni />
						<Esperienze />
						{/* vari componenti */}
						{/* vari componenti */}
						{/* vari componenti */}
					</Col>
					<Col md={5} lg={4} xl={3}>
						<SidebarProfileRight />
					</Col>
				</Row>
			</Container>
			<MyFooter />
		</>
	);
};
export default Profile;
