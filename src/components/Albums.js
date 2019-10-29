import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAlbums } from "../actions/albumAction";

const album = {
  marginBottom: "20px"
};

const albums1 = {
  maxWidth: "35px"
};

class Albums extends Component {
  componentWillMount() {
    this.props.fetchAlbums();
  }
  render() {
    const albumList = this.props.albums.map(album => (
      <div className="row" style={album} key={album.id}>
        <div className="col-1 albums" style={albums1}>
          {album.id}
        </div>
        <div className="col-11 albums">{album.title}</div>
      </div>
    ));
    return (
      <div>
        <h1>Albums</h1>
        {albumList}
      </div>
    );
  }
}

Albums.propTypes = {
  fetchAlbums: PropTypes.func.isRequired,
  albums: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  albums: state.posts.albums
});

export default connect(
  mapStateToProps,
  { fetchAlbums }
)(Albums);
