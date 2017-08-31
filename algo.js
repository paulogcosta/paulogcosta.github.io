this.net = new brain.NeuralNetwork();

function pegatexto(){
	//----------------------------------------------------------------------------------------------------------------------
	//Recebendo e preparando as Strings.
	//----------------------------------------------------------------------------------------------------------------------
	this.a = $('.entrada').val();
	this.newA = a;
	this.newA = newA.toLowerCase();
	this.interrog=0;
	this.exclam=0;
	this.reticen=0;
	this.aspo=0;
	for (i=0; i<a.length; i++){if(a[i]=="\""){aspo=aspo+0.5}else{};if(a[i]=="\?"){interrog++}else{};if(a[i]=="\!"){exclam++}else{};if(a[i]=="\." && a[i+1]=="\." && a[i+2]=="\."||a[i]=="\…"){reticen++}else{};}
	this.a = a.replace("  "," ");
	this.a = a.toLowerCase();
	this.a = a.trim();
	this.virgulas = new RegExp(",",'g');
	this.a = a.replace(virgulas," ,");
	this.a = a.replace(/\./g," \.");	
	this.a = a.replace(/\!/g," \!");
	this.a = a.replace(/\?/g," \?");
	this.a = a.replace(/\(|\)|\"|\[|\]|\;|\”|\“|\:|\’|\‘|\►|\▼/g,"");
	this.a = a+" ";
	this.newA = newA.trim();
	this.newA = newA+" ";
	this.newA = " "+newA;
	this.newA = newA.replace(virgulas," ,");
	this.newA = newA.replace(/\./g," \.");	
	this.newA = newA.replace(/\!/g," \!");
	this.newA = newA.replace(/\?/g," \?");	
	this.espa = new RegExp(" ", 'g');
	this.newA = newA.replace(espa, "  ");
	//----------------------------------------------------------------------------------------------------------------------
	//Criando e organizando os arrays de Palavras
	//----------------------------------------------------------------------------------------------------------------------
	this.b =[];
	temporario =[""];
	numeroespaco=0;
	for (i=0;i<a.length;i=i+1){if(a[i]==" "){numeroespaco++}else{};}
		i=0;
		e=0;
		while (e<numeroespaco){
			while (a[i]!==" "){temporario[0]=temporario[0].concat("",a[i]);i++};
			b.splice(e,0,temporario[0]);
			temporario=[""];
			e++;
			i=i+1;};
	x=0;
	z=0;
	for (i=0; i<b.length; i++){
		if(b[i]==""){x++}else{};}
	for (i=0; i<b.length; i++){
		j=b.indexOf("");
		delete b[j];
		}
	z=(b.length)-x;
	//----------------------------------------------------------------------------------------------------------------------
	// Mostrando possíveis verbos
	//----------------------------------------------------------------------------------------------------------------------
	this.lpreposicoes=["ante","até","após","de","desde","em","entre","com","contra","para","por","perante","sem","sobre"];
	this.lartigos=["o","os","a","as","um","uns","uma","umas","ao","aos","à","às","do","dos","da","das","dum","duns","duma","dumas","no","nos","na","nas","num","nuns","numa","numas","pelo","pelos","pela","pelas"];
	this.lpronomes=["eu","você","tu","ele","ela","nós","vós","vocês","eles","elas"];
	this.arraybcompleto=b;
	this.newtrain=[];
	t1=0;	t2=0;	t3=0;	t4=0;	t5=0;	t6=0;	t7=0;	t8=0;	t9=0;	t10=0;	t11=0;	t12=0;
	arraybcompleto.splice(0,0,'','');
	arraybcompleto.push('','');
	e=0;
	idpverb=[];
	for(i=2;i<arraybcompleto.length-2;i++){
			
		if(lpreposicoes.some(elem => elem==arraybcompleto[i-2])==true){t1=1;}
		if(lpreposicoes.some(elem => elem==arraybcompleto[i-1])==true){t2=1;}
		if(lpreposicoes.some(elem => elem==arraybcompleto[i+1])==true){t3=1;}
		if(lpreposicoes.some(elem => elem==arraybcompleto[i+2])==true){t4=1;}
		
		if(lartigos.some(elem => elem==arraybcompleto[i-2])==true){t5=1;}
		if(lartigos.some(elem => elem==arraybcompleto[i-1])==true){t6=1;}
		if(lartigos.some(elem => elem==arraybcompleto[i+1])==true){t7=1;}
		if(lartigos.some(elem => elem==arraybcompleto[i+2])==true){t8=1;}
		
		if(lpronomes.some(elem => elem==arraybcompleto[i-2])==true){t9=1;}
		if(lpronomes.some(elem => elem==arraybcompleto[i-1])==true){t10=1;}
		if(lpronomes.some(elem => elem==arraybcompleto[i+1])==true){t11=1;}
		if(lpronomes.some(elem => elem==arraybcompleto[i+2])==true){t12=1;}
		
		newtrain[e]=[t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,0];
		t1=0;	t2=0;	t3=0;	t4=0;	t5=0;	t6=0;	t7=0;	t8=0;	t9=0;	t10=0;	t11=0;	t12=0;
		idpverb[e]="p"+e;
		
		$('.nbody').append("<p class='pverb' id='"+e+"'><font color='white'>..."+arraybcompleto[i-2]+" "+arraybcompleto[i-1]+"<font color='00FF00'>"+" "+arraybcompleto[i]+" "+"</font><font color='white'>"+arraybcompleto[i+1]+" "+arraybcompleto[i+2]+"...</p>");
	
		e++;
	}
	//----------------------------------------------------------------------------------------------------------------------
	newtrain2=[]
	for(i=0;i<newtrain.length;i++){
		newtrain2[i]=newtrain[i].splice(12,1);}
	
	function geratreino(){

		for(i=0;i<newtrain.length;i++){
		$('#tinput3').append("{input: ["+newtrain[i]+"], output: ["+newtrain2[i]+"]},<br>");}
		$('#tinput').html($('#tinput3').text());
		$('#tinput3').html('');

	}


	$('.pverb').each(function(){
		$(this).click(function(){
			$(this).slideUp();
			this.k=0;
			k=($(this).attr('id'));
			newtrain2[k]=1;
			$(document).ready(geratreino());
		});
	});
	



	$('#treino').click(function(){
		$.blockUI({ css: { 
            border: 'none', 
            padding: '15px', 
            backgroundColor: '#000', 
            '-webkit-border-radius': '10px', 
            '-moz-border-radius': '10px', 
            opacity: .5, 
            color: '#fff' 
        } });
		$(function(){setTimeout(function() {
			$('#ptreino').slideUp();
			$('.nbody2').slideUp();
			$('#ct').slideUp();
			this.ue=null;			
			ue=($('#tinput0').text()+$('#tinput').text()+$('#tinput2').text());
			ue2='';
			ue2=ue.slice(0,-3)+ue.slice(-2,ue.length);
			$('#tinput').html(ue2);
			$('#tinput2').html('');
			net.train(eval(ue2),{log: false,learningRate: 0.07});
			this.exprt = net.toJSON();
			this.exprts = JSON.stringify(exprt)
			console.log(exprt);
			console.log(exprts);
					
			var hiddenElement = document.createElement('a');

			hiddenElement.href = 'data:attachment/text,' + encodeURI(exprts);
			hiddenElement.target = '_blank';
			hiddenElement.download = 'conjunto_treino.json';
			hiddenElement.click();
			
			
			$.unblockUI();
			console.log(ue2);
			$('.pverb').slideUp();
			$('#treino').attr('disabled','disabled');
			$('.finais, #bfinal, .entrada2').slideDown();
			$('#bfinal').click(function(){
				$(document).ready(pegatexto2());
				$('#bfinal').attr('disabled','disabled');
				$('#lfinal').slideDown();
			});
			$('#lfinal').click(function(){
				$('#entrada2').val('');
				$('#final').html('');
				$('#bfinal').removeAttr('disabled');
			
			});	
		},3000);});
	});
}

/*  PARA USO POSTERIOR
	b.sort();
	conta = 1;
	novo=[];
	for (f=0;f<b.length;f++){
		if (b[f]==b[f+1]){
			conta=conta+1}
		else{
			if(conta<100){
			if(conta<10){
				novo.splice(0,0,"00"+conta+" "+b[f]);conta=1;}
			else{
				novo.splice(0,0,"0"+conta+" "+b[f]);conta=1;}}}};
	novo.sort();
	novo.reverse();
	nnovo=[];
	nunovo=[];
	//----------------------------------------------------------------------------------------------------------------------
	//Criando um array multidimensional contendo: palavra,quantidade,relevância
	//----------------------------------------------------------------------------------------------------------------------
	dnum=[];
	for (i=0; i<novo.length; i++){
		nnovo[i]=novo[i].substring(4);
		nunovo[i]=novo[i].slice(0,3);
		nunovo[i]=parseInt(nunovo[i]);
		dnum[i]=[nnovo[i],nunovo[i],(nunovo[i]/z)];}
	for(i=0; i<novo.length; i++){
		dnum[i][2]=dnum[i][2].toPrecision(2);}
}
*/


function pegatexto2(){
	//----------------------------------------------------------------------------------------------------------------------
	//Recebendo e preparando as Strings do segundo input
	//----------------------------------------------------------------------------------------------------------------------
	this.a = $('.entrada2').val();
	this.newA = a;
	this.newA = newA.toLowerCase();
	this.interrog=0;
	this.exclam=0;
	this.reticen=0;
	this.aspo=0;
	for (i=0; i<a.length; i++){if(a[i]=="\""){aspo=aspo+0.5}else{};if(a[i]=="\?"){interrog++}else{};if(a[i]=="\!"){exclam++}else{};if(a[i]=="\." && a[i+1]=="\." && a[i+2]=="\."||a[i]=="\…"){reticen++}else{};}
	this.a = a.replace("  "," ");
	this.a = a.toLowerCase();
	this.a = a.trim();
	this.virgulas = new RegExp(",",'g');
	this.a = a.replace(virgulas," ,");
	this.a = a.replace(/\./g," \.");	
	this.a = a.replace(/\!/g," \!");
	this.a = a.replace(/\?/g," \?");
	this.a = a.replace(/\(|\)|\"|\[|\]|\;|\”|\“|\:|\’|\‘|\►|\▼/g,"");
	this.a = a+" ";
	this.newA = newA.trim();
	this.newA = newA+" ";
	this.newA = " "+newA;
	this.newA = newA.replace(virgulas," ,");
	this.newA = newA.replace(/\./g," \.");	
	this.newA = newA.replace(/\!/g," \!");
	this.newA = newA.replace(/\?/g," \?");	
	this.espa = new RegExp(" ", 'g');
	this.newA = newA.replace(espa, "  ");
	this.b =[];
	temporario =[""];
	numeroespaco=0;
	for (i=0;i<a.length;i=i+1){if(a[i]==" "){numeroespaco++}else{};}
		i=0;
		e=0;
		while (e<numeroespaco){
			while (a[i]!==" "){temporario[0]=temporario[0].concat("",a[i]);i++};
			b.splice(e,0,temporario[0]);
			temporario=[""];
			e++;
			i=i+1;};
	x=0;
	z=0;
	for (i=0; i<b.length; i++){
		if(b[i]==""){x++}else{};}
	for (i=0; i<b.length; i++){
		j=b.indexOf("");
		delete b[j];
		}
	z=(b.length)-x;
	this.lpreposicoes=["ante","até","após","de","desde","em","entre","com","contra","para","por","perante","sem","sobre"];
	this.lartigos=["o","os","a","as","um","uns","uma","umas","ao","aos","à","às","do","dos","da","das","dum","duns","duma","dumas","no","nos","na","nas","num","nuns","numa","numas","pelo","pelos","pela","pelas"];
	this.lpronomes=["eu","você","tu","ele","ela","nós","vós","vocês","eles","elas"];
	this.arraybcompleto=b;
	this.newtrain=[];
	t1=0;	t2=0;	t3=0;	t4=0;	t5=0;	t6=0;	t7=0;	t8=0;	t9=0;	t10=0;	t11=0;	t12=0;
	arraybcompleto.splice(0,0,'','');
	arraybcompleto.push('','');
	e=0;
	idpverb=[];
	this.probs=[];
	for(i=2;i<arraybcompleto.length-2;i++){
			
		if(lpreposicoes.some(elem => elem==arraybcompleto[i-2])==true){t1=1;}
		if(lpreposicoes.some(elem => elem==arraybcompleto[i-1])==true){t2=1;}
		if(lpreposicoes.some(elem => elem==arraybcompleto[i+1])==true){t3=1;}
		if(lpreposicoes.some(elem => elem==arraybcompleto[i+2])==true){t4=1;}
		
		if(lartigos.some(elem => elem==arraybcompleto[i-2])==true){t5=1;}
		if(lartigos.some(elem => elem==arraybcompleto[i-1])==true){t6=1;}
		if(lartigos.some(elem => elem==arraybcompleto[i+1])==true){t7=1;}
		if(lartigos.some(elem => elem==arraybcompleto[i+2])==true){t8=1;}
		
		if(lpronomes.some(elem => elem==arraybcompleto[i-2])==true){t9=1;}
		if(lpronomes.some(elem => elem==arraybcompleto[i-1])==true){t10=1;}
		if(lpronomes.some(elem => elem==arraybcompleto[i+1])==true){t11=1;}
		if(lpronomes.some(elem => elem==arraybcompleto[i+2])==true){t12=1;}
		
		newtrain[e]=[t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12];
		t1=0;	t2=0;	t3=0;	t4=0;	t5=0;	t6=0;	t7=0;	t8=0;	t9=0;	t10=0;	t11=0;	t12=0;
		idpverb[e]="p"+e;
		
		console.log(net.run(newtrain[e]));
		out=net.run(newtrain[e]);
		probs[e]=out.toString();
		e++;
	}
console.log(probs);
for(i=0;i<newtrain.length; i++){
   		probs[i] = parseFloat(probs[i]);
}	
console.log(probs);
for(i=2;i<b.length-2;i++){
	console.log(b[i]);
	if(probs[i-2]>0.5){
	$('#final').append("<font color=\"00FF00\">"+" "+b[i]+" "+"</font>");}else{$('#final').append("<font color='black'>"+" "+b[i]+" "+"</font>")}
}

}
$(document).ready(function(){
	$('#botao').click(function(){
		$(document).ready(pegatexto());
		$('.nbody2').slideDown();
		$('#ptreino').slideDown();
		$('.nbodyy').slideDown();
		$('#clear').fadeIn('slow');
		$('.pverb').width('80%')
		$('.pverb').slideDown('slow')
		//$('#p2').slideDown('slow');
		$('#botao').attr('disabled','disabled');
		$('#clear').removeAttr('disabled');
		$('#clear').click(function(){
			/*
			$('.entrada2, #bfinal, #lfinal, .finais').slideUp();
			$('#ptreino').slideUp();
			$('#tinput').html("([");
			$('#tinput2').html("])");
			$('.nbody2').slideUp();
			$('.nbodyy').slideUp();
			/*$('.entrada').val('');
			//$('.resultados').fadeOut('slow');
			//$('.texto').slideUp('slow');
			$('.pverb').slideUp('slow');
			$('p').removeClass('pverb');
			//$('#p2').slideUp('slow');
			$('#clear').attr('disabled','disabled');
			$('#botao').removeAttr('disabled');
			$('#treino').removeAttr('disabled');
			*/
			location.reload();
		});
		
	});
	
});
