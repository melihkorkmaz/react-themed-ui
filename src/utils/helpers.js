const userProps = (props) => (...fields) => {
    let response = Object.assign({}, props);
    fields.forEach(field => delete response[field]);
    return response;
}

const fromCamelCase = (word) => word.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

const upperFirstChar = name => `${name.substring(0, 1).toUpperCase()}${name.substring(1, name.length)}`
const formatName = name => name.indexOf('-') >= 0 ? name.split('-').map(x => upperFirstChar(x)).join(' ') : upperFirstChar(name);

export {
    userProps,
    fromCamelCase,
    formatName
}