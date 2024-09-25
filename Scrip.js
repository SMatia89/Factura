function calcularTotal() {
    const ivaRate = 0.21;
    const interestRateAhora18 = 0.75;

    let subtotal = 0;

    document.querySelectorAll('#productTable tr').forEach(row => {
        const cantidad = parseFloat(row.querySelector('.cantidad').value);
        const precioUnitario = parseFloat(row.querySelector('.precio-unitario').value);
        const precioTotal = cantidad * precioUnitario;

        row.querySelector('.precio').value = precioTotal;

        if (!isNaN(precioTotal)) {
            subtotal += precioTotal;
        }
    });

    const iva = subtotal * ivaRate;
    const total = subtotal + iva;
    const cuota12 = total / 12;
    const cuota18 = total * (1 + interestRateAhora18) / 18;

    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('iva').textContent = iva.toFixed(2);
    document.getElementById('total').textContent = total.toFixed(2);
    document.getElementById('cuota12').textContent = cuota12.toFixed(2);
    document.getElementById('cuota18').textContent = cuota18.toFixed(2);
}

function imprimirPresupuesto() {
    window.print();
}

function exportarPDF() {
    const cliente = document.getElementById('cliente').value;
    const total = document.getElementById('total').textContent;

    const doc = new jsPDF();
    doc.text(20, 20, Presupuesto para ${cliente});
    doc.text(20, 30, Total: $${total});
    doc.save('presupuesto.pdf');
}