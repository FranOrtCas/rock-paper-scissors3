let Mano = 0
function Juego () {
    Mano = randint(1, 3)
    if (Mano == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (Mano == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    basic.showString("Ready?")
    basic.showString("1")
    basic.showString("2")
    basic.showString("3")
})
input.onGesture(Gesture.Shake, function () {
    Juego()
})
basic.forever(function () {
	
})
