input.onButtonPressed(Button.AB, function () {
    radio.sendString("WELCOME (:")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(17062011)
basic.clearScreen()
