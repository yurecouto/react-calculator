import React, { useState } from "react";
import "../components/Calculadora.css"


//import insert from "../functions/Main"

export default () => {
    const [num, setNum] = useState("0")

    function insert(e) {
        if (num === "0") {
            let valor = e.target.value 
            setNum(valor)
        } else {
            let valor = e.target.value 
            setNum(num + valor)
        }

    };

    function clean() {
        setNum("0")
    }

    function fatorial(e) {
        let resultado = e.target.value
        let fatorial = resultado
    
        for (let i = resultado - 1; i > 0; i--) {
            fatorial *= i
        }
        
        setNum(fatorial)
    };

    function calculate(e) {
        let resultado = e.target.value
    
        if (resultado) {
            setNum(eval(resultado))
        }
    };

    function squareroot(e) {
        let resultado = e.target.value
        setNum(Math.sqrt(resultado).toFixed(9))
    }

    function invert(e) {
        let resultado = e.target.value

        if (resultado > 0) {
            setNum(resultado * -1)
        } else {
            setNum(resultado * -1)
        }
    }
    
    return (
        <div className="calculadora">
            <p id="resultado">{num}</p>
            <table>
                <tr>
                    <td><button className="buttona" onClick={squareroot} value={num}>√</button></td>
                    <td><button className="buttona" onClick={insert} value={"**"}>^</button></td>
                    <td><button className="buttona" onClick={insert} value={"%"}>%</button></td>
                    <td><button className="buttona" onClick={fatorial} value={num}>!</button></td>
                </tr>

                <tr>
                    <td><button className="buttonc" onClick={clean}>C</button></td>
                    <td><button className="buttonb" onClick={insert} value={"*"}>*</button></td>
                    <td><button className="buttonb" onClick={insert} value={"/"}>/</button></td>
                    <td><button className="buttonc" onClick={invert} value={num}>+/-</button></td>
                </tr>

                <tr>
                    <td><button className="button" onClick={insert} value={'7'}>7</button></td>
                    <td><button className="button" onClick={insert} value={'8'}>8</button></td>
                    <td><button className="button" onClick={insert} value={'9'}>9</button></td>
                    <td><button className="buttonb" onClick={insert} value={"-"}>-</button></td>
                </tr>

                <tr>
                    <td><button className="button" onClick={insert} value={'4'}>4</button></td>
                    <td><button className="button" onClick={insert} value={'5'}>5</button></td>
                    <td><button className="button" onClick={insert} value={'6'}>6</button></td>
                    <td><button className="buttonb" onClick={insert} value={"+"}>+</button></td>
                </tr>

                <tr>
                    <td><button className="button" onClick={insert} value={'1'}>1</button></td>
                    <td><button className="button" onClick={insert} value={'2'}>2</button></td>
                    <td><button className="button" onClick={insert} value={'3'}>3</button></td>
                    <td rowspan="2"><button 
                                        className="buttonb" 
                                        style={{height: "106px"}}
                                        onClick={calculate}
                                        value={num}
                    >=</button></td>
                </tr>                
                
                <tr>
                    <td colspan="2"><button className="buttonb" style={{width: "106px"}} onClick={insert} value={0}>0</button></td>
                    <td><button className="button" onClick={insert} value={"."}>.</button></td>
                </tr>

            </table>
        </div>
    )
}