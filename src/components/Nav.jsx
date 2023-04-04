import SearchBar from "./SearchBar"

export default function Nav ({onSearch}){
  return (
    <div className="nav">
      <SearchBar onSearch={onSearch}/>
    </div>
  )
}