import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Slide1 from '../../assets/img/illustrations/Autravers.png';
import Slide2 from '../../assets/img/illustrations/bo2.png';
import Slide3 from '../../assets/img/illustrations/Conservatoire.jpg';
import Slide4 from '../../assets/img/illustrations/ConservatoireLight.jpg';
import Slide5 from '../../assets/img/illustrations/EspaceFilet2.png';
import Slide6 from '../../assets/img/illustrations/FriendlyPumpkin2.png';
import Slide7 from '../../assets/img/illustrations/fuck4.png';
import Slide8 from '../../assets/img/illustrations/iang.jpg';
import Slide9 from '../../assets/img/illustrations/ladefense.jpg';
import Slide10 from '../../assets/img/illustrations/Laminutelogo.png';
import Slide11 from '../../assets/img/illustrations/MainFuckUkraina.png';
import Slide12 from '../../assets/img/illustrations/Moi2.png';
import Slide13 from '../../assets/img/illustrations/Mix.png';
import Slide14 from '../../assets/img/illustrations/Natou2mini.png';
import Slide15 from '../../assets/img/illustrations/NatoNtetu.png';
import Slide16 from '../../assets/img/illustrations/NebuleuseRouge.png';
import Slide17 from '../../assets/img/illustrations/NTF.png';
import Slide18 from '../../assets/img/illustrations/OBOH_Avatar.png';
import Slide19 from '../../assets/img/illustrations/Papillonllonllon.png';
import Slide20 from '../../assets/img/illustrations/zazon.jpg';
import Slide21 from '../../assets/img/illustrations/ResponsiveDesign.gif';
import Slide22 from '../../assets/img/illustrations/scultureenbronze.png';
import Slide23 from '../../assets/img/illustrations/SEO.gif';
import Slide24 from '../../assets/img/illustrations/snail.png';
import Slide25 from '../../assets/img/illustrations/TerreBlender.png';
import Slide26 from '../../assets/img/illustrations/PSX.jpg';
import Slide27 from '../../assets/img/illustrations/Moi3.png';


const SliderIllustrations = () => {
  return (
    <Carousel showStatus={false} showArrows={true} infiniteLoop={true} showThumbs={true} useKeyboardArrows={true} autoPlay={true} stopOnHove={true} swipeable={true} dynamicHeight={true} emulateTouch={true} thumbWidth_Values="100" selectedItem_Values="0" interval_Values="2000" transitionTime_Values="500" swipeScrollTolerance_Values="5">
      <img className='IlluSlide' src={Slide1} alt="Au travers"/>
      <img className='IlluSlide' src={Slide2} alt="Au travers" />
      <img className='IlluSlide' src={Slide3} alt="Au travers" />
      <img className='IlluSlide' src={Slide4} alt="Au travers" />
      <img className='IlluSlide' src={Slide5} alt="Au travers" />
      <img className='IlluSlide' src={Slide6} alt="Au travers" />
      <img className='IlluSlide' src={Slide7} alt="Au travers" />
      <img className='IlluSlide' src={Slide8} alt="Au travers" />
      <img className='IlluSlide' src={Slide9} alt="Au travers" />
      <img className='IlluSlide' src={Slide10} alt="Au travers" />
      <img className='IlluSlide' src={Slide11} alt="Au travers" />
      <img className='IlluSlide' src={Slide12} alt="Au travers" />
      <img className='IlluSlide' src={Slide13} alt="Au travers" />
      <img className='IlluSlide' src={Slide14} alt="Au travers" />
      <img className='IlluSlide' src={Slide15} alt="Au travers" />
      <img className='IlluSlide' src={Slide16} alt="Au travers" />
      <img className='IlluSlide' src={Slide17} alt="Au travers" />
      <img className='IlluSlide' src={Slide18} alt="Au travers" />
      <img className='IlluSlide' src={Slide19} alt="Au travers" />
      <img className='IlluSlide' src={Slide20} alt="Au travers" />
      <img className='IlluSlide' src={Slide21} alt="Au travers" />
      <img className='IlluSlide' src={Slide22} alt="Au travers" />
      <img className='IlluSlide' src={Slide23} alt="Au travers" />
      <img className='IlluSlide' src={Slide24} alt="Au travers" />
      <img className='IlluSlide' src={Slide25} alt="Au travers" />
      <img className='IlluSlide' src={Slide26} alt="Au travers" />
      <img className='IlluSlide' src={Slide27} alt="Au travers" />
    </Carousel>
  );
}

export default SliderIllustrations;