// Definición de la clase Nodo que representa cada nodo del árbol
class Nodo {
    constructor(valor) {
        this.valor = valor; // Valor del nodo
        this.izquierda = null; // Referencia al hijo izquierdo
        this.derecha = null; // Referencia al hijo derecho
    }
}

// Definición de la clase Árbol Binario
class ArbolBinario {
    constructor() {
        this.raiz = null; // Inicialmente el árbol está vacío
    }

    // Método para insertar un nuevo valor en el árbol
    insertar(valor) {
        const nuevoNodo = new Nodo(valor); // Crear un nuevo nodo con el valor dado

        // Si el árbol está vacío, el nuevo nodo se convierte en la raíz
        if (this.raiz === null) {
            this.raiz = nuevoNodo;
        } else {
            this.insertarNodo(this.raiz, nuevoNodo); // Llamar a una función auxiliar para insertar el nodo
        }
    }

    // Función auxiliar para insertar un nodo en el árbol (recursiva)
    insertarNodo(nodo, nuevoNodo) {
        // Si el valor del nuevo nodo es menor que el valor del nodo actual, se inserta en el subárbol izquierdo
        if (nuevoNodo.valor < nodo.valor) {
            if (nodo.izquierda === null) {
                nodo.izquierda = nuevoNodo; // Si el subárbol izquierdo está vacío, el nuevo nodo se coloca aquí
            } else {
                this.insertarNodo(nodo.izquierda, nuevoNodo); // Si no, se sigue recorriendo el subárbol izquierdo
            }
        }
        // Si el valor del nuevo nodo es mayor que el valor del nodo actual, se inserta en el subárbol derecho
        else {
            if (nodo.derecha === null) {
                nodo.derecha = nuevoNodo; // Si el subárbol derecho está vacío, el nuevo nodo se coloca aquí
            } else {
                this.insertarNodo(nodo.derecha, nuevoNodo); // Si no, se sigue recorriendo el subárbol derecho
            }
        }
    }

    // Método para mostrar el árbol
    mostrar() {
        this.mostrarNodos(this.raiz, 0);
    }

    // Función auxiliar para mostrar los nodos del árbol (recursiva)
    mostrarNodos(nodo, nivel) {
        if (nodo !== null) {
            this.mostrarNodos(nodo.derecha, nivel + 1); // Mostrar nodos del subárbol derecho
            console.log(" ".repeat(nivel * 4) + nodo.valor); // Mostrar el valor del nodo actual con espacios para la indentación
            this.mostrarNodos(nodo.izquierda, nivel + 1); // Mostrar nodos del subárbol izquierdo
        }
    }


// Método para eliminar un valor del árbol
eliminar(valor) {
    this.raiz = this.eliminarNodo(this.raiz, valor); // Llamar a una función auxiliar para eliminar el nodo
}

// Función auxiliar para eliminar un nodo del árbol (recursiva)
eliminarNodo(nodo, valor) {
    // Caso base: si el nodo es nulo, no hay nada que eliminar
    if (nodo === null) {
        return null;
    }

    // Si el valor a eliminar es menor que el valor del nodo actual, buscar en el subárbol izquierdo
    if (valor < nodo.valor) {
        nodo.izquierda = this.eliminarNodo(nodo.izquierda, valor);
        return nodo;
    }
    // Si el valor a eliminar es mayor que el valor del nodo actual, buscar en el subárbol derecho
    else if (valor > nodo.valor) {
        nodo.derecha = this.eliminarNodo(nodo.derecha, valor);
        return nodo;
    }
    // Si encontramos el nodo con el valor a eliminar
    else {
        // Caso 1: El nodo no tiene hijos o solo tiene un hijo
        if (nodo.izquierda === null) {
            return nodo.derecha;
        } else if (nodo.derecha === null) {
            return nodo.izquierda;
        }

        // Caso 2: El nodo tiene dos hijos
        // Encontrar el sucesor inmediato (el nodo más pequeño en el subárbol derecho)
        let sucesor = nodo.derecha;
        while (sucesor.izquierda !== null) {
            sucesor = sucesor.izquierda;
        }

        // Reemplazar el valor del nodo actual con el valor del sucesor
        nodo.valor = sucesor.valor;

        // Eliminar el sucesor del subárbol derecho
        nodo.derecha = this.eliminarNodo(nodo.derecha, sucesor.valor);

        return nodo;
    }
}

// Método para realizar un recorrido in-order del árbol
inOrder() {
    this.inOrderRecursivo(this.raiz);
}

// Función auxiliar para realizar el recorrido in-order (recursiva)
inOrderRecursivo(nodo) {
    if (nodo !== null) {
        this.inOrderRecursivo(nodo.izquierda); // Recorrer el subárbol izquierdo
        console.log(nodo.valor); // Visitar el nodo actual
        this.inOrderRecursivo(nodo.derecha); // Recorrer el subárbol derecho
    }
}

// Método para realizar un recorrido pre-order del árbol
preOrder() {
    this.preOrderRecursivo(this.raiz);
}

// Función auxiliar para realizar el recorrido pre-order (recursiva)
preOrderRecursivo(nodo) {
    if (nodo !== null) {
        console.log(nodo.valor); // Visitar el nodo actual
        this.preOrderRecursivo(nodo.izquierda); // Recorrer el subárbol izquierdo
        this.preOrderRecursivo(nodo.derecha); // Recorrer el subárbol derecho
    }
}
}

// Ejemplo de uso:
const arbol = new ArbolBinario(); // Crear un nuevo árbol binario

// Insertar algunos valores en el árbol
arbol.insertar(10);
arbol.insertar(5);
arbol.insertar(15);
arbol.insertar(3);
arbol.insertar(7);
arbol.insertar(12);
arbol.insertar(18);

// Mostrar el árbol con una estructura visualmente más atractiva
console.log("Árbol binario:");
arbol.mostrar();

arbol.eliminar(15);
arbol.eliminar(7);

console.log("Árbol binario:");
arbol.mostrar();