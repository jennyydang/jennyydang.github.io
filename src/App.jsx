import "./assets/styles/main.scss";
import Hero from "/src/components/Hero.jsx";

function App() {
    return (
        <Hero
            color="#fefae0"
            headline="Coming Soon"
            subheadline="Jenny Dang's portfolio is under construction."
            primarybtn="Email me"
            primarylink="mailto:jennyydang@gmail.com"
            secondarybtn="Download resume"
            secondarylink="/src/assets/docs/JennyDang-Resume.pdf"
            download="JennyDang-Resume"
        />
        // <div>
        //     <h1 className="text-3xl font-bold underline">Hello World</h1>
        // </div>
    );
}

export default App;
