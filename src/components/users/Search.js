import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    isShownClearBtn: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter the text', 'light');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };

  showClearBtn = () => {
    return (
      <button
        className="btn btn-light btn-block"
        onClick={() => this.props.clearUsers()}>
        Clear
      </button>
    );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            value={this.state.text}
            name="text"
            placeholder="Search users..."
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />
          <input
            type="submit"
            name="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        {this.props.isShownClearBtn && this.showClearBtn()}
      </div>
    );
  }
}

export default Search;
