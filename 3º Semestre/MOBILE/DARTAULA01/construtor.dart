class Animal{
    int id = 0;
    String nome = "";
    String especie = "";
    String raca = "";
    double peso = 0.0;
    //metodos
    Animal(this.id, this.nome, this.especie, this.raca, this.peso);
    String tudojunto(){
        return "$id, $nome, $especie, $raca, $peso";
    }
}

void main(){
    Animal boi = new Animal(1, "Bandido", "Bovino", "Nelore", 499.9);
print(boi.tudojunto());

Animal vaca = new Animal(2, "Mimosa", "Bovino", "Holandesa", 450.5);
print(vaca.tudojunto());

Animal cavalo = new Animal(3, "Trovão", "Equino", "Mangalarga", 380.0);
print(cavalo.tudojunto());

Animal porco = new Animal(4, "Rabicho", "Suíno", "Landrace", 120.3);
print(porco.tudojunto());

Animal ovelha = new Animal(5, "Nuvem", "Ovino", "Dorper", 75.8);
print(ovelha.tudojunto());

Animal cabra = new Animal(6, "Faísca", "Caprino", "Boer", 68.4);
print(cabra.tudojunto());

Animal galinha = new Animal(7, "Pipoca", "Ave", "Leghorn", 2.5);
print(galinha.tudojunto());

Animal pato = new Animal(8, "Quack", "Ave", "Pekin", 3.2);
print(pato.tudojunto());

Animal cachorro = new Animal(9, "Thor", "Canino", "Border Collie", 25.0);
print(cachorro.tudojunto());

Animal gato = new Animal(10, "Luna", "Felino", "Siamês", 4.3);
print(gato.tudojunto());
}