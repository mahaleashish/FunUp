import React, { useEffect, useRef, useState } from 'react'

export default function Useeffect() {
    const [img, setImg] = useState("");
    const imgRef = useRef(null);
    const imgurls = ["https://cdn-icons-png.flaticon.com/512/3273/3273898.png", "https://cdn-icons-png.flaticon.com/512/1674/1674214.png"];
    useEffect(() => {
        setImg(imgurls[0])
    }, [ ])
    const changeImg = () => {
        const curImg = imgRef.current.src;
        const curIndex = imgurls.indexOf(curImg);
        const nextIndex = (curIndex + 1) % imgurls.length;
        setImg(imgurls[nextIndex])
    }
    return (
        <div>
            <img src={img} ref={imgRef} />
            <button onClick={changeImg}>Change Image</button>
        </div>
    )
}