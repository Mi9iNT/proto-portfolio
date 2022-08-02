import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const API_URL = process.env.REACT_APP_API_URL;
const PLAYLIST_ID = process.env.REACT_APP_PLAYLIST_ID;
const API_KEY = process.env.REACT_APP_API_KEY;

const fecthurl = `${API_URL}part=snippet,id&order=date&playlistId=${PLAYLIST_ID}&key=${API_KEY}`



const SlideVideos = () => {


    const [allvideos, setAllvideos] = useState([])
    useEffect(() => {
        fetch(fecthurl).then((response) => response.json()).then((resJson) => {
            const result = resJson.items.map(doc => ({
                ...doc,
                videoLink: "https://www.youtube.com/embed/"+ doc.snippet.resourceId.videoId
            }));
            setAllvideos(result)
        })
    }, [])

    return (
        <div className="ContSlideYt">
            <Carousel className='SlideVideos' 
            showStatus={false} >
                {allvideos.map((item) => {
                return (
                    <div>
                        <iframe width="560" height="315" src={item.videoLink} title={item.description} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
                        
                        
                            <img src={item.snippet.thumbnails.default.url} alt={item.description} className="image" />
                        
                    </div>
                );
                })}
            </Carousel>
        </div>
    );
};

export default SlideVideos;