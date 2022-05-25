import React from 'react';
import Resource from '../../components/resourceBox/Resource';
import GoogleFonts from '../../assets/GoogleFonts.svg';
import MyFonts from '../../assets/MyFontsLogo.svg';
import FontSquirrel from '../../assets/FontSquirrelLogo.svg';
import AdobeFonts from '../../assets/AdobeFontsLogo.svg';
import FontSpark from '../../assets/FontSparkLogo.svg';
import BetterWebLogo from '../../assets/BetterWebLogo.svg';

import './resourceSection.css';

const resources = [
  {
    name: 'Google Fonts',
    logo: GoogleFonts,
    description:
      'Making the web more beautiful, fast, and open through great typography.',
    link: 'https://fonts.google.com/',
  },
  {
    name: 'MyFonts',
    logo: MyFonts,
    description:
      'The #1 place to download great @font-face webfonts and desktop fonts.',
    link: 'https://www.myfonts.com/',
  },
  {
    name: 'Font Squirrel',
    logo: FontSquirrel,
    description:
      'Font Squirrel scours the internet for high quality and legitimately free fonts.',
    link: 'https://www.fontsquirrel.com/',
  },
  {
    name: 'Adobe Fonts',
    logo: AdobeFonts,
    description:
      'Thousands of beautiful fonts to designers every day by leading foundries.',
    link: 'https://www.adobe.com/fonts/',
  },
  {
    name: 'FontSpark',
    logo: FontSpark,
    description:
      'Helping designers discover the perfect font for their next design project.',
    link: 'https://fontspark.com/',
  },
  {
    name: 'BetterWebType',
    logo: BetterWebLogo,
    description:
      'A web typography course for web designers and web developers by Matej Latin.',
    link: 'https://www.betterwebtype.com/',
  },
];

const ResourceSection = () => {
  return (
    <div className="contrast__resources section__margin">
      <div className="contrast__resources-heading">
        <div className="contrast__resources-categories">
          <h3 className="contrast__resources-catgories_item">Fonts</h3>
          <h3 className="contrast__resources-catgories_item">Mockups</h3>
          <h3 className="contrast__resources-catgories_item">Illustrations</h3>
          <h3 className="contrast__resources-catgories_item">Icons</h3>
        </div>

        <select className="contrast__resources-select">
          <option value="1" className="contrast__resources-select_option">
            Sort by
          </option>
          <option value="2" className="contrast__resources-select_option">
            Fonts
          </option>
          <option value="3" className="contrast__resources-select_option">
            Mockups
          </option>
          <option value="4" className="contrast__resources-select_option">
            Illustrations
          </option>
          <option value="5" className="contrast__resources-select_option">
            Icons
          </option>
        </select>
      </div>
      <div className="constrast__resources-grid">
        {resources.map((resource, index) => (
          <Resource
            className="contrast__resources-grid_item"
            key={index}
            source={resource.logo}
            name={resource.name}
            description={resource.description}
            resourceLink={resource.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ResourceSection;
