import { useEffect, useRef, useState } from 'react'
import './../styles/inp_out.css'
import axios from 'axios'

function InpOut(){
    
    const INPUT_FIELD = useRef(null)
    const OUTPUT_FIELD = useRef(null)
    const PUSH_DATA = useRef(null)


    function pushText(){
        const language_data = localStorage.getItem('lang') ?? 'en'
        if(INPUT_FIELD.current.value !== ''){
            axios.post('http://127.0.0.1:8000/data', {
                data: INPUT_FIELD.current.value,
                lang: language_data
            }, {
            headers: {
                'Content-Type': 'aplication/json'
            }
        })
        .then(response => {
            OUTPUT_FIELD.current.value = response.data
        })
        .catch(error => {
            console.error('Error:', error);
        });
        }

        else{
            INPUT_FIELD.current.placeholder = 'Поле не заполнено'
            setInterval(() => {
                INPUT_FIELD.current.placeholder = 'Введите текст для перевода'
            }, 2000)
        }
    }

    function clearOutputField(){
        if(OUTPUT_FIELD.current.value !== ''){
            OUTPUT_FIELD.current.value = ''
        }
    }

    function InputFieldFunctions(){
        clearOutputField()
    }


    return(
        <>
        <div className="container-inp-out">
            <textarea placeholder='Введите текст для перевода' ref={INPUT_FIELD} onInput={InputFieldFunctions} className='inp-out-field left-field' name="" id="" cols="30" rows="10"></textarea>
            <textarea ref={OUTPUT_FIELD} className='inp-out-field' name="" id="" cols="30" rows="10"></textarea>
        </div>
        <button ref={PUSH_DATA} className='psuh-data' onClick={pushText}>Перевести</button>
        </>
    )
}
export default InpOut