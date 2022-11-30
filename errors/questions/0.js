try {
  const letters = "abc";
  letters(); // <- How would you describe what we're trying to do to letters here ? :🤔 calling it as a function
} catch (error) {
  console.log(error, "<--- error");
}
// TypeError