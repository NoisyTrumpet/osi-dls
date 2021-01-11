import jsonData from '../../../helpers/fonts/icons/icomoon/selection.json';

const iconList = jsonData.icons;

const createIconArray = (json) => {
  const icons = [];

  for (let i = 0; i < json.length; i += 1) {
    const icon = json[i];
    const { name } = icon.properties;

    icons.push(name);
  }

  icons.sort();

  return icons;
};

const iconArray = createIconArray(iconList);
export default iconArray;
