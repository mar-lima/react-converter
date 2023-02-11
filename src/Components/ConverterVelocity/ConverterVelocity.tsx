import React, { useState } from "react";

export type velocity = {
    id: number;
    name: string;
};

const ConverterVelocity = () => {
    const [typeVelocity, setTypeVelocity] = useState(0);
    const [inputValue, setInputValue] = useState();
    const [conversion, setConversion] = useState(1)
    const listVelocity: velocity[] = [
        { id: 0, name: "---" },
        { id: 1, name: "Milha por hora" },
        { id: 2, name: "Pés por segundo" },
        { id: 3, name: "Metro por segundo" },
        { id: 4, name: "Quilômetro por hora" },
        { id: 5, name: "Nó" },
    ];
    return (
        <>
            <h2>Escolha o tipo de conversão</h2>
            <select
            value={typeVelocity}
            onChange={(e)=> setTypeVelocity(parseFloat(e.target.value))}>
                {listVelocity.map((item, index)=> (
                    <option key={index} value={item.id}> {item.name}</option>
                ))}
            </select>
            <input
            autoFocus 
            type="number" 
            value={inputValue}
            placeholder={"1"}
            onChange={(e) => setConversion(parseFloat(e.target.value))}

            />
            {typeVelocity === 0 && (
                <div>
                    <h3>Escolha uma das opções acima</h3>
                </div>
            )}
            {typeVelocity === 1 &&
                <div>
                    <p> {conversion} Milha por hora é igual a: <br /><br />
                    {(conversion * 1.467).toLocaleString('pt-br')} Pés por segundo.
                    </p>
                    <p> 
                    {(conversion / 2.237).toLocaleString('pt-br')} Metro por segundo.
                    </p>
                    <p> 
                    {(conversion * 1.609).toLocaleString('pt-br')} Quilômetro por hora.
                    </p>
                    <p> 
                    {(conversion / 1.151).toLocaleString('pt-br')} Nó.
                    </p>
                    
                </div>
            }
            {typeVelocity === 2 &&
                <div>
                    <p> {conversion} Pés por segundo é igual a: <br /><br />
                    {(conversion / 1.467).toLocaleString('pt-br')} Milha por hora.
                    </p>
                    <p> 
                    {(conversion /3.281).toLocaleString('pt-br')} Metro por segundo.
                    </p>
                    <p> 
                    {(conversion * 1.097).toLocaleString('pt-br')} Quilômetro por hora.
                    </p>
                    <p> 
                    {(conversion / 1.688).toLocaleString('pt-br')} Nó.
                    </p>
                    
                </div>
            }
            {typeVelocity === 3 &&
                <div>
                    <p> {conversion} Metro por segundo é igual a: <br /><br />
                    {(conversion * 2.237).toLocaleString('pt-br')} Milha por hora.
                    </p>
                    <p> 
                    {(conversion * 3.281).toLocaleString('pt-br')} Pés por segundo.
                    </p>
                    <p> 
                    {(conversion * 3.6).toLocaleString('pt-br')} Quilômetro por hora.
                    </p>
                    <p> 
                    {(conversion * 1.944).toLocaleString('pt-br')} Nó.
                    </p>
                    
                </div>
            }
            {typeVelocity === 4 &&
                <div>
                    <p> {conversion} Quilômetro por hora é igual a: <br /><br />
                    {(conversion / 1.609).toLocaleString('pt-br')} Milha por hora.
                    </p>
                    <p> 
                    {(conversion / 1.097).toLocaleString('pt-br')} Pés por segundo.
                    </p>
                    <p> 
                    {(conversion / 3.6).toLocaleString('pt-br')} Metro por segundo.
                    </p>
                    <p> 
                    {(conversion / 1.852).toLocaleString('pt-br')} Nó.
                    </p>
                    
                </div>
            }
            {typeVelocity === 5 &&
                <div>
                    <p> {conversion} Nó é igaul a: <br /><br />
                    {(conversion * 1.151).toLocaleString('pt-br')} Milha por hora.
                    </p>
                    <p> 
                    {(conversion * 1.688).toLocaleString('pt-br')} Pés por segundo.
                    </p>
                    <p> 
                    {(conversion / 1.944).toLocaleString('pt-br')} Metro por segundo.
                    </p>
                    <p> 
                    {(conversion * 1.852).toLocaleString('pt-br')} Quilômetro por hora.
                    </p>
                    
                </div>
            }
        </>
    );
};

export default ConverterVelocity;
