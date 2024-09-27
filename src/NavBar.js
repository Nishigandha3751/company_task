import React, { useState } from 'react';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    const [showAuth, setShowAuth] = useState(false);
    const [showMap, setShowMap] = useState(false);

    const handleToggleAuth = () => setShowAuth(!showAuth);
    const handleToggleMap = () => setShowMap(!showMap);

    return (
        <div className="app-container">
            {/* Left-side Offcanvas Menu Icon */}
            <button className="toggle-button" onClick={handleToggleAuth} aria-label="Toggle Authentication">
                <FontAwesomeIcon icon={faBars} />
            </button>
            {/* Right-side Map Icon */}
            <button className="toggle-button2" onClick={handleToggleMap} aria-label="Toggle Map">
                <FontAwesomeIcon icon={faBars} />
            </button>

            {showAuth && (
                <div className="offcanvas">
                    <div className="offcanvas-header">
                        <h5>Authentication</h5>
                        <button className="close-button" onClick={handleToggleAuth} aria-label="Close">
                            &times;
                        </button>
                    </div>
                    <div className="offcanvas-body padded-body">
                        <h6>Sign Up</h6>
                        <form>
                            <input type="email" placeholder="Enter email" required />
                            <input type="password" placeholder="Password" required />
                            <button type="submit">Sign Up</button>
                        </form>
                        <hr />
                        <h6>Sign In</h6>
                        <form>
                            <input type="email" placeholder="Enter email" required />
                            <input type="password" placeholder="Password" required />
                            <button type="submit">Sign In</button>
                        </form>
                    </div>
                </div>
            )}

            {showMap && (
                <div className=" map-offcanvas">
                    <div className="offcanvas-header">
                        <h5>Map</h5>
                        <button className="close-button" onClick={handleToggleMap} aria-label="Close">
                            &times;
                        </button>
                    </div>
                    <div className="offcanvas-body padded-body">
                        <iframe
                            title="Map showing location"
                            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.127758%2C51.507351%2C-0.127568%2C51.507871&amp;layer=mapnik"
                            frameBorder ="0"
                            scrolling ="no"
                            style={{ width: '100%', height: '300px' }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};


export default NavBar;