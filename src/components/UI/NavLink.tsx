import { useRouter } from 'next/router';
import Link from 'next/link';
import {FC} from "react";

interface NavLinkProps {
    href: string,
    exact: boolean,
    children: string,
}

const  NavLink: FC<NavLinkProps> = (props) => {
    const { href, exact, children, ...rest } = props
    const { pathname } = useRouter();
    const isActive = exact ? pathname === href : pathname.startsWith(href);


    return (
        <Link href={href}>
            <a {...rest} style={{ color: isActive ? 'var(--red)' : 'var(--black)', fontWeight: isActive ? "600" : '400' }} >
                {children}
            </a>
        </Link>
    );
}

export default NavLink