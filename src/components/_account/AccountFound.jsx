import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {FaDoorOpen} from 'react-icons/fa';
import {RouteAuthContainer, RouteButton, RouteButtons, RouteDescription, RouteTitle} from '@/styles/styledRoute';
import {FaCircleUser} from "react-icons/fa6";

export const AccountFound = () => {

    const router = useRouter();

    const [findingUser, setFindingUser] = useState(true);
    const [accountFound, setAccountFound] = useState(false);

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
        router.push('/auth').then(r => console.log("R: ", r));
    };

    const handleSignUp = () => {
        router.push('/auth').then(r => console.log("R: ", r));
    };

    return (
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
            </RouteAuthContainer>
        </>
    )
};

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