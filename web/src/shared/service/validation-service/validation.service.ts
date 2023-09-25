export const ValidationService = {
  only_number: /^[0-9]*$/,
  only_number_price: "^[0-9]+(?:[.][0-9]+)*$",
  pattern_email: "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{1,6}$",
  number_include_full_size: "^([0-9]|[０-９])*$",
  number_only_full_size: "^[０-９]*$",
  only_japan_language: "^[一-龯]*$",
  only_japan_language_hiragana_katacana: /^[ぁ-んァ-ン 　ー]*$/,
  only_japan_language_hiragana: "^[ぁ-ん]*$",
  only_japan_language_Katakana_fullwidth: "^[ァ-ン]*$",
  only_japan_language_Katakana_haftwidth: "^[ｧ-ﾝﾞﾟ]*$",
  only_japan_fullsize_alpha: "^[Ａ-ｚ]*$",
  japan_postal_code: "^[0-9]{3}-[0-9]{4}*$",
  japan_postal_code1: "^[0-9]{3}$",
  japan_postal_code2: "^[0-9]{4}$",

  japan_phone: "^[0-9]{3}-[0-9]{4}-[0-9]{4}*$",
  pattern_expiration: "^[0-9]{2}/[0-9]{2}$",
  pattern_number_card: "^[0-9]{12,20}$",
  pattern_number_securitycode: "^[0-9]{3,4}$",
  pattern_number_float: "^([0-9]+[.]?[0-9]*){1}$",

  only_two_number: "^[0-9]{2}$",
  only_three_number: "^[0-9]{1,3}$",

  pattern_japan_alpha: "^[a-zA-Z0-9 ]+$",
  nonSpace: "^[\\S]*$",

  only_empty: "^$",
  pattern_year: /^[0-9]{4}$/,
  pattern_month: /^[0-9]{1,2}$/,
  pattern_day: /^[0-9]{1,2}$/,
  pattern_minute: /^[0-9]{1,2}$/,
};
