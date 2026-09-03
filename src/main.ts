import Cliente from "./Cliente";
import Telefone from "./Telefone";
import Endereco from "./Endereco";
import Empresa from "./Empresa";

const enderecoCliente1 = new Endereco('SP', 'São José dos Campos', 'Rua dos Chads', 67);
const cliente1 = new Cliente('Pedro', 40560843860, enderecoCliente1);
cliente1.telefones = new Set([new Telefone(11, 984573171), new Telefone(12, 988535638)]);

const enderecoCliente2 = new Endereco('SP', 'São José dos Campos', 'Rua dos Chuds', 2);
const cliente2 = new Cliente('Rafael', 67676767676, enderecoCliente2);
cliente2.telefones = new Set([new Telefone(12, 34567890), new Telefone(11, 111111111)]);

const enderecoCliente3 = new Endereco('SP', 'São José dos Campos', 'Rua dos Chads', 69);
const cliente3 = new Cliente('Vitor', 69696969696, enderecoCliente3);
cliente3.telefones = new Set([new Telefone(22, 222222222), new Telefone(22, 222222222)]);

const enderecoCliente4 = new Endereco('SP', 'São José dos Campos', 'Av. Insana', 24);
const cliente4 = new Cliente('Ben Dover', 12345678900, enderecoCliente4);
cliente4.telefones = new Set([new Telefone(33, 333333333), new Telefone(33, 333333333)]);

const enderecoCliente5 = new Endereco('SP', 'São Paulo', 'Rua Normal', 33);
const cliente5 = new Cliente('João', 98765432100, enderecoCliente5);
cliente5.telefones = new Set([new Telefone(44, 444444444), new Telefone(44, 444444444)]);

const empresaClientes = new Set([cliente1, cliente2, cliente3, cliente4, cliente5]);
const empresaTelefones = new Set([new Telefone(55, 555555555), new Telefone(55, 555555555)]);
const enderecoEmpresa = new Endereco('SP', 'São José dos Campos', 'Rua da Empresa 1', 67);
const empresa = new Empresa(enderecoEmpresa, 'Primeira empresa', 'Cid & Cia.', 12345678900, empresaClientes, empresaTelefones);

console.log(empresa.detalhe());