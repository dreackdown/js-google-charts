google.charts.load('current', { 'packages': ['corechart'], 'language': 'pt' });

function desenhaGraficos() {
  let tabela = new google.visualization.DataTable();
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
    title: 'Tipos de Gastos',
    is3D: true,
    height: 400,
    width: 800,
    legend: 'labeled',
    pieSliceText: 'value',
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

  let grafico = new google.visualization.PieChart(document.getElementById('graficoPizza'));
  grafico.draw(tabela, opcoes);

  tabela = new google.visualization.DataTable();
  tabela.addColumn('string', 'mês');
  tabela.addColumn('number', 'gastos');
  tabela.addRows([
    ['jan', 800],
    ['fev', 400],
    ['mar', 1100],
    ['abr', 400],
    ['mai', 500],
    ['jun', 750],
    ['jul', 1500],
    ['ago', 650],
    ['set', 850],
    ['out', 400],
    ['nov', 1000],
    ['dez', 720]
  ]);

  opcoes = {
    title: 'Gastos por mês',
    width: 650,
    height: 300,
    vAxis: {
      format: 'currency',
      gridlines: {
        count: 0,
        color: 'transparent'
      }
    },
    'curveType': 'function',
    'legend': 'none'
  }

  grafico = new google.visualization.LineChart(document.getElementById('graficoLinha'));
  grafico.draw(tabela, opcoes);

}

google.charts.setOnLoadCallback(desenhaGraficos);