bluetooth.onBluetoothConnected(function () {
    EnableBLETx = 1
})
let EnableBLETx = 0
EnableBLETx = 0
let BMP280_temp = 0
let LandHum = 0
let Pump_sts = 0
let Sun_rad = 0
let cmd_motor = 0
let time_50ms = 0
BMP280.Address(BMP280_I2C_ADDRESS.ADDR_0x76)
bluetooth.startUartService()
basic.forever(function () {
    time_50ms = time_50ms + 1
    if (time_50ms == 50) {
        pins.analogWritePin(AnalogPin.P9, Math.map(cmd_motor, 0, 100, 0, 1023))
    }
})
