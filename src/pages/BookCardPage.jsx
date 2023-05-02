import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LogIn from "../components/LogIn";
import BookCard from "../components/BookCard";

function BookCardPage() {
  const bookInfo = [
    {
      imageUrl: "/img/Педофил и девочка (Лолита).png",
      BookName: "Лолита",
      BookGenre: "Роман",
      BookAbout:
        "«Лолита» (1955) — один из самых значительных романов XX века, входящий в список 100 лучших книг по версии журнала Time,переведенный на все основные языки и дважды экранизированный.",
      alt: "Обложка 1",
    },
  ];
  const [loginOpened, setLoginOpened] = React.useState(false);

  return (
    <div className="screen">
      {loginOpened && <LogIn onClose={() => setLoginOpened(false)} />}
      <div className="screen_1">
        <Header onClickLogIn={() => setLoginOpened(true)} />
      </div>

      {bookInfo.map((obj) => (
        <BookCard
          imageUrl={obj.imageUrl}
          BookName={obj.BookName}
          BookGenre={obj.BookGenre}
          BookAbout={obj.BookAbout}
          alt={obj.imageAlt}
        />
      ))}
      <Footer />
    </div>
  );
}

export default BookCardPage;
