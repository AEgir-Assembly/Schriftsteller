/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false
let basePath = ''
if(isGithubActions) {
	basePath = "/Schriftsteller"
}
const nextConfig = {
	output: 'export',
	distDir: 'dist',
	basePath
}

module.exports = nextConfig
