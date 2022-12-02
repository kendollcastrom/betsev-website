var n_of_wagers = 7;
var lines  = new Array("", "", "", "", "", "", "", "", "", "", "");
var values = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

function CalcParlay(form){
	for(i = 0; i <= n_of_wagers; i++){
		lines[i] = parseFloat(form["Line"+i].value);
		values[i] = parseFloat(form["Factor"+i].value);
	}
	Bet = parseFloat(form.Amount.value);
	Payout = Bet;
	for(i = 0; i <= n_of_wagers; i++){
		lines[i] = parseFloat(form["Line"+i].value);
		values[i] = parseFloat(form["Factor"+i].value);
		if(lines[i] < 0){ 
			values[i] = (-lines[i] + 100) / -lines[i];  
		}else if(lines[i] > 0){ 
			values[i] = (lines[i] + 100) / 100;  
		}else{
			values[i] = 0;
		}
		if(values[i] != 0){
			values[i] = Math.round(values[i] * 10000) / 10000;
			Payout *= values[i];
		}
	}

	for(i = 0; i <= n_of_wagers; i++){
		form["Factor"+i].value = values[i];
	}
	form.Payout.value = Math.round(((Payout - Bet) * 100) / 100);
}

function clearForm(form){
	for (i=0;i<=n_of_wagers;i++){
		form["Line"+i].value = '';
		form["Factor"+i].value = '0';
	}
	form.Amount.value = 100;
	form.Payout.value = 0;
}

function write_line(nwager){

	document.write("<tr>\n");
	document.write("	<td align=\"center\"><b>Wager "+(nwager + 1)+".</b>\n");
	document.write("	</td>\n");
	document.write("	<td>\n");
	document.write("	<input type=\"text\" size=\"7\" value=\""+lines[nwager]+"\" name=\"Line"+nwager+"\">\n");
	document.write("	</td>\n");
	document.write("	<td>\n");
	document.write("	<input type=\"text\" size=\"7\" value=\""+values[nwager]+"\" name=\"Factor"+nwager+"\" readonly disabled>\n");
	document.write("	</td>\n");
	document.write("</tr>\n");
}

