import React from 'react';
import { withTranslation } from 'react-i18next';
import DOMPurify from 'dompurify';
import Rating from 'react-rating';
import { Redirect } from 'react-router-dom';
import ShowsApi from '../../api/Shows';
import { getCalcRating } from '../../helpers/functions';
import Actor from '../../models/Actor';
import Show from '../../models/Show';
import ActorLists from '../../components/ActorsList';

type Props = {
  id: number;
  t: Function;
};
type State = {
  data: Show | object;
  cast: Array<Actor>;
  loading: boolean;
};

class ShowDetails extends React.Component<Props, State> {
  state = {
    data: {} as Show,
    cast: [],
    loading: true,
  };

  componentDidMount() {
    ShowsApi.fetch(this.props.id)
      .then((res) => {
        this.setState({ data: res, loading: false });

        return res.id;
      })
      .then((id) => {
        ShowsApi.getCast(id)
          .then((res) => this.setState({ cast: res }))
          .catch((error) => console.error(error));
      })
      .catch((error) => {
        console.error(error);
        this.setState({ loading: false });
      });
  }

  render() {
    if (!this.state.loading && !this.state.data.id) {
      return <Redirect to='/shows' />;
    }

    const { t } = this.props;

    return (
      <div>
        <div className='header show-header'>
          <div className='container'>
            <div className='flex-grid'>
              <div className='img-placeholder'>
                <img
                  src={this.state.data?.image?.medium}
                  alt={this.state.data?.name}
                />
              </div>
              <div>
                <h3>{this.state.data?.name}</h3>

                <div className='flex-grid' style={{ marginTop: '1rem' }}>
                  <Rating
                    className='rating'
                    readonly
                    initialRating={getCalcRating(
                      this.state.data?.rating?.average
                    )}
                    emptySymbol='fa fa-star-o medium'
                    fullSymbol='fa fa-star medium'
                  />

                  {this.state.data?.rating?.average && (
                    <span className='dtc'>
                      {getCalcRating(this.state.data?.rating?.average)}/
                      <span className='rating'>5</span>
                    </span>
                  )}
                </div>

                <div
                  className='description'
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(this.state.data?.summary),
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='flex-grid space-between'>
            <div className='w-50'>
              <h2>{t('show.showInfo')}</h2>
              <div className='tableRow'>
                <React.Fragment>
                  <div>
                    <label>{t('show.streamedOn')}</label>
                    <span>{this.state.data.webChannel?.name}</span>
                  </div>
                  <div>
                    <label>{t('show.schedule')}</label>
                    <span>{this.state.data.schedule?.days?.join(', ')}</span>
                  </div>
                  <div>
                    <label>{t('show.status')}</label>
                    <span>{this.state.data.status}</span>
                  </div>
                  <div>
                    <label>{t('show.genres')}</label>
                    <span>{this.state.data.genres?.join(', ')}</span>
                  </div>
                </React.Fragment>
              </div>
            </div>
            <div className='w-50'>
              <h2>{t('show.staring')}</h2>
              <div className='tableRow'>
                {this.state.cast.map((actor: Actor, iActor: number) => (
                  <ActorLists key={iActor} actor={actor} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation('common')(ShowDetails);
