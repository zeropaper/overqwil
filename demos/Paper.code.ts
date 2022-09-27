export default function PaperCode(props: string[], children?: string) {
  return `import { Paper } from '@zeropaper/overqwil';

function Demo() {
  return (
    <Paper
      ${props.join('\n      ')}
    >
      ${children || 'Paper'}
    </Paper>
  );
}`;
}
