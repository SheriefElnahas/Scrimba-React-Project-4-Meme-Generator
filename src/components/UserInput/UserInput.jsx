import './UserInput.css';


function UserInput() {
    return <div className='user-input'>
        <input type="text" className='first-input' />
        <input type="text" className='second-input' />
        <button className="get-meme">Get a new meme image</button>
    </div>
}

export default UserInput;