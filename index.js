function slugify(text) {
  if (typeof text !== "string") {
    throw new TypeError("Input must be a string");
  }

  return text
    .trim()
    .toLowerCase()
    .normalize("NFD")                     // Removes accents
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")         // Remove special chars
    .replace(/\s+/g, "-")                 // Spaces -> hyphen
    .replace(/-+/g, "-")                  // Multiple hyphens -> one
    .replace(/^-|-$/g, "");               // Remove leading/trailing hyphen
}

module.exports = slugify;