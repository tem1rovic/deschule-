import React, {FC, memo} from 'react';
import A from "components/UI/A/A";
import BrandLogo from "static/icons/icon";

interface LogoProps {
}

const Logo: FC<LogoProps> = memo(({}) => {
    return (
        <A href='/'>
            <div>
                <BrandLogo/>
            </div>
        </A>
    );
});

Logo.displayName = 'Logo'

export default memo(Logo);