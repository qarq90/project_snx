import {FaShirt} from "react-icons/fa6";
import {PiBaseballCap, PiPantsFill, PiSneakerFill} from "react-icons/pi";
import {BiSolidColor} from "react-icons/bi";
import {IoImageSharp} from "react-icons/io5";

export const CreateOptions = [
    {
        icon: <FaShirt/>,
        title: "Shirt",
        path: "/create/new/shirt",
        id: "shirt-button"
    },
    {
        icon: <PiSneakerFill/>,
        title: "Shoes",
        path: "/create/new/shoes",
        id: "shoes-button",
    },
    {
        icon: <PiPantsFill/>,
        title: "Pant",
        path: "/create/new/pant",
        id: "pant-button"
    },
    {
        icon: <PiBaseballCap/>,
        title: "Cap",
        path: "/create/new/cap",
        id: "cap-button"
    }
];

export const bgData = [
    {
        name: "bg_color",
        thumb: "/thumbs/bg_color.png",
        icon: <BiSolidColor/>,
        modes: { photo: true, video: true }
    },
    {
        name: "bg_image",
        thumb: "/thumbs/bg_image.png",
        icon: <IoImageSharp />,
        modes: { photo: true, video: true }
    }
]
