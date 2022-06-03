google.charts.load('current', { 'packages': ['corechart'] });

function desenharPizza() {
  var tabela = new google.visualization.DataTable();
  tabela.addColumn('string', 'categorias');
  tabela.addColumn('number', 'valores');
  tabela.addRows([
    ['Educação', 2000],
    ['Transporte', 500],
    ['Lazer', 230],
    ['Saúde', 50],
    ['Cartão de crédito', 900],
    ['Alimentação', 260]
  ]);

  var opcoes = {
    'title': 'Tipos de Gastos',
    'is3D': true,
    'height': 400,
    'width': 800,
    'legend': 'labeled',
    'pieSliceText': 'value',
    // 'colors': ['DodgerBlue', 'SlateBlue', 'MediumSeaGreen', 'Violet', 'Tomato', 'Gray'],
    slices: {
      0: { color: 'MediumSeaGreen' },
      1: { color: 'Gray' },
      2: { color: 'Violet' },
      3: { color: 'Tomato' },
      4: { color: 'SlateBlue', offset: 0.4 },
      5: { color: 'DodgerBlue' }
    }
  };

  var grafico = new google.visualization.PieChart(document.getElementById('graficoPizza'));
  grafico.draw(tabela, opcoes);

}

google.charts.setOnLoadCallback(desenharPizza);