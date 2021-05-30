import React from 'react';
import './Home.css';
import Products from './../products/Products';

const Home = () => {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-na.ssl-images-amazon.com/images/G/01/adlp/builder/BFF-V1-01-Hero-D-6bababd9-ff42-407e-8e71-b6b0012e8def._CB417386616_QL85_V1_.jpg" alt="" />
                <div className="home_row">
                       <Products
                       id="898655885"
                       title={"The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses "}
                       price={29.99}
                       image={"https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"}
                       rating={4}
                       />
                       <Products
                       id="898655875"
                       title={"Kenwood kMix Stand Mixer for Baking, Stylish kitghten Mixer with k-beate, Dough Hook and whisk, 5 Litre glass Bow"}
                       price={239.0}
                       image={"https://www.kenwoodworld.com/WebImage/Global/Product%20images/Blenders,%20Mixers%20and%20Meat%20Grinders/Hand%20Mixers/HM791/HandMixers-HM791-800x600-1_800x600.jpg"}
                       rating={3}
                       />
                </div>
                <div className="home_row">
                <Products
                       id="898655876"
                       title={"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"}
                       price={199.99}
                       image={"https://cdn.commercehq.com/commercehq-store-e6f74f0dd3184f5da1467de9b7e611aa_da39a3ee5e6b4b0d3255bfef95601890afd80709/15993528315f542b4aefdd8f1c14b9cb5c288bd18f11e2e_1573091976_9cd4b35bcc95d789db75d7d75f49b5eb2207dabd.jpg"}
                       rating={5}
                       />
                       <Products
                       id="898655877"
                       title={"Amazon Echo (3rd generation) | Smart speaker with alexa, Charcoal Fabric"}
                       price={98.99}
                       image={"https://www.therange.co.uk/_m5/6/1/1579777798_2_9782.jpg"}
                       rating={4}
                       />
                       <Products
                       id="898655865"
                       title={"New Apple iPad Pro (12.9-inch, wi-fi, 128GB) - silver 94th Generation)" }
                       price={539.0}
                       image={"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-silver-202104_FMT_WHH?wid=1945&hei=2000&fmt=jpeg&qlt=95&.v=1617126635000"}
                       rating={5}
                       />
                </div>
                <div className="home_row">
                <Products
                       id="898655855"
                       title={"Samsung LC49RG90SSUXEN 49 '  Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440 "}
                       price={1094.98}
                       image={"https://images.samsung.com/is/image/samsung/sg-curved-c27rg50-lc27rg50fqexxs-Black-268420863?$720_576_PNG$"}
                       rating={3}
                       />
                </div>
            </div>
            
        </div>
    );
};

export default Home;