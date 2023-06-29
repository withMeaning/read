import readIcon from '../assets/read-svgrepo-com.svg'
import doIcon from '../assets/icons8-tick-box.svg'
import doneIcon from '../assets/icons8-tick-box_done.svg'
import doGif from '../assets/icons8-tick-box.gif'
import undoGif from '../assets/icons8-tick-box_undo.gif'
import { useEffect, useState } from 'react'
const Icon = ({type, state, size}) => {

    var imgSrc = "";
    const [animate, setAnimate] = useState(false);

    switch(type) { 
        case "read": { 
            imgSrc = readIcon
           break; 
        } 
        case "do": {
            switch (state) {
                case 0:
                    imgSrc = doIcon
                    break;
                case 1:
                    imgSrc = doneIcon
                    break;
                default:
                    break;
            }
            //imgSrc = doIcon
            /* 
            switch (state) {
                case 0:
                    imgSrc = doIcon
                    break;
                case 1:
                    imgSrc = doneIcon
                    break;
                default:
                    imgSrc = doIcon
                    break;
            } */
           break; 
        } 
        default: { 
            imgSrc = readIcon
           break; 
        } 
     } 

     useEffect(() => {
        if (type == "do" ) {
            setAnimate(true)
            setTimeout(() => {
                setAnimate(false)
            }, 400);
        }
    }, [imgSrc]);


    return ( <>
    <img
        src={doIcon} // this should be replaces by an icon, according to the type of item (read, watch, tweet, etc)                                alt="Round Image"
        className={`w-${size} h-${size} object-cover  ${(imgSrc == doIcon) && !animate ? '' : 'hidden'}`}
    />
    <img
        src={doneIcon} // this should be replaces by an icon, according to the type of item (read, watch, tweet, etc)                                alt="Round Image"
        className={`w-${size} h-${size} object-cover  ${(imgSrc == doneIcon) && !animate ? '' : 'hidden'}`}
    />
    <img
        src={doGif} // this should be replaces by an icon, according to the type of item (read, watch, tweet, etc)                                alt="Round Image"
        className={`w-${size} h-${size} object-cover invert ${(imgSrc == doneIcon) && animate ? '' : 'hidden'}`}
    />
    <img
        src={undoGif} // this should be replaces by an icon, according to the type of item (read, watch, tweet, etc)                                alt="Round Image"
        className={`w-${size} h-${size} object-cover invert ${(imgSrc == doIcon) && animate ? '' : 'hidden'}`}
    />
    <img
        src={readIcon} // this should be replaces by an icon, according to the type of item (read, watch, tweet, etc)                                alt="Round Image"
        className={`w-${size} h-${size} object-cover ${imgSrc == readIcon ? '' : 'hidden'}`}
    />
    </> );
}
 
export default Icon;