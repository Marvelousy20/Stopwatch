// Stopwatch with OOP
function Stopwatch() {
    // Private variables
    let startTime, endTime, duration, running = 0;
    
    this.start = function() {
        if(running) 
        throw new Error('Clockwork already started') ;
        running = true ;
        startTime = new Date() ;
    }

    this.stop = function() {
        if(!running)
        throw new Error('Stopwatch is not running') ;
        running = false;
        endTime = new Date() ;

        let getSeconds = (endTime.getTime() - startTime.getTime()) / 1000 ;
        duration =+ getSeconds ;
    }

    this.reset = function() {
        duration = 0 ;
        startTime = null ;
        endTime = null;
        running = false;
    }

    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration
        }
    })    
}

const stopwatch = new Stopwatch() ;

