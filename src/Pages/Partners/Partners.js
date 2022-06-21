import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Partners() {
	const [partners] = React.useState([
		{
			name: "Partner 1",
			url: "https://www.partner1.com",
			logo: "1.webp",
			description: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ",
		},
		{
			name: "Partner 2",
			url: "https://www.partner2.com",
			logo: "2.jpg",
			description: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ",
		},
		{
			name: "Partner 3",
			url: "https://www.partner3.com",
			logo: "3.webp",
			description: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ",
		},
		{
			name: "Partner 4",
			url: "https://www.partner4.com",
			logo: "4.jpg",
			description: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ",
		},
	]);
	return (
		<div className="album py-5 bg-light">
			<h1 className="text-center mb-4" style={{ "color":"rgb(255 193 7)"}}>Partners</h1>
			<div className="container">

				<OwlCarousel items={3}
					className="owl-theme"
					loop
					nav
					responsive={
						{
							0: {
								items: 1,
							},
							600: {
								items: 2,
							},
							1000: {
								items: 2,
							},
							1400: {
								items: 3,
							},
						}
					}
					margin={80}>
					{
						partners.map((partner, index) => (
							<div className="card shadow-sm" style={{ "borderRadius": "30px" }} key={index}>
								<img src={"./assets/partners/" + partner.logo} className="card-img-top" alt="..." style={{ "height": "200px", "objectFit": "cover", "borderRadius": "30px 30px 0px 0px" }} />
								<div className="card-body" style={{ "height": "200px", "overflow": "auto" }}>
									<p className="card-text">{partner.description}</p>
								</div>
							</div>
						))
					}
				</OwlCarousel>
			</div>
		</div>
	);
}
