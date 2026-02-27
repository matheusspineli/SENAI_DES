void main(){
    String texto = "Alo Mundo!";
    int numero = 99999999988888888;
    double n = 3.14;
    bool ativo = true;
    var coisa = 10;
    dynamic tudo = "oi";

    print(texto);
    print(numero);
    print("Real = " + n.toString());//Concatenação
    print(ativo?"oi":"Tcahu");
    print(coisa);
    print(tudo);
    tudo = 500;
    print(tudo);
}

