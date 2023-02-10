export default function Form() {
    const handleSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlfor="to-do">To do</label>
            <input
            name="title"
            id="to-do"
            type={text}/>
        </form>
    )
}