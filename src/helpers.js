export const formatAMPM = (hour, minute) => {
    let HH = +hour,
        MM = +minute,
        ampm;

    if (HH >= 12) {
        HH = HH - 12;
        ampm = "PM";
    } else {
        ampm = "AM";
    }

    if (HH === 0) HH = 12;
    if (HH < 10) HH = `0${HH}`;
    if (MM < 10) MM = `0${MM}`;

    return `${HH}:${MM}:00 ${ampm}`
}

export const getAMPM = () => {
    const HH = new Date().getHours();
    return HH >= 12 ? "PM" : "AM";
}
