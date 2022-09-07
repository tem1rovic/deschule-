import type { NextPage } from 'next'
import dynamic from "next/dynamic";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import MainLayout from 'layouts/MainLayout';

const Index: NextPage = () => {

    return (

              <MainLayout title={'Home'} description='Tech Online Market' mainClass={'main_home'}>

              </MainLayout>
  )
}

export default Index
