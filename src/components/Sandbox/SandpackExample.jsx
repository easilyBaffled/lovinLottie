import { Sandpack } from '@codesandbox/sandpack-react';
import { nightOwl } from '@codesandbox/sandpack-themes';

nightOwl.font.mono =
    '"Fira Code", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace';

nightOwl.font.size = Number.parseInt(nightOwl.font.size) * 2 + 'px';
nightOwl.font.lineHeight = Number.parseInt(nightOwl.font.lineHeight) * 2 + 'px';

export const SandpackExample = ({ files }) => (
    <Sandpack
        className="sandbox"
        options={{
            editorHeight: '100vh',
            id: 'target',
            editorWidthPercentage: 60,
            width: '80vw',
        }}
        customSetup={{
            dependencies: {
                'lottie-web': '^5.10.1',
                '@lottiefiles/lottie-interactivity': '^1.6.1',
            },
        }}
        template="vanilla"
        theme={nightOwl}
        files={files}
    />
);
