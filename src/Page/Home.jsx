import React from 'react'
import TopSkils from '../Components/Top_Skils/TopSkils'
import Header from '../Components/Header/Header'
import Greatworks from '../Components/Greatworks/Greatworks'
import UPTech from '../Components/UPTech/UPTech'
import AboutUs from '../Components/Talk about us/AboutUs'
const Home = () => {
    return (
        <div className='pb-[20px]'>
            <header>
                <Header />
            </header>
            <main>
                <section>
                    <TopSkils />
                </section>
                <section>
                    <Greatworks />
                </section>
                <section>
                    <UPTech />
                </section>
                <section>
                    <AboutUs />
                </section>
            </main>
        </div>
    )
}

export default Home