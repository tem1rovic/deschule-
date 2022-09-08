import React from "react";
import type { NextPage } from 'next'
import dynamic from "next/dynamic";
import MainLayout from 'layouts/MainLayout';

const Hero = dynamic(() => import('container/home/Hero'))
const About = dynamic(() => import("container/home/About"))
const Methodology = dynamic(() => import("container/home/Methodology"))
const Lessons = dynamic(() => import("container/home/Lessons"))
const Traveling = dynamic(() => import("container/home/Traveling"))
const CountryInfo = dynamic(() => import("container/home/CountryInfo"))
const WhatSay = dynamic(() => import("container/home/WhatSay"))
const Lessons2 = dynamic(() => import("container/home/Lessons2"))



const Index: NextPage = () => {

    return (
        <MainLayout >
            <Hero/>
            <About/>
        </MainLayout>
    )
}

export default Index
