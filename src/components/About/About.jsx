import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import logo from '../../assets/logo.jpeg'
//about
const AboutUs = () => {
    return (
        <section className="about">
            <main>
                <h1>About Us</h1>

                <article>
                    <h4>Levis collections</h4>
                    <p>
                    In 1853, Levi Strauss, an immigrant from Bavaria, opened a dry goods company in San
                            Francisco at the height of the California Gold Rush. While he was working, he recognized a
                            need among hardworking people: clothes built to endure anything. 
                    </p>

                    <p>
                    He and tailor Jacob Davis
                            combined copper rivet reinforcements with tough denim,
                            leading to the first manufactured waist overalls in 1873.
                            Today, we call them "blue jeans."
                    </p>

                    <Link to="/">
                        <RiFindReplaceLine />
                    </Link>
                </article>
                

                <div>
                    <h2>Founders</h2>
                    <article>
                        <div>
                            <img src={logo} alt="Founder" />
                            <h3>CSK</h3>
                        </div>

                        <p>
                            we are CSK Team, the founder of the founder of Liviscollection. Affiliated to
                            Best Products...
                        </p>
                    </article>
                </div>
            </main>
        </section>
    );
};

export default AboutUs;