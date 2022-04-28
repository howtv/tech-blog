import React from "react"
import { config } from "@site.config"

type Props = unknown

export const H1Title: React.FC<Props> = () => {
  // return (<h1 className="home-hero__title">{config.siteMeta.title}</h1>)
  return <h1 className={"home-hero__title"}>H<span className={"home-hero__title_highlight"}>o</span>wTelevision Tech Blog</h1>
}
