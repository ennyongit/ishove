import TopHeader from "./top/TopHeader";
import MiddleHeader from "./middle/MiddleHeader";
import BottomHeader from "./bottom/BottomHeader";

const Header = () => {
    return(
        <>
        <section id="header" className="header">
            <TopHeader/>
            <MiddleHeader/>
            <BottomHeader/>
        </section>
        </>
    )
}

export default Header;