import { Link } from "react-router-dom";
import "../style.css";

export default function Post({_id, title, content, username, photo, createdAt }) {
	// https://filthy-housecoat-dove.cyclic.app/images/1673545698313profile-removebg-preview.png
	// const PF = "https://filthy-housecoat-dove.cyclic.app/images/";
	return (
		<article className="mt-20">
		<figure>

		{photo &&
			<img className="w-52 h-72 md:h-84 md:w-80 rounded-lg object-cover" src={photo} alt={username} />
		}

			<figcaption className="grid gap-4 grid-cols-[206px] md:grid-cols-[310px]">
			<span className="font-play text-sm">
			{new Date(createdAt).toDateString()}
			</span>
			<span className="font-lora hover:opacity-70 whitespace-normal md:text-xl capitalize">
				<Link to={`/post/${_id}`}>
                        {title} </Link>
			</span>
			<span className="font-corm hover:underline hover:underline-offset-8 capitalize hover:opacity-75 cursor-pointer text-sm">
			<Link className="" to={`/?user=${username}`}>
			{username}
			</Link>
			</span>
			</figcaption>
		</figure>
			

		</article>
	);
}
