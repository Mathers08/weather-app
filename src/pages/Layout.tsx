import { Outlet } from "react-router-dom";
import { Navbar, Search } from "../components";
import useLocalStorage from "use-local-storage";
import '../index.scss';

const Layout = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  const switchTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <div className="wrapper" data-theme={theme}>
      <Navbar switchTheme={switchTheme} />
      <main className="main">
        <Search />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;