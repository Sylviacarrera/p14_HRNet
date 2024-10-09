
const EntriesDropdown = ({ entriesPerPage, setEntriesPerPage }) => {
  const handleEntriesChange = (event) => {
    setEntriesPerPage(Number(event.target.value));
  };

  return (
    <div className="entries-dropdown">
      <label htmlFor="entries">Show </label>
      <select id="entries" value={entriesPerPage} onChange={handleEntriesChange}>
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>
      <span> entries</span>
    </div>
  );
};

export default EntriesDropdown;
