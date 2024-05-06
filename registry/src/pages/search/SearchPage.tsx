import { useLoaderData } from "react-router-dom"
import type { SearchLoaderResult } from "./searchLoader"
import PackageListItem from "../../components/PackageListItem"

export default function SearchPage() {
    const data = useLoaderData() as SearchLoaderResult
    const renderedPackages = data.searchResults.map((packageSummary) => {
        return <PackageListItem packageSummary={packageSummary} key={packageSummary.name} />
    })

    console.log(data.searchResults)
    return (
        <div>
            <h1 className="text-2xl font-bold my-6">Search Results</h1>
            <div className="space-y-4 mt-4">
                {renderedPackages}
            </div>
        </div>
    )
}