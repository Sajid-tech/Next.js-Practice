export default function UserMetaData() {
    return (
        <div>
            <h1>
                Another page for meta data
            </h1>
        </div>
    )
}

// dynamically meta data for each page technique

export function generateMetadata() {
    return {
        title: "user page title",
        description: "User page description"
    }
}