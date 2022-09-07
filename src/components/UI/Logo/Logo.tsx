import React, {FC, memo} from 'react';
import A from "components/UI/A/A";
import {BrandLogoIcon} from "static/icons/icon";
import cl from './Logo.module.scss'

interface LogoProps {
    mobileMenuShow: boolean
}

const Logo: FC<LogoProps> = memo(({mobileMenuShow}) => {
    return (
        <A href='/'>
            <div className={mobileMenuShow ? cl.mobile : cl.logo }>
                <BrandLogoIcon/>
            </div>
        </A>
    );
});

Logo.displayName = 'Logo'

export default memo(Logo);