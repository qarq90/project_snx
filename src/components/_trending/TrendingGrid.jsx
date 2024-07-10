import {FaShirt} from "react-icons/fa6";
import {PiBaseballCap, PiPantsFill, PiSneakerFill} from "react-icons/pi";
import TrendingSection from "@/components/_trending/TrendingSection";
import {trendingCardsCaps, trendingCardsPant, trendingCardsShoes, trendingCardsTshirt} from "@/lib/objTrending";

export default function TrendingGrid() {

	return (
		<>
			<TrendingSection modelType="shirt" headerContent="Hot Shirts" headerIcon={<FaShirt/>} carouselData={trendingCardsTshirt}/>
			{/*<TrendingSection modelType="shirt" headerContent="Styled Pants" headerIcon={<PiPantsFill/>} carouselData={trendingCardsPant}/>*/}
			<TrendingSection modelType="shoes" headerContent="Top Shoes" headerIcon={<PiSneakerFill/>} carouselData={trendingCardsShoes}/>
			<TrendingSection modelType="cap" headerContent="Trendy Caps" headerIcon={<PiBaseballCap/>}
			                 carouselData={trendingCardsCaps}/>
		</>
	)
}
