import LoadingComponent from "@/app/loading";
import CardComponent from "@/components/cards/CardComponent";
import React, { Suspense, useEffect } from "react";

export type ParamProps = {
	params: {
		id: number;
	};
};

async function fetchProduct(API_URL: string) {
	const product = await fetch(API_URL, {
		cache: "no-store",
	});
	return await product.json();
}

export default async function Page({ params }: ParamProps) {
	const API_URL = `https://dummyjson.com/products/${params.id}`;
	const product = await fetchProduct(API_URL);
	return (
		<div className="mt-10 flex justify-center flex-wrap gap-5">
			<Suspense fallback={<LoadingComponent />}>
				<div key={product.id}>
        <CardComponent
									thumbnail={product.thumbnail}
									title={product.title}
									price={product.price}
									discountPercentage={product.discountPercentage}
								/>
				</div>
			</Suspense>
		</div>
	);
}
