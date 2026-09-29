const assert = require('node:assert/strict'); const { calcul } = require('./calcul');
const base = { watts: 140, heures: 24, prixBase: 0.2, prixHP: 0.24, prixHC: 0.18, heuresHC: 8, hcSeulement: false };
const r = calcul(base);
assert.equal(Math.round(r.kWhAn * 10) / 10, 1226.4);                       // 140 W x 24 h x 365 j
assert.equal(Math.round(r.coutBase * 100) / 100, 245.28);                 // 1226,4 kWh x 0,20
assert.ok(Math.abs(r.partHC - 1 / 3) < 1e-12);                            // 8 h sur 24 h
assert.equal(Math.round(r.coutHPHC * 100) / 100, Math.round(1226.4 * (0.18 / 3 + 0.24 * 2 / 3) * 100) / 100);
const hc = calcul({ ...base, hcSeulement: true });
assert.equal(hc.heures, 8); assert.equal(hc.partHC, 1); assert.equal(Math.round(hc.kWhAn * 10) / 10, 408.8);
assert.equal(Math.round(calcul({ ...base, watts: 17 }).kWhMois * 100) / 100, 12.41);
assert.throws(() => calcul({ ...base, heures: 25 })); assert.throws(() => calcul({ ...base, watts: NaN }));
console.log('8 vérifications de calcul réussies');
