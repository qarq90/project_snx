import {AnimatePresence, motion} from "framer-motion";
import {styled} from "styled-components";
import React, {useEffect} from "react";
import ShirtIcon from "@/lib/objNav";
import {FaUserEdit} from "react-icons/fa";
import {MobileSidebar} from "@/components/_ui/MobileSidebar";
import {usePathname, useRouter} from "next/navigation";
import AccountPopup from "@/components/_account/AccountPopup";
import useAppStore from "@/states/appState";
import {showToast} from "@/lib/helper";

export default function MobileNavBar() {
    const router = useRouter();
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    const [profile, setProfile] = React.useState(false);
    const pathname = usePathname()
    const {setUser} = useAppStore();

    const fetchUserData = async () => {
        try {
            const email = document.cookie.split(';')[0].split('=')[1]
            if (email === "false") {
                throw new Error("User not found");
            }

            const options = {
                method: "POST",
                body: JSON.stringify({
                    email: email
                }),
                headers: {
                    "Content-Type": "application/json",
                }
            };

            const res = await fetch("/api/get/user/profile", options);
            const data = await res.json();
            if (!data || data.length === 0) {
                return;
            }

            setUser(data.currentUser)
        } catch (error) {
            router.push("/auth");
            console.error("Error fetching user data:", error);
            showToast("error", "Error", "Failed to fetch user data.", toastRef);
        }
    };

    useEffect(() => {
        fetchUserData().then();
    }, []);

    const getTitle = () => {
        if (pathname === '/') {
            return 'Home'
        }
        if (pathname.includes('/create')) {
            return 'Create'
        }
        if (pathname === '/contact') {
            return 'Contact'
        }
        if (pathname === '/trending') {
            return 'Trending'
        }
        if (pathname === '/cart') {
            return 'Cart'
        }
    }

    return (
        <>
            <StyledNav>
                <div id="project-link" onClick={() => setSidebarOpen(!sidebarOpen)}>
                    <ShirtIcon/>
                </div>
                <div className="title">{getTitle()}</div>
                <div id="profile-link" onClick={() => setProfile(!profile)}>
                    <FaUserEdit/>
                </div>
                <AnimatePresence>
                    {
                        profile &&
                        <AccountPopup setProfile={setProfile}/>
                    }
                </AnimatePresence>
            </StyledNav>
            <AnimatePresence>
                {sidebarOpen && <MobileSidebar setSidebarOpen={setSidebarOpen}/>}
            </AnimatePresence>
        </>
    )
}

const StyledNav = styled(motion.div)`
  display: none;

  @media (max-width: 768px) {
    position: fixed;
    display: grid;
    width: 100vw;
    left: 0;
    top: 0;
    height: 4rem;
    z-index: 10000;
    background: var(--primary-color-black);
    grid-template-columns: 4rem 1fr 4rem;
    border-bottom: 4px solid var(--primary-theme-color);
  }

  #project-link, #profile-link {
    background: var(--primary-comp-bg);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--primary-theme-color);

    > svg {
      width: 40%;
      height: 40%;
      transition: 0.25s all linear;
    }

    > svg:hover {
      color: var(--primary-text-color);
      cursor: pointer;
    }
  }

  #project-link {
    border-right: 4px solid var(--primary-theme-color);
  }

  #profile-link {
    border-left: 4px solid var(--primary-theme-color);
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: normal;
    color: var(--primary-theme-color);
  }
`;
