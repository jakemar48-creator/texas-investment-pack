const viewer=document.querySelector('dialog');
const fullImage=viewer.querySelector('img');
let previousFocus;
document.querySelectorAll('.image-button').forEach(button=>button.addEventListener('click',()=>{previousFocus=button;const image=button.querySelector('img');fullImage.src=image.src;fullImage.alt=image.alt;viewer.showModal();}));
document.querySelector('#close-viewer').addEventListener('click',()=>viewer.close());
viewer.addEventListener('click',event=>{if(event.target===viewer){const bounds=viewer.getBoundingClientRect();if(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom)viewer.close();}});
viewer.addEventListener('close',()=>{fullImage.removeAttribute('src');previousFocus?.focus();});
