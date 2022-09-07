import React, { createContext, useContext, useEffect, useState } from 'react'
const Context = createContext()
import translate_links from '../languages/translate_links';
import ru from '../languages/translate_ru';
import en from '../languages/translate_en';
import uz from '../languages/translate_uz';

const LanguageProvider = ({ children }) => {

  const [language, setLanguage] = useState('ru')
  const [search, setSearch] = useState();
  const [langData, setLangData] = useState(ru);
  const [langLinks, setLangLinks] = useState(translate_links?.ru)


  const value = {
    language,
    setLanguage,
    search,
    setSearch,
    langData,
    setLangData,
    langLinks,
    setLangLinks
  }

  // useEffect(() => {
  //   if (window.localStorage.getItem('lang')) {
  //     setLanguage(window.localStorage.getItem('lang'))
  //   }
  // }, [])

  useEffect(() => {
    if (language === 'ru') {
      setLangData(ru)
      setLangLinks(translate_links?.ru)
    } else if (language === 'en') {
      setLangData(en)
      setLangLinks(translate_links?.en)
    } else if (language === 'uz') {
      setLangData(uz)
      setLangLinks(translate_links?.uz)
    } else if (language === 'kz') {
      setLangData(ru)
      setLangLinks(translate_links?.kz)
    }
  }, [language])


  useEffect(() => {
    if (search) {
      window.document.body.style.overflow = 'hidden'
    } else {
      window.document.body.style.overflow = 'visible'
    }
  }, [search])

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

const useLanguage = (setterOnly) => {
  const { language, setLanguage } = useContext(Context)
  return setterOnly ? [setLanguage] : [language, setLanguage]
}

const useSearch = (setterOnly) => {
  const { search, setSearch } = useContext(Context)
  return setterOnly ? [setSearch] : [search, setSearch]
}

const useLangData = (setterOnly) => {
  const { langData, setLangData } = useContext(Context)
  return setterOnly ? [setLangData] : [langData, setLangData]
}

const useLangLinks = (setterOnly) => {
  const { langLinks, setLangLinks } = useContext(Context)
  return setterOnly ? [setLangLinks] : [langLinks, setLangLinks]
}


export {
  LanguageProvider,
  useLanguage,
  useSearch,
  useLangData,
  useLangLinks
}