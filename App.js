// OGÓLNA FUNKCJA
// function randomString() {
// 	var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ'.split();
// 	var str = '', i;
// 	for (i = 0; i < 10; i++) {
// 	  str += chars[Math.floor(Math.random() * chars.length)];
// 	}
// 	return str;
// }

var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
	'X-Client-Id' : 'X-Client-Id',
	'X-Auth-Token' : 'X-Auth-Token'
};

$.ajaxSetup({
	headers: myHeaders
})

$.ajax({
	url: baseUrl,
	method: 'GET',
	success: function(response){
		setupColumns(response.columns);
	}
})

function setupColumns(columns){
	columns.forEach(function(column){
		var col = new Column(column.id, column.name); //Pytanie: serwer sam generuje id do każdej odpowiedzi?
		board.createColumn(col);
		setupCards(col, column.cards);
	});	
}

function setupCards(col, cards){
	cards.forEach(function(card){
		var card = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
		col.createCard(card);
	})
}


