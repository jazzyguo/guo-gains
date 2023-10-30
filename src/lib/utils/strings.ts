export const toSlug = (string = "") => {
  const slug = string
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
  return slug;
};
