import {AccountDataField, MicroBanner, MicroBannerA} from "@/styles/styledAccount";
import TextHead from "@/components/TextHead";
import React from "react";
import {motion} from "framer-motion";

export const AccountMicroBanners = ({user}) => {
    const microBannersData = [
        {key: "username", label: "Username", id: "username_text"},
        {key: "email", label: "Email ID", id: "email_text"},
        {key: "password", label: "Password", id: "password_text"},
        {key: "phone", label: "Mobile No", id: "phone_text"}];


    return (<motion.div>
        {microBannersData.map((item, index) => (
            <MicroBanner key={index}>
                <MicroBannerA id={item.id}>
                    <TextHead content={`${item.label}`} className="textHead"/>
                    <AccountDataField
                        type={item.label === "Password" ? "password" : "text"}
                        value={user[item.key]}
                    />
                </MicroBannerA> <>
            </>
            </MicroBanner>
        ))}
    </motion.div>);
};
