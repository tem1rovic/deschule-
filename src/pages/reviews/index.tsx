import React from "react";
import type { NextPage } from 'next'
import dynamic from "next/dynamic";
import MainLayout from 'layouts/MainLayout';

const Hero = dynamic(() => import('container/home/Hero'))

const Index: NextPage = () => {

    return (
        <MainLayout >
            <Hero/>
        </MainLayout>
    )
}

export default Index
