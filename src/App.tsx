import { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { About } from './component/About';
import { Product } from './component/Product';

function App() {
  // Smooth scrolling with JavaScript
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }, []);

  return (
    <div className="main">
      <nav id="navbar" className="navbar fixed-top navbar-expand-lg">
        <span>
          <img src="https://fortisengineers.in/wp-content/uploads/2024/02/fortis.png" alt="Logo" height={40} width={60} />
        </span>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#products">Products</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#clients">Clients</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <div id="content" data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="0" className="scrollspy-example" tabIndex="0">
        <section id="launch" style={{ height: '100vh', backgroundColor: '#f8f9fa' }}>
          <div className='con'>

            <h1>
              Fortis Engineers
            </h1>
            <div>
              Leading manufacturer and consultants of Natural Rubber processing machinery (ISNR/TSR) , factory installation and commissioning

            </div>
          </div>
        </section>
        <section id="about" style={{ padding: '50px 0', height: '100vh', backgroundColor: '#e9ecef' }}>
          <About />
        </section>
        <section id="products" style={{ padding: '50px 0', height: '100vh', backgroundColor: '#dee2e6' }}>
         <Product/>
        </section>
        <section id="clients" style={{ padding: '50px 0', height: '100vh', backgroundColor: '#dee2e6' }}>
          <h4>Clients</h4>
          <p>This is the Products section content.</p>
        </section>

        <section id="contact" style={{ padding: '50px 0', height: '100vh', backgroundColor: '#ced4da' }}>
          <h4>Contact</h4>
          <p>This is the Contact section content.</p>
        </section>
      </div>
    </div>
  );
}

export default App;
