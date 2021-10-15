let exit_gate = 0
let elapsed = 0
let enter_gate = 0
// When the connection between Pin 2 (P2) and ground (GND is broken, the 'exit_gate' variable is set the running time.
// 
// The elapsed time variable is calculated using a Math block that calculates the difference between the exit gate and enter gate times.
// 
// The code then displays the calculated elapsed time on the LED screen.
//     
input.onPinReleased(TouchPin.P2, function () {
    exit_gate = input.runningTime()
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . # #
        . . . . .
        # . . . #
        `)
    elapsed = exit_gate - enter_gate
    while (true) {
        basic.showString("" + elapsed + "ms")
    }
})
// When the connection between pin 0 (P0) and ground (GND) is broken, the enter_gate variable is set to the current running time of the micro:bit
input.onPinReleased(TouchPin.P0, function () {
    enter_gate = input.runningTime()
    basic.showLeds(`
        # . . . #
        . . . . #
        # # . . #
        . . . . #
        # . . . #
        `)
})
