export const getChildType = (birth) => {
  const year = parseInt(birth.slice(0, 4));
  const now = new Date().getFullYear();
  const korAge = now - year + 1;

  if (korAge >= 8) return "초등학생";
  else if (korAge >= 6) return "유아";
  else if (korAge >= 1) return "영아";
  return "신생아";
};
