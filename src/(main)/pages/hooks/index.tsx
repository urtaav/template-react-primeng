import { Button } from "primereact/button";
import BlockViewer from "../../components/BlockViewer/BlockViewer"
import { useContext, useEffect, useReducer, useRef, useState } from "react";
import { InputText } from 'primereact/inputtext';
import React from "react";
import './index.scss';

const MiComponente = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>El contador está en {count}</p>
      <Button onClick={() => setCount(count + 1)}>Aumentar</Button>
    </div>
  );
}

const UseEffectComponent = () => {
  const [title, setTitle] = useState("default title");
  const titleRef: any = useRef();
  useEffect(() => {
    console.log("useEffect");
    document.title = title;
  }, [title]);
  const handleClick = () => setTitle(titleRef.current.value);
  console.log("render");

  return (
    <div className="flex gap-2">
      <InputText ref={titleRef} placeholder="Title tab" />
      <Button onClick={handleClick} label="change title"></Button>
    </div>
  )
}

// custom hooks 
const useCounter = (initialCount: number) => {
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => setCount((prevCount) => prevCount + 1);
  const handleDecrement = () => setCount((prevCount) => Math.max(0, prevCount - 1));
  return { count, handleIncrement, handleDecrement };
}

const CustomHookComponent = () => {
  const { count, handleIncrement, handleDecrement } = useCounter(0);
  return (
    <>
      <div className="flex flex-column">
        <h1>{count}</h1>
        <div className="flex gap-2">
          <Button icon="pi pi-plus" onClick={handleIncrement} />
          <Button icon="pi pi-minus" onClick={handleDecrement} />
        </div>
      </div>
    </>

  )
}
// useContext 
// Define the shape of the context data using a TypeScript interface
interface ThemeContextData {
  theme: string;
  toggleTheme: () => void;
}

// Create the context with an initial value and the TypeScript interface
const ThemeContext = React.createContext<ThemeContextData>({
  theme: 'light',
  toggleTheme: () => { },
});

interface IThemeProviderProps {
  children: React.ReactNode;
}
const ThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }} >
      <div className={theme == 'light' ? 'lightTheme' : 'darkTheme'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
const ThemeSwitcherComponent = () => {
  // Use the useContext hook to access the context value
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex w-full flex-column p-4">
      <p className='themeTitleText'>Current theme: {theme}</p>
      <Button icon="pi pi-minus" onClick={toggleTheme} className={theme + 'ButtonTheme'} label="Toggle Theme" />
    </div>
  )
}

// usereducer 
const ListaTareasComponent = () => {

  const inputRef = useRef<HTMLInputElement>(null);

  const [tasks, dispatch] = useReducer(
    (state = [], action: any) => {
      switch (action.type) {
        case 'add_task': {
          const newTask = { id: state.length, title: action.title };
          const newState = [...state, newTask];
          localStorage.setItem('tasks', JSON.stringify(newState)); // Guardar en localStorage
          return newState;
        }
        case 'remove_task': {
          const newState = state.filter((task: any, index: number) => index !== action.index);
          localStorage.setItem('tasks', JSON.stringify(newState)); // Guardar en localStorage
          return newState;
        }
        case 'init_tasks': {
          return action.tasks; // Inicializar tareas
        }
        default: {
          return state;
        }
      }
    },
    JSON.parse(localStorage.getItem('tasks') || '[]') // Estado inicial desde localStorage
  );

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    dispatch({ type: 'init_tasks', tasks: storedTasks }); // Inicializar tareas al montar el componente
  }, []);


  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (inputRef.current) {
      dispatch({
        type: 'add_task',
        title: inputRef.current?.value
      });
    }


  }

  return (
    <>
      <div className="grid">
        <div className="col-12">
          <form onSubmit={handleSubmit} className="flex flex-column gap-2">
            <label>Tarea</label>
            {/* <input type="text" name="title" ref={inputRef} /> */}
            <InputText name="title" ref={inputRef} />
            {/* <input type="submit" value="Enviar" /> */}
            <Button label="Submit" />
          </form>
        </div>
        <div className="col-12">
          <div className="text-900 text-xl mb-3 text-left font-medium">My Tasks</div>
          {tasks && tasks.map((task: any, index: number) => (
            <div key={index} className="surface-card border-2 p-3 border-round-top flex justify-content-between align-items-center cursor-pointer border-primary mb-2 w-full">
              <div className="font-medium">{task.title}</div>
              <Button severity="danger" icon="pi pi-trash" onClick={() => dispatch({ type: 'remove_task', index })} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
const HooksPage = () => {
  const block = `const MiComponente = () => {
        const [count, setCount] = useState(0);
      
        return (
          <div>
            <p>El contador está en {count}</p>
            <Button onClick={() => setCount(count + 1)}>Aumentar</Button>
          </div>
        );
      }
  `;

  const block2 = `
  const UseEffectComponent = () => {
    const [title, setTitle] = useState("default title");
    const titleRef: any = useRef();
    useEffect(() => {
      console.log("useEffect");
      document.title = title;
    }, [title]);
    const handleClick = () => setTitle(titleRef.current.value);
    console.log("render");
  
    return (
      <div className="flex gap-2">
        <InputText ref={titleRef} placeholder="Title tab" />
        <Button onClick={handleClick} label="change title"></Button>
      </div>
    )
  }`;
  const block3 = `
  const useCounter = (initialCount: number) => {
    const [count, setCount] = useState(initialCount);
  
    const handleIncrement = () => setCount((prevCount) => prevCount + 1);
    const handleDecrement = () => setCount((prevCount) => Math.max(0, prevCount - 1));
    return { count, handleIncrement, handleDecrement };
  }


  const CustomHookComponent = () => {
    const { count, handleIncrement, handleDecrement } = useCounter(0);
    return (
      <>
        <div className="flex flex-column">
          <h1>{count}</h1>
          <div className="flex gap-2">
            <Button icon="pi pi-plus" onClick={handleIncrement}/>
            <Button icon="pi pi-minus" onClick={handleDecrement}/>
          </div>
        </div>
      </>
  
    )
  }
  `;
  const block4 = `
  // Define the shape of the context data using a TypeScript interface
interface ThemeContextData {
  theme: string;
  toggleTheme: () => void;
}

// Create the context with an initial value and the TypeScript interface
const ThemeContext = React.createContext<ThemeContextData>({
  theme: 'light',
  toggleTheme: () => { },
});

interface IThemeProviderProps {
  children: React.ReactNode;
}
const ThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }} >
      <div className={theme == 'light' ? 'lightTheme' : 'darkTheme'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
const ThemeSwitcherComponent = () => {
  // Use the useContext hook to access the context value
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex w-full flex-column p-4">
      <p className='themeTitleText'>Current theme: {theme}</p>
      <Button icon="pi pi-minus" onClick={toggleTheme} className={theme + 'ButtonTheme'} label="Toggle Theme" />
    </div>
  )
}`;

const block5= `
const ListaTareasComponent = () => {

  const inputRef = useRef<HTMLInputElement>(null);

  const [tasks, dispatch] = useReducer(
    (state = [], action: any) => {
      switch (action.type) {
        case 'add_task': {
          return [
            ...state,
            { id: state.length, title: action.title }
          ]
        }
        case 'remove_task': {
          return state.filter((task: any, index: number) => index !== action.index);
        }
        default: {
          return state;
        }
      }
    },
    [] // Estado inicial, en este caso un arreglo vacío
  );

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (inputRef.current) {
      dispatch({
        type: 'add_task',
        title: inputRef.current?.value
      });
    }


  }

  return (
    <>
      <div className="grid">
        <div className="col-12">
          <form onSubmit={handleSubmit} className="flex flex-column gap-2">
            <label>Tarea</label>
            {/* <input type="text" name="title" ref={inputRef} /> */}
            <InputText name="title" ref={inputRef} />
            {/* <input type="submit" value="Enviar" /> */}
            <Button label="Submit" />
          </form>
        </div>
        <div className="col-12">
          <div className="text-900 text-xl mb-3 text-left font-medium">My Tasks</div>
          {tasks && tasks.map((task: any, index: number) => (
            <div key={index} className="surface-card border-2 p-3 border-round-top flex justify-content-between align-items-center cursor-pointer border-primary mb-2 w-full">
              <div className="font-medium">{task.title}</div>
              <Button severity="danger" icon="pi pi-trash" onClick={() => dispatch({ type: 'remove_task', index })} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

`;
  return (
    <div className="grid">
      <div className="col-12">
        <div className="card">
          <div className="grid">
            {/* useState */}
            <div className="col-12">
              <h1 className="text-6xl text-primary font-bold mb-3">useState</h1>
              <p className="mt-0 mb-3 line-height-3 text-700">
                El hook useState es una de las herramientas más fundamentales en React para manejar el estado en una aplicación. Es una forma sencilla de crear y actualizar variables de estado en un componente de React sin tener que escribir una clase completa.
              </p>
              <p className="mt-0 mb-3 line-height-3 text-700">
                El hook useState nos permite crear una variable de estado en nuestro componente y una función para actualizar esa variable. El hook se importa desde la librería 'react' y se usa dentro de un componente de funciones. A continuación, se muestra un ejemplo de cómo se podría utilizar useState para crear un contador en un componente:
              </p>
            </div>
            <div className="col-12">
              <BlockViewer header="Example:" code={block} free>
                <div className="grid grid-nogutter surface-0 text-800">
                  <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">

                    <MiComponente />
                  </div>
                </div>
              </BlockViewer>
            </div>
            {/* useEffect  */}
            <div className="col-12">
              <h1 className="text-6xl text-primary font-bold mb-3">useEffect</h1>
              <p className="mt-0 mb-3 line-height-3 text-700">
                Como su nombre indica, este <mark>hook</mark> nos permite definir efectos.
              </p>
              <p className="mt-0 mb-3 line-height-3 text-700">
                Con el hook <mark>useEffect</mark> en React, también podemos ejecutar trozos en las otras fases del ciclo de vida, ya sea en <mark>updating o en unmounting.</mark> En este orden de ideas, el hook useEffect en React equivale a una combinación de las funciones componentDidMount, componentDidUpdate y componentWillUnmount. Por eso es tan importante aprender que son hooks en react
              </p>
            </div>
            <div className="col-12">
              <BlockViewer header="Example:" code={block2} free>
                <div className="grid grid-nogutter surface-0 text-800">
                  <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                    <UseEffectComponent />
                  </div>
                </div>
              </BlockViewer>
            </div>
            {/* custom hooks  */}
            <div className="col-12">
              <h1 className="text-6xl text-primary font-bold mb-3">Custom Hooks</h1>
              <p className="mt-0 mb-3 line-height-3 text-700">
                Los custom hooks en React son un tipo de función JavaScript que simula el funcionamiento de los hooks en React.
              </p>
              <p className="mt-0 mb-3 line-height-3 text-700">
                Los custom hooks en React son muy útiles siempre que tengamos una lógica que se repite entre varios componentes. En estos casos, podemos sacar esta lógica y aplicarla a un custom hook, es decir, una función que ejecute los pasos que necesitamos de manera automática.
              </p>
              <p className="mt-0 mb-3 line-height-3 text-700">
                Al no ser funciones cualquiera, los custom hooks en React deben seguir una serie de reglas para ser considerados hooks y no funciones.
              </p>
              <div className="mt-0 mb-3 line-height-3 text-700">
                Cosas a tener en cuenta de los Custom Hooks.
                <ul>
                  <li>Por <span className="font-bold">convención</span> , los Custom Hooks empiezan por use, por ejemplo, useCounter.</li>
                  <li>Dos componentes usando el mismo Hook NO comparten estado. Los Custom Hooks son un mecanismo para reutilizar lógica de estado, pero cada vez que usas uno todo estado y efecto dentro de este son aislados completamente.</li>
                  <li>Lo que realmente tienen de particular los custom hooks en React es que pueden llamar a otros hooks.</li>
                </ul>
              </div>
            </div>
            <div className="col-12">
              <BlockViewer header="Example:" code={block3} free>
                <div className="grid grid-nogutter surface-0 text-800">
                  <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                    <CustomHookComponent />
                  </div>
                </div>
              </BlockViewer>
            </div>

            <div className="col-12">
              <h1 className="text-6xl text-primary font-bold mb-3">useContext</h1>
              <p className="mt-0 mb-3 line-height-3 text-700">
                El useContext es un consumidor del Provider en otras palabras es la forma de acceder o consumir la data que pasamos por el value del Provider si la data que pasamos por el Provider cambia los consumidores o consumidor en este caso el useContext se va a renderizar nuevamente.
              </p>
              <p className="mt-0 mb-3 line-height-3 text-700">
                La forma de trabajar con useContext es recibiendo el objeto contexto y devuelve el valor del contexto actual, como ya se mencionó el valor del contexto actual se determina por el value del Provider.
              </p>
            </div>
            <div className="col-12">
              <BlockViewer header="Example:" code={block4} free>
                <div className="grid grid-nogutter surface-0 text-800">
                  <div className="col-12 md:col-12 p-2 text-center md:text-left flex align-items-center ">
                    <div className='ThemeSwitcherContainer'>
                      <ThemeProvider>
                        <ThemeSwitcherComponent />
                      </ThemeProvider>
                    </div>
                  </div>
                </div>
              </BlockViewer>
            </div>
            {/* usereducer  */}

            <div className="col-12">
              <h1 className="text-6xl text-primary font-bold mb-3">useReducer</h1>
              <p className="mt-0 mb-3 line-height-3 text-700">
                useReducer es un hook en React que se utiliza para administrar el estado de un componente utilizando el patrón de reducción. Este hook es una alternativa a useState y es útil cuando el estado de un componente tiene una lógica más compleja que no se puede manejar fácilmente con useState.
              </p>
              <p className="mt-0 mb-3 line-height-3 text-700">
                La función useReducer acepta dos argumentos: un "reductor" (una función) y un "estado inicial". Devuelve un arreglo con dos elementos: el primer elemento es el estado actual y el segundo elemento es una función que se utiliza para despachar acciones al reductor.
              </p>
              <p className="mt-0 mb-3 line-height-3 text-700">
                El patrón de reducción consiste en definir un "reductor" que toma el estado actual y una "acción", y devuelve el nuevo estado basado en esa acción. Las acciones son objetos que describen un cambio en el estado, y el reductor es responsable de actualizar el estado en función de esas acciones.
              </p>
            </div>
            <div className="col-12">
              <BlockViewer header="Example:" code={block5} free>
                <div className="grid grid-nogutter surface-0 text-800">
                  <div className="col-12 md:col-12 p-2 text-center md:text-left flex align-items-center ">
                    <ListaTareasComponent />
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

export default HooksPage
