export default function ButtonCode(props: string[], children?: string) {
  return `import { Button } from 'overqwil';

function Demo() {
  return (
    <Button
      ${props.join('\n      ')}
    >
      ${children || 'Button'}
    </Button>
  );
}`;
}
