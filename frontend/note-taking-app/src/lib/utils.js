export function formatDate(date){
    return date.toLocaleDateString("en-PK", {
        month:"short",
        day:"numeric",
        year:"numeric"
    })
}