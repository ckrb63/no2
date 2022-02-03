const SearchBook = (props) => {
  return <div>
    <label>책을 검색해주세요.</label>
    <div>
      <input></input>
      <button onClick={props.search}>검색</button>
    </div>
  </div>;
};
export default SearchBook;
