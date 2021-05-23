document.getElementById('logoutBtn').addEventListener('click', ()=>{
    fetch('./')
    console.log("logout")
    sessionStorage.removeItem("studentId");
    sessionStorage.removeItem("department");
})

function che(a,b){
    console.log("clicked")
    if(a+b==2){
        return true
    }else{
        return false
    }
}
function checkTest(dateTime, duration){
    console.log(dateTime)
    console.log(duration)
    console.log((new Date(dateTime)-(new Date() - new Date(duration*60000))) )
    console.log((new Date(test.dateTime)-(new Date())))
    if((new Date(dateTime)>(new Date() - new Date(duration*60000))) && (new Date(dateTime)<(new Date()))){
        console.log('start')
        return true
    }
    else{
        console.log('wait')
        document.getElementById('alert').innerHTML = `<div style="height: 45px;" class="alert alert-warning alert-dismissible fade show" role="alert">
                                                        <center><strong>Test hasn't started yet</strong></center>
                                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>`
        setTimeout(()=>{
            document.getElementById('alert').innerHTML = ``
        },4000)
        return false
    }
}
