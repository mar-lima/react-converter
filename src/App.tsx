import { useState } from "react";
import reactLogo from "./assets/react.svg";
import styles from "./App.module.css";
import ConvertDistance from "./Components/ConvertDistance/ConvertDistance";
import OptionSelect from "./Components/OptionSelect/OptionSelect";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <div className={styles.container}>
                <h1>Converter Medidas</h1>
                <OptionSelect/>
            </div>
        </div>
    );
}

export default App;
