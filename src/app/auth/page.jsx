"use client"

import React, {useRef} from "react";
import {Tab, Tabs} from "@nextui-org/react";
import {LoginFormDiv, LoginModelDiv, LoginPageDiv, LoginProjectName} from "@/styles/styledAuth";
import AuthSignUp from "@/app/auth/AuthSignUp";
import AuthLogin from "@/app/auth/AuthLogin";
import {Toast} from "primereact/toast";
import {FaShirt} from "react-icons/fa6";
import './auth.css'

export default function Page() {
    const loginEmailRef = useRef(null);
    const loginPasswordRef = useRef(null);

    const signEmailRef = useRef(null);
    const signPasswordRef = useRef(null);
    const signNameRef = useRef(null);
    const signPhoneRef = useRef(null);

    const toastRef = useRef(null);

    return (
        <>
            <LoginPageDiv>
                <AuthBackground/>
                <LoginModelDiv>
                    <LoginFormDiv id="formDiv">
                        <LoginProjectName>
                            <FaShirt/>
                            <span>
                                SnX
                            </span>
                        </LoginProjectName>
                        <Tabs
                            variant="bordered"
                            color="danger"
                            className="myTabs"
                        >
                            <Tab title="Login">
                                <AuthLogin
                                    loginEmailRef={loginEmailRef}
                                    loginPasswordRef={loginPasswordRef}
                                    toastRef={toastRef}
                                />
                            </Tab>
                            <Tab title="Sign Up">
                                <AuthSignUp
                                    signEmailRef={signEmailRef}
                                    signPasswordRef={signPasswordRef}
                                    signNameRef={signNameRef}
                                    signPhoneRef={signPhoneRef}
                                    toastRef={toastRef}
                                />
                            </Tab>
                        </Tabs>
                    </LoginFormDiv>
                </LoginModelDiv>
            </LoginPageDiv>
            <Toast ref={toastRef}/>
        </>
    );
}

function AuthBackground() {
    return (
        <>
            <div id="auth-doodle"></div>
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
        </>
    )
}