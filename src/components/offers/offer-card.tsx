import { generatePath, Link } from 'react-router-dom';
import { TypeOfferPage } from '../../types/offer';
import { AppRoutes } from '../../const';

import { useAppDispatch } from '../../hooks';
import { selectOffer } from '../../store/app-slice/app-slice';

import cn from 'classnames';

type OfferCardProps = {
  oneOffer: TypeOfferPage;
}

function OfferCard({oneOffer}: OfferCardProps): JSX.Element {
  const { price, rating, title, type, isPremium, id, images, isFavorite } = oneOffer;
  const dispatch = useAppDispatch();

  return (
    <article
      className="cities__card place-card"
      onMouseOver={() => dispatch(selectOffer(oneOffer.id))}
      onMouseOut={() => dispatch(selectOffer(null))}
    >
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={generatePath(AppRoutes.Offer, {id: `${id}` })}>
          <img className="place-card__image" src={images[0]} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro; {price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={cn('place-card__bookmark-button button', 'place-card__bookmark-button--active' && isFavorite)} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: String(rating * 20).concat('%')}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoutes.Offer, {id: `${id}` })}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
