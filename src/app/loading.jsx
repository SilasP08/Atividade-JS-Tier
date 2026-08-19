import FigureLoading from "@/components/figureLoading";

export default function Loading(){
    return (
        <>
            <div className="conteiner-notfound">
                <div className="flex-notfound">
                    <h2>Carregando</h2>
                    <FigureLoading/>
                </div>
            </div>
        </>
    )
}