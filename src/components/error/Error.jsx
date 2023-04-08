import imagen from '../../img/principal.png'

const Error = ()=>{
    return (
        <div id="error">
        <img src={imagen} alt="imagen" width='45%'/>
        <h1>ERROR 404</h1>
        </div>
    )
}

export default Error;