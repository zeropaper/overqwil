export default function NumberInputCode(props: string[]) {
  return `import { NumberInput } from '@zeropaper/overqwil';

function Demo() {
  return (
    <NumberInput
      ${props.join('\n      ')}
    >
  );
}`;
}
