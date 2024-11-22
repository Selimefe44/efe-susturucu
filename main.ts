input.onSound(DetectedSound.Loud, function () {
	
})
basic.forever(function () {
    if (input.soundLevel() < 128) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.Happy)
        basic.showString("Teşekkürler^_^")
    }
    if (input.soundLevel() > 128) {
        music.play(music.tonePlayable(659, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
        basic.showString("EFE SUUUUSS!╰（‵□′）╯")
    }
})
