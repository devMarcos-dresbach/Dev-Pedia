import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // importa estilos
import '../../Styles/Editor.css';
import Header from './Header';

const Editor = () => {
    const [content, setContent] = useState('');

    const handleChange = value => {
        setContent(value);
    };

    return (
        <div className="editor-container">
            <h1>Editor de Texto</h1>
            <ReactQuill value={content} onChange={handleChange} />
        </div>
    );
}

export default Editor;
