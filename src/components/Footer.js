import styled from 'styled-components'
import { Link } from 'react-router-dom';

const FooterSection = styled.div`
    width: 100%;
    height: 120px;
    background-color: #ED4F33;
    display: flex;
    flex-direction: row;
    position:absolute;
    justify-content:space-around;

    @media (max-width: 928px){
        justify-content:space-between;
    }
    @media (max-width: 768px){
        justify-content:;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: justify;
    justify-content: center;
    padding: 10px 20px;
    margin:20px;
    @media (max-width: 768px){
        font-size: 12px;
        margin:0px;
    }
    
`;
const Icon = styled.div`
    font-size: 12px;
    margin: 5px;
    text-decoration:none;
    color:#fff;
    @media (max-width: 768px){
        font-size: 8px;
    }
`;

const StyledLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-weight: bolder;
    padding: 0.5rem 1rem;
    height: 100%;
`;


const FooterContent = styled.p`
    color: #fff;
    @media (max-width: 812px){
        display: none;
    }
`;

const Title = styled.h2`
    color: #fff;
    font-weight: bolder;
    font-family: 'Paytone One', sans-serif;

    @media (max-width: 768px){
        font-size: 16px;
    }
`;

const Contact = styled.div`
    padding: 5px 20px;
    margin: 2px;
    color: #fff;

    @media (max-width: 968px){
        padding: 1px 10px;
        font-size: 12px;
    }
`;

const Footer = () => {
    return (  
        <>
       
       <FooterSection>
       <hr style={{color:"#fff"}}></hr>
           <Column>
           
                <Title>CO SPORT <i class="fa-solid fa-person-running"></i></Title>
                <FooterContent>Look and buy your favorite pair of shoes with our worldwide catalog.</FooterContent>
                <FooterContent>If you can see it, we can get it!</FooterContent>                
           </Column>
           
           <Column>
                <StyledLink to = '/'>Home</StyledLink>
                <StyledLink to = '/services'>Services</StyledLink>
                <StyledLink to = '/products'>Products</StyledLink>
           </Column>
           <Column>
                <Icon as= "a" href="https://www.facebook.com/cosportsv" target = "_blank"><i href = ""class="fa-brands fa-facebook fa-2x"></i></Icon>
                <Icon as= "a" href="https://www.instagram.com/cosportsv/" target = "_blank"><i class="fa-brands fa-instagram fa-2x"></i></Icon>
                <Icon as= "a" href="https://wa.me/50372275876" target = "_blank"><i class="fa-brands fa-whatsapp fa-2x"></i></Icon>
           </Column>
           <Column>
                <Contact><i class="fa-solid fa-location-dot "></i> San Salvador, Col. Escalon</Contact>
                <Contact><i class="fa-solid fa-phone"></i>  2244-5544</Contact>
                <Contact><i class="fa-solid fa-envelope"></i> cosport@gmail.com</Contact>
           </Column>
       </FooterSection>
       </>
    );
}
 
export default Footer;