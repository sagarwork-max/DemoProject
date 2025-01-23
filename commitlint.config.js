module.exports = {
    extends: ["@commitlint/config-conventional"],
    parserPreset: {
        parserOpts: {
            headerPattern: /^(\w+)\(([^)]+)\): (.+)$/,
            headerCorrespondence: ["type", "scope", "subject"],
        },
    },
    'scope-enum': async ctx => [2, 'always', commitScopes(ctx)],
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
                "button",
            ],
        ],
        "header-min-length": [2, "always", 10],
        "header-max-length": [2, "always", 50],
        "body-max-line-length": [2, "always", 72],
        "subject-case": [
            2,
            "always",
            ["lower-case"],
        ],
    },
};