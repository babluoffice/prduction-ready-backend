module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
      "type-enum": [
        2,
        "always",
        [
          "build",
          "chore",
          "ci",
          "docs",
          "feat",
          "fix",
          "perf",
          "refactor",
          "revert",
          "style",
          "test",
        ],
      ],
      "subject-case": [
        2,
        "always",
        ["sentence-case", "Sentence Case", "Kebab Case", "Snake Case"], 
      ],
      "subject-max-length": [2, "always", 100], // Optional: limit the length of the subject
    },
  };
  