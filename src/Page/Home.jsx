import React from 'react'
import TopSkils from '../Components/Top_Skils/TopSkils'
import Header from '../Components/Header/Header'
import Greatworks from '../Components/Greatworks/Greatworks'
import UPTech from '../Components/UPTech/UPTech'
const Home = () => {
    return (
        <div>
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
            </main>
        </div>
    )
}

export default Home