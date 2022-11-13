def calcArea(bMaior,bMenor,alt):
    somaBase = bMaior+bMenor
    somaAltura = somaBase * alt
    result = somaAltura / 2
    return print('A área é:  ',result)


baseMaior = float(input('Digite a base maior: '))
baseMenor = float(input('Digite a base menor: '))
altura = float(input('Digite altura: '))

calcArea(baseMaior,baseMenor,altura)

