import React, { useState } from "react";
export type compriment = {
    id: number;
    name: string;
};

const ConvertDistance = () => {
    const [Distance, setDistance] = useState(0);
    const [conversion, setConversion] = useState<number>(1);
    const [inputValue, setinputValue] = useState();
    const ComprimentList: compriment[] = [
        { id: 0, name: "---" },
        { id: 1, name: "Quilômetro" },
        { id: 2, name: "Metro" },
        { id: 3, name: "Centímetro" },
        { id: 4, name: "Milímetro" },
    ];

    return (
        <>
            <h2>Escolha o tipo de conversão</h2>
            <select
                value={Distance}
                onChange={(e) => setDistance(parseInt(e.target.value))}>
                {ComprimentList.map((item, index) => (
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
            {Distance === 0 && (
                <div>
                    <h3>Escolha uma das opções acima</h3>
                </div>
            )}
            {Distance === 1 && (
                <div>
                    <p>
                        {conversion} Km é igual a: <br />
                        <br />
                        {(conversion * 1000).toLocaleString("pt-br")} Metros.
                    </p>
                    <p>
                        {(conversion / 1.609).toLocaleString("pt-br")} Milha(s)
                    </p>
                    <p>
                        {(conversion * 100000).toLocaleString("pt-br")}{" "}
                        Centímetros.
                    </p>
                    <p>
                        {(conversion * 1000000).toLocaleString("pt-br")}{" "}
                        Milímetros.
                    </p>
                    <p>
                        {(conversion * 39370).toLocaleString("pt-br")}{" "}
                        Polegadas.
                    </p>
                </div>
            )}
            {Distance === 2 && (
                <div>
                    <p>
                        {conversion} Metro(s) é igual a: <br />
                        <br />
                        {(conversion / 1000).toLocaleString("pt-br")} Km(s)
                    </p>
                    <p>
                        {(conversion / 100).toLocaleString("pt-br")}{" "}
                        Centímetro(s)
                    </p>
                    <p>
                        {(conversion / 1000).toLocaleString("pt-br")}{" "}
                        Milímetro(s)
                    </p>
                    <p>
                        {(conversion * 39.37).toLocaleString("pt-br")}{" "}
                        Polegada(s)
                    </p>
                </div>
            )}
            {Distance === 3 && (
                <div>
                    <p>
                        {conversion} Centímetro(s) é igual a: <br />
                        <br />
                        {(conversion / 100).toLocaleString("pt-br")} Metro(s)
                    </p>
                    <p>
                        {(conversion * 10).toLocaleString("pt-br")} Milímetro(s)
                    </p>
                    <p>
                        {(conversion / 2.54).toLocaleString("pt-br")}{" "}
                        Polegada(s)
                    </p>
                </div>
            )}
            {Distance === 4 && (
                <div>
                    <p>
                        {conversion} Milímetro(s) é igual a: <br />
                        <br />
                        {(conversion / 1000).toLocaleString("pt-br")} Metro(s)
                    </p>
                    <p>
                        {(conversion / 10).toLocaleString("pt-br")}{" "}
                        Centímetro(s)
                    </p>
                    <p>
                        {(conversion / 25.4).toLocaleString("pt-br")}{" "}
                        Polegada(s)
                    </p>
                </div>
            )}
        </>
    );
};

export default ConvertDistance;
