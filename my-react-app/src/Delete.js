const  Delete=  async (data)=>{
  
    await fetch(`http://127.0.0.1:8000/home/flights/${data}/`, {
        method: 'DELETE',
      });
   

}
export default Delete