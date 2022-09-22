input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(5000)
    basic.showIcon(IconNames.Sad)
    basic.pause(5000)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Wir sind Toni und Tom")
})
