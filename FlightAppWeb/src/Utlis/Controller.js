export const convertDateTOString=(date_obj)=>{
    const year = date_obj.getFullYear();
    const month = date_obj.getMonth() + 1;  
    const day = date_obj.getDate();

    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

  }
 export  const ConvertTime=(time_obj)=>{
    const hours = time_obj.getHours();
    const minutes = time_obj.getMinutes();
    const seconds = time_obj.getSeconds();

return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  }

export const parseTimeString = (timeString) => {
    console.log("timeString",timeString)
    const [hours, minutes, seconds] = timeString.split(':').map(Number);

    const date = new Date();
    date.setHours(hours, minutes, seconds, 0);
    return date;
};
