import Header from '../Header';
import { LayoutMain } from './ui';

const Layout = ({children}) => (
  <>
    <Header />
    <LayoutMain>
      <section>
        {children}
      </section>
    </LayoutMain>
  </>
);

export default Layout;
