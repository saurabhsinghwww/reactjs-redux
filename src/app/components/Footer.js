import React, { Component } from "react";

import PropTypes from "prop-types";

export default function Footer({ year, company }, context) {

    context.theme = "ABC"
    return (

        <div>

            <hr />
            <p> Copyrights@{year}, {company}</p>
            <p>Powerby {context.theme}</p>
        </div>

    )

}

Footer.propTypes = {

  year: PropTypes.number.isRequired,
  company: PropTypes.string,

}

Footer.defaultProps = {

 company: "Sapient Corp"

}

Footer.contextTypes = {

    theme: PropTypes.string

}