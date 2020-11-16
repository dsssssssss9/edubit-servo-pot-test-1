for index in range(4):
    basic.show_icon(IconNames.YES)
    basic.pause(50)
    basic.clear_screen()
    basic.pause(50)

def on_forever():
    edubitMotors.set_servo_position(ServoChannel.S1,
        Math.map(edubitPotentioBit.read_pot_value(), 3, 1023, 0, 180))
basic.forever(on_forever)

def on_in_background():
    while True:
        basic.show_number(edubitPotentioBit.read_pot_value())
control.in_background(on_in_background)
