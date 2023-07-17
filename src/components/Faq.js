import { useState} from "react";
import { Data } from "../data/Data";
import './Faq.css'

const Faq = () => {
    const [selected, setSelected] = useState(null)
    const toggle = (i) =>{
        if(selected === i){
            return setSelected(null)
        }
        setSelected(i)
    }

    return (  
            <div className="faq-container">
                <div className="accordion">
                    <h1>FAQ</h1>
                    {Data.map((question, i)=>{
                        return(
                            <div className="question"onClick={()=>toggle(i)} key = {i}>
                                <div className="title" >
                                    <h2>{question.title}</h2>
                                    <span>{selected === i ? '▲':'▼'}</span>
                                </div>
                            <div className="wrapper">
                                <div className={selected === i ? 'answer-active':'answer-hidden'}><p>{question.answer}</p></div>
                            </div>
                            </div>
                            )
                    })}
                </div>
            </div>   
    );
}

 
export default Faq;