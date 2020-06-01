import React from 'react';
import './left-bar.css'


class AllThreads extends React.Component {
    render() {
      const items = []
      for (const [index, value] of this.props.threads.entries()) {
        items.push(<div className="list-item"><p className="list-item__text">{value}</p></div>)
      }
      return (
          <div>
              <div className="list-header">
                <p className="list-header__text">потоки</p>
                <p className="list-header__right">{this.props.threads.length}</p>
            </div>
            {items}
          </div>
      );
    }
}


export default AllThreads;
