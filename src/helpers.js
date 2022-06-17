import moment from "moment";
import localization from "moment/locale/pt-br";
// moment("de");

export const getCurrDay = () => {
  let date = new Date();
  let momentDate = moment(date);

  return momentDate.format("ddd, DD MMM");
};

export const getCurrConditionIcon = (condition) => {
  let icon = "cloudy";

  const conditionOptions = {
    cloudy: ["cloudy", "overcast", "mist", "fog"],
    "cloudy-night": ["sunny", "clear"],
    rainy: ["rain", "showers", "thunderstorm"],
    snow: ["snow", "sleet"],
  };

  // find the icon if it exists
  for (let [key, value] of Object.entries(conditionOptions)) {
    // find if some word of the condition matches one of the words of the conditionOptions
    if (value.some((word) => condition?.toLowerCase?.()?.includes?.(word))) {
      icon = key;
    }
  }

  return icon;
};
