import React from 'react';
import {InputField, SubDiv, SubDivInput} from "@/styles/styledAuth";
import {MdEmail, MdKey, MdOutlinePersonOutline, MdOutlinePhone} from "react-icons/md";
import {FaRightLong} from "react-icons/fa6";
import {Button} from "@nextui-org/react";
import {useRouter} from "next/navigation";
import {showToast} from "@/lib/helper";
import {styled} from "styled-components";
import useAppStore from "@/states/appState";

export default function AuthSignUp({signEmailRef, signPasswordRef, signNameRef, signPhoneRef, toastRef}) {

    const router = useRouter();
    const {user, setUser} = useAppStore();

    const submitSignUp = async () => {

        const emailValue = signEmailRef.current.value.trim();
        const passwordValue = signPasswordRef.current.value.trim();
        const nameValue = signNameRef.current.value.trim();
        const phoneValue = signPhoneRef.current.value.trim();

        if (!emailValue || !passwordValue || !nameValue || !phoneValue) {
            showToast("error", "Empty Fields", "Input Fields cannot be empty.", toastRef);
            console.log("Sign-up details: Empty Fields...");
            return;
        }

        const emailRegex = /^[a-zA-Z0-9_+.]+@[a-zA-Z]+\.[a-z]{2,}$/;
        const phoneNumberRegex = /^\d{10}$/;

        const isEmailValid = emailRegex.test(emailValue);
        const isPhoneNumberValid = phoneNumberRegex.test(phoneValue);

        if (isEmailValid && isPhoneNumberValid) {
            const signUpData = {
                signupEmail: emailValue,
                signupPassword: passwordValue,
                signupUsername: nameValue,
                signupPhone: phoneValue,
            };

            console.log(signUpData)

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    signUpUserDetails: signUpData
                })
            };

            let response = await fetch(`/api/post/user/signup/verify`, options);
            const verify = await response.json();
            if (!verify.found) {
                response = await fetch(`/api/post/user/signup/`, options);
                const data = await response.json();
                console.log("User Created Successfully...");
                setUser(data.user);
                localStorage.setItem("user", data.user.email);
                showToast("success", "Account Created", "New User Created Successfully", toastRef);
                router.replace('/');
            } else if (verify.found) {
                showToast("error", "SignUp Failed", "Email already exists", toastRef, 1000000);
                console.log("Login Failed...")
            }
        } else {
            showToast("error", "Invalid Input", "Invalid Email or Phone Number", toastRef);
            console.log("Invalid Email or Phone Number");
        }
    };


    return (
        <SubDiv>
            <SubDivInput>
                <MdEmail className="mr-5 shadow-md" size={30} color={"var(--primary-theme-color)"}/>
                <InputField className="w-10/12" type="email" label="Email" placeholder={"Type Email here.."}
                            ref={signEmailRef}/>
            </SubDivInput>
            <SubDivInput>
                <MdKey className="mr-5" size={30} color={"var(--primary-theme-color)"}/>
                <InputField className="w-10/12" type="password" label="Password"
                            placeholder={"Type Password here.."}
                            ref={signPasswordRef}/>
            </SubDivInput>
            <SubDivInput>
                <MdOutlinePersonOutline className="mr-5" size={30} color={"var(--primary-theme-color)"}/>
                <InputField className="w-10/12" type="text" label="Username"
                            placeholder={"Type Username here.."}
                            ref={signNameRef}/>
            </SubDivInput>
            <SubDivInput>
                <MdOutlinePhone className="mr-5" size={30} color={"var(--primary-theme-color)"}/>
                <InputField className="w-10/12" type="tel" label="Phone Number"
                            placeholder={"Type Phone Number here.."}
                            ref={signPhoneRef}/>
            </SubDivInput>
            <Button onClick={submitSignUp}>
                <FaRightLong size={30} color={"var(--primary-theme-color)"}/>
            </Button>
        </SubDiv>
    );
}
//
// function UserImage() {
//     return (
//         <PFPContainer>
//             <img src="../../../public/images/icons/defaultPFP.jpg" alt=""/>
//             <input type="file"/>
//         </PFPContainer>
//     );
// }

const PFPContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;

  > img {
    width: auto;
    height: auto;
    border-radius: 100%;
    border: 2px solid #008080;
  }

  > input {
    width: 100%;
    margin-left: 3.5rem;
    padding: 1rem;
    border-radius: 0;
    background-color: var(--primary-comp-bg);
    box-shadow: 3px 3px var(--primary-theme-color);
  }
`;
