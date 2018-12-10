import React, { Component } from 'react';
import './App.css';
import Moviecard from './Cardlist'
import RatingFilter from './RatingFilter'
import Searchbymoviename from './SearchByMovieName.js'

const theCards = [
  {
    id: '0001',
    name: '12 dates of christmas',
    image: 'https://freeform.azureedge.net/showms/2018/305/fe2de012-45b2-4808-84b0-5ee0e777d31c.jpg',
    rate:'5',
    alt: 'Action, Adventure',
   },
   {
    id: '0002',  
    name: 'alvin and the chipmunks',
      image: 'https://freeform.azureedge.net/showms/2017/334/5ba71ac5-5313-4cee-898e-b99516f15140.jpg',
      rate:'2',
      alt: 'Action, Adventure',
   },
   {
      id:'0003',
      name: 'alvin and the chipmunks',
      image: 'https://freeform.azureedge.net/showms/2017/334/5ba71ac5-5313-4cee-898e-b99516f15140.jpg',
      rate:'3',
      alt: 'Adventure',
   },
   {
      id:'0004',
      name: 'the abduction',
      image: 'https://freeform.azureedge.net/showms/2017/334/5ba71ac5-5313-4cee-898e-b99516f15140.jpg',
      rate:'5',
      alt: 'Action, Adventure, Fantasy',
     },
     {
        id:'0005',
        name: 'the abduction',
        image: 'https://freeform.azureedge.net/showms/2018/327/15d42b7c-e011-4db7-a4b5-cd7d7d3dd0c7.jpg',
        rate:'4',
        alt: ' Adventure',
     },
    
     {
      id:'0007',
      name: 'the abduction',
      image: 'https://freeform.azureedge.net/showms/2018/327/15d42b7c-e011-4db7-a4b5-cd7d7d3dd0c7.jpg',
      rate:'2',
      alt: 'Adventure',
     },
     {
        id:'0008',
        name: '12 dates of christmas',
        image: 'https://freeform.azureedge.net/showms/2018/327/15d42b7c-e011-4db7-a4b5-cd7d7d3dd0c7.jpg',
        rate:'4',
        alt: 'Drama',
     },
     {  id:'0009',
        name: 'alvin and the chipmunks',
        image: 'https://freeform.azureedge.net/showms/2018/327/15d42b7c-e011-4db7-a4b5-cd7d7d3dd0c7.jpg',
        rate:'5',
        alt: 'Action, Sci-Fi',
     },
    
   
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chosedrate: 5,
      movies: theCards,
      titleFilter: ''
    }

  }
  getVisibleMovies() {
    return this.state.movies.filter(
      el =>
        el.rate >= this.state.chosedrate &&
        el.name.toLocaleLowerCase().includes(this.state.titleFilter.toLocaleLowerCase())
      )
  }

  addNewMovie(newMovie) {
    
      theCards.push(newMovie)
   
  }
  remove=(i)=>
    {
        this.setState({
          movies:this.state.movies.filter((el,index)=>
        {
            return index!==i
        })
        })
    }

 render() {
    return (
      <div className="App">
       <div className="headerstyling">
      <Searchbymoviename NameFilter value={this.state.titleFilter}
      onChange={(newNameFilter) => {
        this.setState({
          titleFilter: newNameFilter
        })
      }}/>
      
    
      <RatingFilter count={this.state.chosedrate} rChange={(newr) => { this.setState({ chosedrate: newr})}} /> 
      </div>
      <Moviecard  movies={this.getVisibleMovies()}
      
      onAddMovie={(newMovie) => this.addNewMovie(newMovie)} 
      remove={(i)=>this.remove(i)}/>

      
      </div>
    );
  }
}

export default App;
