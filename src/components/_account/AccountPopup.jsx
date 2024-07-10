"use client";

import {
    AccountContainer,
    AccountPop,
    SecondaryBanner,
    StyledTopBanner,
    StyledUserAvatar,
} from "@/styles/styledAccount";
import React, {useEffect, useRef} from "react";
import {AccountMicroBanners} from "@/components/_account/AccountMicroBanners";
import Head from "next/head";
import {metadataAccount} from "@/lib/metadata";
import {useRouter} from "next/navigation";
import {FaTrashCan} from "react-icons/fa6";
import {FaDoorOpen} from "react-icons/fa";
import {motion} from "framer-motion";
import {fadeDown, fadeLeft, fadeLeftToRight, fadeRight} from "@/styles/styledAnimations";
import useMobileDetect from "@/components/UseMobileDetect";
import useAppStore from "@/states/appState";

export default function AccountPopup({setProfile}) {
    const router = useRouter();
    const {user} = useAppStore();
    const {isMobile} = useMobileDetect();

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

            const res = await fetch("/api/post/user/delete", options);
            const data = await res.json();

            // router.push("/auth");
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    }

    const wrapperRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setProfile(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setProfile]);

    return (
        <>
            <AccountPop ref={wrapperRef}
                        variants={isMobile() ? fadeLeftToRight : fadeRight}
                        initial="initial"
                        animate="show"
                        exit="exit"
            >
                <AccountContainer>
                    <StyledTopBanner>
                        <StyledUserAvatar>
                            {user.username.charAt(0).toUpperCase() + user.username.charAt(1).toUpperCase()}
                        </StyledUserAvatar>
                        <motion.div
                        >
                            <motion.h1
                            >{user.username}</motion.h1>
                            <motion.button onClick={deleteUser}><FaTrashCan/>Delete</motion.button>
                            <button onClick={() => router.replace("/api/post/user/logout")}><FaDoorOpen/>Logout</button>
                        </motion.div>
                    </StyledTopBanner>
                    <SecondaryBanner>
                        <AccountMicroBanners
                            user={user}
                        />
                    </SecondaryBanner>
                </AccountContainer>
            </AccountPop>
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
