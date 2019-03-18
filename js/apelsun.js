var item = document.getElementsByClassName("item");
var label = document.getElementsByClassName("label");
var accont = document.getElementsByClassName("accordion_content");
var modalcont = document.querySelector(".modal_content");
var triggerdesk = document.querySelector(".desk-btn");
var triggertab = document.querySelector(".tab-btn");
var close = document.querySelector(".close-btn");
var modal = "";




document.querySelector('.item1').addEventListener('click',function(event){
	modal = document.querySelector('.l1').innerHTML;
	document.querySelector('.changeable_header').innerHTML = modal;
	if(document.querySelector('.item1').classList.contains('active')){
	document.querySelector('.l1').classList.remove('hidden');
	document.querySelector('.item1').classList.remove('active');
	document.querySelector('.item1').classList.add('passive');
	document.querySelector('.ac1').classList.add('hidden');
	}
	else{
for (i = 0; i < item.length; i++) {
	if(item[i].classList.contains("active")){
  item[i].classList.remove("active");
  item[i].classList.add('passive');
  label[i].classList.remove("hidden");
  accont[i].classList.add("hidden");
}
}	
document.querySelector('.l1').classList.add('hidden');
document.querySelector('.item1').classList.remove('passive');
document.querySelector('.item1').classList.add('active');
document.querySelector('.ac1').classList.remove('hidden');
}
});


document.querySelector('.item2').addEventListener('click',function(event){
	modal = document.querySelector('.l2').innerHTML;
	document.querySelector('.changeable_header').innerHTML = modal;
	if(document.querySelector('.item2').classList.contains('active')){
	document.querySelector('.l2').classList.remove('hidden');
	document.querySelector('.item2').classList.remove('active');
	document.querySelector('.item2').classList.add('passive');
	document.querySelector('.ac2').classList.add('hidden');
	}
	else{
for (i = 0; i < item.length; i++) {
	if(item[i].classList.contains("active")){
  item[i].classList.remove("active");
  item[i].classList.add('passive');
  label[i].classList.remove("hidden");
  accont[i].classList.add("hidden");
}
}		
document.querySelector('.l2').classList.add('hidden');
document.querySelector('.item2').classList.remove('passive');
document.querySelector('.item2').classList.add('active');
document.querySelector('.ac2').classList.remove('hidden');
}
});


document.querySelector('.item3').addEventListener('click',function(event){
	modal = document.querySelector('.l3').innerHTML;
	document.querySelector('.changeable_header').innerHTML = modal;
	if(document.querySelector('.item3').classList.contains('active')){
	document.querySelector('.l3').classList.remove('hidden');
	document.querySelector('.item3').classList.remove('active');
	document.querySelector('.item3').classList.add('passive');
	document.querySelector('.ac3').classList.add('hidden');
	}
	else{
for (i = 0; i < item.length; i++) {
	if(item[i].classList.contains("active")){
  item[i].classList.remove("active");
  item[i].classList.add('passive');
  label[i].classList.remove("hidden");
  accont[i].classList.add("hidden");
}
}		
document.querySelector('.l3').classList.add('hidden');
document.querySelector('.item3').classList.remove('passive');
document.querySelector('.item3').classList.add('active');
document.querySelector('.ac3').classList.remove('hidden');
}
});


document.querySelector('.item4').addEventListener('click',function(event){
	modal = document.querySelector('.l4').innerHTML;
	document.querySelector('.changeable_header').innerHTML = modal;
	if(document.querySelector('.item4').classList.contains('active')){
	document.querySelector('.l4').classList.remove('hidden');
	document.querySelector('.item4').classList.remove('active');
	document.querySelector('.item4').classList.add('passive');
	document.querySelector('.ac4').classList.add('hidden');
	}
	else{
for (i = 0; i < item.length; i++) {
	if(item[i].classList.contains("active")){
  item[i].classList.remove("active");
  item[i].classList.add('passive');
  label[i].classList.remove("hidden");
  accont[i].classList.add("hidden");
}
}		
document.querySelector('.l4').classList.add('hidden');
document.querySelector('.item4').classList.remove('passive');
document.querySelector('.item4').classList.add('active');
document.querySelector('.ac4').classList.remove('hidden');
}
});


document.querySelector('.item5').addEventListener('click',function(event){
	modal = document.querySelector('.l5').innerHTML;
	document.querySelector('.changeable_header').innerHTML = modal;
	if(document.querySelector('.item5').classList.contains('active')){
	document.querySelector('.l5').classList.remove('hidden');
	document.querySelector('.item5').classList.remove('active');
	document.querySelector('.item5').classList.add('passive');
	document.querySelector('.ac5').classList.add('hidden');
	}
	else{
for (i = 0; i < item.length; i++) {
	if(item[i].classList.contains("active")){
  item[i].classList.remove("active");
  item[i].classList.add('passive');
  label[i].classList.remove("hidden");
  accont[i].classList.add("hidden");
}
}		
document.querySelector('.l5').classList.add('hidden');
document.querySelector('.item5').classList.remove('passive');
document.querySelector('.item5').classList.add('active');
document.querySelector('.ac5').classList.remove('hidden');
}

});


triggerdesk.addEventListener("click",function(event){
  if(modalcont.classList.contains("invisible")){
  	document.querySelector('.changeable_header').innerHTML = modal;
  modalcont.classList.remove("invisible");
};
});

triggertab.addEventListener("click",function(event){
  if(modalcont.classList.contains("invisible")){
  	document.querySelector('.changeable_header').innerHTML = modal;
  modalcont.classList.remove("invisible");
};
});

close.addEventListener("click",function(event){
  modalcont.classList.add("invisible");
});