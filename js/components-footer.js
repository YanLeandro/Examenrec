const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
  <style>
    footer {
      height: 60px;
      padding: 0 10px;
      list-style: none;
      display: flex;
      flex-shrink: 0;
      justify-content: space-between;
      align-items: center;
      background-color: #dfdfe2;
    }

    ul {
      padding: 0;
    }
    
    ul li {
      list-style: none;
      display: inline;
    }
    
    a {
      margin: 0 15px;
      color: inherit;
      text-decoration: none;
    }
    
    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #333;
    }
    
    .social-row {
      font-size: 20px;
    }
    
    .social-row li a {
      margin: 0 15px;
    }
  </style>
  <footer>
  <section class="mb-0 mt-0">
      <div class="footer text-light">
        <div class="   bg-dark pt-5 pb-5">
          <div class="container">
            <div class="row">
              <div class="col-xs-6 col-sm-3">
               
                </a>
                <address class="color-light-20">
                 <h5>Calle Republica Argentina, 45</h5>
                <ul class="list-unstyled list-light">
                  <li>
                    <a href="#">AYAMS</a>
                  </li>
                </ul>
              </div>
              
              
              </div>
              <br style="clear:both" class="hidden-sm-up">
              <div class="col-xs-6 col-sm-3">
              
               
              </div>
              
               
              </div>
            </div>
            <hr>
            <div class="row f-flex justify-content-between" style="">
              <div
                class="col-md-4 text-xs-center   text-lg-right text-secondary my-1">
                <div class="btn-container  mt-1 text-md-end text-sm-center">
                  <div class="mb-1 mr-3 align-self-right pt-0 d-inline-block">
                    <a href="#" role="button"
                      class="text-light p-2 m-2 btn btn-round btn-rised btn-icon btn-primary">
                      <i class="fab fa-twitter fa-lg color-light"
                        aria-hidden="true"></i>
                    </a>
                    <a href="#" role="button"
                      class="text-light p-2 m-2 btn btn-round btn-rised btn-icon btn-primary">
                      <i class="fab fa-facebook fa-lg" aria-hidden="true"></i>
                    </a>
                    <a href="#" role="button"
                      class="text-light p-2 m-2 btn btn-round btn-rised btn-icon btn-primary">
                      <i class="fab fa-linkedin fa-lg" aria-hidden="true"></i>
                    </a>
                    <a href="#" role="button"
                      class="text-light p-2 m-2 btn btn-rised btn-round btn-icon btn-primary">
                      <i class="fab fa-google-plus fa-lg"
                        aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-popRpmFF9JQgExhfw5tZT4I9/CI5e2QcuUZPOVXb1m7qUmeR2b50u+YFEYe1wgzy"
      crossorigin="anonymous"></script>
    <ul>
    <li><a href="index.html">Home</a></li>
      <li><a href="#">Sobre Nos</a></li>
      <li><a href="#">Nuestro Equipo</a></li>
      <li><a href="#">Contacto</a></li>
    </ul>
    <ul class="social-row">
      <li><a href="https://github.com/my-github-profile"><i class="fab fa-github"></i></a></li>
      <li><a href="https://twitter.com/my-twitter-profile"><i class="fab fa-twitter"></i></a></li>
      <li><a href="https://www.linkedin.com/in/my-linkedin-profile"><i class="fab fa-linkedin"></i></a></li>
    </ul>
  </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const fontAwesome = document.querySelector('link[href*="font-awesome"]');
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    if (fontAwesome) {
      shadowRoot.appendChild(fontAwesome.cloneNode());
    }

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);
