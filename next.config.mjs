import { paraglide } from "@inlang/paraglide-next/plugin";
const nextConfig = {
	images: {
		domains: ["github.com"],
	},
};

export default paraglide({
	paraglide: {
		project: "./project.inlang",
		outdir: "./src/paraglide",
	},
	...nextConfig,
});
