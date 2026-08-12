import "./cadastro.css"

export default function Cadastro() {
    return (
        <>
            <div className="conteiner">
                <div className="card-cadastro">
                    <div className="titulo-form">
                        <h1>Cadastre-se</h1>
                        <p>Preencha as informações abaixo.</p>
                    </div>
                    <div className="inputs">
                        <label>Nome</label>
                        <input type="text" placeholder="Nome" />
                    </div>
                    <div className="inputs">
                        <label>Telefone</label>
                        <input type="text" placeholder="telefone" />
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
                        <button className="cadastro">
                            Cadastrar-se
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}