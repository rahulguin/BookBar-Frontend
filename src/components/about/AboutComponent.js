import React from "react";
import './AboutComponent.css'
import guin from '../../guin.jpg'
import rv from '../../ritvik.jpg'


export class AboutComponent extends React.Component {

    componentDidMount = async () => {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className="container about-text about-bg">
                <br/>
                <br/>
                <br/>
                <div className="row">
                    <div className="col-md-6 logo-size text-center">
                        <i className="fas fa-bold"></i>
                        <i className="fas fa-cocktail"></i>
                    </div>
                    <div className="col-md-6">
                        <br/>
                        <br/>
                        <h2 className="text-center">About Us</h2>
                        <br/>
                        <p className="text-center">We are a team of 4 designing the world's best bookstore. An user can
                            register and login as either a buyer or a seller. A buyer can place an order on the books currently being sold
                            by a seller. A seller can sell multiple books, and customize the price and quantity of the books he
                            wants to sell.
                            Our online store delivers to over
                            40 countries all over the world and our services are unmatched!</p>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <h3 className="text-center">------------Meet the Team-------------</h3>
                <br/>
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="card">
                            <img className="card-img-top" alt="" src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/68351855_2373721869388434_4725716274854756352_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=X-BN3tABQb8AX_KyXwA&_nc_ht=scontent-lga3-1.xx&oh=5868bd3f8f964ee3dbbc47c1de3dde63&oe=5EC0B4E9"/>
                            <div className="card-body">
                                <br/>
                                <h5 className="card-title text-center">Deepak Achar</h5>

                                <a href="https://www.linkedin.com/in/deepak-kumar-bb1810115/" className="btn btn-dark about-btn">
                                    <i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card">
                            <img className="card-img-top" alt="" src={guin}/>
                            <div className="card-body">
                                <br/>
                                <h5 className="card-title text-center">Rahul Guin</h5>

                                <a href="https://www.linkedin.com/in/rahulguin2/" className="btn btn-dark about-btn">
                                    <i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card">
                            <img className="card-img-top" alt="" src={rv}/>
                            <div className="card-body">
                                <br/>
                                <h5 className="card-title text-center">Ritvik Vinodkumar</h5>

                                <a href="https://www.linkedin.com/in/ritvik-vinodkumar/" className="btn btn-dark about-btn">
                                    <i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card">
                            <img className="card-img-top" alt="" src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/22046087_879070048915280_3400401717568385733_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=cQgmMWidwEoAX8B-0Ou&_nc_ht=scontent-lga3-1.xx&oh=2b01ba5cfbbe2c727e6126232d91e989&oe=5EC373D5"/>
                            <div className="card-body">
                                <br/>
                                <h5 className="card-title text-center">Naveen Chiluka</h5>

                                <a href="https://www.linkedin.com/in/naveen-chiluka/" className="btn btn-dark about-btn">
                                    <i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
