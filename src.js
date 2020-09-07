const renderer = () => {
  let element = 'div';
  const attrs = {};

  const getAttrs = () => Object.keys(attrs)
    .map(key => `${key}="${attrs[key]}"`)
    .join(' ');;

  const elementRender = (content = '') => {
    const attributes = getAttrs();
    return `<${element}${attributes ? ` ${attributes}` : ''}>${content}</${element}>`;
  };

  elementRender.element = (elem) => {
    if (!elem) {
      return element;
    }

    element = elem;
    return elementRender;
  };

  elementRender.attr = (name, value) => {
    if (value === undefined) {
      return attrs[name];
    }

    attrs[name] = value;
    return elementRender;
  };

  return elementRender;
};


const test = (expected, toTest) => {
  console.log(expected === toTest, expected);
};

module.exports.renderer = renderer;
module.exports.test = test;
