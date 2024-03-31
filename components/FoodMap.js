// Import statements for food images
import zucchini from '../foods/zucchini.png';
import banana from '../foods/banana.png';
import potato from '../foods/potato.png';
import broccoli from '../foods/broccoli.png';
import brussel_sprout from '../foods/brussel_sprout.png';
import grape from '../foods/grape.png';
import peas from '../foods/peas.png';
import tomato from '../foods/tomato.png';
import lettuce from '../foods/lettuce.png';
import bread from '../foods/bread.png';
import ham from '../foods/ham.png';
import turkey from '../foods/turkey.png';
import activia from '../foods/activia.png';
import eggs from '../foods/eggs.png';
import beef from '../foods/beef.png';
import apples from '../foods/apples.png';
import bananas from '../foods/bananas.png';
import cucumbers from '../foods/cucumbers.png';
import garlic from '../foods/garlic.png';
import tomatoes from '../foods/tomatoes.png';
import onions from '../foods/onions.png';
import peppers from '../foods/peppers.png';
import tilapia from '../foods/tilapia.png';

// Map of food names to their corresponding image imports
const foodImages = {
  "zucchini": zucchini,
  "banana": banana,
  "potato": potato,
  "broccoli": broccoli,
  "brussel sprout": brussel_sprout,
  "grape": grape,
  "peas": peas,
  "tomato": tomato,
  "lettuce": lettuce,
  "bread": bread,
  "ham": ham,
  "turkey": turkey,
  "activia": activia,
  "eggs": eggs,
  "beef": beef,
  "apples": apples,
  "bananas": bananas,
  "cucumbers": cucumbers,
  "garlic": garlic,
  "tomatoes": tomatoes,
  "onions": onions,
  "peppers": peppers,
  "tilapia": tilapia
};

const getFoodFileName = (foodName) => {
  const fileName = foodImages[foodName];
  if (!fileName) {
    throw new Error(`Food "${foodName}" not found in the mapping.`);
  }
  return fileName;
};

export default getFoodFileName;