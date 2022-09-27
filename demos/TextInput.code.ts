export default function TextInputCode(props: string[]) {
  return `import { TextInput } from '@zeropaper/overqwil';

function Demo() {
  return (
    <TextInput
      ${props.join('\n      ')}
    >
  );
}`;
}
