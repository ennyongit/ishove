import TopHeader from "./TopHeader";
import MiddleHeader from "./MiddleHeader";
import BottomHeader from "./BottomHeader";

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