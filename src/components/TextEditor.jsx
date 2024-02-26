import React, {useState} from 'react';
import '@/styles/snow.css';
import * as htmlToImage from 'html-to-image';
import useStore from "@/states/modelState"
import {MdAddBox} from "react-icons/md";
import ReactQuill from "@/components/ReactQuill";


export default function TextEditor({setDecalPath}) {
    const { incrementDecalSize, setIsWriting } = useStore()
    const editorRef = React.useRef(null);
    const [content, setContent] = useState('');

    const formats = [
        'header', 'bold', 'italic', 'underline', 'strike',
        'color', 'background', 'font', 'align', 'clean'
    ];

    const modules = {
        toolbar: [
            [{'header': [1, 2, 3, false]}, {'font': ["sans-serif", "serif", "monospace"]}],
            [{'color': []}, {'background': []}, {'align': []}],
            ['bold', 'italic', 'underline', 'strike', 'clean']
        ]
    };

    const handleEditorChange = (newContent) => {
        setContent(newContent);
    };
    const convertToImage = () => {
        const editor = editorRef.current;
        const quill = editor.getEditor();
        quill.root.style.width = 'fit-content';

        // Calculate the width of the content
        const contentWidth = quill.root.scrollWidth;
        // Add 5-10 pixels to the calculated width
        const newWidth = contentWidth + 10; // Adjust the value as needed
        // Set the new width
        quill.root.style.width = newWidth + 'px';

        // Use html-to-image to convert the content to an image
        htmlToImage.toPng(quill.root)
            .then(function (dataUrl) {
                incrementDecalSize(0.2);
                setDecalPath(dataUrl);
                quill.root.style.width = 'auto';
            })
            .catch(function (error) {
                console.error("Conversion failed:", error);
            });
    };

    return (
        <>
            <ReactQuill
                id="text-format-container"
                theme="snow"
                value={content}
                onKeyDown={() => setIsWriting(true)}
                onKeyUp={() => setIsWriting(false)}
                onChange={handleEditorChange}
                modules={modules}
                formats={formats}
                forwardedRef={editorRef}
            />
            <button className={"add-text-btn"} onClick={convertToImage}>
                <MdAddBox />
            </button>
        </>
    );
}
