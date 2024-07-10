"use client"

import React, {useEffect} from 'react'
import {usePathname} from "next/navigation";
import Footer from "@/components/_ui/Footer";
import {NextUIProvider} from "@nextui-org/react";
import useAppStore from "@/states/appState";
import Sidebar from "@/components/_ui/Sidebar";
import useMobileDetect from "@/components/UseMobileDetect";
import MobileNavBar from "@/components/_ui/MobileNavBar";

const IsNavFooter = ({children}) => {
	const pathname = usePathname();
	const isLoginPage = pathname.includes("/auth");
	const isCreatePage = pathname.includes("/create")

	const {isMobile} = useMobileDetect()
	const {setUser} = useAppStore();

	useEffect(() => {
		if (!isLoginPage && !isCreatePage) {
			fetch('/api/get/user/profile', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({email: localStorage.getItem("user")})
			})
				.then(res => res.json())
				.then(data => {
					setUser(data.currentUser)
				})
		}
	}, []);


	return (
		<>
			{!isLoginPage && <Sidebar/>}
			{(isMobile() && !isLoginPage) && <MobileNavBar/>}
			<NextUIProvider>
				{children}
				{!isLoginPage && !isCreatePage && <Footer/>}
			</NextUIProvider>
		</>
	)
}
export default IsNavFooter
