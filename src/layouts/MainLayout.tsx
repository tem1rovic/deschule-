import dynamic from "next/dynamic";
import React, {FC, memo, ReactNode, useContext, useEffect, useState} from 'react';
import Head from "next/head";

const Header = dynamic(() => import("components/Header/Header"))
const Footer = dynamic(() => import("components/Footer/Footer"))

interface MainLayoutProps {
    data: any,
    seo_data: any
}

const MainLayout: FC<MainLayoutProps> = memo(({ children, data, seo_data}) => {
    const [ scrollToUp, setScrollToUp ] = useState<boolean>(false)
    const [ loading, setLoading ] = useState<boolean>(true)


    useEffect(() => {
        setLoading(false)
        window.addEventListener('scroll', () => {
            window.pageYOffset > 100 ? setScrollToUp(true) : setScrollToUp(false)
        })
    }, [])

    return (
        <>
            <Head>
                <title>{seo?.title || 'Template app'}</title>
                <meta property="og:title" content={seo_data?.og_title || 'example.com'} />
                <meta name="description" content={seo_data?.description || 'example.com'} />
                <meta name="keywords" content={seo_data?.keywords || 'example.com'} />
                <meta property="og:url" content={seo_data?.og_url || 'example.com'} />
                <meta property="og:type" content={seo_data?.og_type || 'example.com'} />
                <meta property="og:description" content={seo_data?.og_description || 'example.com'} />
                <meta property="og:site_name" content={seo_data?.og_site_name || 'example.com'} />
                <meta property="og:image" content={seo_data?.og_image || 'example.com'} />
            </Head>
            <Header/>
            <main> {children} </main>
            {/* {
                scrollToUp &&
                <div
                    onClick={() => window.scrollTo(0, 0)}
                    className="scrollToUp">
                    <ArrowDown/>
                </div>
            } */}
            <Footer/>
        </>
    );
});

MainLayout.displayName = 'MainLayout'

export default MainLayout;