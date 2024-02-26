import {FaDoorOpen, FaHome, FaPlus, FaUserEdit} from "react-icons/fa";
import {BiSolidMessage} from "react-icons/bi";
import React from "react";

export const NavLinksTop = [
    {
        icon: <ShirtIcon/>,
        title: "SnX",
        path: "/",
    },
];

export const NavLinksTopMiddle = [
    {
        icon: <FaHome/>,
        title: "Home",
        path: "/",
        id: "home-link"
    },
    {
        icon: <FaPlus/>,
        title: "Create",
        path: "/create",
        id: "create-link"
    },
    {
        icon: <BiSolidMessage/>,
        title: "Contact",
        path: "/contact",
        id: "contact-link"
    }
];

export const NavLinksBottom = [
    {
        icon: <FaUserEdit/>,
        title: "Account",
        // path: "/account",
    },
];

export default function ShirtIcon(props) {
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