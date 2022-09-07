import type { AppProps } from 'next/app'
import {setupStore} from "store/index";
import AuthStore, {FilterState} from "store/mobx";
import ErrorBoundary from "components/UI/ErrorBoundary/ErrorBoundary";
import {createContext} from "react";
import {Provider} from "react-redux";
import 'static/fonts/stylesheet.css'
import 'styles/normalize.css'
import 'styles/index.scss'

interface State {
    authStore: AuthStore,
    filterState: FilterState
}

const storeRedux = setupStore()
const authStore = new AuthStore()
const filterState = new FilterState()

export const Context = createContext<State>({
  authStore, filterState
})

function MyApp({ Component, pageProps }: AppProps) {
  return <ErrorBoundary>
              <Provider store={storeRedux}>
                <Context.Provider value={{ authStore, filterState }}>
                    <Component {...pageProps} />
                </Context.Provider>
              </Provider>
          </ErrorBoundary>

}

export default MyApp
