import { marked } from 'marked';

interface PreviewProps {
  previewContent: string;
}

export const Preview = ({ previewContent }: PreviewProps) => {
  const getMarkdownText = () => {
    const rawMarkup = marked.parse(previewContent);
    return { __html: rawMarkup };
  };
  return (
    <div className="preview-wrapper">
      {' '}
      <div id="preview" dangerouslySetInnerHTML={getMarkdownText()} />
    </div>
  );
};
