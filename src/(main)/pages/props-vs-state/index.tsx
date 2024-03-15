import { useState } from "react";
import BlockViewer from "../../components/BlockViewer/BlockViewer";
import './index.scss';
import { sculptureList } from './data';
import { Button } from "primereact/button";

//Props  example
function getImageUrl(person: any, size: string = 's') {
    return (
        'https://i.imgur.com/' +
        person.imageId +
        size +
        '.jpg'
    );
}

const Avatar = ({ person, size }: any) => {
    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    )
}

const Profile = () => {
    return (
        <div className="flex justify-content-center align-item-center flex-row-reverse">
            <Avatar
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}
            />
            <Avatar
                size={80}
                person={{
                    name: 'Aklilu Lemma',
                    imageId: 'OKS67lh'
                }}
            />
            <Avatar
                size={50}
                person={{
                    name: 'Lin Lanying',
                    imageId: '1bX5QH6'
                }}
            />
        </div>
    )
}


//State example
const Gallery = () => {
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        if (index + 1 < sculptureList.length) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }
    const handlePreview = () => {
        if (index === 0) {
            setIndex(0);
        } else {
            setIndex(index - 1);
        }

    }

    let sculpture = sculptureList[index];

    return (
        <>
            <div className="flex flex-column p-4">
                <div className="flex justify-content-center gap-2">
                    <Button onClick={handlePreview} label="Preview"> </Button>
                    <Button onClick={handleNext} label="Next"> </Button>
                </div>


                <h2>
                    <i>{sculpture.name} </i>
                    por {sculpture.artist}
                </h2>
                <h3>
                    ({index + 1} de {sculptureList.length})
                </h3>
                <img
                className="avatar"
                    src={sculpture.url}
                    alt={sculpture.alt}
                    width={150}
                />
                <p>
                    {sculpture.description}
                </p>
            </div>
        </>
    )
}
const PropsState = () => {
    const block1 = `function getImageUrl(person: any, size: string = 's') {
        return (
            'https://i.imgur.com/' +
            person.imageId +
            size +
            '.jpg'
        );
    }
    
    const Avatar = ({ person, size }: any) => {
        return (
            <img
                className="avatar"
                src={getImageUrl(person)}
                alt={person.name}
                width={size}
                height={size}
            />
        )
    }
    
    const Profile = () => {
        return (
            <div className="flex justify-content-center align-item-center flex-row-reverse">
                <Avatar
                    size={100}
                    person={{
                        name: 'Katsuko Saruhashi',
                        imageId: 'YfeOqp2'
                    }}
                />
                <Avatar
                    size={80}
                    person={{
                        name: 'Aklilu Lemma',
                        imageId: 'OKS67lh'
                    }}
                />
                <Avatar
                    size={50}
                    person={{
                        name: 'Lin Lanying',
                        imageId: '1bX5QH6'
                    }}
                />
            </div>
        )
    }`;

    const block2 = `const Gallery = () => {
        const [index, setIndex] = useState(0);
    
        const handleNext = () => {
            if (index + 1 < sculptureList.length) {
                setIndex(index + 1);
            } else {
                setIndex(0);
            }
        }
        const handlePreview = () => {
            if (index === 0) {
                setIndex(0);
            } else {
                setIndex(index - 1);
            }
    
        }
    
        let sculpture = sculptureList[index];
    
        return (
            <>
                <div className="flex flex-column p-4">
                    <div className="flex justify-content-center gap-2">
                        <Button onClick={handlePreview} label="Preview"> </Button>
                        <Button onClick={handleNext} label="Next"> </Button>
                    </div>
    
    
                    <h2>
                        <i>{sculpture.name} </i>
                        por {sculpture.artist}
                    </h2>
                    <h3>
                        ({index + 1} de {sculptureList.length})
                    </h3>
                    <img
                    className="avatar"
                        src={sculpture.url}
                        alt={sculpture.alt}
                        width={150}
                    />
                    <p>
                        {sculpture.description}
                    </p>
                </div>
            </>
        )
    }`
    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <div className="grid">
                        <div className="col-12">
                            <h1 className="text-6xl text-primary font-bold mb-3">¿Qué diferencia hay entre props y state?</h1>
                            <p className="mt-0 mb-3 line-height-3 text-700">

                                Las props son un objeto que se pasan como argumentos de un componente padre a un componente hijo. Son inmutables y no se pueden modificar desde el componente hijo.

                                El state es un valor que se define dentro de un componente. Su valor es inmutable (no se puede modificar directamente) pero se puede establecer un valor nuevo del estado para que React vuelva a renderizar el componente.

                                Así que mientras tanto props como state afectan al renderizado del componente, su gestión es diferente.
                            </p>
                        </div>
                        <div className="col-12">
                            <BlockViewer header="Props Example:" code={block1} free>
                                <Profile />
                            </BlockViewer>
                        </div>

                        <div className="col-12">
                            <BlockViewer header="State Example:" code={block2} free>
                                <Gallery />
                            </BlockViewer>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PropsState
