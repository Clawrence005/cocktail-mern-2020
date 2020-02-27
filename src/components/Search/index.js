import React from 'react';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state={
      search: ''
    }
this.handleSearchChange = this.handleSearchChange.bind(this);
  }

handleSearchChange = (event) =>{
  this.setState({search: event.target.value});
  console.log('this.state.search: ',this.state.search)
}
// static getDerivedStateFromProps(props, state) {
//     if (props.currentRow !== state.lastRow) {
//       return {
//         isScrollingDown: props.currentRow > state.lastRow,
//         lastRow: props.currentRow,
//       };
//     }

render(){ 
  let contactsToSearch= this.props.contatcts;
  let searchQuery= this.state.search.trim().toLowerCase();

  // if (searchQuery.length>0){
  //   contactsToSearch= contactsToSearch.filter((contact)=>{
  //     return contact.name.match(searchQuery)
  //   })
  // }
  return(
<div>
<h2>Search</h2>
<input 
className="neumorphism-negative-template"
type="text"
value={this.state.search}
onChange={this.handleSearchChange.bind(this)}
/>
<div>

</div>
</div>
  )}
}

export default Search;
