import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// { to, children, variant = "link", className, style }
const ButtonLink = ({
	to,
	children,
	variant = "link",
	className,
	style,
	margin,
}) => {
	return (
		<Link to={to} className={margin}>
			<Button variant={variant} className={className} style={style}>
				{children}
			</Button>
		</Link>
	);
};

export default ButtonLink;
