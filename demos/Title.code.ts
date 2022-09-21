export default function TitleCode(props: string[], children?: string) {
  return `import { Title } from 'overqwil';

function Demo() {
  return (
    <Title
      ${props.join('\n      ')}
    >
      ${children || 'Title'}
    </Title>
  );
}`;
}
