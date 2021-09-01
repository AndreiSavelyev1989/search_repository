export const GitHub = () => {


    return (
        <div>
            <input type="text"/><button>find</button>
            <ul>
                {["Andrei", "Dimych"].map(el => <li>{el}</li>)}
            </ul>
        </div>
    )
}