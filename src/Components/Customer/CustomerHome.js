import React from 'react';
import NavbarCustomer from '../../layout/NavbarCustomer';
import logo from '../../icons/equinox.jpeg';
import '../../styles/Home.css';
import logo1 from '../../icons/ride.jpg';
import logo2 from '../../icons/pool.jpg';

const CustomerHome = () => {
    return (
        <>
            <NavbarCustomer />
            <div class='Homebg'>
                <div className='Home-heading'>
                    <h1><b>Amusement-Park-Application</b></h1><br /><br />
                </div>
                <div className='Home-para'>
                    <h2>Step into a world of magic, where joy springs to life!</h2><br />

                    <h4>We are so much more than an amusement park - a world where everyone comes together and enjoys the little moments.</h4>
                    <h4>A life of fun is what everyone deserves, so come on down to the Wonderla closest to you!</h4><br />
                </div>

                <div className='imgbg'>
                <div className='Homepic-1'>
                    <img src={logo} height='200' width='400'></img>
                </div>
                <div className='Homepic-3'>
                    <img src={logo2} height='200' width='400'></img>
                </div>
                </div>
            </div>
        </>
    );
};

export default CustomerHome;

