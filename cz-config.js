module.exports = {
    types: [
        { value: 'feat', name: 'feat:     A new feature' },
        { value: 'fix', name: 'fix:      A bug fix' },
        // ... other types
    ],
    scopes: [], // Or provide a list of scopes
    allowCustomScopes: true,
    allowBreakingChanges: ['feat', 'fix'],
    // ... other options
    messages: {
        type: 'Select the type of change that you\'re committing:',
        scope: 'Denote the scope of this change (optional):',
        // ... other messages
    },
};