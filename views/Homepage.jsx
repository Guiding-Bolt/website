import React from 'https://dev.jspm.io/react@16.13.1'
import view from '../views.jsx'
import { Title, Text, Button } from './atoms/branding.jsx'

function Homepage() {
  return (
    <div className="homepage-container">
      <Banner />
    </div>
  )
}

function Banner() {
  return (
    <div className="homepage-banner">
      <Title className="company_name">
        Guiding
        <br />
        Bolt
      </Title>

      <Text className="description">
        A group of <em>time travelers</em> sent back to provide&nbsp;
        <em>humanity</em> with the <em>tools & services</em> they deserve
      </Text>

      <div className="homepage-products">
        <ProductPreview
          name="Prodamic"
          logo="/images/prodam_icon.png"
          url="prodamic.com"
          status="alpha"
        />
        <ProductPreview
          name="Homeric"
          logo="/images/homeric_icon.png"
          url="homeric.live"
          status="concept"
        />
      </div>
    </div>
  )
}

function ProductPreview({ name, logo, url, status }) {
  return (
    <div className="homepage-product-preview">
      <img className="logo" src={logo} alt={`The logo for ${url}`} />
      <h3 className="name">{name}</h3>
      <h4 className="property">
        Host: <a href={`https://${url}`}>{url}</a>
      </h4>
      <h4 className="property">Status: {status}</h4>
    </div>
  )
}

export default view(Homepage, context => null)
