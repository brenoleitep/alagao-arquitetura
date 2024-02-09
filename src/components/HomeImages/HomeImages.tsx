import Image from 'next/image'
import img1 from '/public/img1.png'
import img2 from '/public/img2.png'
import img3 from '/public/img3.png'
import img4 from '/public/img4.png'
import img5 from '/public/img5.png'
import Link from 'next/link'

export const HomeImages = () => {
    return (
        <div className={'flex flex-col gap-2 w-full'}>
            <div className="relative w-full lg:h-[330px] overlayContainerImage">
                <Link href={'/projetos'} className="text">
                    <div className="overlay">
                        <div className="text-container">
                            Projetos
                        </div>
                    </div>

                    <Image src={img1} alt={'Projetos'} className={'w-full max-h-full bg-center imgOverlay'} />
                </Link>

            </div>

            <div className="relative w-full lg:h-[330px] overlayContainerImage">
                <Link href={'/sobre'} className="text">
                    <div className="overlay">
                        <div className="text-container">
                            Sobre
                        </div>
                    </div>

                    <Image src={img2} alt={'Sobre'} className={'w-full max-h-full imgOverlay'} />
                </Link>
            </div>

            <div className="relative w-full lg:h-[330px] overlayContainerImage">
                <Link href={'/contato'} className="text">

                    <div className="overlay">
                        <div className="text-container">
                            Contato
                        </div>
                    </div>

                    <Image src={img3} alt={'Contato'} className={'w-full max-h-full imgOverlay'} />
                </Link>
            </div>

            <Image src={img4} alt={'Projetos'} className={'w-full lg:h-[330px]'} />
            <Image src={img5} alt={'Projetos'} className={'w-full lg:h-[330px]'} />
        </div>
    )
}