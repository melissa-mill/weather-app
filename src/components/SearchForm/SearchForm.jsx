import styles from "./SearchForm.module.css";

function SearchForm({ loading, searchTerm, setSearchTerm, handleSubmit }) {
  return (
    <form id="search-form" className={styles.search_form} onSubmit={handleSubmit}>
      <input
        id="search-input"
        className={styles.search_input}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        autoComplete="off"
        placeholder="Search for a place..."
      />
      <button id="submit-btn" className={styles.submit_btn} disabled={!searchTerm || loading}>
        Search
      </button>
    </form>
  );
}

export default SearchForm;
