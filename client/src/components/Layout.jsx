import React from 'react'
import { Navbar } from './Navbar'
import PropTypes from 'prop-types'

export const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <div className="container text-w px-[50px]">
                <Navbar />
                {children}
            </div>
        </React.Fragment>
    )
}

Layout.propTypes = {
    children: PropTypes.array
}
