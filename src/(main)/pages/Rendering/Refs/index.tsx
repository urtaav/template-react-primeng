import { useEffect, useRef, useState } from "react";
import BlockViewer from "../../../components/BlockViewer/BlockViewer"
import { Button } from "primereact/button";
import { Toast } from 'primereact/toast';
const RefComponent = () => {
    const toast:any = useRef(null);
    const myRef: any = useRef<HTMLInputElement>(null);

    const getValue = () => {
        if (myRef.current) {
            const value = myRef.current?.value;
            console.log('The value of reference is :', value);
            if(toast.current){
                toast.current.show({ severity: 'info', summary: 'The value of reference is :', detail: value ,life: 1000});
            }
        }
    };

    return (
        <div className="grid formgrid p-fluid p-3">
            <div className="field mb-4 col-12 md:col-6">
                <label htmlFor="email1" className="font-medium text-900">Email</label>
                <input ref={myRef} id="email1" type="text" className="p-inputtext p-component"/>
                </div>
            <div className="col-12">
            <Button onClick={getValue} label="Get value of input" className="w-auto mt-3"></Button>
            </div>
            <Toast ref={toast}  position="bottom-center"/>
        </div>
    );
};

const ScrollableContent = () => {
    const [isScrolledToElement, setIsScrolledToElement] = useState(false);
    const scrollableContentRef = useRef<any>(null);
  
    useEffect(() => {
      const handleScroll = () => {
        if(scrollableContentRef.current){
            const elementTop = scrollableContentRef.current?.offsetTop;
            const elementHeight = scrollableContentRef.current?.offsetHeight;
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            setIsScrolledToElement(scrollTop > elementTop && scrollTop < (elementTop + elementHeight));
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <div ref={ scrollableContentRef }>
        <p>El contenido va aquí...</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nulla modi expedita quod! Officiis sapiente quis officia minus perspiciatis sed provident ea porro, esse temporibus eveniet, a, sequi aliquam earum in repellat totam ipsum ipsa tempora inventore voluptate labore? Consectetur, provident! Alias fuga incidunt, mollitia illum officia aperiam laboriosam quod?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nulla modi expedita quod! Officiis sapiente quis officia minus perspiciatis sed provident ea porro, esse temporibus eveniet, a, sequi aliquam earum in repellat totam ipsum ipsa tempora inventore voluptate labore? Consectetur, provident! Alias fuga incidunt, mollitia illum officia aperiam laboriosam quod?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nulla modi expedita quod! Officiis sapiente quis officia minus perspiciatis sed provident ea porro, esse temporibus eveniet, a, sequi aliquam earum in repellat totam ipsum ipsa tempora inventore voluptate labore? Consectetur, provident! Alias fuga incidunt, mollitia illum officia aperiam laboriosam quod?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nulla modi expedita quod! Officiis sapiente quis officia minus perspiciatis sed provident ea porro, esse temporibus eveniet, a, sequi aliquam earum in repellat totam ipsum ipsa tempora inventore voluptate labore? Consectetur, provident! Alias fuga incidunt, mollitia illum officia aperiam laboriosam quod?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nulla modi expedita quod! Officiis sapiente quis officia minus perspiciatis sed provident ea porro, esse temporibus eveniet, a, sequi aliquam earum in repellat totam ipsum ipsa tempora inventore voluptate labore? Consectetur, provident! Alias fuga incidunt, mollitia illum officia aperiam laboriosam quod?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nulla modi expedita quod! Officiis sapiente quis officia minus perspiciatis sed provident ea porro, esse temporibus eveniet, a, sequi aliquam earum in repellat totam ipsum ipsa tempora inventore voluptate labore? Consectetur, provident! Alias fuga incidunt, mollitia illum officia aperiam laboriosam quod?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nulla modi expedita quod! Officiis sapiente quis officia minus perspiciatis sed provident ea porro, esse temporibus eveniet, a, sequi aliquam earum in repellat totam ipsum ipsa tempora inventore voluptate labore? Consectetur, provident! Alias fuga incidunt, mollitia illum officia aperiam laboriosam quod?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nulla modi expedita quod! Officiis sapiente quis officia minus perspiciatis sed provident ea porro, esse temporibus eveniet, a, sequi aliquam earum in repellat totam ipsum ipsa tempora inventore voluptate labore? Consectetur, provident! Alias fuga incidunt, mollitia illum officia aperiam laboriosam quod?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nulla modi expedita quod! Officiis sapiente quis officia minus perspiciatis sed provident ea porro, esse temporibus eveniet, a, sequi aliquam earum in repellat totam ipsum ipsa tempora inventore voluptate labore? Consectetur, provident! Alias fuga incidunt, mollitia illum officia aperiam laboriosam quod?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nulla modi expedita quod! Officiis sapiente quis officia minus perspiciatis sed provident ea porro, esse temporibus eveniet, a, sequi aliquam earum in repellat totam ipsum ipsa tempora inventore voluptate labore? Consectetur, provident! Alias fuga incidunt, mollitia illum officia aperiam laboriosam quod?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nulla modi expedita quod! Officiis sapiente quis officia minus perspiciatis sed provident ea porro, esse temporibus eveniet, a, sequi aliquam earum in repellat totam ipsum ipsa tempora inventore voluptate labore? Consectetur, provident! Alias fuga incidunt, mollitia illum officia aperiam laboriosam quod?</p>
        {isScrolledToElement && <p>¡Te has desplazado a este elemento!</p>}
      </div>
    );
  };
  

const RefsPage = () => {
    const block1 = `const RefComponent = () => {
        const toast:any = useRef(null);
        const myRef: any = useRef<HTMLInputElement>(null);
    
        const getValue = () => {
            if (myRef.current) {
                const value = myRef.current?.value;
                console.log('The value of reference is :', value);
                if(toast.current){
                    toast.current.show({ severity: 'info', summary: 'The value of reference is :', detail: value ,life: 1000});
                }
            }
        };
    
        return (
            <div className="grid formgrid p-fluid p-3">
                <div className="field mb-4 col-12 md:col-6">
                    <label htmlFor="email1" className="font-medium text-900">Email</label>
                    <input ref={myRef} id="email1" type="text" className="p-inputtext p-component"/>
                    </div>
                <div className="col-12">
                <Button onClick={getValue} label="Get value of input" className="w-auto mt-3"></Button>
                </div>
                <Toast ref={toast}  position="bottom-center"/>
            </div>
        );
    };
    
    const ScrollableContent = () => {
        const [isScrolledToElement, setIsScrolledToElement] = useState(false);
        const scrollableContentRef = useRef<any>(null);
      
        useEffect(() => {
          const handleScroll = () => {
            if(scrollableContentRef.current){
                const elementTop = scrollableContentRef.current?.offsetTop;
                const elementHeight = scrollableContentRef.current?.offsetHeight;
                const scrollTop = window.scrollY || document.documentElement.scrollTop;
                setIsScrolledToElement(scrollTop > elementTop && scrollTop < (elementTop + elementHeight));
            }
          };
      
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
        }, []);
      
        return (
          <div ref={ scrollableContentRef }>
            <p>El contenido va aquí...</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nulla modi expedita quod! Officiis sapiente quis officia minus perspiciatis sed provident ea porro, esse temporibus eveniet, a, sequi aliquam earum in repellat totam ipsum ipsa tempora inventore voluptate labore? Consectetur, provident! Alias fuga incidunt, mollitia illum officia aperiam laboriosam quod?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nulla modi expedita quod! Officiis sapiente quis officia minus perspiciatis sed provident ea porro, esse temporibus eveniet, a, sequi aliquam earum in repellat totam ipsum ipsa tempora inventore voluptate labore? Consectetur, provident! Alias fuga incidunt, mollitia illum officia aperiam laboriosam quod?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nulla modi expedita quod! Officiis sapiente quis officia minus perspiciatis sed provident ea porro, esse temporibus eveniet, a, sequi aliquam earum in repellat totam ipsum ipsa tempora inventore voluptate labore? Consectetur, provident! Alias fuga incidunt, mollitia illum officia aperiam laboriosam quod?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nulla modi expedita quod! Officiis sapiente quis officia minus perspiciatis sed provident ea porro, esse temporibus eveniet, a, sequi aliquam earum in repellat totam ipsum ipsa tempora inventore voluptate labore? Consectetur, provident! Alias fuga incidunt, mollitia illum officia aperiam laboriosam quod?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nulla modi expedita quod! Officiis sapiente quis officia minus perspiciatis sed provident ea porro, esse temporibus eveniet, a, sequi aliquam earum in repellat totam ipsum ipsa tempora inventore voluptate labore? Consectetur, provident! Alias fuga incidunt, mollitia illum officia aperiam laboriosam quod?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nulla modi expedita quod! Officiis sapiente quis officia minus perspiciatis sed provident ea porro, esse temporibus eveniet, a, sequi aliquam earum in repellat totam ipsum ipsa tempora inventore voluptate labore? Consectetur, provident! Alias fuga incidunt, mollitia illum officia aperiam laboriosam quod?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nulla modi expedita quod! Officiis sapiente quis officia minus perspiciatis sed provident ea porro, esse temporibus eveniet, a, sequi aliquam earum in repellat totam ipsum ipsa tempora inventore voluptate labore? Consectetur, provident! Alias fuga incidunt, mollitia illum officia aperiam laboriosam quod?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nulla modi expedita quod! Officiis sapiente quis officia minus perspiciatis sed provident ea porro, esse temporibus eveniet, a, sequi aliquam earum in repellat totam ipsum ipsa tempora inventore voluptate labore? Consectetur, provident! Alias fuga incidunt, mollitia illum officia aperiam laboriosam quod?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nulla modi expedita quod! Officiis sapiente quis officia minus perspiciatis sed provident ea porro, esse temporibus eveniet, a, sequi aliquam earum in repellat totam ipsum ipsa tempora inventore voluptate labore? Consectetur, provident! Alias fuga incidunt, mollitia illum officia aperiam laboriosam quod?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nulla modi expedita quod! Officiis sapiente quis officia minus perspiciatis sed provident ea porro, esse temporibus eveniet, a, sequi aliquam earum in repellat totam ipsum ipsa tempora inventore voluptate labore? Consectetur, provident! Alias fuga incidunt, mollitia illum officia aperiam laboriosam quod?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nulla modi expedita quod! Officiis sapiente quis officia minus perspiciatis sed provident ea porro, esse temporibus eveniet, a, sequi aliquam earum in repellat totam ipsum ipsa tempora inventore voluptate labore? Consectetur, provident! Alias fuga incidunt, mollitia illum officia aperiam laboriosam quod?</p>
            {isScrolledToElement && <p>¡Te has desplazado a este elemento!</p>}
          </div>
        );
      };
      `;

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <div className="grid">
                        <div className="col-12">
                            <h1 className="text-6xl text-primary font-bold mb-3">Referenciar valores con refs</h1>
                            <p className="mt-0 mb-3 line-height-3 text-700">
                                Cuando quieres que un componente «recuerde» alguna información, pero no quieres que esa información provoque nuevos renderizados, puedes usar una ref.
                                useRef es un Hook de React que permite crear y mantener una referencia mutable que persiste durante todo el ciclo de vida del componente.
                            </p>
                            <p className="mt-0 mb-3 line-height-3 text-700">
                                A diferencia del estado (useState) y las propiedades (props), el Hook useRef no provoca una nueva renderización del componente cuando se actualiza. En su lugar, se utiliza principalmente para almacenar valores que no cambian con el tiempo.
                                El Hook useRef se obtiene importando la función useRef desde la librería de React directamente. Recordar que solo estará disponible en versiones de 16.8 o superior.
                            </p>
                        </div>
                        <div className="col-12">
                            <BlockViewer header="Example:" code={block1} free>
                                <RefComponent />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quod inventore ea similique qui nam aspernatur id cumque ipsam omnis corporis hic explicabo itaque, commodi iusto praesentium amet nihil! Doloremque exercitationem veniam, iure accusamus natus eligendi? Magni minima recusandae quod. Natus mollitia ad aperiam dignissimos quam. Necessitatibus, exercitationem iure. Omnis!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quod inventore ea similique qui nam aspernatur id cumque ipsam omnis corporis hic explicabo itaque, commodi iusto praesentium amet nihil! Doloremque exercitationem veniam, iure accusamus natus eligendi? Magni minima recusandae quod. Natus mollitia ad aperiam dignissimos quam. Necessitatibus, exercitationem iure. Omnis!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quod inventore ea similique qui nam aspernatur id cumque ipsam omnis corporis hic explicabo itaque, commodi iusto praesentium amet nihil! Doloremque exercitationem veniam, iure accusamus natus eligendi? Magni minima recusandae quod. Natus mollitia ad aperiam dignissimos quam. Necessitatibus, exercitationem iure. Omnis!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quod inventore ea similique qui nam aspernatur id cumque ipsam omnis corporis hic explicabo itaque, commodi iusto praesentium amet nihil! Doloremque exercitationem veniam, iure accusamus natus eligendi? Magni minima recusandae quod. Natus mollitia ad aperiam dignissimos quam. Necessitatibus, exercitationem iure. Omnis!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quod inventore ea similique qui nam aspernatur id cumque ipsam omnis corporis hic explicabo itaque, commodi iusto praesentium amet nihil! Doloremque exercitationem veniam, iure accusamus natus eligendi? Magni minima recusandae quod. Natus mollitia ad aperiam dignissimos quam. Necessitatibus, exercitationem iure. Omnis!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quod inventore ea similique qui nam aspernatur id cumque ipsam omnis corporis hic explicabo itaque, commodi iusto praesentium amet nihil! Doloremque exercitationem veniam, iure accusamus natus eligendi? Magni minima recusandae quod. Natus mollitia ad aperiam dignissimos quam. Necessitatibus, exercitationem iure. Omnis!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quod inventore ea similique qui nam aspernatur id cumque ipsam omnis corporis hic explicabo itaque, commodi iusto praesentium amet nihil! Doloremque exercitationem veniam, iure accusamus natus eligendi? Magni minima recusandae quod. Natus mollitia ad aperiam dignissimos quam. Necessitatibus, exercitationem iure. Omnis!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quod inventore ea similique qui nam aspernatur id cumque ipsam omnis corporis hic explicabo itaque, commodi iusto praesentium amet nihil! Doloremque exercitationem veniam, iure accusamus natus eligendi? Magni minima recusandae quod. Natus mollitia ad aperiam dignissimos quam. Necessitatibus, exercitationem iure. Omnis!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quod inventore ea similique qui nam aspernatur id cumque ipsam omnis corporis hic explicabo itaque, commodi iusto praesentium amet nihil! Doloremque exercitationem veniam, iure accusamus natus eligendi? Magni minima recusandae quod. Natus mollitia ad aperiam dignissimos quam. Necessitatibus, exercitationem iure. Omnis!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quod inventore ea similique qui nam aspernatur id cumque ipsam omnis corporis hic explicabo itaque, commodi iusto praesentium amet nihil! Doloremque exercitationem veniam, iure accusamus natus eligendi? Magni minima recusandae quod. Natus mollitia ad aperiam dignissimos quam. Necessitatibus, exercitationem iure. Omnis!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quod inventore ea similique qui nam aspernatur id cumque ipsam omnis corporis hic explicabo itaque, commodi iusto praesentium amet nihil! Doloremque exercitationem veniam, iure accusamus natus eligendi? Magni minima recusandae quod. Natus mollitia ad aperiam dignissimos quam. Necessitatibus, exercitationem iure. Omnis!</p>
                                <ScrollableContent/>
                            </BlockViewer>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RefsPage
