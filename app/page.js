import Image from "next/image";
import styles from "./page.module.css";
import Navabr from "./component/Navbar/Navabr";
import Corousal from "./component/corousal/corousal";
import Types from "./component/typesec/Types";
import Footer from "./component/footer/Footer";
export default function Home() {
  return (
   <div>
   <Navabr/>
   <Corousal/>
   <Types/>
   <Footer/>
   </div>
  );
}
