// scripts/generate-registry.ts
import fs from 'fs';
import path from 'path';

const templatesDir = path.resolve(__dirname, '../components/ui/svg-icon/templates');
const registryPath = path.resolve(__dirname, '../components/ui/svg-icon/svg-icon.registry.ts');

const files = fs.readdirSync(templatesDir).filter((file) => file.endsWith('.tsx'));

const entries = files.map((file) => {
  const name = path.basename(file, '.tsx'); // face-soso
  const componentName = toPascalCase(name); // FaceSoso
  return `  ${componentName}: () => import('./templates/${name}')`;
});

const output = `// This file is auto-generated
export const SVGIconRegistry = {
${entries.join(',\n')}
}
`;

fs.writeFileSync(registryPath, output);
console.log(`✅ Registry generated with ${files.length} icons.`);

// Helper
function toPascalCase(str: string) {
  return str.replace(/(^\w|-\w)/g, (match) => match.replace(/-/, '').toUpperCase());
}
