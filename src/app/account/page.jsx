"use client";

import {PageContainer} from "@/styles/styledGlobal";
import {
    AccountContainer,
    BannerAccount,
    SecondaryBanner,
    StyledAccountBanner,
    StyledImageInput,
    StyledUserAvatar,
    SubMicroBanner,
    SubMicroBannerA,
    SubMicroBannerB,
} from "@/styles/styledAccount";
import InputTitle from "@/components/InputTitle";
import {Button} from "@nextui-org/react";
import React, {useEffect, useRef, useState} from "react";
import {AccountMicroBanners} from "@/components/_account/AccountMicroBanners";
import {FaCircleUser, FaTrashCan} from "react-icons/fa6";
import {FaDoorOpen} from "react-icons/fa";
import {showToast} from "@/lib/helper";
import {Toast} from "primereact/toast";
import {scaleUp} from "@/styles/styledAnimations";
import Head from "next/head";
import {metadataAccount} from "@/lib/metadata";
import useAppStore from "@/states/appState";
import {useRouter} from "next/navigation";
import {RouteAuthContainer, RouteButton, RouteButtons, RouteDescription, RouteTitle} from "@/styles/styledRoute";

export default function Page() {
    const router = useRouter();

    const [userData, setUserData] = useState([]);
    const [username, setUsername] = useState("");
    const [editProfile, setEditProfile] = useState(false);
    const [userFound, setUserFound] = useState(false);
    const [findingUser, setFindingUser] = useState(true);
    const [accountFound, setAccountFound] = useState(false);
    const toastRef = useRef(null);

    const {user, setUser} = useAppStore();

    useEffect(() => {
        const fetchData = async () => {
            await new Promise(resolve => setTimeout(resolve, 3000));
            setFindingUser(false);

            const userFound = true;

            setAccountFound(userFound);
        };

        fetchData();
    }, []);

    const handleLogin = () => {
        router.push('/auth');
    };

    const handleSignUp = () => {
        router.push('/auth')
    };

    const fetchUserData = async () => {
        try {
            if (!user || !user._id) {
                console.log("User ID not available.");
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

            setUserFound(true)

            setUserData(data)
            console.log("User details fetched:");
            console.log(userData)

        } catch (error) {
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

    const resetData = () => {
        fetchUserData();
        setEditProfile(false);
    }

    const updateUser = async () => {
        setEditProfile(!editProfile);
        if (editProfile) {
            try {
                const {_id, ...updatedUserDetails} = user;
                const options = {
                    method: "POST",
                    body: JSON.stringify({
                        editedUserDetails: {
                            ...updatedUserDetails,
                            updateUserID: {userId: user._id}
                        }
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                };

                const res = await fetch("/api/post/edit-user", options);
                const data = await res.json();

                if (res.ok) {
                    if (data.found) {
                        console.log("User Updated Successfully");
                        setUser(data.user);
                        showToast("success", "Profile Updated", "Profile Updated Successfully.", toastRef);
                        router.push('/account');
                    } else {
                        showToast("error", "Account Updation Failed", "Incorrect Email or Password", toastRef);
                        console.log("Account Updation Failed: Incorrect Email or Password");
                    }
                } else {
                    showToast("error", "Error", "Failed to update profile.", toastRef);
                    console.error("Failed to update profile:", res.status);
                }
            } catch (error) {
                console.error("Error updating profile:", error);
                showToast("error", "Error", "Failed to update profile.", toastRef);
            }
        } else {
            console.log(editProfile);
        }
    };

    return (
        <>
            <Head>
                <title>{metadataAccount.title}</title>
                <meta name="description" content={metadataAccount.description}/>
                <link rel="manifest" href="/manifest.json"/>
            </Head>
            <PageContainer>
                <AccountContainer>
                    {
                        userFound ?
                            <>
                                <StyledAccountBanner
                                    variants={scaleUp}
                                    initial="initial"
                                    animate="show"
                                >
                                    <BannerAccount
                                        variants={scaleUp}
                                    >
                                        <StyledUserAvatar className="accordianDiv">
                                            {user.username.charAt(0).toUpperCase() + user.username.charAt(1).toUpperCase()}
                                        </StyledUserAvatar>
                                        {/*<Image src={pfp} alt="Profile-Pic"/>*/}

                                    </BannerAccount>
                                    <SubMicroBanner
                                        variants={scaleUp}
                                    >
                                        <SubMicroBannerA>
                                            <InputTitle inputText={`${userFound ? user.username : ""}`}/>
                                        </SubMicroBannerA>
                                        <SubMicroBannerB
                                            variants={scaleUp}
                                            initial="initial"
                                            animate="show"
                                        >
                                            {/*<Button onClick={updateUser}>*/}
                                            {/*    {*/}
                                            {/*        !editProfile*/}
                                            {/*            ?*/}
                                            {/*            <>*/}
                                            {/*                <FaEdit/> Edit Profile*/}
                                            {/*            </>*/}
                                            {/*            :*/}
                                            {/*            <>*/}
                                            {/*                <FaSave/> Confirm*/}
                                            {/*            </>*/}
                                            {/*    }*/}
                                            {/*</Button>*/}
                                            {/*{editProfile &&*/}
                                            {/*    <Button onClick={() => resetData()}>*/}
                                            {/*        <FaBackspace/>*/}
                                            {/*        Cancel*/}
                                            {/*    </Button>*/}
                                            {/*}*/}
                                            <Button onClick={deleteUser} id="delete-account">
                                                <FaTrashCan/>
                                                Delete Account
                                            </Button>
                                            <StyledImageInput type="file" id="file-input" name="file-input"/>

                                            {/*<ImageInputLabel id="file-input-label" htmlFor="file-input">*/}
                                            {/*    <FaImage/>*/}
                                            {/*    Upload Image*/}
                                            {/*</ImageInputLabel>*/}
                                        </SubMicroBannerB>
                                    </SubMicroBanner>
                                </StyledAccountBanner>
                            </> : <></>
                    }
                    <SecondaryBanner>
                        {userFound ? (
                            <>
                                <AccountMicroBanners
                                    user={user}
                                    editProfile={editProfile}
                                    setUser={setUser}
                                />
                            </>
                        ) : (
                            <>
                                <RouteAuthContainer>
                                    <RouteTitle>
                                        <ShirtIcon/>
                                        Welcome to SnX!
                                    </RouteTitle>
                                    <RouteDescription>
                                        Explore a world of personalized fashion and design your unique outfits with SnX.
                                    </RouteDescription>
                                    <RouteDescription>
                                        {
                                            findingUser ? "Fetching Profile..." : "Account not found. Please sign up to get started."
                                        }
                                    </RouteDescription>
                                    {
                                        findingUser ? <></> :
                                            <>
                                                <RouteButtons>
                                                    <RouteButton onClick={handleLogin}>
                                                        <FaDoorOpen/>
                                                        Login Now
                                                    </RouteButton>
                                                    <RouteButton onClick={handleSignUp}>
                                                        <FaCircleUser/>
                                                        Sign Up
                                                    </RouteButton>
                                                </RouteButtons>
                                            </>
                                    }
                                </RouteAuthContainer>
                            </>
                        )}
                    </SecondaryBanner>
                </AccountContainer>
            </PageContainer>
            <Toast ref={toastRef}/>
        </>
    );
}

function ShirtIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path
                d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>
        </svg>
    )
}
