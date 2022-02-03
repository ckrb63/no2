const SearchBook = (props) => {
  const onClickHandler = () => {
    props.search(true);
  };

  return <div>
    <label>책을 검색해주세요.</label>
    <div>
      <input type="text"></input>
      <button onClick={onClickHandler}>검색</button>
    </div>
  </div>;
};
export default SearchBook;
