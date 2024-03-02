import { Editor } from "@monaco-editor/react";

type PlaygroundProps = {
    code: string;
}

const Playground: React.FC<PlaygroundProps> = (props) => {
    return (
        <Editor/>
    );
}

export default Playground;