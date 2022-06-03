google.charts.load('current', { 'packages': ['corechart'] });

function desenharLinha() {
  var tabela = new google.visualization.DataTable();
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
    'title': 'Gastos por mês',
    'width': 650,
    'height': 300,
    'vAxis': {
      'format': 'currency',
      'gridlines': {
        'count': 0,
        'color': 'transparent'
      }
    },
    'curveType': 'function',
    'legend': 'none'
  }

  grafico = new google.visualization.LineChart(document.getElementById('graficoLinha'));
  grafico.draw(tabela, opcoes);
}

google.charts.setOnLoadCallback(desenharLinha);