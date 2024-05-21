import { Link } from "react-router-dom";

function home(){
    return(
        <div>
            <h1>Bem-Vindo a pagina home</h1>
            <span>Moyses kaminski</span>
            <br/>

            <link to="/sobre">sobre</link><br/>
            <link to="/contato">contato</link>
            <link to="/produto">Acessar produto</link>

        </div>
    )

}
export default home;