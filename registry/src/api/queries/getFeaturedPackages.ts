import type { PackageDetails } from "../types/packageDetails";

const FEATURED_PACKAGES = [
    "react",
    "typescript",
    "esbuild",
    "vite"
];

export async function getFeaturedPackages() {
    const promises = FEATURED_PACKAGES.map(async (packageName) => {
        const response = await fetch(`https://registry.npmjs.org/${packageName}`);
        return response.json();
    })
    const data = await Promise.all(promises);
    return data as PackageDetails[];
}