import React, { useState } from 'react';

const FileUploader = () => {
    const [file, setFile] = useState(null);
    const [fileType, setFileType] = useState('');
    const [preview, setPreview] = useState(null);

    const handleFileChange = (e) => {
        const uploadedFile = e.target.files[0];
        if (uploadedFile) {
            setFile(uploadedFile);
            const type = uploadedFile.type.split('/')[0];
            setFileType(type);


            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(uploadedFile);
        }
    };

    const renderPreview = () => {
        if (!file || !preview) return null;

        switch (fileType) {
            case 'image':
                return <img src = { preview }
                alt = "Preview"
                style = {
                    { maxWidth: '100%' }
                }
                />;
            case 'video':
                return <video controls src = { preview }
                style = {
                    { maxWidth: '100%' }
                }
                />;
            case 'audio':
                return <audio controls src = { preview }
                />;
            case 'application': // PDF
                return <iframe src = { preview }
                title = "PDF Preview"
                style = {
                    { width: '100%', height: '500px' }
                }
                />;
            default:
                return <p > File type not supported
                for preview. < /p>;
        }
    };

    return ( <
        div className = "file-uploader" >
        <
        h2 > Upload a file < /h2> <
        input type = "file"
        onChange = { handleFileChange }
        /> { renderPreview() } < /
        div >
    );
};
export default FileUploader;