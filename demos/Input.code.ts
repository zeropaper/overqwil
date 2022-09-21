export default function InputCode(props: string[]) {
  return `import { Input } from 'overqwil';

function Demo() {
  return (
    <Input
      ${props.join('\n      ')}
    >
  );
}`;
}
