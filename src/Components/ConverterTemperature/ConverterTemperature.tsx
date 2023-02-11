import React, { useState } from "react";

export type temperature = {
    id: number;
    name: string;
};

const ConverterTemperature = () => {
    const [Temperaturevalue, setTemperaturevalue] = useState(0);
    const [Conversion, setConversion] = useState(1);
    const [inputValue, setInputValue] = useState();

    const temperatureList: temperature[] = [
        { id: 0, name: "---" },
        { id: 1, name: "Grau Celsius" },
        { id: 2, name: "Grau Fahrenheit" },
        { id: 3, name: "Kelvin" },
    ];

    return (
        <>
            <h2>Escolha o tipo de conversão</h2>
            <select
                value={Temperaturevalue}
                onChange={(e) => setTemperaturevalue(parseInt(e.target.value))}>
                {temperatureList.map((item, index) => (
                    <option key={index} value={item.id}>
                        {item.name}
                    </option>
                ))}
            </select>
            <input
                autoFocus
                type="number"
                value={inputValue}
                placeholder={"1"}
                onChange={(e) => setConversion(parseFloat(e.target.value))}
            />
            {Temperaturevalue === 0 && (
                <div>
                    <h3>Escolha uma das opções acima</h3>
                </div>
            )}
            {Temperaturevalue === 1 && (
                <div>
                    <p>
                        {Conversion} Grau Celsius é igual a: <br />
                        <br />
                        {(Conversion * 1.8 + 32).toLocaleString("pt-br")} Grau
                        Fahrenheit.
                    </p>
                    <p>
                        {(Conversion + 273.15).toLocaleString("pt-br")}{" "}
                        Kelvin(s)
                    </p>
                </div>
            )}
            {Temperaturevalue === 2 && (
                <div>
                    <p>
                        {Conversion} Grau Fahrenheit. é igual a: <br />
                        <br />
                        {((Conversion - 32) / 1.8)
                            .toFixed(2)
                            .toLocaleString()}{" "}
                        Grau Celsius.
                    </p>
                    <p>
                        {(((Conversion + 459.67) * 5) / 9).toLocaleString(
                            "pt-br"
                        )}{" "}
                        Kelvin(s)
                    </p>
                </div>
            )}
            {Temperaturevalue === 3 && (
                <div>
                    <p>
                        {Conversion} Kelvin é igual a: <br />
                        <br />
                        {(Conversion - 273.15).toFixed(1).toLocaleString()} Grau
                        Celsius.
                    </p>
                    <p>
                        {(((Conversion - 273.15) * 9) / 5 + 32).toLocaleString(
                            "pt-br"
                        )}{" "}
                        Grau Fahrenheit
                    </p>
                </div>
            )}
        </>
    );
};

export default ConverterTemperature;
