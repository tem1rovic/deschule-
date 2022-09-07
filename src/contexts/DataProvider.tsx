import React, { createContext, useContext, useState } from 'react'
import { useEffect } from 'react'
const Context = createContext()


const DataProvider = ({ children }) => {

  const [homeData, setHomeData] = useState()
  const [videoData, setVideoData] = useState()
  const [doctorsData, setDoctorsData] = useState()
  const [aboutUstData, setAboutUsData] = useState()
  const [search, setSearch] = useState(false)
  const [serviceData, setServiceData] = useState()

  const value = {
    homeData,
    setHomeData,
    videoData,
    setVideoData,
    doctorsData,
    setDoctorsData,
    aboutUstData,
    setAboutUsData,
    search,
    setSearch,
    serviceData,
    setServiceData
  }


  return (
    <Context.Provider value={value}>
      <Context.Consumer>
        {
          () => children
        }
      </Context.Consumer>
    </Context.Provider>
  )
}

const useHomeData = (setterOnly) => {
  const { homeData, setHomeData } = useContext(Context)
  return setterOnly ? [setHomeData] : [homeData, setHomeData]
}

const useVideoData = (setterOnly) => {
  const { videoData, setVideoData } = useContext(Context)
  return setterOnly ? [setVideoData] : [videoData, setVideoData]
}

const useDoctorsData = (setterOnly) => {
  const { doctorsData, setDoctorsData } = useContext(Context)
  return setterOnly ? [setDoctorsData] : [doctorsData, setDoctorsData]
}

const useAboutUsData = (setterOnly) => {
  const { aboutUstData, setAboutUsData } = useContext(Context)
  return setterOnly ? [setAboutUsData] : [aboutUstData, setAboutUsData]
}



const useSearch = (setterOnly) => {
  const { search, setSearch } = useContext(Context)
  return setterOnly ? [setSearch] : [search, setSearch]
}


const useServiceData = (setterOnly) => {
  const { serviceData, setServiceData } = useContext(Context)
  return setterOnly ? [setServiceData] : [serviceData, setServiceData]
}



export {
  DataProvider,
  useHomeData,
  useVideoData,
  useDoctorsData,
  useAboutUsData,
  useSearch,
  useServiceData
}