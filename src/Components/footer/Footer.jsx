import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                    Oppo outlet, a leading mobile selling company, offers cutting-edge technology and stylish designs to meet the diverse needs of smartphone enthusiasts worldwide.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                         Shop no 11 main katcharee bazar opposite selecto
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: +92 315 7003023</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: abc@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Companies</div>
                    <span className="text">Oppo</span>
                    <span className="text">Apple</span>
                    <span className="text">Xiaomi</span>
                    <span className="text">Infinix</span>
                    <span className="text">TECNO Mobile</span>
                    {/* <span className="text">Projectors</span> */}
                </div>
                <div className="col">
                    <div className="title">Our Team</div>
                    {/* <span className="text">Chand</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span> */}
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                    Oppo Outlet 2023 CREATED BY Gulraiz Zafar
                    </span>
                    <img src={Payment} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
