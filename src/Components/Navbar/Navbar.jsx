import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import "./Navbar.css";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [searchModal, setSearchModal] = useState(false);
    const handleScroll = () => {

        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    const navRef=useRef()

    useEffect(() => {
    navRef.current.scrollIntoView()

        window.addEventListener("scroll", handleScroll);
    }, []);

    const navigate = useNavigate();

    return (
        <>
            <header
                className={`main-header myHeader ${scrolled ? "sticky-header" : "myHeader"}`}
            >
              <div className="companyName" ref={navRef}>
                 <h3 onClick={()=>navigate('/')}>Oppo Outlet</h3>
                 {/* <Link to="/">About</Link>
                <Link to="/">Contact</Link>
                <Link to="/">Privacy</Link> */}
              </div>
              <div className="mobileNumber">
                <BsFillTelephoneForwardFill style={{marginRight:"10px"}}/>
              +92 315 7003023
              </div>
            </header>
        </>
    );
};

export default Navbar;
