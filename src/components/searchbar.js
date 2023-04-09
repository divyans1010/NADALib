const SearchBar = () => (
  <form action="/" method="get">
      <label htmlFor="header-search">
          <span className="visually-hidden">Search Books</span>
      </label>
      <input
          type="text"
          id="header-search"
          placeholder="Search blog posts"
          name="search" 
      />
      <button type="submit">Search</button>
  </form>
);

export default SearchBar;