const template = ({ componentName, jsx, imports, interfaces, exports }, { tpl }) => tpl`
${imports}
import { svgIconProps } from '../svg-icon.types'
${interfaces}


export const ${componentName} = ({
  width,
  height,
  viewBox = '0 0 24 24',
  fill = 'none',
  ...props
}: svgIconProps) => {
  return (${jsx})
}

${exports};
`;

module.exports = {
  template,
  svgProps: {
    width: '{width}',
    height: '{height}',
    fill: '{fill}',
    viewBox: '{viewBox}',
  },
  icon: true,
  filenameCase: 'kebab',
  index: true,
};
