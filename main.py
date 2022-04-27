while True:
    temp= str(input.temperature())

    if input.temperature() >= 25:
        basic.show_string("No puede hacer tanto CALOR")
        basic.show_string(temp)
    elif input.temperature() >= 15 and input.temperature() < 25:
        basic.show_string("Temperatura normal")
        basic.show_string(temp)
    else:
        basic.show_string("Tengo frio....")
        basic.show_string(temp)