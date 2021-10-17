new Vue({
  el: "#app",
  data() {
    return {
      total: "",
      spell: ""
    };
  },
  watch: {
    total: function (value) {
      this.total = value.replace(/[^0-9,]/g, "");
      var s = [];
      let spells = [];
      spells[0] = [
        "",
        "bir",
        "iki",
        "üç",
        "dört",
        "beş",
        "altı",
        "yedi",
        "sekiz",
        "dokuz"
      ];
      spells[1] = [
        "",
        "on",
        "yirmi",
        "otuz",
        "kırk",
        "elli",
        "altmış",
        "yetmiş",
        "seksen",
        "doksan"
      ];
      spells[2] = [
        "",
        "yüz",
        "ikiyüz",
        "üçyüz",
        "dörtyüz",
        "beşyüz",
        "altıyüz",
        "yediyüz",
        "sekizyüz",
        "dokuzyüz"
      ];
      spells[3] = ["", "bin", "milyon", "milyar", "trilyon", "katrilyon"];
      if (value.split(",")[1] != undefined) {
        var decimalPart = value.split(",")[1];
        var decimal = decimalPart.split("");
        var decimalReverse = decimal.reverse();
        if (decimalReverse.length > 2) this.total = value.substr(0, value.length - 1);
        s.push("KURUŞ");
        for (var i = 0; i < decimalReverse.length; i++) {
          var digit = i % 3;
          var figure = parseInt(decimalReverse[i], 10);
          s.push(spells[digit][figure]);
        }
      }
      var wholePart = value.split(",")[0];
      var whole = wholePart.split("");
      var wholeReverse = whole.reverse();
      s.push("TL");
      var spell = "";
      for (var i = 0; i < wholeReverse.length; i++) {
        var thousand = 0;
        if (i % 3 == 0 && (wholeReverse[i] != 0 || wholeReverse[i + 1] != 0 || wholeReverse[i + 2] != 0)) thousand = parseInt(i / 3, 10);
        var digit = i % 3;
        var figure = parseInt(wholeReverse[i], 10);
        if (thousand == 1 && figure == 1) {
          s.push(spells[3][thousand]);
        } else {
          s.push(spells[digit][figure] + spells[3][thousand]);
        }
      }
      s.push("yalnız");
      var sr = s.reverse();
      for (var i = 0; i < sr.length; i++) {
        spell += s[i];
      }
      this.spell = spell;
    }
  }
});
