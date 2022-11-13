def soma_imposto(taxaImposto, tCusto):
    calcImposto = (taxaImposto*tCusto)/100
    result = calcImposto+tCusto
    return result


imposto = float(input('Digite a taxa de imposto: '))
custo = float(input('Digite o custo: '))

print('Valor com imposto:', soma_imposto(imposto,custo))