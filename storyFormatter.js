module.exports = function storyFormatter(text) {
  fixedText = text.replace(/[^A-Za-z0-9?.,\r\n\b ]/g, "");
  return fixedText;
};
