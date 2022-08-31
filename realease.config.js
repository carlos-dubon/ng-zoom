module.exports = {
    "plugins": [
        ["@semantic-release/commit-analyzer", {
            "preset": "angular",
            "releaseRules": [
                { "type": "docs", "scope": "README", "release": "patch" },
                { "type": "refactor", "release": "patch" },
                { "type": "style", "release": "patch" }
            ],
            "parserOpts": {
                "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES"]
            }
        }],
        "@semantic-release/release-notes-generator",
        ["@semantic-release/npm", {
            "pkgRoot": "dist",
        }],
    ],

}