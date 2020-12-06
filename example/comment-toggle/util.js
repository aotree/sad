exports.convertToSnakeCase = function(strArray) {
  result = strArray.join('_');
  console.log('[debug log] <util.js> joined argv:', result);
  result = result.toLowerCase();
  console.log('[debug log] <util.js> converted argv:', result);
  return result;
};
