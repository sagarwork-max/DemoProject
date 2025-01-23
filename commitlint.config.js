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
                'feat', // New feature
                'fix', // Bug fix
                'style', // Documentation changes
                'refactor', // Changes that do not affect the meaning of the code (white-space, formatting, etc.)
                'test', // Code changes that neither fix a bug nor add a feature
                'docs', // Performance improvement
                'chore', // Adding missing tests or correcting existing tests
                'build', // Changes that affect the build system or external dependencies (example scopes: npm)
                'ci', // Changes to CI configuration files and scripts
                'revert', // Other changes that don't modify src or test files
                'perf', // Reverts a previous commit
                'BREAKING CHANGE',
                'security',// Security changes
                'dependency',
                'merge',
                'release',
                'design',// design related changes
                'cleanup',// code clean 
                'config',// configuration based changes
                'init',// initialize new thing
                'experiment'// new feature experiment
            ],
        ],
        'scope-enum': [
            2,
            'always',
            [
                'setup', // Project setup
                'config', // Configuration files
                'deps', // Dependency updates
                'feature', // Feature-specific changes
                'bug', // Bug fixes
                'docs', // Documentation
                'style', // Code style/formatting
                'refactor', // Code refactoring
                'test', // Tests
                'build', // Build scripts or configuration
                'ci', // Continuous integration
                'release', // Release related changes
                'other', // Other changes
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