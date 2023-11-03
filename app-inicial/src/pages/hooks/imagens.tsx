import ImagemAleatoria from "@/componets/hooks/imagem_aleatoria";

export default function PageImagens() {
    return (
        <div className={'flex justify-center items-center h-screen'}>
            <ImagemAleatoria />
            <ImagemAleatoria />
            <ImagemAleatoria />
            <ImagemAleatoria />
        </div>
    )
}