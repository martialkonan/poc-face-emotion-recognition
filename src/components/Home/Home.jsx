import { Link } from "react-router-dom";
import { Button } from "../AnimatedComponents";
import image from "../../assets/awb.png";
import "./Home.css";



const Home = () => {
  return(
    <>
       
    <section className="banner w-full mt-32 md:ml-64 flex flex-col items-start justify-start bg-fg-3">
    <img src={image} />       
    <div className="banner-run mt-8 md:ml-48 flex flex-col items-start justify-start bg-fg-3">
            <p className="font-dmMono text-lg lg:text-2xl text-gray-600 mt-4 ml-2">
            Détection d'Expressions Faciales <br></br>  
            Reconnaître les visages dans un flux vidéo.
            </p>
            <p className="banner-run font-dmMono text-lg lg:text-2xl text-gray-600 ml-2">
            Détecter les expressions en temps réel.
            </p>
            <div className="banner-run mt-8 flex flex-row bg-fg-3">
              <Link to={"/dashboard"}>
                <Button
                  onClick={() => {}}
                  rotateAnimation={false}
                >
                  <div className="rounded-lg border-none mt-8 md:ml-32 px-4 py-2 mr-8 flex flex-row items-start justify-start font-dmMono text-base bg-fg-1 transition-all drop-shadow-[0_5px_4px_rgba(47,46,46)] hover:scale-110 hover:drop-shadow-[0_10px_8px_rgba(88,87,87)]">
                    <span className="text-gray-700 text-lg">Démarrer</span>
                   
                  </div>
                </Button>
              </Link>
            </div>
          </div>
      </section>
    </>
  );
};

export default Home;