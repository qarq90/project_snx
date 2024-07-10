"use client"

import React from "react";
import * as NLS from "../../styles/styledNav";
import {StyledLink, StyledNotLink} from "@/styles/styledNav";
import {NavLinksTopMiddle} from "@/lib/objNav";
import "driver.js/dist/driver.css";
import useAppStore from "@/states/appState";
import {FaMoon, FaSun} from "react-icons/fa";
import {styled} from "styled-components";
import {motion} from "framer-motion";
import {fadeRight} from "@/styles/styledAnimations";


export const MobileSidebar = ({setSidebarOpen}) => {
	const {isDarkMode, setDarkMode} = useAppStore();

	const handleThemeToggle = () => {
		setDarkMode(!isDarkMode);
		document.documentElement.style.setProperty('--primary-color-black', isDarkMode ? '#e0ffff' : '#1d1d1d');
		document.documentElement.style.setProperty('--primary-text-color', isDarkMode ? '#1d1d1d' : '#008080');
		document.documentElement.style.setProperty('--primary-comp-bg', isDarkMode ? '#b0e0e6' : '#2c2c2c');
		document.documentElement.style.setProperty('--dropdown-text', isDarkMode ? '#008080' : '#000');
	};

	return (
		<MobileNavContainer
			variants={fadeRight}
			initial="initial"
			animate="show"
			exit="exit"
		>
			<NLS.NavSubContainer>
				<NLS.NavSubRight>
					<NLS.NavStyledUl>
						{NavLinksTopMiddle.map((navLink, index) => (
							<NLS.NavStyledLi key={index} className="middle-links" onClick={() => setSidebarOpen(false)}>
								<StyledLink id={navLink.id} href={navLink.path}>
									<NLS.NavStyledIcon>{navLink.icon}</NLS.NavStyledIcon>
								</StyledLink>
							</NLS.NavStyledLi>
						))}
						<NLS.NavStyledLi className="middle-links">
							<StyledNotLink id="theme-link" onClick={() => handleThemeToggle()}>
								<NLS.NavStyledIcon onClick={() => setDarkMode(!isDarkMode)}>
									{isDarkMode ? <FaSun/> : <FaMoon/>}
								</NLS.NavStyledIcon>
							</StyledNotLink>
						</NLS.NavStyledLi>
					</NLS.NavStyledUl>
				</NLS.NavSubRight>
			</NLS.NavSubContainer>
		</MobileNavContainer>
	);
};

const MobileNavContainer = styled(motion.div)`
    display: none;

    &::before {
        content: "";
        position: fixed;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background-color: var(--primary-color-black);
        z-index: 999;
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: fixed;
        width: 4rem;
        left: 0;
        top: 4rem;
        z-index: 10000;
        background-color: #1d1d1d;
        height: Calc(100dvh - 4rem);
        box-shadow: 5px 0 75px rgba(0, 128, 128, 0.3);
        border-right: 4px solid var(--primary-theme-color);
    }
`;
