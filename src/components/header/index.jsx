import "./header.css";
import Link from "next/link";

export default function Header() {
    return (
        <>
            <header>
                <div className="topo-esquerdo">
                    <img src="/image/logo.png" alt="" />
                </div>
                <div className="topo-direito">
                    <ul>
                        <li>
                            <Link className="link" href={"/"}>Inicio</Link>
                        </li>

                        <li>
                            <Link className="link" href={"/sobre"}>Sobre Nós</Link>
                        </li>
                        <li>
                            PODCAST
                        </li>
                        <li>
                            CAREERS
                        </li>
                        <li><Link href={"/login"} ><button className="btn-header">Login</button></Link></li>
                        <li><Link href={"/cadastro"} ><button className="btn-header">Cadastrar-se</button></Link></li>
                    </ul>

                </div>

            </header>
        </>
    )
}