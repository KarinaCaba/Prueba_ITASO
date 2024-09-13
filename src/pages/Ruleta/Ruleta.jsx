import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Ruleta.scss';

const categories = [
    { name: 'Verduras', angleRange: [324, 360] },
    { name: 'Verduras', angleRange: [360, 36] },
    { name: 'Cereales', angleRange: [36, 108] },
    { name: 'Leguminosas', angleRange: [108, 180] },
    { name: 'Alimentos de Origen Animal', angleRange: [180, 252] },
    { name: 'Frutas', angleRange: [252, 324] },
];

function getCategoryName(rotation) {
    const normalizedRotation = rotation % 360;
    for (let category of categories) {
        const [startAngle, endAngle] = category.angleRange;
        if (normalizedRotation >= startAngle && normalizedRotation < endAngle) {
            return category.name;
        }
    }
    return 'Unknown';
}

function Ruleta() {
    const [rotation, setRotation] = useState(0);
    const [category, setCategory] = useState('');

    const handleSpin = () => {
        const newRotation = rotation + Math.floor(Math.random() * 360) + 360;
        setRotation(newRotation);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            const categoryName = getCategoryName(rotation);
            setCategory(categoryName);
        }, 2000);
        return () => clearTimeout(timer);
    }, [rotation]);

    const handleDragStart = (event, id) => {
        event.dataTransfer.setData("text/plain", id);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const id = event.dataTransfer.getData("text/plain");
        const draggableElement = document.getElementById(id);
        const dropzone = document.getElementById('target-ruleta-container');

        if (draggableElement && dropzone) {
            const itemCategory = draggableElement.getAttribute('foodGroup');
            if (itemCategory === category) {
                const rect = dropzone.getBoundingClientRect();
                const offsetX = event.clientX - rect.left;
                const offsetY = event.clientY - rect.top;
                const newLeft = Math.max(0, Math.min(offsetX - (draggableElement.offsetWidth / 2), dropzone.offsetWidth - draggableElement.offsetWidth));
                const newTop = Math.max(0, Math.min(offsetY - (draggableElement.offsetHeight / 2), dropzone.offsetHeight - draggableElement.offsetHeight));

                draggableElement.style.position = 'absolute';
                draggableElement.style.left = `${newLeft}px`;
                draggableElement.style.top = `${newTop}px`;

                dropzone.appendChild(draggableElement);
            } else {
                alert(`The item does not match the selected category: ${category}`);
            }

            event.dataTransfer.clearData();
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    return (
        <div className="Ruleta">
            <div className="container-fluid">
                <div className="row">
                    <div className="container col-12 col-md-6 text-center">
                        <img src="/assets/Ruleta/flecha.png" height="90" alt="Flecha" id="flecha" />
                        <img
                            id="ruleta"
                            src="/assets/Ruleta/ruleta.png"
                            style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 2s ease-out' }}
                            alt="Ruleta"
                            onClick={handleSpin}
                        />
                        <span id="groupBadge" className="badge badge-light">{category}</span>
                    </div>
                    <div id="foodContainer" className="col-12 col-md-6 d-flex flex-wrap justify-content-center">
                    <div id="carne" className="draggable float fadeout" foodGroup="Alimentos de Origen Animal" draggable="true" onDragStart={(e) => handleDragStart(e, 'carne')} style={{ backgroundImage: `url(/assets/Ruleta/alimentosdeorigenanimal/carne.png)` }}></div>
                        <div id="cheedar" className="draggable float" foodGroup="Alimentos de Origen Animal" draggable="true" onDragStart={(e) => handleDragStart(e, 'cheedar')} style={{ backgroundImage: `url(/assets/Ruleta/alimentosdeorigenanimal/cheedar.png)` }}></div>
                        <div id="filete" className="draggable float" foodGroup="Alimentos de Origen Animal" draggable="true" onDragStart={(e) => handleDragStart(e, 'filete')} style={{ backgroundImage: `url(/assets/Ruleta/alimentosdeorigenanimal/filete.png)` }}></div>
                        <div id="huevo" className="draggable float" foodGroup="Alimentos de Origen Animal" draggable="true" onDragStart={(e) => handleDragStart(e, 'huevo')} style={{ backgroundImage: `url(/assets/Ruleta/alimentosdeorigenanimal/huevo.png)` }}></div>
                        <div id="pollo" className="draggable float" foodGroup="Alimentos de Origen Animal" draggable="true" onDragStart={(e) => handleDragStart(e, 'pollo')} style={{ backgroundImage: `url(/assets/Ruleta/alimentosdeorigenanimal/pollo.png)` }}></div>
                        <div id="queso" className="draggable float" foodGroup="Alimentos de Origen Animal" draggable="true" onDragStart={(e) => handleDragStart(e, 'queso')} style={{ backgroundImage: `url(/assets/Ruleta/alimentosdeorigenanimal/queso.png)` }}></div>
                        <div id="salchicha" className="draggable float" foodGroup="Alimentos de Origen Animal" draggable="true" onDragStart={(e) => handleDragStart(e, 'salchicha')} style={{ backgroundImage: `url(/assets/Ruleta/alimentosdeorigenanimal/salchicha.png)` }}></div>

                        <div id="arroz" className="draggable float" foodGroup="Cereales" draggable="true" onDragStart={(e) => handleDragStart(e, 'arroz')} style={{ backgroundImage: `url(/assets/Ruleta/cereales/arroz.png)` }}></div>
                        <div id="pan" className="draggable float" foodGroup="Cereales" draggable="true" onDragStart={(e) => handleDragStart(e, 'pan')} style={{ backgroundImage: `url(/assets/Ruleta/cereales/pan.png)` }}></div>
                        <div id="papa" className="draggable float" foodGroup="Cereales" draggable="true" onDragStart={(e) => handleDragStart(e, 'papa')} style={{ backgroundImage: `url(/assets/Ruleta/cereales/papa.png)` }}></div>
                        <div id="pasta" className="draggable float" foodGroup="Cereales" draggable="true" onDragStart={(e) => handleDragStart(e, 'pasta')} style={{ backgroundImage: `url(/assets/Ruleta/cereales/pasta.png)` }}></div>
                        <div id="sopaPasta" className="draggable float" foodGroup="Cereales" draggable="true" onDragStart={(e) => handleDragStart(e, 'sopaPasta')} style={{ backgroundImage: `url(/assets/Ruleta/cereales/sopaPasta.png)` }}></div>

                        <div id="apio" className="draggable float" foodGroup="Verduras" draggable="true" onDragStart={(e) => handleDragStart(e, 'apio')} style={{ backgroundImage: `url(/assets/Ruleta/frutasyverduras/apio.png)` }}></div>
                        <div id="brocoli" className="draggable float" foodGroup="Verduras" draggable="true" onDragStart={(e) => handleDragStart(e, 'brocoli')} style={{ backgroundImage: `url(/assets/Ruleta/frutasyverduras/brocoli.png)` }}></div>
                        <div id="chiles" className="draggable float" foodGroup="Frutas" draggable="true" onDragStart={(e) => handleDragStart(e, 'chiles')} style={{ backgroundImage: `url(/assets/Ruleta/frutasyverduras/chiles.png)` }}></div>
                        <div id="coctel" className="draggable float" foodGroup="Frutas" draggable="true" onDragStart={(e) => handleDragStart(e, 'coctel')} style={{ backgroundImage: `url(/assets/Ruleta/frutasyverduras/coctel.png)` }}></div>
                        <div id="ensalada" className="draggable float" foodGroup="Verduras" draggable="true" onDragStart={(e) => handleDragStart(e, 'ensalada')} style={{ backgroundImage: `url(/assets/Ruleta/frutasyverduras/ensalada.png)` }}></div>
                        <div id="jitomate" className="draggable float" foodGroup="Frutas" draggable="true" onDragStart={(e) => handleDragStart(e, 'jitomate')} style={{ backgroundImage: `url(/assets/Ruleta/frutasyverduras/jitomate.png)` }}></div>
                        <div id="mango" className="draggable float" foodGroup="Frutas" draggable="true" onDragStart={(e) => handleDragStart(e, 'mango')} style={{ backgroundImage: `url(/assets/Ruleta/frutasyverduras/mango.png)` }}></div>
                        <div id="manzana" className="draggable float" foodGroup="Frutas" draggable="true" onDragStart={(e) => handleDragStart(e, 'manzana')} style={{ backgroundImage: `url(/assets/Ruleta/frutasyverduras/manzana.png)` }}></div> 
                        <div id="naranja" className="draggable float" foodGroup="Frutas" draggable="true" onDragStart={(e) => handleDragStart(e, 'naranja')} style={{ backgroundImage: `url(/assets/Ruleta/frutasyverduras/naranja.png)` }}></div> 
                        <div id="papaya" className="draggable float" foodGroup="Frutas" draggable="true" onDragStart={(e) => handleDragStart(e, 'papaya')} style={{ backgroundImage: `url(/assets/Ruleta/frutasyverduras/papaya.png)` }}></div> 
                        <div id="platano" className="draggable float" foodGroup="Frutas" draggable="true" onDragStart={(e) => handleDragStart(e, 'platano')} style={{ backgroundImage: `url(/assets/Ruleta/frutasyverduras/platano.png)` }}></div> 
                        <div id="sandia" className="draggable float" foodGroup="Frutas" draggable="true" onDragStart={(e) => handleDragStart(e, 'sandia')} style={{ backgroundImage: `url(/assets/Ruleta/frutasyverduras/sandia.png)` }}></div> 
                        <div id="uvas" className="draggable float" foodGroup="Frutas" draggable="true" onDragStart={(e) => handleDragStart(e, 'uvas')} style={{ backgroundImage: `url(/assets/Ruleta/frutasyverduras/uvas.png)` }}></div> 
                        <div id="zanahoria" className="draggable float" foodGroup="Verduras" draggable="true" onDragStart={(e) => handleDragStart(e, 'zanahoria')} style={{ backgroundImage: `url(/assets/Ruleta/frutasyverduras/zanahoria.png)` }}></div>                    
                        <div id="acite" className="draggable float" foodGroup="Leguminosas" draggable="true" onDragStart={(e) => handleDragStart(e, 'acite')} style={{ backgroundImage: `url(/assets/Ruleta/leguminosas/aceite.png)` }}></div>
                    <div id="legumbres" className="draggable float" foodGroup="Leguminosas" draggable="true" onDragStart={(e) => handleDragStart(e, 'legumbres')} style={{ backgroundImage: `url(/assets/Ruleta/leguminosas/legumbres.png)` }}></div>
                    </div>
                    </div>
                    <div id="target-ruleta-container" className="col-12 col-md-4 text-center" 
                        style={{ position: 'relative', border: '1px solid #ddd', padding: '10px' }} 
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}>
                        <img
                            id="target-ruleta"
                            src="/assets/Ruleta/ruleta2.png"
                            alt="Target Ruleta"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                </div>
            </div>
    );
}

export default Ruleta;