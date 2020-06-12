import React from 'react';
import { Route, Link } from 'react-router-dom';

import './css/set.scss';
import { SetSystem } from './component/system';
import { SetPerson } from './component/person';
import { SetTime} from './component/time';


class Set extends React.Component {
  componentWillMount() {
    console.log(this.props.match.path);
  }

  render() {
    return (
      <div className="set-box">
        <div className="link-list">
          <Link to={`${this.props.match.path}/system`}>system</Link>
          <Link to={`${this.props.match.path}/person`}>person</Link>
          <Link to={`${this.props.match.path}/time`}>time</Link>
        </div>

        <div className="child-router">
          <Route path={`${this.props.match.path}/system`} component={SetSystem} />
          <Route path={`${this.props.match.path}/person`} component={SetPerson} />
          <Route path={`${this.props.match.path}/time`} component={SetTime} />
        </div>
      </div>
    );
  }
}

export default Set;
