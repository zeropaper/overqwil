export default function TextareaCode(props: string[]) {
  return `import { Textarea } from 'overqwil';

function Demo() {
  return (
    <Textarea
      ${props.join('\n      ')}
    >
  );
}`;
}
