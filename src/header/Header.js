import React, { useState } from 'react'
import style from './Header.module.css'
import { FaBars } from 'react-icons/fa';


export default function Header() {
    const [show, setshow] = useState(false);

    return (
        <>
            <header>
                <div className={style.logo}>
                    <img className={style.img1} src="https://img.freepik.com/premium-vector/clothes-brand-logo-golden-color-with-red-dress_708797-303.jpg" alt="Logo" />
                    <span className={style.logoName}>AYARA</span>
                </div>

                <nav className={style.nav1}>

                    <ul className={style.ul1}>
                        <li className={style.li1}><a href="#" className={style.a1}>Home</a></li>
                        <li className={style.li1}><a href="#" className={style.a1}>About</a></li>
                        <li className={style.li1}><a href="#" className={style.a1}>Projects</a></li>
                        <li className={style.li1}><a href="#" className={style.a1}>Video</a></li>
                        <li className={style.li1}><a href="#" className={style.a1}>Contact</a></li>

                        <button>Login</button>
                    </ul>

                </nav>

                <FaBars className={style.bar} size={24} onClick={() => setshow(!show)}></FaBars>

                {
                    show ? <nav style={{ backgroundColor: "blue", display: "flex", flexDirection: "row", alignItems: "center", position: "absolute", marginTop: "200px", marginLeft: "80%" , color:"white"}}>
                        <ul className={style.mob}>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">Video</a></li>
                            <li><a href="#">Contact</a></li>
                            <button>Login</button>
                        </ul>

                    </nav> : null
                }

            </header>

            <div className={style.hero}>
                <div >
                    <h3>AYARA Clothes</h3>
                    <pre>             Everyone is looking to wear...</pre>
                    

                    

                    <button>Learn More</button>

                </div>


                <div className={style.img}>
                    <img src="https://i.pinimg.com/originals/92/1b/98/921b98bc8b5c15a0864bcb32b2050fcb.jpg" alt="Hero Image" />
                </div>


            </div>

        </>
    )
}