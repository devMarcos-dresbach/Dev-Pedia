import React from 'react';
import '../Styles/Gallery.css';

const Gallery = () => {
    // No futuro, você pode buscar estas imagens de uma API ou banco de dados.
    const images = [
        'url_da_imagem1.jpg',
        'url_da_imagem2.jpg',
        'url_da_imagem3.jpg'
        // ... outras imagens
    ];

    return (
        <div className="gallery-container">
            <h1>Galeria Dev-Media</h1>
            <div className="gallery-grid">
                {images.map((image, index) => (
                    <div key={index} className="gallery-item">
                        <img src={image} alt={`Imagem ${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;
