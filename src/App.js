import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faSearch,
	faBell,
	faEnvelope,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

const contentMap = {
	Home: " this is home page. Lorem Ipsum is simply dummy text of the printing and typesetting industry ",
	Search:
		"This is Search content. Filler text is text that shares some characteristics of a real written text.",
	Notifications:
		"This is Notifications content. Lorem Ipsum is simply dummy text of the printing and typesetting industry",
	Messages: "This is Messages content.",
	Profile: "This is Profile content.",
};

const App = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [headerText, setHeaderText] = useState("Home");
	const [content, setContent] = useState(contentMap["Home"]);

	const handleMenuToggle = () => {
		setIsOpen(!isOpen);
	};

	const handleMenuItemClick = (text, e) => {
		e.stopPropagation(); 
		setHeaderText(text);
		setContent(contentMap[text]);
		setIsOpen(false);
	};

	return (
		<div className='app'>
			<div className='header'>
				<h1>{headerText}</h1>
				<p className='paragraph'>{content}</p>
			</div>
			<div
				className={`menu-container ${isOpen ? "open" : ""}`}
				onClick={handleMenuToggle}>
				<div className='menu'>
					<div
						className='menu-item'
						onClick={(e) => handleMenuItemClick("Home", e)}>
						<FontAwesomeIcon icon={faHome} />
					</div>
					<div
						className='menu-item'
						onClick={(e) => handleMenuItemClick("Search", e)}>
						<FontAwesomeIcon icon={faSearch} />
					</div>
					<div
						className='menu-item'
						onClick={(e) => handleMenuItemClick("Notifications", e)}>
						<FontAwesomeIcon icon={faBell} />
					</div>
					<div
						className='menu-item'
						onClick={(e) => handleMenuItemClick("Messages", e)}>
						<FontAwesomeIcon icon={faEnvelope} />
					</div>
					<div
						className='menu-item'
						onClick={(e) => handleMenuItemClick("Profile", e)}>
						<FontAwesomeIcon icon={faUser} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
