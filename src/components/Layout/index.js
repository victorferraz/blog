import Header from '../Header';
import Footer from '../Footer';
import { LayoutMain } from './ui';

const Layout = ({children}) => (
  <>
    <Header />
    <LayoutMain>
      <section>
        {children}
      </section>
    </LayoutMain>
    <Footer />
  </>
);

export default Layout;
