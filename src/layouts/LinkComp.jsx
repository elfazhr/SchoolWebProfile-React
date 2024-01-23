import React, { Children } from 'react'
import { Link } from "react-scroll";
import SpanComp from './SpanComp';

const LinkComp = (props) => {
  const { children } = props
  return (
        <Link
          to={props.to}
          spy={true}
          smooth={true}
          duration={500}
          className={`group relative inline-block cursor-pointer hover:text-${props.text} dark:text-white`}
          onClick={props.onClick}
        >
          {props.teks}
          {children}
        </Link>
  )
}

export default LinkComp