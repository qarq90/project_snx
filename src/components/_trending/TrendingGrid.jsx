import {FaShirt} from "react-icons/fa6";
import {PiBaseballCap, PiPantsFill, PiSneakerFill} from "react-icons/pi";
import TrendingSection from "@/components/_trending/TrendingSection";
import {trendingCardsCaps, trendingCardsPant, trendingCardsShoes, trendingCardsTshirt} from "@/lib/objTrending";

export default function TrendingGrid() {

	return (
		<>
			<TrendingSection headerContent="Hot Shirts" headerIcon={<FaShirt/>} carouselData={trendingCardsTshirt}/>
			<TrendingSection headerContent="Styled Pants" headerIcon={<PiPantsFill/>} carouselData={trendingCardsPant}/>
			<TrendingSection headerContent="Top Shoes" headerIcon={<PiSneakerFill/>} carouselData={trendingCardsShoes}/>
			<TrendingSection headerContent="Trendy Caps" headerIcon={<PiBaseballCap/>}
			                 carouselData={trendingCardsCaps}/>
		</>
	)
}
