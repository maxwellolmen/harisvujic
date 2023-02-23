function Nav() {
  return(
      <nav className="fixed w-15 z-10 top-0 bg-yellow-600 right-0 h-26">
      <div className="container max-w-7xl mx-auto sm:px-4 lg:px-10 py-4 flex items-center">
        <div className="flex-shrink-0">
          <a href="/">
            <img
              className="h-14 w-14"
              src="https://firebasestorage.googleapis.com/v0/b/exd-project-254c9.appspot.com/o/Asset%2013%404x.png?alt=media&token=d4335a1b-37fd-48de-876b-c531e9a82313"
              alt="MFC-logo"
            />
            Profile
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Nav