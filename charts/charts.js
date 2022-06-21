function desenharGraficos() {
  let tabela = new google.visualization.DataTable();
  //colunas
  tabela.addColumn('string', 'categorias');
  tabela.addColumn('number', 'valores');
  //linhas
  tabela.addRows([
    ['Educação', 2000],
    ['Transporte', 500],
    ['Lazer', 230],
    ['Saúde', 50],
    ['Cartão de crédito', 900],
    ['Alimentação', 260]
  ]);
  //opções
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
  //colunas
  tabela.addColumn('string', 'mês');
  tabela.addColumn('number', 'gastos');
  //linhas
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
  //opções
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

  tabela = google.visualization.arrayToDataTable([
    ['Mês', 'Entrada', 'Saída'],
    ['jan', 2500, 1000],
    ['fev', 2000, 500],
    ['mar', 3000, 1300],
    ['abr', 1500, 1700],
    ['mai', 5000, 2250],
    ['jun', 3567, 3000],
    ['jul', 3452, 1468],
    ['ago', 1833, 5250],
    ['set', 3803, 5500],
    ['out', 1800, 1000],
    ['nov', 3569, 1500],
    ['dez', 3000, 1740]
  ]);

  opcoes = {
    title: 'Entradas e saídas da conta',
    width: 800,
    height: 400,
    vAxis: {
      gridlines: { color: 'transparent' },
      format: 'currency',
      title: 'Valores'
    },
    hAxis: {
      title: 'Mês',
    }
  }

  grafico = new google.visualization.ColumnChart(document.getElementById('graficoColuna'));
  grafico.draw(tabela, opcoes);

  //grafico de barras
  let dadosJson = $.ajax({
    url: 'https://gist.githubusercontent.com/dreackdown/23a6df512b28337b73b403da06cc344c/raw/9eec1e6a8733d30bbdde12d4072da7e90fcb3b46/data.json',
    dataType: 'json',
    async: false
  }).responseText;

  tabela = new google.visualization.DataTable(dadosJson);

  //ordenando a tabela pela coluna de indice 1
  tabela.sort([{ column: 1, desc: true }]);

  opcoes = {
    title: 'Tipos de Gastos',
    height: 400,
    width: 800,
    vAxis: {
      gridlines:
      {
        count: 0,
        color: 'transparent'
      }
    },
    legend: 'none',
    hAxis: {
      gridlines: { color: 'transparent' },
      format: 'currency',
      textPosition: 'none'
    },
    annotations: { alwaysOutside: true },
  }

  grafico = new google.visualization.BarChart(document.getElementById('graficoColunaSurpresa'));
  grafico.draw(tabela, opcoes);

  //grafico de barras com arquivo json
  let data = $.ajax({
    // url: 'data.json',
    url: 'https://gist.githubusercontent.com/dreackdown/4c054cac50d408369315c7568f3d6531/raw/bacf238d6949575986e577c8742fc2c3525a9595/data.json',
    dataType: 'json',
    async: false
  }).responseText;

  tabela = new google.visualization.DataTable(data);

  tabela.sort([{ column: 1, desc: true }]);

  opcoes = {
    title: 'Usuários e Poupanças',
    height: 400,
    width: 800,
    legend: 'none',
    hAxis: {
      gridlines: { color: 'transparent' },
      textPosition: 'none'
    },
    annotations: { alwaysOutside: true },
  }

  grafico = new google.visualization.BarChart(document.getElementById('graficoBarrasJson'));
  grafico.draw(tabela, opcoes);
}