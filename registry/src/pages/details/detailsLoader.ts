import { getPackage } from '../../api/queries/getPackage';
import type { Params } from 'react-router-dom';
import type { PackageDetails } from '../../api/types/packageDetails';

interface LoaderArgs {
    params: Params;
}

export interface DetailsLoaderData {
    details: PackageDetails;
}

export async function detailsLoader({ params }: LoaderArgs): Promise<DetailsLoaderData> {
    const { name } = params;

    if (!name) {
        throw new Error('Name is required');
    }

    const details = await getPackage(name);

    return {
        details
    };
}