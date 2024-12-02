import Logo from "./Logo";

const Navigation = (props) => {
  const { children } = props;

  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
};

export default Navigation;
