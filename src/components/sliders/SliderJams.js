import React from 'react';

import ReactPlayer from 'react-player';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const SliderJams = () => {
    return (
        // <Carousel className='SlideJams' >
        //     <div className='overlay'>
        //         <ReactPlayer url="https://soundcloud.com/myguel-mgsx-clairy/butterfly-mp3" />
        //         <h2 className='overlay__title'>Butterfly</h2>
        //         <p className='overlay__text'>Plaisir 🌞</p>
        //     </div>
        //     <div className='overlay'>
        //         <ReactPlayer url="https://soundcloud.com/myguel-mgsx-clairy/easier-remix" />
        //         <h2 className='overlay__title'>Easier Remix</h2>
        //         <p className='overlay__text'>à vos avis 🤔</p>
        //     </div>
        //     <div className='overlay'>
        //         <ReactPlayer url="https://soundcloud.com/myguel-mgsx-clairy/quit_mars_to_earth_ep1-mp3" />
        //         <h2 className='overlay__title'>Quit Mars to Earth</h2>
        //         <p className='overlay__text'>Une folie qui m'est une folie car elle m'a été inspirée par The Blessed Madonna ❤🖤</p>
        //     </div>
        //     <div className='overlay'>
        //         <ReactPlayer url="https://soundcloud.com/myguel-mgsx-clairy/seumset-mp3" />
        //         <h2 className='overlay__title'>Seumset</h2>
        //         <p className='overlay__text'>À vous les mouchoirs...blague à part ce couché de soleil était hyper doux 😎</p>
        //     </div>
        //     <div className='overlay'>
        //         <ReactPlayer url="https://soundcloud.com/myguel-mgsx-clairy/corona-da-coroner" />
        //         <h2 className='overlay__title'>Corona da Coroner</h2>
        //         <p className='overlay__text'>Ce fût long et pourtant ce n'est pas finit...Aaahhh Coconanana...😷</p>
        //     </div>
        //     <div className='overlay'>
        //         <ReactPlayer url="https://soundcloud.com/myguel-mgsx-clairy/feel" />
        //         <h2 className='overlay__title'>Feel</h2>
        //         <p className='overlay__text'>J'ai apprécié au point où j'en ai fait moult version mais celle ci restera 🤩</p>
        //     </div>
        //     <div className='overlay'>
        //         <ReactPlayer url="https://soundcloud.com/myguel-mgsx-clairy/choubi" />
        //         <h2 className='overlay__title'>Choubi</h2>
        //         <p className='overlay__text'>Bonheur pour mon oreilles 💯</p>
        //     </div>
        //     <div className='overlay'>
        //         <ReactPlayer url="https://soundcloud.com/myguel-mgsx-clairy/deep-vybz" />
        //         <h2 className='overlay__title'>DeepVybz</h2>
        //         <p className='overlay__text'>J'suis partis un poil loin, juste un poil 🤏</p>
        //     </div>
        // </Carousel>

        <div class="SliderOngletJams">
            <div className='overlay'>
                <div className="JamsLink">
                    <ReactPlayer url="https://soundcloud.com/myguel-mgsx-clairy/butterfly-mp3" />
                    <h2 className='overlay__title'>Butterfly</h2>
                 <p className='overlay__text'>Plaisir 🌞</p>
                </div>
                 
             </div>
            <div className='overlay'>
                <div className="JamsLink">
                 <ReactPlayer url="https://soundcloud.com/myguel-mgsx-clairy/easier-remix" />
                 <h2 className='overlay__title'>Easier Remix</h2>
                 <p className='overlay__text'>à vos avis 🤔</p>
                </div>
             </div>
            <div className='overlay'>
                <div className="JamsLink">
                    <ReactPlayer url="https://soundcloud.com/myguel-mgsx-clairy/quit_mars_to_earth_ep1-mp3" />
                 <h2 className='overlay__title'>Quit Mars to Earth</h2>
                 <p className='overlay__text'>Une folie qui m'est une folie car elle m'a été inspirée par The Blessed Madonna ❤🖤</p>
                </div>
             </div>
            <div className='overlay'>
                <div className="JamsLink">
                    <ReactPlayer url="https://soundcloud.com/myguel-mgsx-clairy/seumset-mp3" />
                 <h2 className='overlay__title'>Seumset</h2>
                 <p className='overlay__text'>À vous les mouchoirs...blague à part ce couché de soleil était hyper doux 😎</p>
                </div>
             </div>
            <div className='overlay'>
                <div className="JamsLink">
                    <ReactPlayer url="https://soundcloud.com/myguel-mgsx-clairy/corona-da-coroner" />
                 <h2 className='overlay__title'>Corona da Coroner</h2>
                 <p className='overlay__text'>Ce fût long et pourtant ce n'est pas finit...Aaahhh Coconanana...😷</p>
                </div>
             </div>
            <div className='overlay'>
                <div className="JamsLink">
                    <ReactPlayer url="https://soundcloud.com/myguel-mgsx-clairy/feel" />
                 <h2 className='overlay__title'>Feel</h2>
                 <p className='overlay__text'>J'ai apprécié au point où j'en ai fait moult version mais celle ci restera 🤩</p>
                </div>
             </div>
            <div className='overlay'>
                <div className="JamsLink">
                    <ReactPlayer url="https://soundcloud.com/myguel-mgsx-clairy/choubi" />
                 <h2 className='overlay__title'>Choubi</h2>
                 <p className='overlay__text'>Bonheur pour mon oreilles 💯</p>
                </div>
             </div>
            <div className='overlay'>
                <div className="JamsLink">
                    <ReactPlayer url="https://soundcloud.com/myguel-mgsx-clairy/deep-vybz" />
                 <h2 className='overlay__title'>DeepVybz</h2>
                 <p className='overlay__text'>J'suis partis un poil loin, juste un poil 🤏</p>
                </div>
             </div>
        </div>
    );
};

export default SliderJams;