const $ = id => document.getElementById(id);
const eur = n => n.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
const nb = (n, d = 0) => n.toLocaleString('fr-FR', { minimumFractionDigits: d, maximumFractionDigits: d });
function lire() { return { watts: Number($('watts').value), heures: Number($('heures').value), prixBase: Number($('prixBase').value), prixHP: Number($('prixHP').value), prixHC: Number($('prixHC').value), heuresHC: Number($('heuresHC').value), hcSeulement: $('hcSeulement').checked }; }
function render() {
  try {
    if (!$('form').checkValidity()) throw new Error('Saisissez des valeurs valides dans les limites indiquées.');
    const r = calcul(lire());
    $('total').textContent = nb(r.kWhAn, 0);
    $('mois').textContent = nb(r.kWhMois, 1) + ' kWh';
    $('coutBase').textContent = eur(r.coutBase);
    $('coutHPHC').textContent = eur(r.coutHPHC);
    $('partHC').textContent = nb(100 * r.partHC, 0) + ' %';
    $('chaleur').textContent = nb(r.kWhAn, 0) + ' kWh';
    $('error').textContent = '';
  } catch (e) { $('total').textContent = '—'; $('error').textContent = e.message; }
}
$('preset').addEventListener('change', () => { if ($('preset').value !== 'custom') $('watts').value = $('preset').value; render(); });
$('watts').addEventListener('input', () => { $('preset').value = 'custom'; });
$('form').addEventListener('input', render); $('form').addEventListener('change', render); $('form').addEventListener('submit', e => e.preventDefault());
render();
