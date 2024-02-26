import {FaShirt} from "react-icons/fa6";
import React from "react";
import {PiPantsFill, PiSneakerFill} from "react-icons/pi";
import {FaAccessibleIcon, FaCheckDouble, FaFire} from "react-icons/fa";

export const works = [
    {
        icon: <UserIcon className="h-12 w-12 mb-4 text-gray-900 dark:text-gray-50"/>,
        title: "Choose Your Style",
        description: "Select from a variety of styles to start your customization process."
    },
    {
        icon: <PaletteIcon className="h-12 w-12 mb-4 text-gray-900 dark:text-gray-50"/>,
        title: "Pick Your Colors",
        description: "Choose your favorite colors for each part of your outfit."
    },
    {
        icon: <TagIcon className="h-12 w-12 mb-4 text-gray-900 dark:text-gray-50"/>,
        title: "Select Your Fabrics",
        description: "Pick the fabrics that suit your comfort and style."
    },
    {
        icon: <FaFire className="h-12 w-12 mb-4 text-gray-900 dark:text-gray-50"/>,
        title: "Discover New Trends",
        description: "Stay up-to-date with the latest fashion trends and styles."
    },
    {
        icon: <FaAccessibleIcon className="h-12 w-12 mb-4 text-gray-900 dark:text-gray-50"/>,
        title: "User-Friendly Interface",
        description: "Enjoy a seamless and intuitive interface for easy customization."
    },
    {
        icon: <FaCheckDouble className="h-12 w-12 mb-4 text-gray-900 dark:text-gray-50"/>,
        title: "Review Your Order",
        description: "Take a final look at your custom outfit before placing your order."
    },
];

export const catogories = [
    {
        id: 1,
        icon: <FaShirt/>,
        path: "/create/new/shirt",
    },
    {
        id: 2,
        icon: <PiPantsFill/>,
        path: "/create/new/pant",
    },
    {
        id: 3,
        icon: <PiSneakerFill/>,
        path: "/create/new/shoes",
    },
]

export const userReviews = [
    {
        name: 'Jon Doe',
        text: 'Designing custom clothes has never been easier!'
    },
    {
        name: 'Mark Smith',
        text: 'The customizer is so easy to use. I love it!'
    },
    {
        name: 'Jane Doe',
        text: 'Customizing clothes has never been more fun and easy!'
    },
    {
        name: 'Sarah Johnson',
        text: 'I love how easy it is to use the customizer. It just takes a few minutes!'
    },
    {
        name: 'Mike Williams',
        text: 'I have been using the customizer for a while now and it has been a game changer.'
    },
    {
        name: 'Emily Davis',
        text: 'The design of the customizer is so beautiful. I love it!'
    },
];

function PaletteIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="13.5" cy="6.5" r=".5"/>
            <circle cx="17.5" cy="10.5" r=".5"/>
            <circle cx="8.5" cy="7.5" r=".5"/>
            <circle cx="6.5" cy="12.5" r=".5"/>
            <path
                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
        </svg>
    )
}

function TagIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/>
            <path d="M7 7h.01"/>
        </svg>
    )
}

function UserIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
        </svg>
    )
}

function InspirationIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 mb-4 text-gray-900 dark:text-gray-50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 2v6l-3-3m6 0l-3 3m0 8v6l-3-3m6 0l-3 3"/>
        </svg>
    )

}
