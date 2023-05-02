import React from "react";
import Header from "../components/Header";
import LogIn from "../components/LogIn";
import BookCardCatalog from "../components/BookCardCatalog";

function CatalogPage() {
  const bookArray = [
    { imageUrl: "/img/Шифр судьбы.png", bookName: "Шифр судьбы" },
    { imageUrl: "/img/45 оттенков.png", bookName: "45 оттенков" },
    { imageUrl: "/img/Похождения хуесоса.png", bookName: "Похождения хуесоса" },
    {
      imageUrl: "/img/Педофил и девочка (Лолита).png",
      bookName: "Педофил и девочка",
    },
    { imageUrl: "/img/Похождения хуесоса.png", bookName: "Похождения хуесоса" },
    { imageUrl: "/img/Похождения хуесоса.png", bookName: "Похождения хуесоса" },
  ];

  const [loginOpened, setLoginOpened] = React.useState(false);

  return (
    <div className="catalog_wrapper">
      {loginOpened && <LogIn onClose={() => setLoginOpened(false)} />}
      <div className="catalog_header">
        <Header onClickLogIn={() => setLoginOpened(true)} />
      </div>

      <div className="catalog_main">
        <div className="catalog_main_text">
          <p>Каталог</p>
        </div>
        <div className="catalog_cards_wrapper">
          {bookArray.map((obj) => (
            <BookCardCatalog imageUrl={obj.imageUrl} bookName={obj.bookName} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CatalogPage;
