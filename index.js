        /*function clear(){
            errors = document.getElementsByClassName('error');
            for(Let item of errors)
            {
                item.innerHTML = " ";
            }
        } */
        function seterror(id, error){
            element = document.getElementById(id);
            element.getElementsByClassName('error')[0].innerHTML = error;
        }
        function validate(){
            var returnval = true;
             clear();
            var name = document.forms["form"]["fname"].value;
            if (name.length < 4){
                seterror("name","Length of name is too short");
                returnval = false;
            }
            var email = document.forms['form']['email'].value;
            if (email.length>15){
                seterror("email","Length of email is too long");
                returnval = false;
            }
            var mobile = document.forms['form']['mobile'].value;
            if (email.length>15){
                seterror("email","Length of email is too long");
                returnval = false;
            }
            return returnval;
        }



        console.log("script running")
        document.querySelector('.cross').style.display = 'none';
        document.querySelector('.ham').addEventListener("click", ()=>{
            document.querySelector('.leftbar').classList.toggle('leftbargo');
            if(document.querySelector('.leftbar').classList.contains('leftbargo')){
                document.querySelector('.ham').style.display = 'inline'
                document.querySelector('.cross').style.display = 'none'
            }
            else{
                document.querySelector('.ham').style.display = 'none'
                setTimeout(()=>{
                document.querySelector('.cross').style.display = 'inline'
            }, 300);
        }
        })
