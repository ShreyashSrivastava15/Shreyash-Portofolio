module.exports.validateSignup = (data) => {
  if (!data.firstName || !data.emailId) {
    throw new Error("Invalid signup data");
  }
};
