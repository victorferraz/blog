
import { Header } from './ui';

export default () => (
  <Header>
    <nav className="main">
      <ul>
        <li>
          <a href="/" className="logo">
            VictorFerraz
          </a>
        </li>
        <li>
          <ul>
            <li>
              <a href="/about">
                About
              </a>
            </li>
            <li>
              <a href="/">
                Blog
              </a>
            </li>
            <li>
              <a href="mailto:contato@victorferraz.com.br">
                Contact
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </Header>
);
