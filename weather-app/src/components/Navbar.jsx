import { memo } from "react";
import { useSelector } from "react-redux";

function Navbar() {
  const { error } = useSelector((store) => store.weather);
  if(error) return;
  return (
    <nav className="w-full z-30 absolute flex justify-center items-center mt-2 mb-2">
      <img
        className="h-12 w-12 object-cover"
        src="https://merriam-webster.com/assets/mw/static/social-media-share/mw-logo-245x245@1x.png"
        alt=""
      />
    </nav>
  );
}
const Header = memo(Navbar);
export default Header;
