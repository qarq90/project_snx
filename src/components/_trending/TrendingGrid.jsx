import TrendingCard from "@/components/_trending/TrendingCard";
import HeaderType from "@/components/_trending/HeaderType";
import {FaShirt} from "react-icons/fa6";
import {PiPantsFill, PiSneakerFill} from "react-icons/pi";
import {Carousel} from "primereact/carousel";
import {STrendingContainer} from "@/styles/styledTrending";

function CarouselCard(props) {
    return (
        <>
            <TrendingCard
                img={props.img}
                title={props.title}
                artist={props.artist}
                description={props.description}
                type={props.type}
            />
        </>
    )
}

export default function TrendingGrid() {
    const trendingCardsTshirt = [
        {
            img: "/images/shirt.png",
            title: "Model Title",
            artist: "Artist Name",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.",
            type: "Model Type",
        },
        {
            img: "/images/shirt.png",
            title: "Model Title",
            artist: "Artist Name",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.",
            type: "Model Type",
        },
        {
            img: "/images/shirt.png",
            title: "Model Title",
            artist: "Artist Name",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.",
            type: "Model Type",
        },
        {
            img: "/images/shirt.png",
            title: "Model Title",
            artist: "Artist Name",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.",
            type: "Model Type",
        },
        {
            img: "/images/shirt.png",
            title: "Model Title",
            artist: "Artist Name",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.",
            type: "Model Type",
        },
        {
            img: "/images/shirt.png",
            title: "Model Title",
            artist: "Artist Name",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.",
            type: "Model Type",
        },
        {
            img: "/images/shirt.png",
            title: "Model Title",
            artist: "Artist Name",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.",
            type: "Model Type",
        },
        {
            img: "/images/shirt.png",
            title: "Model Title",
            artist: "Artist Name",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.",
            type: "Model Type",
        },
        {
            img: "/images/shirt.png",
            title: "Model Title",
            artist: "Artist Name",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.",
            type: "Model Type",
        },
    ];
    const trendingCardsShoes = [
        {
            img: "/images/shoes.png",
            title: "Model Title",
            artist: "Artist Name",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.",
            type: "Model Type",
        },
        {
            img: "/images/shoes.png",
            title: "Model Title",
            artist: "Artist Name",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.",
            type: "Model Type",
        },
        {
            img: "/images/shoes.png",
            title: "Model Title",
            artist: "Artist Name",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.",
            type: "Model Type",
        },
        {
            img: "/images/shoes.png",
            title: "Model Title",
            artist: "Artist Name",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.",
            type: "Model Type",
        },
        {
            img: "/images/shoes.png",
            title: "Model Title",
            artist: "Artist Name",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.",
            type: "Model Type",
        },
        {
            img: "/images/shoes.png",
            title: "Model Title",
            artist: "Artist Name",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.",
            type: "Model Type",
        },
        {
            img: "/images/shoes.png",
            title: "Model Title",
            artist: "Artist Name",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.",
            type: "Model Type",
        },
        {
            img: "/images/shoes.png",
            title: "Model Title",
            artist: "Artist Name",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.",
            type: "Model Type",
        },
        {
            img: "/images/shoes.png",
            title: "Model Title",
            artist: "Artist Name",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.",
            type: "Model Type",
        },
    ];
    const trendingCardsPant = [
        {
            img: "/images/pant.png",
            title: "Model Title",
            artist: "Artist Name",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.",
            type: "Model Type",
        },
        {
            img: "/images/pant.png",
            title: "Model Title",
            artist: "Artist Name",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.",
            type: "Model Type",
        },
        {
            img: "/images/pant.png",
            title: "Model Title",
            artist: "Artist Name",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.",
            type: "Model Type",
        },
        {
            img: "/images/pant.png",
            title: "Model Title",
            artist: "Artist Name",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.",
            type: "Model Type",
        },
        {
            img: "/images/pant.png",
            title: "Model Title",
            artist: "Artist Name",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.",
            type: "Model Type",
        },
        {
            img: "/images/pant.png",
            title: "Model Title",
            artist: "Artist Name",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.",
            type: "Model Type",
        },
        {
            img: "/images/pant.png",
            title: "Model Title",
            artist: "Artist Name",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.",
            type: "Model Type",
        },
        {
            img: "/images/pant.png",
            title: "Model Title",
            artist: "Artist Name",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.",
            type: "Model Type",
        },
        {
            img: "/images/pant.png",
            title: "Model Title",
            artist: "Artist Name",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.",
            type: "Model Type",
        },
    ];

    return (
        <>
            <HeaderType content={"Hot Shirts"} icon={<FaShirt/>}/>
            <STrendingContainer>
                <Carousel value={trendingCardsTshirt} numVisible={3} numScroll={2} itemTemplate={CarouselCard}/>
            </STrendingContainer>
            <HeaderType content={"Styled Pants"} icon={<PiPantsFill/>}/>
            <STrendingContainer>
                <Carousel value={trendingCardsPant} numVisible={3} numScroll={2} itemTemplate={CarouselCard}/>
            </STrendingContainer>
            <HeaderType content={"Top Shoes"} icon={<PiSneakerFill/>}/>
            <STrendingContainer>
                <Carousel value={trendingCardsShoes} numVisible={3} numScroll={2} itemTemplate={CarouselCard}/>
            </STrendingContainer>
        </>
    )
}

