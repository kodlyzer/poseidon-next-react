import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="kx-page__footer kx-theme--navy">
                <footer role="contentinfo">
                    <div className="kx-container kx-footer kx-flex kx-flex-row-reverse kx-align-items-center">
                        <div className="kx-footer__logo">
                            {/* <img src='@kognifai/design-system/www/assets/design-system/img/gfx/kog-logo-neg.svg'/> */}
                        </div>
                        <div className="kx-footer__text">
                            <p>Copyright ©2017 Kongsberg Gruppen - All rights reserved <br />
                                <a href="mailto:mb172.digital.platform.developers@kdi.kongsberg.com">Contact Us</a>
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;