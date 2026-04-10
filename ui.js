// ============================================================
//  ui.js — Controlador de Interfaz
//  Integrante A
//  Conecta el HTML con stack.js y queue.js
// ============================================================

/* ─── Utilidades ───────────────────────────────────────────── */

function getTimestamp() {
  const now = new Date();
  return `${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}:${now.getSeconds().toString().padStart(2,'0')}`;
}

function addLog(logId, html) {
  const log = document.getElementById(logId);
  const entry = document.createElement('div');
  entry.className = 'log-entry';
  entry.innerHTML = `<span style="color:var(--muted)">[${getTimestamp()}]</span> ${html}`;
  log.appendChild(entry);
  log.scrollTop = log.scrollHeight;
}

/* ─── PILA ─────────────────────────────────────────────────── */

function renderStack() {
  const display = document.getElementById('stack-display');
  display.innerHTML = '';

  if (stack.isEmpty()) {
    display.innerHTML = '<div class="empty-msg">Pila vacía</div>';
    return;
  }

  const items = stack.toArray(); // base → tope
  items.forEach((val, idx) => {
    const node = document.createElement('div');
    node.className = 'node node-stack';
    if (idx === items.length - 1) node.classList.add('top-node');
    node.textContent = val;
    display.appendChild(node);
  });
}

function pushStack() {
  const input = document.getElementById('stack-input');
  const value = input.value.trim();

  if (!value) {
    addLog('stack-log', '<span class="op-error">✖ Ingresa un valor antes de hacer Push.</span>');
    return;
  }

  stack.push(value);
  input.value = '';
  renderStack();
  addLog('stack-log', `<span class="op-push">PUSH ↑</span> → "${value}" insertado. Tamaño: ${stack.size()}`);
}

function popStack() {
  if (stack.isEmpty()) {
    addLog('stack-log', '<span class="op-error">✖ No se puede hacer Pop: la pila está vacía.</span>');
    return;
  }

  // Animación de salida sobre el nodo superior (último hijo del display)
  const display = document.getElementById('stack-display');
  const topNode = display.lastElementChild;
  if (topNode && !topNode.classList.contains('empty-msg')) {
    topNode.classList.add('removing');
    setTimeout(() => {
      const removed = stack.pop();
      renderStack();
      addLog('stack-log', `<span class="op-pop">POP ↓</span> ← "${removed}" eliminado. Tamaño: ${stack.size()}`);
    }, 200);
  }
}

// Enter en el input de pila
document.getElementById('stack-input').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') pushStack();
});

/* ─── COLA ─────────────────────────────────────────────────── */

function renderQueue() {
  const display = document.getElementById('queue-display');
  display.innerHTML = '';

  if (queue.isEmpty()) {
    display.innerHTML = '<div class="empty-msg">Cola vacía</div>';
    return;
  }

  const items = queue.toArray(); // front → rear
  items.forEach((val, idx) => {
    const node = document.createElement('div');
    node.className = 'node node-queue';
    if (idx === 0) node.classList.add('front-node');
    node.textContent = val;
    display.appendChild(node);
  });
}

function enqueue() {
  const input = document.getElementById('queue-input');
  const value = input.value.trim();

  if (!value) {
    addLog('queue-log', '<span class="op-error">✖ Ingresa un valor antes de hacer Enqueue.</span>');
    return;
  }

  queue.enqueue(value);
  input.value = '';
  renderQueue();
  addLog('queue-log', `<span class="op-enqueue">ENQUEUE →</span> "${value}" insertado al rear. Tamaño: ${queue.size()}`);
}

function dequeue() {
  if (queue.isEmpty()) {
    addLog('queue-log', '<span class="op-error">✖ No se puede hacer Dequeue: la cola está vacía.</span>');
    return;
  }

  // Animación de salida sobre el nodo del frente (primer hijo)
  const display = document.getElementById('queue-display');
  const frontNode = display.firstElementChild;
  if (frontNode && !frontNode.classList.contains('empty-msg')) {
    frontNode.classList.add('removing');
    setTimeout(() => {
      const removed = queue.dequeue();
      renderQueue();
      addLog('queue-log', `<span class="op-dequeue">DEQUEUE ←</span> "${removed}" eliminado del front. Tamaño: ${queue.size()}`);
    }, 200);
  }
}

// Enter en el input de cola
document.getElementById('queue-input').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') enqueue();
});

/* ─── Init ─────────────────────────────────────────────────── */
renderStack();
renderQueue();
