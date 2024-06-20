const menuList = document.getElementById('menu-list')
menuList.style.maxHeight ='0px'
console.log('menu-list')

function showMenu(){
    if(menuList.style.maxHeight == '0px'){
        menuList.style.maxHeight = '120px' 
    }else{
        menuList.style.maxHeight = '0px'
    }
}