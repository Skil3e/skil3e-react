import React from 'react'
import "./main.scss";
import {useColorMode} from 'theme-ui'
import { Helmet } from 'react-helmet-async'

export default ({children}) => {
    const [colorMode, setColorMode] = useColorMode()
    console.log(colorMode)
    return (
        <div>
            <Helmet bodyAttributes={ { "data-theme": colorMode } }/>
            {children}
        </div>
    )

}
