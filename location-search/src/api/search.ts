import type { Place } from "./Place"

interface SearchResponse {
    features: {
        properties: {
            display_name: string;
            place_id: number;
        };
        geometry: {
            coordinates: number[];
        };
    }[];
}

export const search = async (term: string): Promise<Place[]> => {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${term}&format=geojson&addressdetails=1&layer=address&limit=5`)
    const data = (await response.json()) as SearchResponse
    const places: Place[] = data.features.map((feature) => ({
        id: feature.properties.place_id,
        name: feature.properties.display_name,
        latitude: feature.geometry.coordinates[1],
        longitude: feature.geometry.coordinates[0]
    }))
    return places;
}