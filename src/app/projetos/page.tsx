'use client'
import { Projects } from '@/components/Projects/Projects'
import { Footer } from '@/components/Footer/Footer'
import axios from 'axios'
import { instaApi } from '@/utils/instaApi'

export default async function Home() {

    // instaApi()

    return (
        <main className="flex flex-col items-center">
            <Projects />
            <div className={'hidden lg:block lg:w-full'}>
                <Footer />
            </div>

        </main>
    )
}
