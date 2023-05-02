function BookCardCatalog(props) {
  return (
    <div className="catalog_card">
      <img src = {props.imageUrl}></img>
      <p>{props.bookName}</p>
    </div>
  );
}

export default BookCardCatalog;
