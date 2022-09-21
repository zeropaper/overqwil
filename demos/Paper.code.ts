export default function PaperCode(props: string[], children?: string) {
  return `import { Paper } from 'overqwil';

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
