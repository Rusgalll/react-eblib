function BookCardHome(props) {
  return (
    <img
      className="main-screen-2-img"
      src = {props.imageUrl}
      alt= {props.imageAlt}
    />
  );
}

export default BookCardHome;
