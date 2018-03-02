import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  fetchYoutube,
  exampleFetch
} from '../../modules/counter'
import Pitch from './pitch'
import Charts from './charts'
import Pie from './pie'



class Home extends React.Component {
  render(){

    //console.log(this);
    let props = this.props;
    let videoId;
    if (this.props.youtube.items) {
      videoId = `https://www.youtube.com/embed/${this.props.youtube.items[0].id.videoId}`
    }
    ////console.log(this.props.youtube.items);
    ////console.log(videoId);

    return(
      <div>
        <h1>Home</h1>
        <iframe src={videoId} title='youtube-vid' frameBorder="0" allowFullScreen></iframe>
        <p>Count: {props.count}</p>
        <Pitch />

        <Charts notes = {props.notes}/>
        <Pie pieNotes ={props.pieNotes}/>

        <p>
          <button onClick={props.exampleFetch}>fetch something</button>
          <button onClick={props.increment} disabled={props.isIncrementing}>Increment</button>
          <button onClick={props.fetchYoutube} >Youtube </button>
          <button onClick={props.incrementAsync} disabled={props.isIncrementing}>Increment Async</button>
        </p>

        <p>
          <button onClick={props.decrement} disabled={props.isDecrementing}>Decrement</button>
          <button onClick={props.decrementAsync} disabled={props.isDecrementing}>Decrement Async</button>
        </p>

        <p><button onClick={() => props.changePage()}>Lets look at more charts</button></p>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing,
  youtube: state.counter.payload,
  notes: state.counter.notes,
  pieNotes: state.counter.pieNotes
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  fetchYoutube,
  changePage: () => push('/newPage')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
