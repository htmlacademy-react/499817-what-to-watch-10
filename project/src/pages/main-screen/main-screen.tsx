import { Page } from '../../const';
import PageTitle from '../../components/page-title/page-title-component';
import Footer from '../../components/footer/footer-component';
// import Header from '../../components/header/header';
import Logo from '../../components/logo/logo-component';
import CatalogComponent from '../../components/catalog/catalog-component';
import { Film } from '../../types/film';

type MainScreenProps = {
  films: Film[];
  filmName: string;
  filmReleaseDate: string;
  filmGenre: string;
}

function MainScreen({ films, filmName, filmReleaseDate, filmGenre }: MainScreenProps): JSX.Element {
  return (
    <>
      <PageTitle pageName={Page.Main}/>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        {/* <Header/> */}

        <header className="page-header film-card__head">
          <Logo/>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link" href='#TODO'>Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{filmName}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmGenre}</span>
                <span className="film-card__year">{filmReleaseDate}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div >
      </section >

      <div className="page-content">
        <CatalogComponent films={films} isMoreLikeThis={false} isShowMoreBtnShown />
        <Footer/>
      </div>
    </>
  );
}

export default MainScreen;
