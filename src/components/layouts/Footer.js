import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/*Colum 1*/}
            <div className="col-md-3 col-sm-6">
              <h4>Help</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Contact</a>
                </li>
                <li>
                  <a href="/">Support</a>
                </li>
              </ul>
            </div>
            {/*Colum 2*/}
            <div className="col-md-3 col-sm-6">
              <h4>Social Media</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Instagram</a>
                </li>
                <li>
                  <a href="/">Facebook</a>
                </li>
                <li>
                  <a href="/">Youtube</a>
                </li>
                <li>
                  <a href="/">Twitter</a>
                </li>
              </ul>
            </div>
          </div>
          {/* footer bottum */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} Reservation.LK - All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}
export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }

  .footer-bottom {
    padding-to: 3rem;
    padding-bottom: 2rem;
  }

  ul li a {
    color: var(--mainGray);
  }

  ul li a:hover {
    color: var(--mainLightGray);
  }
`;
