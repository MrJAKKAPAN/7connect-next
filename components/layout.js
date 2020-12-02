import Header from "./header";
import Footer from "./footer";
import Nav from "./lowheader";

const layout = ({ children }) => (
  <div>
    <Header />
    <Nav />
    {children}
    {/* <Footer /> */}
  </div>
);
export default layout;
