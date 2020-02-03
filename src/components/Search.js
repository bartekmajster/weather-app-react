import React from 'react';

const Search = props => (
	<form onSubmit={props.submit}>
		<input type="text" placeholder='i.e. Kraków' onChange={props.change} value={props.value} />
		<button>Search Your City</button>
	</form>
);

export default Search;