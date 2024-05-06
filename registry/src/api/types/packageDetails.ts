export interface PackageDetails {
    name: string;
    description: string;
    readme: string;
    license: string;
    maintainers: {
        email: string;
        name: string;
    }[];
    author: {
        email: string;
        name: string;
    };
}