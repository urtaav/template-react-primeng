import BlockViewer from "../../components/BlockViewer/BlockViewer"

const JsxPage = () => {
    const block1 = `<div className="grid grid-nogutter surface-0 text-800">
        <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
            <section>
                <span className="block text-6xl font-bold mb-1">Hello {name}!</span>
                <div className="text-6xl text-primary font-bold mb-3">You are {age} years old.</div>
                <p className="mt-0 mb-4 text-700 line-height-3">Next year, you will be {age + 1} years old. {age >= 18 && <p>You are an adult.</p>}</p>
            </section>
        </div>
    </div>`;
    const name = 'John';
    const age = 30;
    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <div className="grid">
                        <div className="col-12">
                            <h1 className="text-6xl text-primary font-bold mb-3">Sintaxis JSX</h1>
                            <p className="mt-0 mb-3 line-height-3 text-700">
                                JSX (JavaScript XML) es una extensión sintáctica para JavaScript que permite a los desarrolladores escribir código similar al HTML dentro de un archivo JavaScript. Fue desarrollada por Meta (antes Facebook).

                                La sintaxis de JSX se parece a la de HTML, con etiquetas de apertura y cierre, atributos y elementos anidados.
                            </p>
                        </div>
                        <div className="col-12">
                            <BlockViewer header="Example:" code={block1} free>
                                <div className="grid grid-nogutter surface-0 text-800">
                                    <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                                        <section>
                                            <span className="block text-6xl font-bold mb-1">Hello {name}!</span>
                                            <div className="text-6xl text-primary font-bold mb-3">You are {age} years old.</div>
                                            <p className="mt-0 mb-4 text-700 line-height-3">Next year, you will be {age + 1} years old. {age >= 18 && <p>You are an adult.</p>}</p>
                                        </section>
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

export default JsxPage
