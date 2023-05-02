import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BookCardHome from "../components/BookCardHome";
import LogIn from "../components/LogIn";

function HomePage() {
  const bookArray = [
    { imageUrl: "/img/Шифр судьбы.png", alt: "Обложка 1" },
    { imageUrl: "/img/45 оттенков.png", alt: "Обложка 2" },
    { imageUrl: "/img/Похождения хуесоса.png", imageAlt: "Обложка 3" },
    { imageUrl: "/img/Педофил и девочка (Лолита).png", alt: "Обложка 4" },
  ];

  const [loginOpened, setLoginOpened] = React.useState(false);

  return (
    <div className="wrapper">
      {loginOpened && <LogIn onClose={() => setLoginOpened(false)} />}
      <div className="main-screen-1">
        <Header onClickLogIn={() => setLoginOpened(true)} />

        <div className="main-title">
          <div className="main-books">
            <img
              className="main-screen-1-img"
              src="/img/Шифр судьбы.png"
              alt="Обложка 1"
            />
            <p className="name-book">Шифр судьбы</p>
          </div>

          <div className="about">
            <h1 className="company-name">EbLib</h1>
            <h3 className="main-disc">Книги на все случаи жизни</h3>
          </div>

          <div className="main-books">
            <img
              className="main-screen-1-img"
              src="/img/45 оттенков.png"
              alt="Обложка 2"
            />
            <p className="name-book">45 оттеноков зеленого</p>
          </div>
        </div>
      </div>

      <div className="main-screen-2">
        <div className="best-books-text">
          <h2 className="slog-1">Бестселлеры</h2>
          <p className="slog-2">
            Главные хиты нашей библиотеки - книги полюбившимся всем
          </p>
        </div>

        <div className="best-books-card">
          {bookArray.map((obj) => (
            <BookCardHome imageUrl={obj.imageUrl} alt={obj.imageAlt} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
