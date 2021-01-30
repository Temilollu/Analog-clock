    const hourHand = document.querySelector('.hour');
    const minuteHand = document.querySelector('.minute');
    const secondHand = document.querySelector('.second');


    function displayTime() {
        const time = new Date

       let timeInSeconds = time.getSeconds()      
       let timeInMinutes = time.getMinutes() 
       let timeInHours  = time.getHours() 
      
       let rotateSecondHand = timeInSeconds/60
       let rotateMinuteHand = (rotateSecondHand + timeInMinutes) / 60 
       let rotateHourHand = (timeInHours + rotateMinuteHand)/12 
       

       secondHand.style.transform = `rotate(${rotateSecondHand * 360}deg)`
       minuteHand.style.transform = `rotate(${rotateMinuteHand * 360}deg)`
       hourHand.style.transform = `rotate(${rotateHourHand * 360}deg)`
    }


      setInterval(displayTime, 1000)
 