import React, {useState} from "react";
import './randomAdvice.css';


const  RandomAdvice = () => {
    const [data, setData] = useState();
    const [style, setStyle] = useState('advicesNotVisible');
    const [active, setActive] = useState(false);

    const getApi = () => {
        const randomNumber = () => {
            const numb = (Math.random() * 100);
            return numb;
        }
        fetch('https://api.adviceslip.com/advice/'+ randomNumber())
            .then((res) => res.json())
            .then((json) => {
                console.log('JSON DONE', json.slip.advice);
                setData(json.slip.advice);
            });
    };

    const changeStyle = () => {
        setActive(!active);
        if (style === 'advicesNotVisible') {
            setStyle('advicesVisible');
        };
    }

    const niceAdvice = () => {
        changeStyle()
        getApi()
    }

    return(
        <div className='adviceContainer'>
            <h1 className='adviceH'>Advice</h1>
            <button className='adviceButton' onClick={niceAdvice}>Click Me</button>
            <div className={style}>{JSON.stringify(data, null, 2)}</div>
        </div>
    )
}

export default RandomAdvice;