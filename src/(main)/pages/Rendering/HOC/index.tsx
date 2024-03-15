import { useState } from "react";
import BlockViewer from "../../../components/BlockViewer/BlockViewer"
import { Button } from "primereact/button";

const withCounter = (WrappedComponent: any) => {
    const WithCounter = () => {
        const [count, setCount] = useState(0);

        const handleClick = () => {
            setCount(count + 1);
            console.log({ count })
        }
        return <WrappedComponent handleClick={handleClick} count={count}></WrappedComponent>
    }

    return WithCounter;
}

// ComponenteA sin la funcionalidad de conteo
const ComponenteA = ({ handleClick }: any) => {
    return <Button onClick={handleClick}>Componente A</Button>;
};

// ComponenteB sin la funcionalidad de conteo
const ComponenteB = ({ handleClick }: any) => {
    return <Button onClick={handleClick}>Componente B</Button>;
};

// Envolver ComponenteA y ComponenteB con el HOC
const ComponenteAConConteo = withCounter(ComponenteA);
const ComponenteBConConteo = withCounter(ComponenteB);


const HOCPage = () => {
    const block1 = `const withCounter = (WrappedComponent: any) => {
        const WithCounter = () => {
            const [count, setCount] = useState(0);
    
            const handleClick = () => {
                setCount(count + 1);
                console.log({ count })
            }
            return <WrappedComponent handleClick={handleClick} count={count}></WrappedComponent>
        }
    
        return WithCounter;
    }
    
    // ComponenteA sin la funcionalidad de conteo
    const ComponenteA = ({ handleClick }: any) => {
        return <Button onClick={handleClick}>Componente A</Button>;
    };
    
    // ComponenteB sin la funcionalidad de conteo
    const ComponenteB = ({ handleClick }: any) => {
        return <Button onClick={handleClick}>Componente B</Button>;
    };
    
    // Envolver ComponenteA y ComponenteB con el HOC
    const ComponenteAConConteo = withCounter(ComponenteA);
    const ComponenteBConConteo = withCounter(ComponenteB);
    `;

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <div className="grid">
                        <div className="col-12">
                            <h1 className="text-6xl text-primary font-bold mb-3">Patrón de diseño Higher-Order Component (HOC) en React y JavaScript</h1>
                            <p className="mt-0 mb-3 line-height-3 text-700">
                                El patrón de diseño Higher-Order Component (HOC) es un patrón avanzado en React que se utiliza para reutilizar la lógica de los componentes. Un HOC es una función que toma un componente y devuelve otro componente con funcionalidades adicionales o modificadas. En este artículo, exploraremos el patrón de diseño HOC con ejemplos en React y JavaScript.
                            </p>
                        </div>
                        <div className="col-12">
                            <BlockViewer header="Example:" code={block1} free>
                                <div className="grid p-4">
                                    <div className="col-12">
                                        <div className="flex gap-2">
                                            <ComponenteAConConteo />
                                            <ComponenteBConConteo />
                                        </div>
                                    </div>
                                </div>
                            </BlockViewer>
                        </div>
                        <div className="col-12">
                            <p className="mt-0 mb-3 line-height-3 text-700">
                                En resumen:

                                withCounter es un HOC que toma un componente (WrappedComponent) y devuelve un nuevo componente (WithCounter) con la funcionalidad adicional de contar clics.
                                ComponenteA y ComponenteB son componentes funcionales simples sin la funcionalidad de conteo.
                                ComponenteAConConteo y ComponenteBConConteo son nuevos componentes creados al envolver ComponenteA y ComponenteB respectivamente con el HOC withCounter. Estos nuevos componentes ahora tienen la funcionalidad de contar clics.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HOCPage;
