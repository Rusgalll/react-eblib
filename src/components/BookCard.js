function BookCard(props){
    return(
        <div className="screen_2">
        <div className="screen_2_img">
          <img src = {props.imageUrl} alt= {props.imageAlt}></img>
        </div>

        <div className="screen_2_info">
          <div className="book_name">
            <h1>{props.BookName}</h1>
          </div>
          <div className="book_genre">
          {props.BookGenre}
          </div>
          <div className="book_about">
            <h3>
                {props.BookAbout}
            </h3>
          </div>
          <div className="download">
            <h1>Бесплатно</h1>
            <div className="down_btn">
              <button>Загрузить</button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default BookCard