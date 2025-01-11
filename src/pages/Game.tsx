import { AgeVerification, GameFrame } from "~/screens"

export const Game = () => {
    return <main style={{ height: '80vh' }} className="main container">
        <AgeVerification />
        <GameFrame />
    </main>
}