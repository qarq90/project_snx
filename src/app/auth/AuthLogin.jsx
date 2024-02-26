import {useRouter} from "next/navigation";
import {InputField, SubDiv, SubDivInput} from "@/styles/styledAuth";
import {MdEmail, MdKey} from "react-icons/md";
import {Button} from "@nextui-org/react";
import {FaRightLong} from "react-icons/fa6";
import React, {useEffect} from "react";
import {showToast} from "@/lib/helper";
import useAppStore from "@/states/appState";


export default function AuthLogin({loginEmailRef, loginPasswordRef, toastRef}) {

    const {user, setUser} = useAppStore();

    const emailRegex = /^[a-zA-Z0-9_+.]+@[a-zA-Z]+\.+[a-z]{2,}$/;

    const router = useRouter();

    const submitLogin = async () => {

        if (loginEmailRef.current === null || loginPasswordRef.current === null) {
            showToast("error", "Empty Fields", "Input Fields cannot be empty.", toastRef);
            console.log("Login refs not yet initialized");
            return;
        }

        if (loginEmailRef.current.value === '' || loginPasswordRef.current.value === '') {

            showToast("error", "Empty Fields", "Input Fields cannot be empty.", toastRef);
            console.log("Login details: Empty Fields...");

        } else {

            const isEmailValid = emailRegex.test(loginEmailRef.current.value);

            if (isEmailValid) {

                console.log("Login Email: " + loginEmailRef.current.value);
                console.log("Login Password: " + loginPasswordRef.current.value);

                const options = {
                    method: "POST",
                    body: JSON.stringify({
                        user_email: loginEmailRef.current.value,
                        user_password: loginPasswordRef.current.value,
                    }),
                };

                const result = await fetch("/api/post/user/login", options);
                const data = await result.json();
                if (data.found) {
                    console.log("User Logged-in Successfully...");
                    setUser(data._doc);
                    localStorage.setItem("user", data._doc.email);
                    showToast("success", "Login Successful", "Logged-in Successfully", toastRef);
                    router.replace('/');
                } else {
                    showToast("error", "Login Failed", "Incorrect Email or Password", toastRef);
                    console.log("Login Failed...")
                }
            } else {
                console.log("Invalid Email...");
                showToast("error", "Email Error", "Invalid Email Format", toastRef);
            }
        }
    }

    useEffect(() => {
        console.log("USER", user);
    }, [user]);

    return (
        <SubDiv>
            <SubDivInput>
                <MdEmail className="mr-5" size={30} color={"var(--primary-theme-color)"}/>
                <InputField className="w-10/12" type="email" label="Email" placeholder={"Type Email here.."}
                            ref={loginEmailRef}/>
            </SubDivInput>
            <SubDivInput>
                <MdKey className="mr-5" size={30} color={"var(--primary-theme-color)"}/>
                <InputField className="w-10/12" type="password" label="Password" placeholder={"Type Password here.."}
                            ref={loginPasswordRef}/>
            </SubDivInput>
            <Button onClick={submitLogin}>
                <FaRightLong size={30} color={"var(--primary-theme-color)"}/>
            </Button>
        </SubDiv>
    );
}