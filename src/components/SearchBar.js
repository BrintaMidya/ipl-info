import React from "react";

class SearchBar extends React.Component {
	state = { term: "" };

	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.onSearch(this.state.term);
	};

	render() {
		return (
			<div className="ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label>Search Events</label>
						<input
							type="text"
							value={this.state.term}
							onChange={(e) => {
								this.setState({ term: e.target.value });
							}}
						/>
					</div>
					<button type="submit" className="ui primary button">
						Search
					</button>
				</form>
				<div class="ui divider"></div>
				<div class="ui form">
					<div class="field">
						<label>Show me</label>
						<select multiple="" class="ui fluid dropdown">
							<option value="">All results</option>
							<option value="players">Players</option>
							<option value="teams">Teams</option>
							<option value="venues">Venues</option>
							<option value="owners">Owners</option>
						</select>
					</div>
				</div>
			</div>
		);
	}
}

export default SearchBar;
