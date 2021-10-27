import React, { useRef, useEffect, useState } from 'react';

const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {

    const imageRef = useRef(null);

    const [isLoading, setIsLoading] = useState(true);

    const [inView, setInView] = useState(false);

    const isInView = () => {
        const rect = imageRef.current.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    //useEffect gets called after component is rendered
    useEffect(() => {
        setIsLoading(false);
        setInView(isInView());
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []); //only run when first rendered

    const scrollHandler = () => {
        setInView(isInView());
    };

    return (
        <img
            src={isLoading
                ? 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==' // 1x1gif
                : inView ?
                    secondaryImg :
                    primaryImg}
            alt=""
            ref={imageRef}
            width="200"
            height="200"
        />
    );
};

export default ImageToggleOnScroll;