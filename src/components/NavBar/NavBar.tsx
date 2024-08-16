import UserBar from "../UserBar/UserBar";

const NavBar = () => {
  const userImage = "./src/assets/gato.png"
  const logo = "./src/assets/logo.png"

  return (
    <div>
      <nav className="flex justify-between">
        <img className="h-14 w-14" src={logo}/>
        <UserBar path={userImage} className="flex justify-items-end"/>
      </nav>
    </div>
  );
};

export default NavBar;
