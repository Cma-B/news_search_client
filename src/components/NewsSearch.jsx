import React, { Component } from 'react';
import { Button, Input } from 'semantic-ui-react'
import axios from 'axios'

 class NewsSearch extends Component {
   state = {
     searchTerm: "",
     articles: []
   }

   onChangeHandler = (e) => {
    
     this.setState({ searchTerm: e.target.value})
   }

  async performSearch() {
   
     const result =  await axios.get(`http://newsapi.org/v2/everything?q=${this.state.searchTerm}&from=2020-07-12&sortBy=publishedAt&apiKey=eae1a29865074492af4d8f77081210c9`);
     this.setState({ 
       articles: result.data.articles
     })
   }

  render() {
let  showSearchResult = this.state.articles.map(article => {
  return (
    <li>{article.title}</li>
  )
})
    return (
      <>
      <div>

       
      <Input
        type="text"
        data-cy="news-search"
        placeholder="Input search term"
        name="search"
        value={this.state.searchTerm}
        onChange={this.onChangeHandler} />
       
      <Button
      onClick={this.performSearch.bind(this)}
        data-cy="search-submit">
        Search
        </Button>

    </div>
    
            <ul>
            <li>{showSearchResult}</li>
          </ul>
          </>
    );
  }
}
export default NewsSearch;