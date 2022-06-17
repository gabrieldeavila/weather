import moment from "moment";
import localization from "moment/locale/pt-br";

/**
 * Formata a data atual para ddd, DD MMM, ex.: Sex, 17 Jun
 * @return {String}
 */
export const getCurrDay = () => {
  let date = new Date();
  let momentDate = moment(date);

  return momentDate.format("ddd, DD MMM");
};

/**
 * Retorna um ícone com base na condição climática, ex.: Fog -> cloudy
 * @param  {String} condition - a condição climática
 * @return {String}
 */
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

/**
 * Faz com que uma temperatura seja formatada para 0 casas decimais, ex.: 15.2 -> 15
 * @param  {String|Number} temp - a temperatura
 * @return {String}
 */
export const fixedTemp = (temp) => {
  return parseFloat(temp, 0).toFixed(0);
};

/**
 * Retorna o horário de uma data no formato 0PM, 1PM, 12PM
 * @param  {String} time - a data, no formato YYYY-MM-DD HH:MM, ex.: 2020-06-17 12:00
 * @return {String} - o horário, no formato HH:MM, ex.: 12:00
 */
export const getTime = (time) => {
  let date = new Date(time);
  let momentDate = moment(date);

  let hour12 = momentDate.format("hA");

  return hour12;
};
