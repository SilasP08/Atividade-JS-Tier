import "./login.css"

export default function Login() {
    return (
        <>
            <div className="conteiner">
                <div className="card-login">
                    <div className="titulo-form">
                        <h1>Logar</h1>
                        <p>Preencha as informações abaixo.</p>
                    </div>
                    <div className="inputs">
                        <label>Email</label>
                        <input type="text" placeholder="Email" />
                    </div>

                    <div className="inputs">
                        <label>Senha</label>
                        <input type="text" placeholder="Senha" />
                    </div>

                    <div className="buttons">
                        <button className="logar">
                            Logar
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}