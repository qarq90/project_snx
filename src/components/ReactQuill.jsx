import dynamic from "next/dynamic";
import React from "react";

const ReactQuill = dynamic(
    async () => {
        const { default: RQ } = await import("react-quill");
        const DynamicReactQuill = ({ forwardedRef, ...props }) => <RQ ref={forwardedRef} {...props} />;
        DynamicReactQuill.displayName = "ReactQuill";
        return DynamicReactQuill;
    },
    {
        ssr: false,
    }
);

export default ReactQuill;
