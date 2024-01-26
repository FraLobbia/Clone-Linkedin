import {
	faCalendarDay,
	faImage,
	faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createPostsData, setValuePost } from "../../redux/actions";
import ButtonLink from "../utility components/ButtonLink";

const HomeCreatePost = () => {
	const profile = useSelector((state) => state.profilo.info);
	const dispatch = useDispatch();
	return (
		<>
			<Card className="mt-4">
				<div className="d-flex p-4 gap-3">
					<img
						src={
							profile.image
								? profile.image
								: "https://m.media-amazon.com/images/I/51zf0DXxT-L._AC_UF1000,1000_QL80_.jpg"
						}
						alt="profilo"
						style={{
							width: "70px",
							height: "70px",
							borderRadius: "50%",
						}}
					/>
					<Form.Control
						type="text"
						id="HomeSearch"
						placeholder="Avvia un post"
						onChange={(e) => dispatch(setValuePost(e.target.value))}
						onKeyUp={(e) => {
							if (e.key === "Enter") {
								dispatch(createPostsData());
							}
						}}
					/>
				</div>
				<div className="d-flex px-4 justify-content-between">
					<ButtonLink className="d-flex gap-2">
						<FontAwesomeIcon
							className=" text-primary pt-1"
							size="lg"
							icon={faImage}
						/>
						<p className="d-none d-sm-block d-md-none d-lg-block text-secondary">
							Contenuti Multimediali
						</p>
					</ButtonLink>
					<ButtonLink className="d-flex gap-2">
						<FontAwesomeIcon
							className=" text-warning pt-1"
							icon={faCalendarDay}
							size="lg"
						/>
						<p className="d-none d-sm-block d-md-none d-lg-block text-secondary">
							Evento
						</p>
					</ButtonLink>
					<ButtonLink className="d-flex gap-2">
						<FontAwesomeIcon
							className=" text-danger pt-1"
							icon={faNewspaper}
							size="lg"
						/>
						<p className="d-none d-sm-block d-md-none d-lg-block text-secondary">
							Scrivi un articolo
						</p>
					</ButtonLink>
				</div>
			</Card>
		</>
	);
};

export default HomeCreatePost;
