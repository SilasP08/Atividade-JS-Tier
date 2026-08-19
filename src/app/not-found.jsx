import FigureNotFound from "@/components/figureNotFound";

export default function NotFound() {
    return (
        <>
            <div className="conteiner-not-found">
                <div className="flex-nortfound">
                    <h2>ERRO 404</h2>
                    <FigureNotFound/>
                </div>
            </div>
        </>
    )
}