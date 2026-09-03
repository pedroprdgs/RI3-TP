# RI3-TP

## Construindo objetos

Você já sabe, os objetos são reis! Se você entende de objetos,
entende JavaScript. Então, nada melhor que praticar a codificação de
construção de objetos.

Nesta atividade, você deve praticar a construção de objetos que
precisam de atributos privados. Além disto, também praticar o
codificação dos métodos get e set.

Esta atividade será dividia em três partes de objetivos!

## Cadastro de clientes

Imagine que você foi contratado(a) para desenvolver um script que
possa criar objetos dos tipos empresa, cliente, telefone e endereço.

O script deve ser desenvolvido com base nos exemplos em seguida...

## Cliente

O cpf de um cliente deve ser algo que não pode mudar, após sua
criação. Portanto, o atributo deve ser privado.

```typescript
class Cliente{
    #cpf
    constructor(nome, cpf, endereco){
        this.nome = nome
        this.endereco = endereco
        this.telefones = new Set()
        this.#cpf = cpf
    }
}
```

Um cliente pode ter uma lista de telefones, que pode crescer
ou diminuir.

## Telefone

A classe telefone não deve possuir atributos privados.

```typescript
class Telefone{
    constructor(ddd, numero){
        this.ddd = ddd
        this.numero = numero
    }
}
```

Esta classe servirá para criar objetos que serão usados em clientes e
na empresa.

## Endereço

A classe endereço não deve possuir atributos privados.

```typescript
class Endereco{
    constructor(estado, cidade, rua, numero){
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }
}
```

Esta classe servirá para criar objetos que serão usados em clientes e
na empresa.

## Empresa

```typescript
class Empresa{
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco){
        this.endereco
        this.nomeFantasia = nomeFantasia
        this.razaoSocial = razaoSocial
        this.#cnpj = cnpj
        this.clientes = new Set()
        this.telefones = new Set()
    }
}
```

## Objetivos, parte 1

No script desenvolvido deverão existir métodos construtores para
cada tipo de objeto.

Para cada atributo privado, deverão existir métodos de acesso get.

Para cada atributo, deverão existir métodos que permitam recuperar
o valor do atributo em caixa alta e caixa baixa.

## Objetivos, parte 2

O script deve ser testado!

Para isso crie uma empresa e atribua a ela um endereço e pelo menos
dois telefones.

Além disso, crie cinco clientes, cada um com seu endereço e dois
telefones. Estes clientes devem ser colocados dentro do conjunto de
clientes da empresa.

## Objetivos, parte 3

Por fim, seu script deve ser capaz de gerar uma descrição da empresa
e de seus clientes, desta forma:

```text
Razão Social: ABC LTDA
Nome fantasia: Mercado Online
--------------------
Nome: João
Estado: SP cidade: São José dos Campos rua: Av. Andrômeda numero: 987
ddd: 99999999 numero: 99999999
ddd: 99999999 numero: 99999999

Nome: Gabriel
Estado: SP cidade: São José dos Campos rua: Av. Andrômeda numero: 412
ddd: 88888888 numero: 88888888
ddd: 88888888 numero: 88888888

Nome: Barbara
Estado: SP cidade: São José dos Campos rua: Av. São João numero: 789
ddd: 77777777 numero: 77777777
ddd: 77777777 numero: 77777777

Nome: Márcia
Estado: SP cidade: São José dos Campos rua: Av. Andrômeda numero: 452
ddd: 66666666 numero: 66666666
ddd: 66666666 numero: 66666666
```

&darr;

```typescript
console.log(empresa.detalhe())
```
