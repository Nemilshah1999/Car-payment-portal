import React from 'react';

import ContactCard from "./ContactCard"
import HeroFullScreen from "./HeroFullScreen"


function App() {

  return (
    <div className="container">
    <HeroFullScreen/>

            <div className="products row">
                <ContactCard
                    product={{name: "Aston Martin",
                              imgUrl: "https://www.pngpix.com/wp-content/uploads/2016/06/PNGPIX-COM-Aston-Martin-V12-Zagato-Red-Sports-Car-PNG-Image.png",
                              price: "$450",
                              checkoutPrice: 450,
                              contactUs: "(212) 555-2345",
                              email: "mastercar@me.com"}}
                />

                <ContactCard
                    product={{name: "Lamborghini",
                              imgUrl: "https://officialpsds.com/imageview/r1/96/r19685_large.png?1529107936",
                              price: "$500",
                              checkoutPrice: 500,
                              contactUs: "(212) 555-1234",
                              email: "mr.whiskaz@carnap.in"}}
                />

                <ContactCard
                    product={{name: "Ferrari",
                              imgUrl: "https://www.freepnglogos.com/uploads/ferrari-png/red-ferrari-gtb-car-png-image-pngpix-14.png",
                              price: "$480",
                              checkoutPrice: 480,
                              contactUs: "(212) 555-3456",
                              email: "worldcar@yahoo.com"}}
                />

                <ContactCard
                    product={{name: "Bugatti",
                              imgUrl: "https://www.pngmart.com/files/10/Bugatti-Veyron-PNG-Transparent-Picture.png",
                              price: "$750",
                              checkoutPrice: 750,
                              contactUs: "(212) 555-4567",
                              email: "thecatchcar@hotmail.com"}}
                />

                <ContactCard
                    product={{name: "Aston Martin",
                              imgUrl: "https://www.pngpix.com/wp-content/uploads/2016/06/PNGPIX-COM-Aston-Martin-V12-Zagato-Red-Sports-Car-PNG-Image.png",
                              price: "$450",
                              checkoutPrice: 450,
                              contactUs: "(212) 555-2345",
                              email: "mastercar@me.com"}}
                />

                <ContactCard
                    product={{name: "Lamborghini",
                              imgUrl: "https://lh3.googleusercontent.com/proxy/0gUIF1uCYDRo9h7B45-h4Ui0VtHF3wZDGfRYQXYMK6HOjWGmC3Djh9-yeLokScE20ApcDaCKOOktfsISYCKjUyPtNBdkIUD3CrH3TJLhbW7k8Q=s0-d",
                              price: "$550",
                              checkoutPrice: 550,
                              contactUs: "(212) 555-1234",
                              email: "mr.whiskaz@carnap.in"}}
                />

            </div>
    </div>
  );
}

export default App;
