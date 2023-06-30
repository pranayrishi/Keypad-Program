passwordEntered = ""
password = "1234"

def on_forever():
    pins.digital_write_pin(DigitalPin.P2, 1)
    if pins.digital_read_pin(DigitalPin.P16) == 1:
        basic.show_number(1)
        passwordEntered = "" + passwordEntered + "1"
    elif pins.digital_read_pin(DigitalPin.P15) == 1:
        basic.show_number(4)
        passwordEntered = "" + passwordEntered + "4"
    elif pins.digital_read_pin(DigitalPin.P14) == 1:
        basic.show_number(7)
        passwordEntered = "" + passwordEntered + "7"
    elif pins.digital_read_pin(DigitalPin.P13) == 1:
        basic.show_string("*")
        passwordEntered = "" + passwordEntered + "*"
    pins.digital_write_pin(DigitalPin.P2, 0)
    pins.digital_write_pin(DigitalPin.P12, 1)
    if pins.digital_read_pin(DigitalPin.P16) == 1:
        basic.show_number(2)
        passwordEntered = "" + passwordEntered + "2"
    elif pins.digital_read_pin(DigitalPin.P15) == 1:
        basic.show_number(5)
        passwordEntered = "" + passwordEntered + "5"
    elif pins.digital_read_pin(DigitalPin.P14) == 1:
        basic.show_number(8)
        passwordEntered = "" + passwordEntered + "8"
    elif pins.digital_read_pin(DigitalPin.P13) == 1:
        basic.show_number(0)
        passwordEntered = "" + passwordEntered + "0"
    pins.digital_write_pin(DigitalPin.P12, 0)
    pins.digital_write_pin(DigitalPin.P8, 1)
    if pins.digital_read_pin(DigitalPin.P16) == 1:
        basic.show_number(3)
        passwordEntered = "" + passwordEntered + "3"
    elif pins.digital_read_pin(DigitalPin.P15) == 1:
        basic.show_number(6)
        passwordEntered = "" + passwordEntered + "6"
    elif pins.digital_read_pin(DigitalPin.P14) == 1:
        basic.show_number(9)
        passwordEntered = "" + passwordEntered + "9"
    elif pins.digital_read_pin(DigitalPin.P13) == 1:
        basic.show_string("#")
        passwordEntered = "" + passwordEntered + "#"
    pins.digital_write_pin(DigitalPin.P8, 0)
    pins.digital_write_pin(DigitalPin.P1, 1)
    if pins.digital_read_pin(DigitalPin.P16) == 1:
        basic.show_string("A")
        if password == passwordEntered:
            basic.show_icon(IconNames.YES)
            passwordEntered = ""
        else:
            basic.show_icon(IconNames.NO)
            passwordEntered = ""
    elif pins.digital_read_pin(DigitalPin.P15) == 1:
        basic.show_string("B")
    elif pins.digital_read_pin(DigitalPin.P14) == 1:
        basic.show_string("C")
    elif pins.digital_read_pin(DigitalPin.P13) == 1:
        basic.show_string("D")
    pins.digital_write_pin(DigitalPin.P1, 0)
basic.forever(on_forever)
