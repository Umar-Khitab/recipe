import './Input.css'
const Input = ({query, setQuery, setEndpoint}) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        setEndpoint(query)
    }
    return ( <div>
        <form onSubmit={handleSubmit}>
            <input placeholder="Search your fovarite recipe"
             value={query}
             onChange={e => setQuery(e.target.value)}
               />
            <button>Submit</button>
        </form>
    </div> );
}
 
export default Input;