const SearchBar = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Create a new todo..." type="text" name="todos" />
    </form>
  );
};

export default SearchBar;
