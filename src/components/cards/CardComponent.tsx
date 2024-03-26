import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { ProductType } from "@/types/product";

export default function CardComponent({
	title,
	thumbnail,
	price,
	discountPercentage,
}: ProductType) {
	return (
		<Card className="py-4 w-auto">
			<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
				{/* <p className="text-tiny uppercase font-bold">Daily Mix</p> */}
				<small className="text-default-500">12 Tracks</small>
				<h4 className="font-bold text-large">{title}</h4>
			</CardHeader>
			<CardBody className="overflow-visible py-2">
				<Image
					alt="Card background"
					className="object-cover rounded-xl"
					src={thumbnail}
					width={270}
				/>
				<h4 className="font-bold text-large text-red-500 text-center">
					${price}
				</h4>
				<h4 className="font-bold text-large text-green-500 text-center">
					Discount : {discountPercentage} %
				</h4>
			</CardBody>
		</Card>
	);
}
