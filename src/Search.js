function Search({handleSearch}) {
    function onChange(e) {
        handleSearch(e.target.value);
    }
    return (
        <div>
            <label>Search</label>
            <input type="text" onChange={onChange}/>
        </div>
    );
}
export default Search;