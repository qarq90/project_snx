import Link from "next/link";
import {StyledFooter} from "@/styles/styledFooter";
import {FooterLinks} from "@/lib/objFooter";

export default function Footer() {
    return (
        <>
            <StyledFooter>
                <p>© 2024 SnX. All rights reserved.</p>
                <nav>
                    {FooterLinks.map((item) => (
                        <Link href={item.path} key={item.title} target="_blank">
                            <div>
                                {item.icon}
                            </div>
                        </Link>
                    ))}
                </nav>
            </StyledFooter>
        </>
    );
}