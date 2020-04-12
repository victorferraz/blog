import { ProfilePic } from '../Shared/';

export default () => (
  <header>
    <nav>
      <ul>
        <li>
          <a href="/" className="logo">
            VictorFerraz
          </a>
        </li>
        <li>
          <ul>
            <li>
              <a href="/blog">
                About
              </a>
            </li>
            <li>
              <a href="/blog">
                Blog
              </a>
            </li>
            <li>
              <a href="mailto:contato@victorferraz.com.br">
                Contact
              </a>
            </li>
            <li>
              <ProfilePic src="/victor-ferraz.jpg" />
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
);
