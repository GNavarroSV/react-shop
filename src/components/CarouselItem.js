import './Carousel.css'


const CarouselItem = (props)=>{
    return(
    <div className="item-container">
        <div className="item-img-container">
            <img src = {props.src} alt = "" className="item-img"/>
        </div>
        <div className="item-details">
            <h1 className="item-title">{props.title}</h1>
            <p className="item-description">{props.description}</p>
        </div>
    </div>
    );
}
export default CarouselItem;