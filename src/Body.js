import React from 'react'
import './Index.css'

function Body() {
    return(
        <div>
            <section className="container">
            <section className="hero">
                
                    <div className="store">
                        <h2>Aphatheology Cat Store</h2>
                        <p><i className="fa fa-map-marker-alt"></i> Sango Ota, Ogun State.</p>
                    </div>

                    <div className="heart">
                        <i className="fa fa-heart"></i>
                    </div>
                
            </section>

            <section className="attribute">
                <div>
                    <h4>4 Months</h4>
                    <p>Age</p>
                </div>

                <div>
                    <h4>Grey</h4>
                    <p>Color</p>
                </div>

                <div>
                    <h4>11 kg</h4>
                    <p>Weight</p>
                </div>
            </section>

            <section className="story">
                <h3>Pet Story</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore repudiandae eos facere iusto quis ab similique magnam consequatur molestiae quisquam quo vero tempora aliquid illum cumque saepe, libero consectetur repellendus?</p>
            </section>

            <section className="profile">
                <div className="bb">
                    <img src="https://res.cloudinary.com/aphatheology/image/upload/v1587212852/IMG_20200418_131052_0_2_hxee9k.jpg" alt="Mustapha" />
                    <p>
                        <b>Mustapha Abdulkareem</b> <br />
                        Seller
                    </p>
                </div>

                <div>
                    <button>Contact ME</button>
                </div>
            </section>
            </section>
        </div>
    )
}

export default Body