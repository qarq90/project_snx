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
    const [swiped, setSwiped] = useState(false);
    const [userData, setUserData] = useState([]);
    const [username, setUsername] = useState("");
    const [editProfile, setEditProfile] = useState(false);
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
                console.log("User ID not available.");
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
            console.log("DATA", data)
            if (!data || data.length === 0) {
                console.log("No user details found.");
                return;
            }

            setUserData(data)
            console.log("User details fetched:");
            console.log(userData)

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
                console.log("User ID not available.");
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

            console.log(data);
            console.log("User deleted successfully.");

            router.push("/auth");

        } catch (error) {
            console.error("Error deleting user:", error);
        }
    }

    // const resetData = () => {
    //     fetchUserData();
    //     setEditProfile(false);
    // }

    // const updateUser = async () => {
    //     setEditProfile(!editProfile);
    //     if (editProfile) {
    //         try {
    //             const {_id, ...updatedUserDetails} = user;
    //             const options = {
    //                 method: "POST",
    //                 body: JSON.stringify({
    //                     editedUserDetails: {
    //                         ...updatedUserDetails,
    //                         updateUserID: {userId: user._id}
    //                     }
    //                 }),
    //                 headers: {
    //                     "Content-Type": "application/json"
    //                 }
    //             };
    //
    //             const res = await fetch("/api/post/edit-user", options);
    //             const data = await res.json();
    //
    //             if (res.ok) {
    //                 if (data.found) {
    //                     console.log("User Updated Successfully");
    //                     setUser(data.user);
    //                     showToast("success", "Profile Updated", "Profile Updated Successfully.", toastRef);
    //                     router.push('/account');
    //                 } else {
    //                     showToast("error", "Account Updation Failed", "Incorrect Email or Password", toastRef);
    //                     console.log("Account Updation Failed: Incorrect Email or Password");
    //                 }
    //             } else {
    //                 showToast("error", "Error", "Failed to update profile.", toastRef);
    //                 console.error("Failed to update profile:", res.status);
    //             }
    //         } catch (error) {
    //             console.error("Error updating profile:", error);
    //             showToast("error", "Error", "Failed to update profile.", toastRef);
    //         }
    //     } else {
    //         console.log(editProfile);
    //     }
    // };


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
                console.log("Default Scenario");
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