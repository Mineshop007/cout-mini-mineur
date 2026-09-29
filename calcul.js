/* Coût électrique d'un mini mineur selon l'option tarifaire. Pas un calcul de rentabilité. */
(function(root){
  function calcul(p){
    for (const k of ['watts','heures','prixBase','prixHP','prixHC','heuresHC']) {
      if (!Number.isFinite(p[k]) || p[k] < 0) throw new Error('Valeur invalide : ' + k);
    }
    if (p.heures > 24 || p.heuresHC > 24) throw new Error('Une journée compte au plus 24 heures.');
    const joursAn = 365;
    const heures = p.hcSeulement ? Math.min(p.heures, p.heuresHC) : p.heures;
    const kWhAn = p.watts * heures * joursAn / 1000;
    // Part de la consommation en heures creuses : tout si l'on ne tourne qu'en HC, sinon au prorata des heures HC dans la plage de fonctionnement.
    const partHC = p.hcSeulement ? 1 : (heures > 0 ? Math.min(p.heuresHC, heures) / heures : 0);
    const coutBase = kWhAn * p.prixBase;
    const coutHPHC = kWhAn * (partHC * p.prixHC + (1 - partHC) * p.prixHP);
    return { heures, kWhAn, kWhMois: kWhAn / 12, partHC, coutBase, coutHPHC };
  }
  if (typeof module !== 'undefined') module.exports = { calcul };
  root.calcul = calcul;
})(typeof window === 'undefined' ? globalThis : window);
