import { useState } from "react";
import BlockViewer from "../../components/BlockViewer/BlockViewer";
import { Button } from "primereact/button";

const ToggleContent = ({ label, onClick, content }: any) => (
    <div className="grid">
        <div className="col-12 lg:col-5">
            <Button label={`Toggle ${label}`} onClick={onClick} />
        </div>
        <div className="col-12 lg:col-7">
            {content}
        </div>
    </div>
);

const App = () => {
    const [showContent, setShowContent] = useState(true);
    const [showContent2, setShowContent2] = useState(true);
    const [showContent3, setShowContent3] = useState(true);


    const handleClick = (setter: any) => () => {
        setter((prev: any) => !prev);
    };

    return (
        <>
            <ToggleContent
                label="Content One"
                onClick={handleClick(setShowContent)}
                content={showContent && (
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum atque quam, illum
                        fuga perspiciatis odit est! Sint esse voluptas quaerat.
                    </p>
                )}
            />

            <ToggleContent
                label="Content Two"
                onClick={handleClick(setShowContent2)}
                content={showContent2 && (
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, fuga exercitationem.
                        Ipsum est in iusto, earum odio consequatur enim quas!
                    </p>
                )}
            />

            <ToggleContent
                label="Content Three"
                onClick={handleClick(setShowContent3)}
                content={showContent3 && (
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, fuga exercitationem.
                        Ipsum est in iusto, earum odio consequatur enim quas!
                    </p>
                )}
            />
        </>
    )
}
const ConditionalRendering = () => {
    const block1 = `import { useState } from "react";
    import { Button } from "primereact/button";
    
    const ToggleContent = ({ label, onClick, content }: any) => (
        <div className="grid">
            <div className="col-12 lg:col-5">
                <Button label={\`Toggle \${label}\`} onClick={onClick} />
            </div>
            <div className="col-12 lg:col-7">
                {content}
            </div>
        </div>
    );
    
    const App = () => {
        const [showContent, setShowContent] = useState(true);
        const [showContent2, setShowContent2] = useState(true);
        const [showContent3, setShowContent3] = useState(true);
    
    
        const handleClick = (setter: any) => () => {
            setter((prev: any) => !prev);
        };
    
        return (
            <>
                <ToggleContent
                    label="Content One"
                    onClick={handleClick(setShowContent)}
                    content={showContent && (
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum atque quam, illum
                            fuga perspiciatis odit est! Sint esse voluptas quaerat.
                        </p>
                    )}
                />
    
                <ToggleContent
                    label="Content Two"
                    onClick={handleClick(setShowContent2)}
                    content={showContent2 && (
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, fuga exercitationem.
                            Ipsum est in iusto, earum odio consequatur enim quas!
                        </p>
                    )}
                />
    
                <ToggleContent
                    label="Content Three"
                    onClick={handleClick(setShowContent3)}
                    content={showContent3 && (
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, fuga exercitationem.
                            Ipsum est in iusto, earum odio consequatur enim quas!
                        </p>
                    )}
                />
            </>
        )
    }`;

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <div className="grid">
                        <div className="col-12">
                            <h1 className="text-6xl text-primary font-bold mb-3">¿Qué es el renderizado condicional en React?</h1>
                            <p className="mt-0 mb-3 line-height-3 text-700">
                                El renderizado condicional es la forma de mostrar un componente u otro dependiendo de una condición.
                            </p>
                            <p className="mt-0 mb-3 line-height-3 text-700">
                                En React, no hay una sintaxis especial para escribir condicionales. En cambio, usarás las mismas técnicas que usas al escribir código regular de JavaScript. Por ejemplo, puedes usar una sentencia if para incluir JSX condicionalmente:
                            </p>
                        </div>
                        <div className="col-12">
                            <BlockViewer header="Example:" code={block1} free>
                                <div className="grid grid-nogutter surface-0 text-800">
                                    <div className="col-12 p-6">
                                        <App />
                                    </div>
                                </div>

                            </BlockViewer>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ConditionalRendering
