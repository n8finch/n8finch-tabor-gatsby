import React from 'react';
import { Link } from 'gatsby';
import n8finchPic from '../images/nate-finch.jpg';

const Logo = ({ data }) => (
  <Link to="/" className="custom-logo-link site-logo" rel="home" itemProp="url">
    <img
      src={n8finchPic}
      width="150"
      height="150"
      className="custom-logo initial loaded"
      alt={'Nate Finch | ' + data.site.siteMetadata.title}
      itemProp="logo"
    />
  </Link>
);

export default Logo;
