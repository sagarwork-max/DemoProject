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
                '✨ feat', // New feature
                '🐛 fix', // Bug fix
                '💎 style', // Documentation changes
                '📦 refactor', // Changes that do not affect the meaning of the code (white-space, formatting, etc.)
                '🚨 test', // Code changes that neither fix a bug nor add a feature
                '📚 docs', // Performance improvement
                '♻️ chore', // Adding missing tests or correcting existing tests
                '🛠 build', // Changes that affect the build system or external dependencies (example scopes: npm)
                '⚙️ ci', // Changes to CI configuration files and scripts
                '🗑 revert', // Other changes that don't modify src or test files
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
    prompt: {
        settings: {},
        messages: {
            skip: ':skip',
            max: 'upper %d chars',
            min: '%d chars at least',
            emptyWarning: 'can not be empty',
            upperLimitWarning: 'over limit',
            lowerLimitWarning: 'below limit'
        },
        questions: {
            type: {
                description: "Select the type of change that you're committing:",
                enum: {
                    feat: {
                        description: 'A new feature',
                        title: 'Features',
                        emoji: '✨',
                    },
                    fix: {
                        description: 'A bug fix',
                        title: 'Bug Fixes',
                        emoji: '🐛',
                    },
                    docs: {
                        description: 'Documentation only changes',
                        title: 'Documentation',
                        emoji: '📚',
                    },
                    style: {
                        description: 'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
                        title: 'Styles',
                        emoji: '💎',
                    },
                    refactor: {
                        description: 'A code change that neither fixes a bug nor adds a feature',
                        title: 'Code Refactoring',
                        emoji: '📦',
                    },
                    perf: {
                        description: 'A code change that improves performance',
                        title: 'Performance Improvements',
                        emoji: '🚀',
                    },
                    test: {
                        description: 'Adding missing tests or correcting existing tests',
                        title: 'Tests',
                        emoji: '🚨',
                    },
                    build: {
                        description: 'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
                        title: 'Builds',
                        emoji: '🛠',
                    },
                    ci: {
                        description: 'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
                        title: 'Continuous Integrations',
                        emoji: '⚙️',
                    },
                    chore: {
                        description: "Other changes that don't modify src or test files",
                        title: 'Chores',
                        emoji: '♻️',
                    },
                    revert: {
                        description: 'Reverts a previous commit',
                        title: 'Reverts',
                        emoji: '🗑',
                    },
                },
            },
};