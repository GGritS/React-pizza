import React from "react"
import ContentLoader from "react-content-loader"

const SelectPizzaLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={312}
    height={500}
    viewBox="0 0 312 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="136" cy="130" r="130" /> 
    <rect x="2" y="273" rx="0" ry="0" width="280" height="20" /> 
    <rect x="0" y="309" rx="7" ry="7" width="280" height="84" /> 
    <rect x="120" y="409" rx="19" ry="19" width="162" height="44" /> 
    <rect x="3" y="410" rx="21" ry="21" width="95" height="44" />
  </ContentLoader>
)

export default SelectPizzaLoader

