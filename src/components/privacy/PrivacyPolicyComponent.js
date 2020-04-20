import * as React from "react";

export default class PrivacyPolicyComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <br/>
                <br/>
                <br/>
                <h2 className={'text-center'}>Privacy Policy</h2>
                <h3>Purpose of the website:</h3>
                <p>
                    Our website is aimed at providing an alternative solution overcoming the
                    shortcomings of the physical bookstores. The website acts as a convenient
                    platform to connect both buyers and sellers obviating the hassles involved with
                    the physical stores. A seller can post all the required details of a book like
                    price, different forms of availability, available quantity, etc. A buyer can
                    browse the website, find the details of the books they are interested in and
                    place an order to be delivered to his place. All this happens without the need
                    to leave your place. The website connects sellers and buyers from across the
                    globe and payments can be made online.
                </p>
                <h3>What information does our website collect from you?</h3>
                <ul>
                    <li><h5>Information we absolutely need from you: </h5><p>We need your address
                        to deliver your orders to your place. We need your credit/debit card details
                        to charge for your orders and pay the sellers accordingly. We need your
                        email ID and phone to send you the order receipts, password recovery and
                        authentication through OTPs.</p></li>
                    <li><h5>Information that would help us improve our website so we can serve
                        you better:</h5><p>The search history would help us get more insights into
                        the kind of books that the users are looking for and hence help us plan our
                        bookstore collection accordingly. We would collection information about the
                        most visited pages while you are on our website so that we improve those
                        pages to enhance user experience. We would need information on the order
                        timestamps in order to find out the peak order times so that we can scale
                        our application accordingly with preparedness.</p></li>
                    <li><h5>Information that would help to monetize our website:</h5><p>We
                        collect demographical information of our users to display relevant
                        internet-based ads that might be of interest to you. We also need
                        geographical information to serve you with specific ads that might interest
                        you. </p></li>
                    <li><h5>Integration with third party services:</h5><p>We integrate with
                        third-party ad services like Google ads and our site may have affiliate
                        links and embedded social sharing links in order monetize on the website. We
                        provide these third-party ad services with information that allows them to
                        serve you with more useful and relevant ads and to measure their
                        effectiveness. When we do this, we never share you name or other information
                        that directly identifies you. Also, the embedded links may collect
                        information about you when you click on them and go their websites. We
                        recommend you going through their privacy policy for further information
                        about how they might use your data. </p></li>
                </ul>

            </div>
        )
    }
}
