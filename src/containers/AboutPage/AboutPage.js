import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.css';
import image from './about-us-1056.jpg';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Yogatime',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Find the best for your pet.</h1>
          <img className={css.coverImage} src={image} alt="My first ice cream." />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <h2>Did you know?</h2>
              <br></br>
              <p>Pets have been kept by humans since prehistoric times, 
              and almost every single culture around the world has a history of pets.</p>
              <br></br>
              <p>Domesticated for more than 10,000 years, the dog was one of the first animals domesticated by human.</p>
              <br></br>
              <p>The word "pet" comes from the Middle English word "petty", meaning "small".</p>
              <br></br>
            </div>

            <div className={css.contentMain}>
              <h2>Having a pet should not be a struggle.</h2>

              <p>
                Whether it is a change of schedule at work, a sudden relocation, or an unexpected circumstance,
                we all have our own struggles to forcefully leave our fur buddies at home by themselves.
                Some of these cannot be addressed in a short amount of time. Working with experienced pet sitters in PetGo,
                you can find the nearest and cheapest solution.
              </p>

              <br></br>

              <h2>Find the best for your pet.</h2>

              <p>
                Each pet is an individual, and each one of them needs different care.
                Working together with specific experienced pet sitter develops a whole new level of 
                bonding with your pet.
              </p>

              <br></br>

              <h2>Not just cats and dogs.</h2>

              <p>
                In PetGo, we welcome all kinds of pet (legal according to the state's law). We believe even your eight-legged arachnids 
                and ghoti friends need companies too. All you need is to find the right pet sitter.
              </p>

              <br></br>

              <h2>Do you have experience owning a pet?</h2>

              <p>
                PetGo offers you a platform through which you can reach thousands of pet owners in need. Offering pet sitting services 
                through PetGo to make some income spending time with animals you love!
              </p>

             
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;
