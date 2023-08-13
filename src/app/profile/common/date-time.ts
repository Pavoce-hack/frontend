function getCurrentDateTime() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getDay()];
    const dayOfMonth = now.getDate();
    const month = monthsOfYear[now.getMonth()];
    const year = now.getFullYear();
    let hours = now.getHours();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours %= 12;
    hours = hours || 12; // Convert 0 to 12
    const minutes = now.getMinutes();

    const formattedDateTime = `${dayOfWeek} ${dayOfMonth} ${month}, ${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
    
    return formattedDateTime;
}

const currentDateTime = getCurrentDateTime();

export default currentDateTime;