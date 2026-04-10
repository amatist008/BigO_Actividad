// ============================================================
//  stack.js — Lógica de la Pila (Stack)
//  Integrante B
//  Estructura LIFO: Last In, First Out
// ============================================================

class Stack {
  constructor() {
    this._data = [];   // arreglo interno que almacena los elementos
  }

  /**
   * Inserta un elemento en el tope de la pila.
   * @param {*} value - Valor a insertar
   */
  push(value) {
    this._data.push(value);
  }

  /**
   * Elimina y retorna el elemento del tope de la pila.
   * @returns {*} Elemento eliminado, o null si la pila está vacía.
   */
  pop() {
    if (this.isEmpty()) return null;
    return this._data.pop();
  }

  /**
   * Consulta el elemento del tope sin eliminarlo.
   * @returns {*} Elemento del tope, o null si está vacía.
   */
  peek() {
    if (this.isEmpty()) return null;
    return this._data[this._data.length - 1];
  }

  /** @returns {boolean} true si la pila no tiene elementos */
  isEmpty() {
    return this._data.length === 0;
  }

  /** @returns {number} Cantidad de elementos en la pila */
  size() {
    return this._data.length;
  }

  /** @returns {Array} Copia del arreglo interno (base → tope) */
  toArray() {
    return [...this._data];
  }
}

// Instancia global de la pila usada por la interfaz
const stack = new Stack();
