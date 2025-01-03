const regex = {
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$&*]).{8,}$/,
  phoneNumber: /(84|0[3|5|7|8|9])+(\d{8})\b/,
  otp: /\d{6}$/,
  time: /^([01]?[\d]|2[0-3]):[0-5][\d]$/,
  coordinates: /^[-+]?((1[0-7][0-9]|[1-9]?[\d])(\.\d+)?|180(\.0+)?)$/,
};
export default regex;
