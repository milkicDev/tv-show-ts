import Actor from '../models/Actor';
import './ActorsList.scss';

type Props = {
  actor: Actor;
};

export default function ActorLists(props: Props) {
  return (
    <div className='actor'>
      <span className='img'>
        {props.actor.person.image ? (
          <img
            src={props.actor.person?.image?.medium}
            alt={props.actor.person.name}
          />
        ) : (
          <i className='fa fa-user-circle fa-3x'></i>
        )}
      </span>
      <span>{props.actor.person.name}</span>
      <span>{props.actor.character.name}</span>
    </div>
  );
}
