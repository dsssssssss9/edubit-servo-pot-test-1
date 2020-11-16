for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.Yes)
    basic.pause(50)
    basic.clearScreen()
    basic.pause(50)
}
music.playMelody("C5 G B A F A C5 B ", 500)
basic.forever(function () {
    edubitMotors.setServoPosition(ServoChannel.S1, Math.map(edubitPotentioBit.readPotValue(), 3, 1023, 0, 180))
})
control.inBackground(function () {
    while (true) {
        basic.showNumber(Math.round(Math.map(edubitPotentioBit.readPotValue(), 3, 1023, 0, 180)))
    }
})
