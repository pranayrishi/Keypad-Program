let passwordEntered = ""
let password = "1234"
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        basic.showNumber(1)
        passwordEntered = "" + passwordEntered + "1"
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        basic.showNumber(4)
        passwordEntered = "" + passwordEntered + "4"
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        basic.showNumber(7)
        passwordEntered = "" + passwordEntered + "7"
    } else if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        basic.showString("*")
        passwordEntered = "" + passwordEntered + "*"
    }
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P12, 1)
    if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        basic.showNumber(2)
        passwordEntered = "" + passwordEntered + "2"
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        basic.showNumber(5)
        passwordEntered = "" + passwordEntered + "5"
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        basic.showNumber(8)
        passwordEntered = "" + passwordEntered + "8"
    } else if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        basic.showNumber(0)
        passwordEntered = "" + passwordEntered + "0"
    }
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
    if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        basic.showNumber(3)
        passwordEntered = "" + passwordEntered + "3"
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        basic.showNumber(6)
        passwordEntered = "" + passwordEntered + "6"
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        basic.showNumber(9)
        passwordEntered = "" + passwordEntered + "9"
    } else if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        basic.showString("#")
        passwordEntered = "" + passwordEntered + "#"
    }
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        basic.showString("A")
        if (password == passwordEntered) {
            basic.showIcon(IconNames.Yes)
            passwordEntered = ""
        } else {
            basic.showIcon(IconNames.No)
            passwordEntered = ""
        }
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        basic.showString("B")
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        basic.showString("C")
    } else if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        basic.showString("D")
    }
    pins.digitalWritePin(DigitalPin.P1, 0)
})
