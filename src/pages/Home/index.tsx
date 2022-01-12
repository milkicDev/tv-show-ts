import React from 'react';
import ShowsApi from '../../api/Shows';
import ImageCard from '../../components/ImageCard';
import Schedule from '../../models/Schedule';

type Props = {};
type State = {
  data: Array<Schedule>,
};

class Home extends React.Component<Props, State> {
  state = {
    data: [],
  };

  componentDidMount() {
    ShowsApi.fetchAll()
      .then(res => {
        this.setState({ data: res });
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div>
        <div className='header offset-bottom'>
          <div className='container'>
            <p>
              TV Show and web series database.<br />
              Create personalized schedules. Episodes guide, cast, crew and<br /> character information.
            </p>

            <h2 className='offset-top'>Last Added Shows</h2>
          </div>
        </div>

        <div className='container offset--top'>
          <div className='flex-grid'>
            {this.state.data.map((item: Schedule, iItem: number) => (
              <ImageCard key={iItem} data={item.show} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
