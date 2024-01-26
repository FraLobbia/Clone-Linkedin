import { Button, Card, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
	closeModal,
	deletePostsData,
	editProfile,
	formatModalToDelete,
	getPostsData,
} from "../../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faComment,
	faEllipsis,
	faPaperPlane,
	faRetweet,
	faThumbsUp,
	faXmark,
} from "@fortawesome/free-solid-svg-icons";
import ButtonLink from "../utility components/ButtonLink";
import MyModal from "../utility components/MyModal";

const HomePosts = () => {
	const posts = useSelector((state) => state.postData.posts);
	const isLoading = useSelector((state) => state.loading.loading);
	const dispatch = useDispatch();
	const sortedPosts = [...posts].sort(
		(a, b) => new Date(b.createdAt) - new Date(a.createdAt)
	);

	function timeAgo(dateString) {
		const currentDate = new Date();
		const pastDate = new Date(dateString);
		const timeDifference = currentDate - pastDate;
		const minutes = Math.floor(timeDifference / (1000 * 60));
		if (minutes < 1) {
			return "Ora";
		} else if (minutes === 1) {
			return "1 minuto fa";
		} else if (minutes < 60) {
			return `${minutes} minuti fa`;
		} else if (minutes < 60 * 24) {
			const hours = Math.floor(minutes / 60);
			return `${hours} ${hours === 1 ? "ora" : "ore"} fa`;
		} else {
			const days = Math.floor(minutes / (60 * 24));
			return `${days} ${days === 1 ? "giorno" : "giorni"} fa`;
		}
	}

	const setModalToDelete = (id) => {
		// questa funzione viene passata ad ogni iconcina "X" di ogni post durante la mappatura
		// fa in modo che ogni "X" abbia le informazioni da passare al modale per cancellare il post
		// il dispatch cambia anche lo stato in "show" in true per mostrare il modale
		dispatch(
			formatModalToDelete(
				"Conferma elimina",
				"Vuoi eliminare il post?",
				id
			)
		);
	};

	const handleDelete = (id) => {
		//questa funzione viene passata tramite props "func" (in modo da essere riutilizzabile in altri contesti es: modifica invece di delete)
		dispatch(deletePostsData(id));
		dispatch(closeModal());
	};

	const handleGetPostData = () => {
		dispatch(getPostsData());
	};

	useEffect(() => {
		// eseguo la prima volta la fetch dei dati dei post
		handleGetPostData();
		// e poi imposto il timer, altrimenti al primo avvio aspetta tot tempo per fetchare
		const intervalId = setInterval(() => {
			handleGetPostData();
		}, 30000);
		// Pulisco l'intervallo quando il componente viene smontato per avitare che continui ogni tot tempo a fetchare anche quando renderizzo altri componenti
		return () => clearInterval(intervalId);
	}, []);

	return (
		<>
			{/* come props a mymodal passo la funzione che si esegue alla sua conferma */}
			<MyModal func={handleDelete} />
			{isLoading && (
				<div className="d-flex my-5 justify-content-center">
					<Spinner animation="border" role="status">
						<span className="visually-hidden">Loading...</span>
					</Spinner>
				</div>
			)}
			{sortedPosts.map((post, index) => {
				return (
					<>
						{index < 20 && (
							<Card key={post._id} className="my-2 p-3 gap-3">
								<div className="d-flex">
									<img
										src={
											post.user.image
												? post.user.image
												: "https://m.media-amazon.com/images/I/51zf0DXxT-L._AC_UF1000,1000_QL80_.jpg"
										}
										alt="profilo"
										style={{
											width: "70px",
											height: "70px",
											borderRadius: "50%",
										}}
									/>
									<div className="ms-3">
										<h5 className="m-0">
											{post.user.name} {post.user.surname}{" "}
											{/* {post._id} */}
										</h5>
										<p className="m-0">{post.user.title}</p>
										<p>{timeAgo(post.createdAt)}</p>
									</div>
									<div className="ms-auto text-secondary">
										<Button variant="link">
											<FontAwesomeIcon
												className="text-secondary"
												icon={faEllipsis}
											/>
										</Button>
										<Button
											variant="link"
											onClick={() =>
												setModalToDelete(post._id)
											}>
											<FontAwesomeIcon
												className="text-secondary"
												icon={faXmark}
											/>
										</Button>
									</div>
								</div>
								<p className="">{post.text}</p>
								{post.image && (
									<img src={post.image} alt="postimage" />
								)}
								<hr />
								<div className="d-flex justify-content-around flex-wrap">
									<ButtonLink className={"text-secondary"}>
										<FontAwesomeIcon icon={faThumbsUp} />
										<span className="ms-2">Consiglia</span>
									</ButtonLink>
									<ButtonLink className={"text-secondary"}>
										<FontAwesomeIcon icon={faComment} />
										<span className="ms-2">Commenta</span>
									</ButtonLink>
									<ButtonLink className={"text-secondary"}>
										<FontAwesomeIcon icon={faRetweet} />
										<span className="ms-2">
											Diffondi il post
										</span>
									</ButtonLink>
									<ButtonLink className={"text-secondary"}>
										<FontAwesomeIcon icon={faPaperPlane} />
										<span className="ms-2">Invia</span>
									</ButtonLink>
								</div>
							</Card>
						)}
					</>
				);
			})}
		</>
	);
};

export default HomePosts;
