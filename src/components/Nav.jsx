"use client"

import React, {useEffect, useRef, useState} from "react";
import * as NLS from "../styles/styledNav";
import {StyledLink, StyledNotLink} from "@/styles/styledNav";
import {NavLinksBottom, NavLinksTop, NavLinksTopMiddle} from "@/lib/objNav";
import "../styles/nav.css";
import "driver.js/dist/driver.css";
import {accountDriver, contactDriver, createDesignerDriver, createDriver, navDriver} from "@/lib/driver";
import {usePathname, useRouter} from "next/navigation";
import {BiHelpCircle} from "react-icons/bi";
import AccountPopup from "@/components/_account/AccountPopup";
import useAppStore from "@/states/appState";
import {showToast} from "@/lib/helper";


const Nav = () => {
    const pathname = usePathname();
    const router = useRouter();

    const [profile, setProfile] = useState(false);
    const [userData, setUserData] = useState([]);
    const toastRef = useRef(null);

    const {user, setUser} = useAppStore();

    const handleLogin = () => {
        router.push('/auth');
    };

    const handleSignUp = () => {
        router.push('/auth')
    };

    const fetchUserData = async () => {
        try {
            if (user == null || !user._id) {
                router.push("/auth")
                return;
            }

            const options = {
                method: "POST",
                body: JSON.stringify({
                    email: user.email
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

            setUserData(data)

        } catch (error) {
            router.push("/auth");
            console.error("Error fetching user data:", error);
            showToast("error", "Error", "Failed to fetch user data.", toastRef);
        }
    };


    useEffect(() => {
        fetchUserData().then();
    }, []);

    const deleteUser = async () => {
        try {
            if (!user || !user._id) {
                return;
            }

            const options = {
                method: "POST",
                body: JSON.stringify({
                    deleteUserID: {userId: user._id}
                }),
                headers: {
                    "Content-Type": "application/json",
                }
            };

            const res = await fetch("/api/post/delete-user", options);
            const data = await res.json();

            router.push("/auth");

        } catch (error) {
            console.error("Error deleting user:", error);
        }
    }


    const handleDriverStart = () => {
        switch (pathname) {
            case "/":
                navDriver();
                break;
            case "/create":
                createDriver();
                break;
            case "/create/new/shirt":
            case "/create/new/pant":
            case "/create/new/shoes":
            case "/create/new/cap":
                createDesignerDriver();
                break;
            case "/contact":
                contactDriver();
                break;
            case "/account":
                accountDriver();
                break;
            default:
                break;
        }
    };

    const openProfile = () => {
        setProfile(!profile);
    }

    return (
        <>
            <NLS.NavContainer>
                <NLS.NavSubContainer>
                    <NLS.NavSubLeft className="navLinksTop">
                        <NLS.NavStyledUl>
                            {NavLinksTop.map((navLink, index) => (
                                <NLS.NavStyledLi key={index}>
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
                                <NLS.NavStyledLi key={index} className="middle-links">
                                    <StyledLink id={navLink.id} href={navLink.path}>
                                        <NLS.NavStyledIcon>{navLink.icon}</NLS.NavStyledIcon>
                                    </StyledLink>
                                </NLS.NavStyledLi>
                            ))}
                            <NLS.NavStyledLi className="middle-links">
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
                                <NLS.NavStyledLi key={index}>
                                    <StyledNotLink id="account-link" onClick={openProfile}>
                                        <NLS.NavStyledIcon>{navLink.icon}</NLS.NavStyledIcon>
                                    </StyledNotLink>
                                </NLS.NavStyledLi>
                            ))}
                        </NLS.NavStyledUl>
                    </NLS.NavSubLeft>
                </NLS.NavSubContainer>
            </NLS.NavContainer>
            {
                profile ?
                    <>
                        <AccountPopup user={user} setProfile={setProfile}/>
                    </> : <></>
            }
        </>
    );
};

export default Nav;