import React from 'react';

function Search(props) {


  // render() {
  //   let contactsToSearch = this.props.contacts;
  //   let searchQuery = this.state.search.trim().toLowerCase();

  return (
    <div>
      <h2 className="section-title" >Filter by name</h2>
      <label>Search by Name
        <input
          type="text"
          value={props.nameSearch}
          onChange={props.handleSearchNames}
        />
      </label>
      <div>

      </div>
    </div>
  )

}

export default Search;
