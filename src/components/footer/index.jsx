import "./footer.css";


export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-container">

                    <div className="footer-logo">
                        <h2>Tier</h2>
                        <img src="/image/logo.png" alt="" />
                    </div>


                    <div className="footer-contato">
                        <h3>Contato</h3>
                        <p>Telefone: (11) 93056-9806</p>
                    </div>


                    <div className="footer-endereco">
                        <h3>Endereço</h3>
                        <p>Rua das Indústrias, 245</p>
                        <p>Centro Empresarial</p>
                        <p>São Paulo - SP, 09000-000</p>
                    </div>

                </div>
            </footer>
        </>
    )
}