const monthsArray = [
    { shortName: "Jan", maxDays: 31},
    { shortName: "Feb", maxDays: 29},
    { shortName: "Mar", maxDays: 31},
    { shortName: "Apr", maxDays: 30},
    { shortName: "May", maxDays: 31},
    { shortName: "Jun", maxDays: 30},
    { shortName: "Jul", maxDays: 31},
    { shortName: "Aug", maxDays: 31},
    { shortName: "Sep", maxDays: 30},
    { shortName: "Oct", maxDays: 31},
    { shortName: "Nov", maxDays: 30},
    { shortName: "Dec", maxDays: 31}
];

export function calcButtonTextColor(buttonColor) {
    const r = parseInt(buttonColor.slice(1,3), 16);    
    const g = parseInt(buttonColor.slice(3,5), 16);
    const b = parseInt(buttonColor.slice(5,7), 16);
    
    return ( 0.3 * r + 0.6 * g + 0.1 * b) < 128
        ? "#FFFFFF"
        : "#000000";
}

export const months = {
    getShortName: i => monthsArray[i].shortName,
    getMaxDays: i => monthsArray[i].maxDays,
    getMonths: () => monthsArray
};