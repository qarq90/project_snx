import {SCardImage, STrendingCard} from "@/styles/styledTrending";

export default function TrendingCard({img, title, artist, description, type}) {
    return (
        <>
            <STrendingCard>
                <SCardImage src={img}/>
                <h3>{title}</h3>
                <h4>{artist}</h4>
                <p>{description}</p>
            </STrendingCard>
        </>
    )
}
