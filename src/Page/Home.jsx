import React from 'react'
import TopSkils from '../Components/Top_Skils/TopSkils'
import Header from '../Components/Header/Header'
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
            </main>
        </div>
    )
}

export default Home