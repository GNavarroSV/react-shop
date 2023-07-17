import CardItem from "./CardItem";
import './Cards.css';

const Cards = () => {
    return ( 
        <div className="cards">
            <h1>CHECK US OUT!</h1>
            <div className='cards-container'>
                <div className='cards-wrapper'>
                    <ul className='cards-items'>
                        <CardItem
                            text = "Check the latest collection in our catalog"
                            label = "Street Fashion"
                            path = "/"
                            src = "/images/image2.jpg"
                        >
                        </CardItem>
                        <CardItem
                            text = "Cop the newest collection"
                            label = "Retro Sneakers"
                            path = "/"
                            src = "/images/image4.jpg"
                        >
                        </CardItem>
                        <CardItem
                            text = "New colorway available"
                            label = "Sneakers"
                            path = "/"
                            src = "/images/image3.jpg"
                        >
                        </CardItem>
                    </ul>
                    <ul className="cards-items">
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Cards;