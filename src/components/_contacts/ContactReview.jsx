import {ContactButton, ContactInputContainer, ContactReviewInput, StyledContactSection} from "@/styles/styledContacts";
import {FaShareAlt} from "react-icons/fa";
import {useRef} from "react";
import {Toast} from "primereact/toast";
import {showToast} from "@/lib/helper";
import {fadeLeft, scaleUp} from "@/styles/styledAnimations";
import HeaderTitle from "@/components/HeaderTitle";
import HeaderSub from "@/components/HeaderSub";

export default function ContactReview() {
    const emailRegex = /^[a-zA-Z0-9_+.]+@[a-zA-Z]+\.+[a-z]{2,}$/;

    const toastRef = useRef(null);

    const fNameRef = useRef(null);
    const lNameRef = useRef(null);
    const emailRef = useRef(null);
    const userRef = useRef(null);

    const sendFeedback = async () => {
        const fNameValue = fNameRef.current.value.trim();
        const lNameValue = lNameRef.current.value.trim();
        const emailValue = emailRef.current.value.trim();
        const feedbackValue = userRef.current.value.trim();

        if (!fNameValue || !lNameValue || !emailValue || !feedbackValue) {
            showToast("error", "Empty Fields", "Feedback Fields cannot be empty.", toastRef);
            return;
        }

        const isEmailValid = emailRegex.test(emailValue);
        if (!isEmailValid) {
            showToast("error", "Email Error", "Invalid Email Format", toastRef);
            return;
        }

        const requestData = {
            firstName: fNameValue,
            lastName: lNameValue,
            email: emailValue,
            feedback: feedbackValue
        };

        try {
            const response = await fetch(`/api/post/send-feedback`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({savedFeedback: requestData})
            });

            if (response.ok) {
                showToast("success", "Feedback Sent", "Thank you for your feedback!", toastRef);
                fNameRef.current.value = "";
                lNameRef.current.value = "";
                emailRef.current.value = "";
                userRef.current.value = "";
            } else {
                showToast("error", "Feedback Error", "Failed to send feedback. Please try again later.", toastRef);
            }
        } catch (error) {
            console.error("Error sending feedback:", error);
            showToast("error", "Feedback Error", "Failed to send feedback. Please try again later.", toastRef);
        }
    };

    function resetHandler() {
        fNameRef.current.value = "";
        lNameRef.current.value = "";
        emailRef.current.value = "";
        userRef.current.value = "";
    }


    return (<>
        <StyledContactSection>
            <HeaderTitle
                icon={<FaShareAlt/>}
                content={"Share Feedback"}
            />
            <ContactInputContainer
                variants={fadeLeft}
                initial="initial"
                animate="show"
            >
                <HeaderSub
                    variants={fadeLeft}
                    content={"First Name"}
                />
                <HeaderSub
                    className="l-name"
                    variants={fadeLeft}
                    content={"Last Name:"}
                />
            </ContactInputContainer>
            <ContactInputContainer
                variants={scaleUp}
                initial="initial"
                animate="show"
            >
                <ContactReviewInput
                    variants={scaleUp}
                    autoSize={false}
                    rows={1}
                    required={true}
                    ref={fNameRef}
                />
                <ContactReviewInput
                    variants={scaleUp}
                    autoSize={false}
                    rows={1}
                    required={true}
                    ref={lNameRef}
                />
            </ContactInputContainer>
            <ContactInputContainer
                variants={fadeLeft}
                initial="initial"
                animate="show"
            >
                <HeaderSub
                    variants={fadeLeft}
                    content={"Email:"}
                />
            </ContactInputContainer>
            <ContactInputContainer
                variants={scaleUp}
                initial="initial"
                animate="show"
            >
                <ContactReviewInput
                    id="big-input"
                    rows={1}
                    autoSize={false}
                    required={true}
                    ref={emailRef}/>
            </ContactInputContainer>
            <ContactInputContainer
                variants={scaleUp}
                initial="initial"
                animate="show"
            >
                <HeaderSub
                    variants={fadeLeft}
                    content={"Feedback:"}
                />
            </ContactInputContainer>
            <ContactInputContainer
                variants={scaleUp}
                initial="initial"
                animate="show"
            >
                <ContactReviewInput
                    id="big-input"
                    className="feedback-input"
                    autoSize={false}
                    required={true}
                    ref={userRef}/>
            </ContactInputContainer>
            <ContactButton
                variants={scaleUp}
                initial="initial"
                animate="show"
                onClick={sendFeedback}
            >
                Submit Feedback
            </ContactButton>
            <ContactButton
                variants={scaleUp}
                initial="initial"
                animate="show"
                onClick={resetHandler}
            >
                Reset
            </ContactButton>
            <Toast ref={toastRef}/>
        </StyledContactSection>
    </>)
}