import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { UserType } from "@/types/user";

export default function UserCardComponent({ firstName, image }: UserType) {
	return (
		<Card className="py-4 w-auto">
			<CardHeader className="pb-0 pt-2 px-4 flex-col items-start justify-center">
				<h4 className="font-bold text-large text-center">
					{firstName}
				</h4>
			</CardHeader>
			<CardBody className="overflow-visible py-2">
				<Image
					alt="Card background"
					className="object-cover rounded-xl"
					src={image}
					width={270}
				/>
			</CardBody>
		</Card>
	);
}
