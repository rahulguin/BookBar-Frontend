import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Link} from "react-router-dom";
import t from "typy";
import "./BookCarousel.css"


export default class BookCarousel extends React.Component {

    responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 5,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };


    render() {
        return (
            <div className="container carousel-color">
                <h2 className="carousel-style">Most Relevant Books</h2>
                &nbsp;
                &nbsp;
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={this.responsive}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                >

                    {
                        this.props.books &&
                        this.props.books.map(book =>
                            <div
                                className="col-9">
                                <Link
                                    to={`/bookDetails/${t(
                                        book,
                                        'volumeInfo.industryIdentifiers[0].identifier').safeObject}`}>
                                    <div
                                        className="card">
                                        {book.volumeInfo.imageLinks.thumbnail
                                        &&
                                        <img
                                            className="card-img-top"
                                            src={book.volumeInfo.imageLinks.thumbnail
                                            && book.volumeInfo.imageLinks.thumbnail}
                                            alt="Card image cap"/>}

                                    </div>
                                </Link>
                            </div>
                        )
                    }
                </Carousel>
            </div>
        )
    }
}
