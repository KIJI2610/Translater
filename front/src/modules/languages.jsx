import './../styles/languages.css'
import lang_img from './../img/translate.svg'
import React, { useEffect, useRef, useState } from 'react';

function Languages() {
    const [lang, setLang] = useState(localStorage.getItem('lang') || 'en');
    const INPUT_LANGUAGE = useRef(null);
    const OUTPUT_LANGUAGE = useRef(null);

    const inp = lang === 'en' ? 'Русский' : 'Английский';
    const out = lang === 'en' ? 'Английский' : 'Русский';

    useEffect(() => {
        INPUT_LANGUAGE.current.textContent = inp;
        OUTPUT_LANGUAGE.current.textContent = out;
    }, [inp, out]);

    function changeLanguage() {
        const newLang = lang === 'en' ? 'ru' : 'en';
        localStorage.setItem('lang', newLang);
        setLang(newLang);
    }

    return (
        <>
            <div className="container-lang">
                <div className="lang-bar">
                    <p ref={INPUT_LANGUAGE} className='lang-options'>{inp}</p>
                </div>

                <div className="move-lang" onClick={changeLanguage}>
                    <img className='lang_img' src={lang_img} alt="change" />
                </div>

                <div className="lang-bar">
                    <p ref={OUTPUT_LANGUAGE} className='lang-options'>{out}</p>
                </div>
            </div>
        </>
    );
}
export default Languages