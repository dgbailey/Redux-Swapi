import React from "react";
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';
import { CharacterList } from "../components";
import {fetchCharacters} from '../actions/index';
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchCharacters();
  }

  render() {
    
    if (this.props.fetching) {
      return(
      <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />
      )
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}
const mapStateToProps = (state) =>({
  characters:state.charsReducer.characters,
  fetching:state.charsReducer.fetching,
  error:state.charsReducer.error
})
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(mapStateToProps
   ,
  {
   fetchCharacters
  }
)(CharacterListView);
