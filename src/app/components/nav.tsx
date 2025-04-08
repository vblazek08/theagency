const Nav = () => {
  return (
    <nav className="flex justify-between py-4  text-white">
      <a href="">
        <h1 className="font-extrabold text-2xl">theAgency</h1>
      </a>
      <div className="hidden">
        <a href="">home.</a>
        <a href="">about.</a>
        <a href="">service.</a>
        <a href="">projects.</a>
        <a href="">testimonials.</a>
        <a href="">contact.</a>
      </div>
    </nav>
  );
};

export default Nav;
