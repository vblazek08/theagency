const Nav = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 text-white">
      <a href="">theAgency</a>
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
