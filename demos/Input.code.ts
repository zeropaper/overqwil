export default function InputCode(props: string[]) {
  return `import { Input } from '@zeropaper/overqwil';

function Demo() {
  return (
    <Input
      ${props.join('\n      ')}
    >
  );
}`;
}
