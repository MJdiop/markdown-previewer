interface EditorProps {
  content: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Editor = ({ content, onChange }: EditorProps) => {
  return (
    <div className="editor-wrapper">
      <textarea value={content} onChange={onChange} id="editor" />
    </div>
  );
};
