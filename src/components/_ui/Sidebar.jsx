"use client"

import React, {useEffect, useRef, useState} from "react";
import * as NLS from "../../styles/styledNav";
import {StyledLink, StyledNotLink} from "@/styles/styledNav";
import {NavLinksBottom, NavLinksTop, NavLinksTopMiddle} from "@/lib/objNav";
import "driver.js/dist/driver.css";
import {accountDriver, createDesignerDriver, createDriver, navDriver} from "@/lib/driver";
import {usePathname, useRouter} from "next/navigation";
import {BiHelpCircle} from "react-icons/bi";
import AccountPopup from "@/components/_account/AccountPopup";
import useAppStore from "@/states/appState";
import {showToast} from "@/lib/helper";
import {FaMoon, FaSun} from "react-icons/fa";
import {AnimatePresence} from "framer-motion";

const Sidebar = () => {
	const pathname = usePathname();
	const router = useRouter();

	const [profile, setProfile] = useState(false);
	const toastRef = useRef(null);

	const {setUser} = useAppStore();

	const fetchUserData = async () => {
		try {
			const email = document.cookie.split(';')[0].split('=')[1]
			if (email === "false") {
				throw new Error("User not found");
			}

			const options = {
				method: "POST",
				body: JSON.stringify({
					email: email
				}),
				headers: {
					"Content-Type": "application/json",
				}
			};

			const res = await fetch("/api/get/user/profile", options);
			const data = await res.json();
			if (!data || data.length === 0) {
				return;
			}

			setUser(data.currentUser)
		} catch (error) {
			router.push("/auth");
			console.error("Error fetching user data:", error);
			showToast("error", "Error", "Failed to fetch user data.", toastRef);
		}
	};

	useEffect(() => {
		fetchUserData().then();
	}, []);


	const handleDriverStart = () => {
		switch (pathname) {
			case "/":
			case "/contact":
				navDriver();
				break;
			case "/create":
				createDriver();
				break;
			case "/create/new/shirt":
			case "/create/new/pant":
			case "/create/new/shoes":
			case "/create/new/cap":
			case "/create/recent/shirt":
			case "/create/recent/pant":
			case "/create/recent/shoes":
			case "/create/recent/cap":
				createDesignerDriver();
				break;
			case "/account":
				accountDriver();
				break;
			default:
				break;
		}
	};

	const openProfile = () => {
		console.log("Profile Opened", profile)
		setProfile(true);
	}

	const [isDarkTheme, setIsDarkTheme] = useState(true);

	const handleThemeToggle = () => {
		setIsDarkTheme(!isDarkTheme);
		document.documentElement.style.setProperty('--primary-color-black', isDarkTheme ? '#e0ffff' : '#1d1d1d');
		document.documentElement.style.setProperty('--primary-text-color', isDarkTheme ? '#1d1d1d' : '#008080');
		document.documentElement.style.setProperty('--primary-comp-bg', isDarkTheme ? '#b0e0e6' : '#2c2c2c');
		document.documentElement.style.setProperty('--dropdown-text', isDarkTheme ? '#008080' : '#000');
	};

	return (
		<>
			<NLS.NavContainer>
				<NLS.NavSubContainer>
					<NLS.NavSubLeft className="navLinksTop">
						<NLS.NavStyledUl>
							{NavLinksTop.map((navLink, index) => (
								<NLS.NavStyledLi whileHover={{scale: 0.9}} whileTap={{scale: 0.8}} key={index}>
									<StyledLink id="project-link" href={navLink.path}>
										<NLS.NavStyledIcon>{navLink.icon}</NLS.NavStyledIcon>
									</StyledLink>
								</NLS.NavStyledLi>
							))}
						</NLS.NavStyledUl>
					</NLS.NavSubLeft>
				</NLS.NavSubContainer>

				<NLS.NavSubContainer>
					<NLS.NavSubRight>
						<NLS.NavStyledUl>
							{NavLinksTopMiddle.map((navLink, index) => (
								<NLS.NavStyledLi whileHover={{scale: 0.9}} whileTap={{scale: 0.8}} key={index}
								                 className="middle-links">
									<StyledLink id={navLink.id} href={navLink.path}>
										<NLS.NavStyledIcon>{navLink.icon}</NLS.NavStyledIcon>
									</StyledLink>
								</NLS.NavStyledLi>
							))}
							<NLS.NavStyledLi whileHover={{scale: 0.9}} whileTap={{scale: 0.8}} className="middle-links">
								<StyledNotLink id="theme-link" onClick={() => handleThemeToggle()}>
									<NLS.NavStyledIcon onClick={() => setIsDarkTheme(!isDarkTheme)}>
										{isDarkTheme ? <FaSun/> : <FaMoon/>}
									</NLS.NavStyledIcon>
								</StyledNotLink>
							</NLS.NavStyledLi>
							<NLS.NavStyledLi whileHover={{scale: 0.9}} whileTap={{scale: 0.8}} className="middle-links">
								<StyledNotLink id="help-button" onClick={() => handleDriverStart()}>
									<NLS.NavStyledIcon>
										<BiHelpCircle/>
									</NLS.NavStyledIcon>
								</StyledNotLink>
							</NLS.NavStyledLi>
						</NLS.NavStyledUl>
					</NLS.NavSubRight>
				</NLS.NavSubContainer>

				<NLS.NavSubContainer>
					<NLS.NavSubLeft className="navLinksBottom">
						<NLS.NavStyledUl>
							{NavLinksBottom.map((navLink, index) => (
								<NLS.NavStyledLi whileHover={{scale: 0.9}} whileTap={{scale: 0.8}} key={index}>
									<StyledNotLink id="account-link" onClick={openProfile}>
										<NLS.NavStyledIcon>{navLink.icon}</NLS.NavStyledIcon>
									</StyledNotLink>
								</NLS.NavStyledLi>
							))}
						</NLS.NavStyledUl>
					</NLS.NavSubLeft>
				</NLS.NavSubContainer>
				<AnimatePresence>
					{
						profile &&
						<AccountPopup setProfile={setProfile}/>
					}
				</AnimatePresence>
			</NLS.NavContainer>
		</>
	);
};

export default Sidebar;
