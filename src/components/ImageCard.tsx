import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import Show from '../models/Show';

import './ImageCard.scss';
import { getCalcRating } from '../helpers/functions';

type Props = {
  data: Show;
};

const ImageCard = (props: Props) => {
  return (
    <div className="ImageCard">
      <Link to={`/show/${props.data.id}`}>
        <img src={props.data.image?.medium} alt={props.data.name} />
      </Link>

      <Rating
        className='rating'
        readonly
        initialRating={getCalcRating(props.data?.rating.average)}
        emptySymbol='fa fa-star-o medium'
        fullSymbol='fa fa-star medium'
      />

      <p>{props.data.name}</p>
    </div>
  );
};

export default ImageCard;