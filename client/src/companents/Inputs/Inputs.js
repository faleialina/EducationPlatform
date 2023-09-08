function Inputs({ array, inp, setInp }) {
    function changeInput(event) {
        setInp({ ...inp, [event.target.name]: event.target.value })
    }

    const res = array.map((elem, index) => <div key={index}> <input type="text" name={elem} placeholder={elem} onChange={changeInput} /></div>)

    return (
        <>
            {res}
        </>
    )
}
export default Inputs;