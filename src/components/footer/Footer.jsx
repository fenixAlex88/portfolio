import './style.css';
import linkedIn from '../../img/icons/linkedIn.svg';
import gitHub from '../../img/icons/gitHub.svg';

const Footer = () => {
  return (
      <footer className="footer">
          <div className="container">
              <div className="footer__wrapper">
                  <ul className="social">
                      <li className="social__item">
                          <a href="https://github.com/fenixAlex88" target="_blank" rel="noreferrer">
                              <img src={gitHub} alt="Link" />
                          </a>
                      </li>
                      <li className="social__item">
                          <a
                              href="https://www.linkedin.com/in/aleksei-pekar/"
                              target="_blank"
                              rel="noreferrer"
                          >
                              <img src={linkedIn} alt="Link" />
                          </a>
                      </li>
                  </ul>
                  <div className="copyright">
                      <p>©2023 Aleksey Pekar</p>
                  </div>
              </div>
          </div>
      </footer>
  );
};

export default Footer;
