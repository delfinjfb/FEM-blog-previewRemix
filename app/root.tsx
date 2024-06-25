import type {LinksFunction} from "@remix-run/node";
// existing imports

import appStylesHref from "./app.css?url";

export const links: LinksFunction = () => [
	{rel: "stylesheet", href: appStylesHref}
];
import {Form, Links, Meta, Scripts, ScrollRestoration} from "@remix-run/react";

export default function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<main>
					<img src="./images/illustration-article.svg" alt="" />

					<div>
						<div className="category">Learning</div>

						<div className="publishdate">Published 21 Dec 2023</div>
						<h1>HTML & CSS foundations</h1>
						<div>
							These languages are the backbone of every website, defining
							structure, content, and presentation.
						</div>
						<div className="author">
							<img src="./images/image-avatar.webp" alt="QR code" />
							<div className="authorname">Greg Hooper</div>
						</div>

						<div className="attribution">
							Challenge by
							<a
								href="https://www.frontendmentor.io?ref=challenge"
								target="_blank"
								rel="noreferrer"
							>
								Frontend Mentor
							</a>
							. Coded by <a href="www.twitter.com">Delfino </a>.
						</div>
					</div>
				</main>
			</body>
		</html>
	);
}
