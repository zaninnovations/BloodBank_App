    
let g='';
let u='';
let b='';
var obj={
    name:'',
    age:'',
    address:'',
    contact:''

}
var log_name='';
var log_age='';
var log_contact='';
var log_address='';
function reg()
{

    open("reg.html","_self")


}
$('#radioBtn a').on('click', function(){
    var sel = $(this).data('title');
    var tog = $(this).data('toggle');
    $('#'+tog).prop('value', sel);
    
    $('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
    $('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
})
function discard()
{
document.getElementById('first_name').value="";
document.getElementById('age').value="";
document.getElementById('Address').value="";
document.getElementById('contact').value="";
}
function Register()
{
    document.getElementById('reg').style.display='none'
    document.getElementById('loader').style.display='block'
let name=document.getElementById('first_name').value;
let age=document.getElementById('age').value;
let Address=document.getElementById('Address').value;
let contact=document.getElementById('Contact').value;
let email=document.getElementById('email').value;
let password=document.getElementById('password').value;
let cpassword=document.getElementById('password_confirmation').value;
let rates = document.getElementsByClassName('rate');
let gender='';

for(let i=0;i<rates.length;i++)
{
if(rates[i].checked){
    gender=rates[i].value;
}
}




if(name!=='' &&age!==''&&Address!==''&&contact!==''&&email!==''&&password!==''&&cpassword!==''&&gender!==''&&u!==''&&b!=='')
{



if((/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/).test(email))
{

if(password===cpassword)
{
    
    if (u==='Donor')
    {let ii;
        firebase.auth().createUserWithEmailAndPassword(email, password).then(()=>{
            
            firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
                  ii=firebase.auth().currentUser.uid;
                
                
              }).then(()=>
              {     firebase.auth().signOut()

         










            
                
            //     document.getElementById('first_name').value='';
            //    document.getElementById('age').value='';
            //    document.getElementById('Address').value='';
            //    document.getElementById('Contact').value='';
            //    document.getElementById('email').value='';
            //    document.getElementById('password').value='';
            //    document.getElementById('password_confirmation').value='';
                  
                let obj=
                {
name:name,
age:age,
Address:Address,
contact:contact,
gender:gender,
user:u,
blood:b
                }  
                
                firebase.database().ref('Donor/'+b+"/"+ii+'/').set(obj).then((success)=>{
       
                    swal({
                        title: "SUCCESS!",
                        text: "Successfully Donor Registered",
                        icon: "success",
                        button: "OK!",
                        closeOnClickOutside: false,
                closeOnEsc: false,
                      }).then(()=>{
                        document.getElementById('reg').style.display='block'
                        document.getElementById('loader').style.display='none'
                        open("./reg.html","_self")
                      })
            


              })
            
            .then(()=>{
                  
               
          
            }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                swal({
                    title: "ERROR!",
                    text: errorCode+" "+errorMessage,
                    icon: "error",
                    button: "OK!",
                    closeOnClickOutside: false,
            closeOnEsc: false,
                  })
                
                
          
                // ...
              });
    
            })
            
          })
          .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            swal({
                title: "ERROR!",
                text: errorCode+" "+errorMessage,
                icon: "error",
                button: "OK!",
                closeOnClickOutside: false,
        closeOnEsc: false,
              })
            
      
            // ...
          });
    }


    else if(u==='Acceptor')
    {
        let ii;

        firebase.auth().createUserWithEmailAndPassword(email, password).then(function(SUCCESS){
            firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
                ii  =firebase.auth().currentUser.uid
                
              }).then(()=>
              {     

                firebase.auth().signOut()

       
            
                
              let obj=
              {
name:name,
age:age,
Address:Address,
contact:contact,
gender:gender,
user:u,
blood:b
              }    
              firebase.database().ref('Acceptor/'+b+"/"+ii+'/').set(obj).then((success)=>{
     
                  swal({
                      title: "SUCCESS!",
                      text: "successfully Acceptor Registered",
                      icon: "success",
                      button: "OK!",
                      closeOnClickOutside: false,
              closeOnEsc: false,
                    })
            })
          
          .then(()=>{
            document.getElementById('reg').style.display='block'
            document.getElementById('loader').style.display='none'
                        open("./reg.html","_self")
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            swal({
                title: "ERROR!",
                text: errorCode+" "+errorMessage,
                icon: "error",
                button: "OK!",
                closeOnClickOutside: false,
        closeOnEsc: false,
              })
            
            
      
            // ...
          });


        })
          })
          .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            swal({
                title: "ERROR!",
                text: errorCode+" "+errorMessage,
                icon: "error",
                button: "OK!",
                closeOnClickOutside: false,
        closeOnEsc: false,
              })
            
            
      
            // ...
          });


    }
    


}
else
{
    swal({
        title: "ERROR!",
        text: "password not match to confirm password ",
        icon: "error",
        button: "OK!",
        closeOnClickOutside: false,
closeOnEsc: false,
      }).then(()=>{
        document.getElementById('password').focus()
      })
}

}
else
{
    swal({
        title: "ERROR!",
        text: "Email is not valid ",
        icon: "error",
        button: "OK!",
        closeOnClickOutside: false,
closeOnEsc: false,
      }).then(()=>{
        document.getElementById('email').focus()
      })

}

}
else
{
    swal({
        title: "ERROR!",
        text: "Kindly fill all fields ",
        icon: "error",
        button: "OK!",
        closeOnClickOutside: false,
closeOnEsc: false,
      })
}





}


function follow(item) {

u=item.innerText;
}
function follow1(item) {

    document.getElementById('blood').innerText=item.innerText;
   b= item.innerText
}
// upload image




function login()
{
    
    let email=document.getElementById('login_email').value;
    let password=document.getElementById('login_password').value;


    firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
        
        
         localStorage.setItem("key",JSON.stringify(firebase.auth().currentUser.uid))

         open("./reg.html","_self")
         open("./acceptor.html","_self")


       

        
      }).catch(()=>{
        var errorCode = error.code;
        var errorMessage = error.message;
        swal({
            title: "ERROR!",
            text: errorCode+" "+errorMessage,
            icon: "error",
            button: "OK!",
            closeOnClickOutside: false,
    closeOnEsc: false,
          })
  
      })



}