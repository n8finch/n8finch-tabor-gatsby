import React from 'react';
import { Github, Linkedin, Twitter } from './Icons';
//TODO: make it dynamic

const SocialNav = () => (
  <nav className="social-navigation" aria-label="Social Menu">
    <div className="menu-social-container">
      <ul
        id="menu-social"
        className="header-font medium smooth gray list-reset"
      >
        <li
          id="menu-item-351"
          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-351"
        >
          <a
            href="http://twitter.com/n8finch"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="screen-reader-text">Twitter</span>
            <Twitter />
          </a>
        </li>
        <li
          id="menu-item-352"
          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-352"
        >
          <a href="https://github.com/n8finch">
            <span className="screen-reader-text">Github</span>
            <Github />
          </a>
        </li>
        <li
          id="menu-item-353"
          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-353"
        >
          <a
            href="https://www.linkedin.com/in/natefinch/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="screen-reader-text">Medium</span>
            <Linkedin />
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default SocialNav;
