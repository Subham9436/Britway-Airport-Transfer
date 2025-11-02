import countries from "country-list";
import {
  getCountryCallingCode,
  isSupportedCountry,
  type CountryCode,
} from "libphonenumber-js";

export const countryCodes = countries
  .getData()
  .filter((c) => isSupportedCountry(c.code as CountryCode)) // <-- filters ALL unsupported like AQ, BV etc
  .map((c) => ({
    name: c.name,
    flag: `https://flagcdn.com/w20/${c.code.toLowerCase()}.png`,
    dial: "+" + getCountryCallingCode(c.code as CountryCode),
    code: c.code as CountryCode,
  }));
