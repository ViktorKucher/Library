let blockTitle = document.querySelectorAll('.block_title');
for(let i=0;i<blockTitle.length;i++){
	
	blockTitle[i].addEventListener('click',function(){
		blockTitle[i].classList.toggle('active_title');
		let blockText = blockTitle[i].nextElementSibling;
		if(blockText.style.maxHeight){
			blockText.style.maxHeight=null;
		} else{
			blockText.style.maxHeight = blockText.scrollHeight+10+'px';
		}
	})

}