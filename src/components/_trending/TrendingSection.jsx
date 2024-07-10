"use client"

import React, { useEffect, useState } from 'react';
import { Carousel } from 'primereact/carousel';
import { STrendingContainer } from "@/styles/styledTrending";
import { fadeLeft } from "@/styles/styledAnimations";
import HeaderType from "@/components/_trending/HeaderType";
import TrendingCard from "@/components/_trending/TrendingCard";
import { useMediaQuery } from "react-responsive";

const responsiveOptions = [
	{
		breakpoint: '1024px',
		numVisible: 3,
		numScroll: 3
	},
	{
		breakpoint: '768px',
		numVisible: 2,
		numScroll: 2
	},
	{
		breakpoint: '560px',
		numVisible: 1,
		numScroll: 1
	}
];

function carouselCard(model) {
	return (
		<TrendingCard
			img={model.snapshot}
			title={model.name}
			artist={model.email}
			description={model.desc}
			type={model.modelType}
		/>
	);
}

function TrendingSection({ headerContent, headerIcon, carouselData, modelType }) {
	const isMobile = useMediaQuery({ maxWidth: 768 });

	const [models, setModels] = useState([]);

	useEffect(() => {
		const fetchModels = async () => {
			const request = {
				modelType: modelType,
			};

			try {
				const response = await fetch(`/api/post/trending`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(request),
				});

				const data = await response.json();

				if (data.status) {
					setModels(data.result);
					console.log(data);
				} else {
					alert("Failed to fetch the Models");
				}
			} catch (error) {
				console.log(error);
			}
		};

		fetchModels();
	}, [modelType]);

	return (
		<>
			<HeaderType content={headerContent} icon={headerIcon} variants={fadeLeft} initial="initial" animate="show" />
			<STrendingContainer variants={fadeLeft} initial="initial" animate="show">
				<Carousel
					circular
					autoplayInterval={2000}
					numVisible={isMobile ? 1 : 3}
					value={models.length === 0 ? carouselData : models}
					numScroll={1}
					itemTemplate={carouselCard}
					responsiveOptions={responsiveOptions}
				/>
			</STrendingContainer>
		</>
	);
}

export default TrendingSection;
