input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    basic.showString("paper")
    music.ringTone(262)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.SmallHeart)
    basic.showString("rock")
    music.ringTone(262)
})
basic.forever(function () {
	
})
