export default function convertDatePublished(rawData) {
    const date = new Date(rawData);
    const year = date.getFullYear().toString();
    const day = date.getDay().toString();
    const month = date.toLocaleString("eng", { month: "long" });
    return day.concat(" ", month).concat(" ", year);
}