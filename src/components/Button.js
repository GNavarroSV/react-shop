import './Button.css'
import { Link } from 'react-router-dom';
/*This is another way of creating a component with different css styles 
and can take place in another components*/
const STYLES = ['btn--primary', 'btn--outline', 'btn--success'];
const SIZES = ['btn--medium', 'btn--large', 'btn--special'];

export const Button = ({ 
    children, 
    type,
    onClick,
    buttonStyle, 
    buttonSize,
    path}) =>{
        const checkButtonStyle = STYLES.includes(buttonStyle)? buttonStyle : STYLES[0];
        const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
        
        return(
            <Link to = {path} className = 'btn-mobile'>
                <button 
                    className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                    onClick = {onClick}
                    type = {type}
                >
                    {children}
                </button>
            </Link>
        )
};