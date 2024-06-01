import Create from "./Create";
import axios from "axios"

function Home(){

    return(
        <div className="home">
        <h1>NixNotes - Minimalistic note taking app</h1>
        <h2>Notes</h2>
        <Create/>
        </div>
    )
}

export default Home