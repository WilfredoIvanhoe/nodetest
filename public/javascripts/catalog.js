	function loadObjects(){
		var objects=document.getElementById('objects');
		var parents=getParents();
		var liParents=[];
		for(var i=0;i<parents.parents.length;i++){
			liParents[i]=document.createElement('input');
			liParents[i].type='radio';
			liParents[i].name='objects';
			liParents[i].id='opc-'+parents.parents[i].name;
			liParents[i].value=i;
			liParents[i].dataset.name;
			liParents[i].dataset.name=parents.parents[i].name;
			liParents[i].dataset.price;
			liParents[i].dataset.price=(parents.parents[i].price);
			var div=document.createElement('div');
			div.appendChild(liParents[i]);
			div.innerHTML+=(" "+parents.parents[i].gName+" $:"+parents.parents[i].price);
			objects.appendChild(div);
		}
		for(var i=0,elements=document.getElementsByName('objects');i<elements.length;i++){
			elements[i].onclick=function(){
				var furniture=getArrays(this.getAttribute('data-name'));
				createCanvas(furniture); 
				loadTextures(this.getAttribute('data-name'));
				drawObject(furniture.parent.name,furniture.textures[0].url,furniture.parent.url);
			};

		}
	}
	function createCanvas(furniture){
		var wrapper=document.getElementById('wrapper-canvas');
		if(wrapper.firstChild){
			while(wrapper.firstChild){

				wrapper.removeChild(wrapper.firstChild);
			}
		}
		var parentCanvas=document.createElement('canvas');
		parentCanvas.id=furniture.parent.name;
		parentCanvas.width=wrapper.offsetWidth;
		parentCanvas.height=wrapper.offsetHeight;		
		wrapper.appendChild(parentCanvas);
		var objects=[];
		for(var i=0;i<furniture.objects.length;i++){
			objects[i]=document.createElement('canvas');
			objects[i].id=furniture.objects[i].name;
			objects[i].width=wrapper.offsetWidth;
			objects[i].height=wrapper.offsetHeight;
			wrapper.appendChild(objects[i]);
		}
	}	
	function loadTextures(parentName){
		var objects=document.getElementById('textures');
		
		if(objects.firstChild){
			while(objects.firstChild){
				objects.removeChild(objects.firstChild);
			}
		}
			
		var parent=getArrays(parentName);
		var textures=parent.textures;
		var liTextures=[];
		for (var i = 0; i < textures.length; i++) {
			liTextures[i]=document.createElement('input');
			liTextures[i].name=parentName+'-textures';
			liTextures[i].type='radio';
			liTextures[i].id=textures[i].name;
			liTextures[i].dataset.parentName;
			liTextures[i].dataset.parentName=parentName;
			liTextures[i].dataset.parentUrl;
			liTextures[i].dataset.parentUrl=parent.parent.url;
			liTextures[i].dataset.textureName;
			liTextures[i].dataset.textureName=textures[i].name;
			liTextures[i].dataset.textureUrl;
			liTextures[i].dataset.textureUrl=textures[i].url;
			liTextures[i].dataset.price;
			liTextures[i].dataset.price=textures[i].price;
			liTextures[i].innerHTML=textures[i].name;
			var div=document.createElement('div');
			div.appendChild(liTextures[i]);
			div.innerHTML+=(" "+textures[i].name+' $:'+textures[i].price);
			objects.appendChild(div);
			for(var i=0,elements=document.getElementsByName(parentName+'-textures');i<elements.length;i++)
				elements[i].onchange=function(){drawObject(this.getAttribute('data-parent-name'),this.getAttribute('data-texture-url'),this.getAttribute('data-parent-url'))};
		};
		document.getElementsByName(parentName+'-textures')[0].checked = true;
	}
	function getParents(){
		/**Database logic
		*
		*kawaii
		*	
		**/
		return {
			'parents':[
				{'ObjectID':'1', 'name' :'grumpy_lucy','gName':'Gato enojado', 'url' : '/images/lucy_alpha.png' ,'barcode' : 'String', 'price': 122.00,'description':'Descripción'},
				{'ObjectID':'2', 'name' :'bad_neko','gName':'Gato Malo', 'url' : '/images/bad_neko.png' ,'barcode' : 'String', 'price': 43.50,'description':'Descripción'}
			]
		};
	}
	function getArrays(parentName){
		/**Database logic
		*
		*kawaii
		*	
		**/
		var furniture={};
		//MODO TEMPORAL

		switch(parentName){
			case 'grumpy_lucy':
				var parentArray={
					'img':{'ObjectID':'1', 'name' :'grumpy_lucy', 'gName':'Gato Enojado','url' : '/images/lucy_alpha.png' , 'z_index':0},
					'storeData':{'ObjectID':'ObjectID', 'name':'String', 'barcode' : 'String', 'price': 122.00,'description':'Descripción'}
				};
				var childsArray=[];
				var texturesArray=[	
						{'ObjectID':'ObjectID', 'name' : 'Cannabis Sativa', 'url': '/images/mota.jpg', 'parent' : 'grumpy_lucy','price':12.0},
						{'ObjectID':'ObjectID', 'name' : 'Madera', 'url': '/images/wood.jpg', 'parent' : 'grumpy_lucy','price':9.0},
						{'ObjectID':'ObjectID', 'name' : 'Piedra', 'url': '/images/stone.JPG', 'parent' : 'grumpy_lucy','price':5.0},
						{'ObjectID':'ObjectID', 'name' : 'Pasto', 'url': '/images/grass.jpg', 'parent' : 'grumpy_lucy','price':4.0},
						{'ObjectID':'ObjectID', 'name' : 'Flores', 'url': '/images/vintage-flowers.jpg', 'parent' : 'grumpy_lucy','price':3.0}
				];
				furniture={
					'parent':{'ObjectID':parentArray.img.ObjectID,'gName':parentArray.img.gName,'name':parentArray.img.name, 'url':parentArray.img.url,'z_index':parentArray.img.z_index,'barcode':parentArray.storeData.barcode,'price':parentArray.img.price,'description':parentArray.storeData.description},
					'objects':childsArray,
					'textures' : texturesArray
				};
				return furniture;
				

				break;
				case 'bad_neko':
				var parentArray={
					'img':{'ObjectID':'1', 'name' :'bad_neko','gName':'Gato Malo', 'url' : '/images/bad_neko.png' , 'z_index':0},
					'storeData':{'ObjectID':'ObjectID', 'name':'String', 'barcode' : 'String', 'price': 43.5,'description':'Descripción'}
				};
				var childsArray=[];
				var texturesArray=[	
						{'ObjectID':'ObjectID', 'name' : 'Cannabis Sativa', 'url': '/images/mota.jpg', 'parent' : 'bad_neko','price':11.5},
						{'ObjectID':'ObjectID', 'name' : 'Madera', 'url': '/images/wood.jpg', 'parent' : 'bad_neko','price':2.0},
						{'ObjectID':'ObjectID', 'name' : 'Piedra', 'url': '/images/stone.JPG', 'parent' : 'bad_neko','price':6.0},
						{'ObjectID':'ObjectID', 'name' : 'Pasto', 'url': '/images/grass.jpg', 'parent' : 'bad_neko','price':3.6},
						{'ObjectID':'ObjectID', 'name' : 'Flores', 'url': '/images/vintage-flowers.jpg', 'parent' : 'bad_neko','price':9.7}
				];
				furniture={
					'parent':{'ObjectID':parentArray.img.ObjectID,'gName':parentArray.img.gName,'name':parentArray.img.name, 'url':parentArray.img.url,'z_index':parentArray.img.z_index,'barcode':parentArray.storeData.barcode,'price':parentArray.img.price,'description':parentArray.storeData.description},
					'objects':childsArray,
					'textures' : texturesArray
				};
				return furniture;
		}
	}
	function drawPattern(ctx,img,x1,y1,x,y){
		var pattern=ctx.createPattern(img,'repeat');
		var pixels=[];
		ctx.rect(x1,y1,x,y);
		ctx.fillStyle=pattern;
		ctx.fill();
	};
	function scaleToCanvas(img,x,y){
		var xi=img.width;
		var yi=img.height;
		if(xi<=x){
			if(yi<=y){
				return {'width':xi,'height':yi};
			}
		}
		for(var i=Math.max(xi,yi);i>=Math.min(x,y);i--){
			xi--;
			yi--;
		}
		return {'width':xi,'height':yi};
	}
	function drawObject(canvasName,textureUrl,objectUrl){
		var qrcode = new QRCode('wrapper-canvas');
		qrcode.clear();
		var imgObject={};
		var canvas=document.getElementById(canvasName);
		var ctx=canvas.getContext('2d');

		var img = new Image();
		
		img.onload=function(){
			var measures=scaleToCanvas(img,canvas.offsetWidth,canvas.offsetHeight);
			var texture=new Image();
		
			texture.onload=function(){
				drawPattern(ctx,texture,(canvas.offsetWidth/2-measures.width/2),(canvas.offsetHeight/2-measures.height/2),measures.width,measures.height);
				ctx.drawImage(img,(canvas.width-measures.width)/2,(canvas.height-measures.height)/2,measures.width,measures.height);
			};	
			texture.src=textureUrl;
		}
		img.src = objectUrl;
		var qrcode = new QRCode('wrapper-canvas');
		qrcode.makeCode(canvasName);
	}
	function cotizar(){
		var furniture;
		var price;
		for(var i=0,elements=document.getElementsByName('objects');i<elements.length;i++){
			if(elements[i].checked){
				console.log('checked');
				furniture=elements[i];
				for(var j=0,elements=document.getElementsByName(furniture.getAttribute('data-name')+'-textures');j<elements.length;j++){
					if(elements[j].checked){
						console.log('checked2');
						price=parseFloat(furniture.getAttribute('data-price'))+parseFloat(elements[j].getAttribute('data-price'));
					break;
					}
				}
			}
		}
		if(price===undefined){
			alert('Seleccione un producto por favor');
			return;
		}
		alert('Precio total: '+price);
		furniture,price=undefined;
	}
	function printImage(){
		var canvas=(document.getElementById('wrapper-canvas')).getElementsByTagName('canvas')[0];
		if(canvas===undefined){
			alert('Por favor elija alguno de nuestros productos');
			return;
		}
		var imgData = canvas.toDataURL("image/jpeg", 1.0);
      	var pdf = new jsPDF();
      	pdf.addImage(imgData, 'JPEG', 0, 0);
      	pdf.save(canvas.id+".pdf");
	}