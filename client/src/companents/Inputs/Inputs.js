function Inputs({ array }) {
    const res = array.map((elem, index) => <div key={index}> <input type="text" placeholder={elem} /></div>)
    return (
        <>
            {res}
        </>
    )
}
export default Inputs;