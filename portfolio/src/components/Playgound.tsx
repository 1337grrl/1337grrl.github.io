import Editor from '@monaco-editor/react';

type PlaygroundProps = {
    code: string;
};

const Playground: React.FC<PlaygroundProps> = (props: PlaygroundProps) => {
    return (
        <Editor
            defaultLanguage="haskell"
            defaultValue="-- Write your code here"
        />
    )
}

export default Playground;