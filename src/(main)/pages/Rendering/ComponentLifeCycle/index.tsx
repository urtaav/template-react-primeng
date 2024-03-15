import { useEffect, useRef, useState } from "react";
import BlockViewer from "../../../components/BlockViewer/BlockViewer";
import { InputNumber } from "primereact/inputnumber";
import { Toast } from "primereact/toast";


const MountingComponent = () => {
    const [rockets, setRockets] = useState<any>([]);
    useEffect(() => {
        fetch("https://api.spacexdata.com/v4/rockets")
            .then((res) => res.json())
            .then((data) => setRockets(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="p-4">
            <ul className="list-none p-0 m-0">
                {
                    rockets.map((rocket: any) => {
                        return <li className="pb-3 border-bottom-1 surface-border" key={rocket.id}>
                            <div className="font-medium text-900 mb-2">{rocket.name}</div>
                            <div className="line-height-3 text-600" style={{ maxWidth: '30rem' }}>
                                {rocket.description}
                            </div>
                        </li>
                    })
                }

            </ul>
        </div>


    )
};

const UpdatingComponent = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count > 0) {
            console.log("The component if updated, the new value is: ", count);
        }
    }, [count]);


    return (
        <div className="flex justify-content-center">
            <InputNumber value={count} onValueChange={(e: any) => setCount(e.value)}
                showButtons buttonLayout="horizontal"
                decrementButtonClassName="p-button-secondary"
                incrementButtonClassName="p-button-secondary"
                incrementButtonIcon="pi pi-plus"
                decrementButtonIcon="pi pi-minus" />
        </div>

    )
}

const UnMountingComponent = ({ onHideNotification }: any) => {
    const toast: any = useRef(null);

    useEffect(() => {
        showNotification('Hello user!');

        return () => {
            hideNotification('Bye user!');
        };
    }, []);

    const showNotification = (message: string) => {
        console.log('Greetings: ', message);
        if (toast.current) {
            toast.current.show({ severity: 'success', summary: 'Success', detail: `Greetings: ${message}`, life: 1000 });
        }
    };

    const hideNotification = (message: string) => {
        console.log('See you later!: ', message);
        onHideNotification(message);
    };

    return (
        <div>
            <p>Notification component</p>
            <Toast ref={toast} />
        </div>
    );
}

const ComponentLifeCycle = () => {
    const block1 = `const MountingComponent = () => {
        const [rockets, setRockets] = useState<any>([]);
        useEffect(() => {
            fetch("https://api.spacexdata.com/v4/rockets")
                .then((res) => res.json())
                .then((data) => setRockets(data))
                .catch((err) => console.log(err));
        }, []);
    
        return (
            <div className="p-4">
                <ul className="list-none p-0 m-0">
                    {
                        rockets.map((rocket: any) => {
                            return <>
                                <li className="pb-3 border-bottom-1 surface-border">
                                    <div className="font-medium text-900 mb-2">{rocket.name}</div>
                                    <div className="line-height-3 text-600" style={{ maxWidth: '30rem' }}>
                                        {rocket.description}
                                    </div>
                                </li>
                            </>
                        })
                    }
    
                </ul>
            </div>
    
    
        )
    };`;

    const block2 = `const UpdatingComponent = () => {
        const [count, setCount] = useState(0);
    
        useEffect(() => {
            if (count > 0) {
                console.log("The component if updated, the new value is: ", count);
            }
        }, [count]);
    
    
        return (
            <div className="flex justify-content-center">
                <InputNumber value={count} onValueChange={(e: any) => setCount(e.value)}
                showButtons buttonLayout="horizontal" 
                decrementButtonClassName="p-button-secondary"
                incrementButtonClassName="p-button-secondary"
                incrementButtonIcon="pi pi-plus"
                decrementButtonIcon="pi pi-minus" />
            </div>
    
        )
    }`;

    const block3 = `
    const UnMountingComponent = ({ onHideNotification }: any) => {
        const toast: any = useRef(null);
    
        useEffect(() => {
            showNotification('Hello user!');
    
            return () => {
                hideNotification('Bye user!');
            };
        }, []);
    
        const showNotification = (message: string) => {
            console.log('Greetings: ', message);
            if (toast.current) {
                toast.current.show({ severity: 'success', summary: 'Success', detail: \`Greetings: \${message}\`, life: 1000 });
            }
        };
    
        const hideNotification = (message: string) => {
            console.log('See you later!: ', message);
            onHideNotification(message);
        };
    
        return (
            <div>
                <p>Notification component</p>
                <Toast ref={toast} />
            </div>
        );
    }
`;

    const toast: any = useRef(null);
    const hideNotification = (message: string) => {
        console.log("hideNotification parent")
        if (toast.current) {
            toast.current.show({ severity: 'error', summary: 'Error', detail: `Greetings: ${message}`, life: 1000 });
        }
    }
    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <div className="grid">
                        <div className="col-12">
                            <h1 className="text-6xl text-primary font-bold mb-3">Ciclo de vida en React.js</h1>
                            <p className="mt-0 mb-3 line-height-3 text-700">
                                En React, el término “ciclo de vida” o lifecycle, se refiere a las diferentes fases por los que pasa un componente desde su creación hasta su destrucción. Estas fases son representados por una serie de métodos que se ejecutan en momentos específicos durante la vida útil del componente.
                            </p>
                            <p className="mt-0 mb-3 line-height-3 text-700">
                                El <mark>ciclo de vida</mark> de un componente nos ayuda a tomar decisiones lógicas dependiendo de su fase, como por ejemplo nos ayuda a saber cuando realizar una petición HTTP o cuando poder limpiar datos en la UI.
                            </p>
                            <div className="mt-0 mb-3 line-height-3 text-700">
                                El ciclo de vida de un componente se divide principalmente en 3 fases.

                                <ul>
                                    <li><span className="font-bold">Mounting (Montado):</span> Fase que se gatilla cuando el componente es montado en la UI.</li>
                                    <li><span className="font-bold">Updating (Actualizado):</span> Fase que gatilla cuando el componente sufre un cambio en su estado o props.</li>
                                    <li><span className="font-bold">Unmounting (Desmontado):</span> Fase que se gatilla cuando el componente es desmontado de la UI.</li>
                                </ul>
                            </div>
                            <p className="mt-0 mb-3 line-height-3 text-700">
                                Para trabajar con el ciclo de vida de un componente en React, la forma más utilizada actualmente es mediante Hooks, en específico el Hook useEffect, el cual nos ayudará a trabajar con estas 3 fases principales.
                            </p>
                            <p className="mt-0 mb-3 line-height-3 text-700">
                                Hook <mark>useEffect</mark>
                                es un Hookde React que se utiliza para agregar efectos secundarios en componentes funcionales, pero su funcionalidad también está estrechamente relacionada con el ciclo de vida de un componente.

                                El Hook useEffect se obtiene importando la función useEffect desde la librería de React directamente. Recordar que solo estará disponible en versiones de 16.8 o superior.
                            </p>
                            <div className="mt-0 mb-3 line-height-3 text-700">
                                <span className="font-bold">1.-Fase de Mounting</span>

                                <ul>
                                    <li> <span className="font-bold">Inicialización de datos:</span> Es el lugar perfecto para realizar llamadas a APIs o cargar datos iniciales desde una base de datos.</li>
                                    <li><span className="font-bold">Configuraciones iniciales:</span> Puedes establecer la configuración inicial del componente, configurar temporizadores, suscribirte a eventos o realizar cualquier otra configuración que desees.</li>
                                    <li><span className="font-bold">Operaciones DOM:</span> Puedes manipular el DOMo interactuar con elementos del DOMuna vez que se han renderizado. Por ejemplo, puedes cambiar estilos, enfocar elementos, añadir o eliminar clases, etc.</li>
                                    <li><span className="font-bold">Inicialización de librerías externas:</span> Si tu componente depende de librerías externas, puedes inicializarlas en esta fase del ciclo de vida para que estén listas cuando se necesiten.</li>
                                </ul>
                            </div>
                            <p className="mt-0 mb-3 line-height-3 text-700">
                                Para gatillar la fase de Mounting con useEffect, debemos simplemente entregar como segundo parámetro a useEffectun arreglo de dependencias vacío <mark>[]</mark>.
                            </p>
                        </div>
                        <div className="col-12">
                            <BlockViewer header="Example:" code={block1} free>
                                <div className="grid grid-nogutter surface-0 text-800">
                                    <div className="col-12 p-6">
                                        <MountingComponent />
                                    </div>
                                </div>
                            </BlockViewer>
                        </div>
                        <div className="col-12">
                            <ul>
                                <li>El componente utiliza el Hook useState para crear una variable de estado llamada rockets. El estado inicial es un array vacío ([]). La función setRockets se utilizará para actualizar el estado más adelante.</li>
                                <li>El componente utiliza el Hook useEffect, que se ejecutará después de que el componente se haya montado en la interfaz de usuario. Se proporciona un array vacío [] como segundo argumento de useEffect, lo que indica que el efecto solo se ejecutará una vez después del montaje inicial del componente. Dentro del useEffect, se realiza una solicitud de API para obtener los datos y ejecutar posterior la función setRockets para actualizar el estado local.</li>
                                <li>El componente renderiza una lista.
                                    Para cada cohete en el array rockets, se renderiza un elemento de lista 'li' con el nombre del cohete (rocket.name).

                                </li>
                            </ul>
                        </div>
                        <div className="col-12">
                            <p className="mt-0 mb-3 line-height-3 text-700">
                                <span className="font-bold">2.-Fase de Updating</span>
                            </p>
                            <div className="mt-0 mb-3 line-height-3 text-700">
                                La fase de Updatinges importante porque te brinda la oportunidad de realizar acciones clave cuando el componente cambie sus props o estados, la cual es una perfecta ocasión para:
                                <ul>
                                    <li> <span className="font-bold">Realizar operaciones basadas en cambios de props o estado:</span>Puedes comparar las props y el estado actuales con los anteriores para determinar si alguna acción específica debe llevarse a cabo. Por ejemplo, puedes hacer peticiones a una API para obtener nuevos datos si los props cambian o actualizar ciertos valores en función del estado.</li>
                                    <li><span className="font-bold">Optimizaciones de procesamiento:</span> Puedes realizar optimizaciones de procesamiento más complejas durante la fase de actualización, como agrupar múltiples actualizaciones y cambios en un solo paso para evitar múltiples re-renderizaciones innecesarias.</li>
                                    <li><span className="font-bold">Revisar permisos y autenticación:</span> Puedes verificar los permisos del usuario o el estado de autenticación durante la fase de actualización para asegurarte de que el componente esté mostrando la información correcta y adecuada según el contexto del usuario.</li>
                                </ul>
                            </div>
                            <p className="mt-0 mb-3 line-height-3 text-700">
                                Para gatillar la fase de Updatingcon useEffect, debemos entregar como segundo parámetro a useEffect un arreglo de dependencias con el estado o props que necesitemos observar, como por ejemplo <mark>[state1, state2, props1, props2]</mark>. Este arreglo le indicará a React si el efecto secundario debe ejecutarse nuevamente o no.
                            </p>
                        </div>
                        <div className="col-12">
                            <BlockViewer header="Example:" code={block2} free>
                                <div className="grid grid-nogutter surface-0 text-800">
                                    <div className="col-12 p-6">
                                        <UpdatingComponent />
                                    </div>
                                </div>
                            </BlockViewer>
                        </div>
                        <div className="col-12">
                            <p className="mt-0 mb-3 line-height-3 text-700">
                                <span className="font-bold">3.-Fase de Unmounting</span>
                            </p>
                            <div className="mt-0 mb-3 line-height-3 text-700">
                                LLa fase de Unmounting en React es importante porque te brinda la oportunidad de realizar tareas de limpieza y liberación de recursos cuando un componente está siendo eliminado del DOM, la cual es una perfecta ocasión para:
                                <ul>
                                    <li> <span className="font-bold">Liberar recursos:</span>Puedes cancelar suscripciones, detener temporizadores, limpiar eventos o liberar cualquier recurso que el componente haya utilizado para evitar posibles fugas de memoria o comportamientos no deseados después de que el componente se haya desmontado.</li>
                                    <li><span className="font-bold">Detener peticiones o procesos asíncronos:</span>Es importante cancelar peticiones a servidores o cualquier otro proceso asíncrono que aún esté en curso cuando el componente se desmonte. Esto evitará que el componente actualice su estado o realice operaciones innecesarias cuando ya no esté en la interfaz de usuario.</li>
                                    <li><span className="font-bold">Eliminar referencias:</span> Si el componente ha creado referencias a elementos del DOMu otros componentes, es importante eliminar esas referencias para evitar referencias a elementos que ya no existen en el DOM.</li>
                                    <li><span className="font-bold">Notificaciones o acciones de cierre:</span>Puedes usar la fase de desmontaje para informar a otros componentes o servicios de que este componente se ha desmontado, lo que puede ser útil para realizar acciones adicionales o actualizar el estado de la aplicación en función de la desaparición de este componente.</li>
                                </ul>
                            </div>
                            <p className="mt-0 mb-3 line-height-3 text-700">
                                Para gatillar la fase de Unmounting con useEffect, debes retornar una función desde el efecto. Esta función se ejecutará cuando el componente se desmonte.
                            </p>
                        </div>
                        <div className="col-12">
                            <BlockViewer header="Example:" code={block3} free>
                                <div className="grid grid-nogutter surface-0 text-800">
                                    <div className="col-12 p-6">
                                        <UnMountingComponent onHideNotification={hideNotification} />
                                    </div>
                                </div>
                            </BlockViewer>
                        </div>
                    </div>
                </div>
            </div>
            <Toast ref={toast} />
        </div>

    )
}

export default ComponentLifeCycle
