hora = int(input("Digite a hora: "))
minuto = int(input("Digite os minutos: "))

def converter_hora(hora):
    return (hora -12)

def imprime_hora(hora,minuto):
    if(hora <= 12):
        print(hora,minuto,"AM")
    else:
        print(converter_hora(hora), minuto, "PM")

imprime_hora(hora, minuto)