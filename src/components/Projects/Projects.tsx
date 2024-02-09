import Image from 'next/image'
import img1 from '/public/img1.png'
import img2 from '/public/img2.png'
import img3 from '/public/img3.png'
import img4 from '/public/img4.png'
import img5 from '/public/img5.png'
import Link from 'next/link'

export const Projects = () => {
    return (
        <div className={'flex flex-col gap-2 w-full'}>
            <div className="relative w-full">
                <div className="rightOverlay">
                    <div className="text-container">
                        <Link href={'/projetos'} className="text-sm textOverlay">Projeto A</Link>
                        <p className="subtitle">Residencial</p>
                    </div>
                </div>

                <Image src={img1} alt={'Projetos'} className={'w-full lg:h-[425px]'} />
            </div>

            <div className="relative w-full">
                <div className="rightOverlay">
                    <div className="text-container">
                        <Link href={'/sobre'} className="text-sm textOverlay">Projeto B</Link>
                        <p className="subtitle">Residencial</p>
                    </div>
                </div>

                <Image src={img2} alt={'Sobre'} className={'w-full lg:h-[425px]'} />
            </div>

            <div className="relative w-full">
                <div className="rightOverlay">
                    <div className="text-container">
                        <Link href={'/contato'} className="text-sm textOverlay">Projeto C</Link>
                        <p className="subtitle">Veraneio</p>

                    </div>
                </div>

                <Image src={img3} alt={'Projetos'} className={'w-full lg:h-[425px]'} />
            </div>

            <div className="relative w-full">
                <div className="rightOverlay">
                    <div className="text-container">
                        <Link href={'/contato'} className="text-sm textOverlay">Projeto D</Link>
                        <p className="subtitle">Veraneio</p>

                    </div>
                </div>

                <Image src={img4} alt={'Projetos'} className={'w-full lg:h-[425px]'} />
            </div>

            <div className="relative w-full">
                <div className="rightOverlay">
                    <div className="text-container">
                        <Link href={'/contato'} className="text-sm textOverlay">Projeto E</Link>
                        <p className="subtitle">Corporativo</p>

                    </div>
                </div>

                <Image src={img5} alt={'Projetos'} className={'w-full lg:h-[425px]'} />
            </div>
        </div>
    )
}