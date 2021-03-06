import '../style/index.scss';
import Recipes from './Recipes';
import sword from "../images/swc-sword.png";
import swordSvg from "../images/sword.svg";

const App = () => {
    return (
        <>
            <section className="hero"></section>
            <main>
                <section>
                    <h1>Hello React!!!</h1>
                    <img src={sword} alt="sword" width="250" />
                    <img src={swordSvg} alt="sword" width="250" />
                    <Recipes />
                </section>
            </main>
        </>
    );
}

export default App;