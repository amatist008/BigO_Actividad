// ============================================================
//  queue.js — Lógica de la Cola (Queue)
//  Integrante C
//  Estructura FIFO: First In, First Out
// ============================================================

class Queue {
  constructor() {
    this._data = [];   // arreglo interno que almacena los elementos
  }

  /**
   * Agrega un elemento al final (rear) de la cola.
   * @param {*} value - Valor a insertar
   */
  enqueue(value) {
    this._data.push(value);
  }

  /**
   * Elimina y retorna el elemento del frente (front) de la cola.
   * @returns {*} Elemento eliminado, o null si la cola está vacía.
   */
  dequeue() {
    if (this.isEmpty()) return null;
    return this._data.shift();
  }

  /**
   * Consulta el elemento del frente sin eliminarlo.
   * @returns {*} Elemento del frente, o null si está vacía.
   */
  front() {
    if (this.isEmpty()) return null;
    return this._data[0];
  }

  /** @returns {boolean} true si la cola no tiene elementos */
  isEmpty() {
    return this._data.length === 0;
  }

  /** @returns {number} Cantidad de elementos en la cola */
  size() {
    return this._data.length;
  }

  /** @returns {Array} Copia del arreglo (front → rear) */
  toArray() {
    return [...this._data];
  }
}

// Instancia global de la cola usada por la interfaz
const queue = new Queue();
