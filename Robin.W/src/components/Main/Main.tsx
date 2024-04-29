
import Top from "../Top/Top.tsx";
import Experience from "../Experience/Experience.tsx";
import Philosophy from "../Philosophy/Philosophy.tsx";
import Skillset from "../Skillset/Skillset.tsx";
import Company from "../Company/Company.tsx";
import MyProjects from "../MyProjects/MyProjects.tsx";
import Instagram from "../Instagram/Instagram.tsx";
import Dribbble from "../Dribbble/Dribbble.tsx";
import Response from "../Response/Response.tsx";
import Photography from "../Photography/Photography.tsx";
import Contact from "../Contact/Contact.tsx";


function Main(){
    return(
        <main>
            <Top/>
            <Experience/>

            <Philosophy/>
            <Skillset/>
            <Company/>
            <MyProjects/>

            <Instagram/>
            <Dribbble/>
            <Response/>
            <Photography/>

            <Contact/>
        </main>
    )
}

export default Main