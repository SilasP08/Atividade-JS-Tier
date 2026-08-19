'use client';
import FigureError from "@/components/figureError";

export default function Error() {
    return (
        <>
           <div className="conteiner-notfound">
                <div className="flex-error">
                    <h2>Erro Inesperado</h2>
                    <FigureError/>
                </div>
            </div>
        </>
    )
}