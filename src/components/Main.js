import {Button} from './Button';
import './Main.css';

const Main = () => {
    return (  
        <div className="main-container">
            <video src = '/videos/main-video.mp4' autoPlay loop muted/>
            <h3>GET FRESH WITH US</h3>
            <p>What are you waiting for?</p>
            <div className="main-btns">
                <Button className = 'btns' buttonStyle='btn--outline' buttonSize = 'btn--large' path = '/products'>
                    SHOP WITH US!
                </Button>
                <Button className = 'btns' buttonStyle='btn--primary' buttonSize = 'btn--large' path = '/'>
                    WATCH THE NEWEST COLLECTION <i className='far fa-play-circle'/>
                </Button>
            </div>
        </div>
    );
}
 
export default Main;