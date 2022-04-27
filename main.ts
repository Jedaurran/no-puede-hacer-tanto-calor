let temp: string;
while (true) {
    temp = "" + input.temperature()
    if (input.temperature() >= 25) {
        basic.showString("No puede hacer tanto CALOR")
        basic.showString(temp)
    } else if (input.temperature() >= 15 && input.temperature() < 25) {
        basic.showString("Temperatura normal")
        basic.showString(temp)
    } else {
        basic.showString("Tengo frio....")
        basic.showString(temp)
    }
    
}
