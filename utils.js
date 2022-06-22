const showTime = (time) => {
 
    var d = new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });
    
  return d;
}

const showFrequency = (frequency) => {

    if(frequency && Array.isArray(frequency)){
        // step 1 check length of frequency
        // step 2 if frequency length is 0 then never
        if (frequency.length === 0) {
            return  'Never'
        }

        // step 3 if frequency length is 7 then daily
        if(frequency.length === 7) {
            return 'Daily'
        }

        // if length is between 0 to 7 then pickup initial 3 letters and join.
        const sortNames = frequency.map(f => f.substring(0, 3)) 
        return sortNames.join(', ');
    }
    return 'Never';
}

export {showTime,showFrequency};