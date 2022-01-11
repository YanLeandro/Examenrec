const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
    nav {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color:  #0a0a23;
    }

    ul {
      height:;
      padding: 10px;
      border:20px;

    }
    
    ul li {
      list-style: none;
      display: inline;
    }
    
    a {
      font-weight: 700;
      margin: 0 25px;
      color: #fff;
      text-decoration: none;
    }
    
    a:hover {
      padding-bottom: 5px;
      color:green;
      box-shadow: inset 0 -2px 0 0 #fff;
    }
  </style>
  <header>
    <nav>
      <ul>
      <nav class="navbar navbar-expand-lg navbar-dark border border-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="index.html">
          <img src=" https://dummyimage.com/100x30/007bff/efefef" alt="UI Kit"
            style="width: 100px;">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav ms-auto me-sm-2 mt-2 mt-lg-0">
            <li class="nav-item active me-3">
              <a class="nav-link" href="#">Home<span
                  class="sr-only"></span></a>
            </li>
            <li class="nav-item me-3">
              <a class="nav-link" href="#col-12 col-md-6">Sobre
               nos</a>
            </li>
           
            <li class="nav-item me-3">
              <a class="nav-link" href="#Nuestro trabajo">Nuestro equipo</a>
            </li>
            <li class="nav-item me-3">
              <a class="nav-link" href="#Contacto">Contacto</a>
            </li>
            
             
            </li>
          </ul>

        </div>
      </div>
    </nav>

        <li><a href="index.html"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
      </ul>
    </nav>
  </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);
