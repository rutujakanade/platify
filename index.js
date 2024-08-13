function toggleSidebar(){

    const sideBar = document.getElementById('sidebar');
    if (sideBar.style.display === 'flex') {
      sideBar.style.display = 'none'
    } else {
      sideBar.style.display = 'flex'
    }
  }
  function showSearchBox(){
    const searchBox = document.getElementById('searchContainer');
    if (searchBox.style.display === 'none') {
      searchBox.style.display = 'flex';
    } else {
      searchBox.style.display = 'none';
    }
  }

  function toggleFirst(id){
    
    if(
      document.getElementById(id).style.display === 'inline-block'){
        document.getElementById(id).style.display = 'none';
      }else{
        document.getElementById(id).style.display = 'inline-block';
      }
  }