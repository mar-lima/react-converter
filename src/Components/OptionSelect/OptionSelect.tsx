import React, { useState } from "react";
import ConvertDistance from "../ConvertDistance/ConvertDistance";
import ConverterTemperature from "../ConverterTemperature/ConverterTemperature";
import ConverterVelocity from "../ConverterVelocity/ConverterVelocity";
import styles from "./OptionSelect.module.css";
export type option = {
    id: number;
    name: string;
};

const OptionSelect = () => {
    const [selectConvertion, setselectConvertion] = useState(1);

    const listOption: option[] = [
        { id: 1, name: "Comprimento" },
        { id: 2, name: "Temperatura" },
        { id: 3, name: "Velocidade" },
    ];

    return (
        <div className={styles.containerArea}>
            <div className={styles.content}>
            <select
                value={selectConvertion}
                onChange={(e) => setselectConvertion(parseInt(e.target.value))}>
                {listOption.map((item, index) => (
                    <option key={index} value={item.id}>
                        {item.name}
                    </option>
                ))}
            </select>
            {selectConvertion === 1 ? <ConvertDistance /> : ""}
            {selectConvertion === 2 ? <ConverterTemperature /> : ""}
            {selectConvertion === 3 ? <ConverterVelocity /> : ""}
            </div>
        </div>
    );

    // console.log(selectValue)
};

export default OptionSelect;
