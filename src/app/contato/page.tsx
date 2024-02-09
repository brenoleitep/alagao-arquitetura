import Image from 'next/image'
import anaeliviacontato from '/public/anaeliviacontato.png'
import imgContactDesk from '/public/imgContactDesk.png'
import { Footer } from '@/components/Footer/Footer'

export default function Home() {
    return (
        <main className="flex flex-col">
            <div className="flex flex-col items-center gap-6 lg:hidden">
                <Image src={anaeliviacontato} alt={'Ana e Livia Alagão'} />

                <button className="btn max-w-[360px] w-[90%] button bg-[#92E2A3] uppercase">Falar no whatsapp</button>

                <p className={'title'}>Será um prazer te atender!</p>
            </div>


            <div className={'hidden lg:flex relative w-full'}>
                <Image src={imgContactDesk} alt={'Escritório elegante'} className={'w-full max-h-[766px]'} />

                <div className={'absolute flex flex-col items-center gap-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'}>
                    <p className={'titleContact'}>Será um prazer te atender!</p>

                    <button className="btn max-w-[360px] w-[90%] button bg-[#92E2A3] uppercase">Falar no whatsapp
                    </button>
                </div>

            </div>

                <Footer />
        </main>
    )
}
