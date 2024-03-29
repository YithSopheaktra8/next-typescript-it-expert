import UserTable from "@/components/table/UserTable";
import React from "react";

const page = () => {
	return (
		<div className="grid place-content-center w-screen fixed mt-[50px]">
			<h2 className="text-3xl text-center font-bold">User Data</h2>
			<UserTable />
		</div>
	);
};

export default page;
