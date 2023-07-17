import Carousel from 'react-elastic-carousel'
import './Carousel.css'
import CarouselItem from './CarouselItem';

const ServicesCarousel = () => {
    return (  
        <div className="services-container">
            <Carousel itemsToShow={1} >
                <CarouselItem
                    src = '/images/services/service1.png'
                    title = 'Authentic brands'
                    description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ligula, molestie id auctor vitae, faucibus non mi. Maecenas suscipit justo et neque laoreet condimentum. Suspendisse pharetra venenatis augue, non fermentum dui iaculis eget. In hac habitasse platea dictumst. Duis tortor risus, hendrerit eu erat sit amet, cursus malesuada odio. Donec ornare pretium ex, ut consectetur diam condimentum quis. Nulla molestie consectetur ipsum at sollicitudin. Pellentesque dignissim neque fermentum, auctor nulla ac, eleifend nibh. Integer id scelerisque purus. '
                >
                </CarouselItem>
                <CarouselItem
                    src = '/images/services/service2.png'
                    title = 'Latest drops'
                    description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum in nulla non accumsan. Pellentesque molestie dui luctus interdum facilisis. Sed mauris ex, rhoncus ac mauris vel, pulvinar scelerisque neque. Aliquam pharetra dignissim mauris quis ullamcorper. Vestibulum ut lectus et turpis tincidunt bibendum. Nam id lacus ac est sodales commodo dictum ut sem. Donec pretium scelerisque sagittis. Fusce quis orci ac dui varius lacinia a ac velit. Curabitur suscipit iaculis nisl, sit amet rhoncus felis scelerisque non.Proin mattis et nunc posuere euismod. Fusce commodo lacinia massa, eget mattis enim pulvinar eget. Donec finibus ante ac elit tempor consequat. Suspendisse potenti.'
                >
                </CarouselItem>
                <CarouselItem
                    src = '/images/services/service3.png'
                    title = 'Worldwide Catalog'
                    description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum in nulla non accumsan. Pellentesque molestie dui luctus interdum facilisis. Sed mauris ex, rhoncus ac mauris vel, pulvinar scelerisque neque. Aliquam pharetra dignissim mauris quis ullamcorper. Vestibulum ut lectus et turpis tincidunt bibendum. Nam id lacus ac est sodales commodo dictum ut sem. Donec pretium scelerisque sagittis. Fusce quis orci ac dui varius lacinia a ac velit. Curabitur suscipit iaculis nisl, sit amet rhoncus felis scelerisque non.Proin mattis et nunc posuere euismod. Fusce commodo lacinia massa, eget mattis enim pulvinar eget. Donec finibus ante ac elit tempor consequat. Suspendisse potenti.'
                >
                </CarouselItem>
            </Carousel>
        </div>
    );
}
 
export default ServicesCarousel;