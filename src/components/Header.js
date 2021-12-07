function Header() {
    return (
        <header>
          <div className='header-inner'>
            <div className='logo'>Nicolas Rosal.</div>
            <nav>
              <ul>
                <li>
                  <a href='/'>Work Experience</a>
                </li>
                <li>
                  <a href='/'>Education</a>
                </li>
                <li>
                  <a href='/'>Personal Projects</a>
                </li>
                <li>
                  <a href='/'>Hobbies</a>
                </li>
                <li className='navbutton'>
                  <a href='/'>Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      );
};

export default Header;