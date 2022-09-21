export default function TextInputCode(props: string[]) {
  return `import { TextInput } from 'overqwil';

function Demo() {
  return (
    <TextInput
      ${props.join('\n      ')}
    >
  );
}`;
}
