import CardComponent from "@/components/cards/CardComponent";
import { UserType } from "@/types/user";
import { Suspense } from "react";
import LoadingComponent from "./loading";
import UserCardComponent from "@/components/cards/UserCardComponent";

async function fetchUser() {
	const user = await fetch("https://dummyjson.com/users?limit=10", {
		// cache: "no-store", // (it will not cache the data)
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
		next: {
			revalidate: 30, // (30 second it will fetch the data again from the server)
		},
	});
	const res = await user.json();
	return res.users;
}

export default async function Home() {
	const user = await fetchUser();
	return (
		<>
			<div className="text-center mt-5">
				<h1 className="text-3xl font-bold">This is poppin font</h1>
				<h1 className="text-3xl font-bold">
					នេះគឺជាការប្រើប្រាស់ font នៅក្នុង nextJs
				</h1>
			</div>
			<div className="mt-10 flex justify-center flex-wrap gap-5">
				<Suspense fallback={<LoadingComponent />}>
					{user?.map((user: UserType) => (
						<UserCardComponent
							image={user.image}
							firstName={user.firstName}
							key={user.id}
						/>
					))}
				</Suspense>
			</div>
		</>
	);
}
