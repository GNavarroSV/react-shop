import { Link } from "react-router-dom";
import './ShoesDisplay.css'
import { useState } from "react";
import ReactPaginate from "react-paginate";

const ShoesDisplay = ({shoes}) => {
const[searchTerm, setSearchTerm] = useState("")
const[pageNumber, setPageNumber] = useState(0)
const shoesPerPage = 12
const PagesVisited = pageNumber * shoesPerPage

//Filters and finally iterates each shoe object
const displayShoes = shoes.slice(PagesVisited, PagesVisited + shoesPerPage).filter((value)=>{
    if(searchTerm ===""){
        return value
    }else if(value.brand.toLowerCase().includes(searchTerm.toLowerCase())){
        return value
    }else if(value.model.toLowerCase().includes(searchTerm.toLowerCase())){
        return value
    }
}).map(shoes=>{
    return ( 
            <Link className = "shoes-link" to = {`/shoes/${shoes.id}`} key ={shoes.id}>
                <div className="shoes-wrapper">
                    <div className="shoes-item">
                        <img src={shoes.img} alt="Shoe" className="shoes-img" />
                        <div className="shoes-info">
                            <div className="shoes-info-main">
                                <h3 className="shoes-brand">
                                    {shoes.brand}
                                </h3>
                                <h5 className="shoes-model">
                                    - {shoes.model}
                                </h5>
                            </div>
                            <h1 className="shoes-price">
                                 {shoes.price}
                            </h1>
                        </div>
                    </div>
                </div>
            </Link>   
    );
});
const pageCount = Math.ceil(shoes.length / shoesPerPage)
const changePage = ({selected}) => {
    setPageNumber(selected);
};
return <div className="container"> 
            <input className="shoes-searcher" placeholder="Search your own style..." onChange={event =>{setSearchTerm(event.target.value)}}/>
            <div className="shoes-container">{displayShoes}</div>
           <ReactPaginate
                previousLabel = {"<"}
                nextLabel = {">"}
                pageCount = {pageCount}
                pageRangeDisplayed = {2}
                onPageChange = {changePage}
                containerClassName = {"pagination-btn"}
                previousLinkClassName = {"previous-btn"}
                nextLinkClassName = {"next-btn"}
                disabledClassName = {"pagination-disabled"}
                activeClassName = {"pagination-active"}
            />
    </div> 
}
 
export default ShoesDisplay;