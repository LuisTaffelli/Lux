import { useEffect, useState } from 'react';

import {
  HeroImage,
  Intro,
  LandingHeader,
  Middle,
  Main,
  Bottom,
  InnerMiddleBar,
  BottomIcons,
  Inscription
} from "./Styles/LandingElements";

import { 
  TopSection, 
  UsSection, 
  PortfolioSection,
  OfferSection,
} from './Sections'

import { PrimaryButton } from '../../GeneralComponents/Buttons';

import FadeIn from './Animations';



export default function Landing({
  ScrollTo
}) {

  const [heroIsLoaded, setHeroIsLoaded] = useState(false);



  return (
    <Main>
      <TopSection />
      <UsSection Scroll={ScrollTo}/>
      {/*<PortfolioSection />*/}
      <OfferSection />
    </Main>
  )
}
