
// Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

      
//=====================================================================================
//                                JavaS DOM Plugs
//=====================================================================================

                                 // I N P U T S
                          //User communitcation vectors

        // pw length Message: form input box, confirm button 
        var pw_length_bar= document.querySelector('#pw_length_bar');
        // var pw_length_box= document.querySelectorAll('#pw_length_box');
       
        var pw_length_box= document.querySelector('#pw_length_box')
     
 
        var pw_length_bt= document.querySelector('#pw_length_bt');
     
        // Other pw characteristics modal: checkboxes x4 (uppercase, lower case, letter, number, special character), confirm button

        var pw_capital_checkbox= document.querySelector('#pw_capital_checkbox');
        var pw_lowercase_checkbox=document.querySelector('#pw_lowercase_checkbox')
        var pw_number_checkbox=document.querySelector('#pw_number_checkbox');
        var pw_symbol_checkbox=document.querySelector('#pw_symbol_checkbox');
        var pw_ingredients_bt=document.querySelector('#pw_ingredients_bt')

        
                                 // O U T P U T S    

         // Final password generator page: Generate button, Display textarea
         var pw_gen_bt=document.querySelector('#pw_gen_bt')
         var pw_display_area=document.querySelector("#password")
//=====================================================================

// Variables for password ingredients




//=====================================================================================
//                                   Click Events 
//=====================================================================================

        $(document).ready(function(){
          $("#msg_pw_length").modal('show');
          console.log('hi')
        });

   
        // Controling the display of the modals
            $("#pw_length_bt").click(function(){
              event.preventDefault();
             let pw_length= $('#pw_length_box').val();
              $("#msg_pw_length").modal('hide');
              $("#msg_pw_type").modal('show');
              
              // load_secondmodal()
    
            });
   
       // 
            $("#pw_ingredients_bt").click(function(){
              event.preventDefault();

              //  here ----------------------------
              var abc_lower='abcdefghijklmnopqrstuvwxyz'

              var abc_upper='ABCDEFGHIJKLMNOPQRSTUVWXYZ'

              var number='0123456789'

              var symbol='!@#$%^&*'
              var pw_length=pw_length_box.value

              var pw_ingredients='';
            
              // Pouring lower case letters to ingredients variable
              
                (pw_lowercase_checkbox.checked) ? pw_ingredients +=abc_lower : '';

              // Pouring upper case letters to the ingredients variable
              
                (pw_capital_checkbox.checked) ? pw_ingredients +=abc_upper : '';
              
              // Pouring numbers to the ingredients variable
              
                (pw_number_checkbox.checked) ? pw_ingredients +=number : '';
              
                // pouring symbols to the ingredients variable
              
                (pw_symbol_checkbox.checked) ? pw_ingredients +=symbol :'';
              
                // running the create password function to generate password and then displaying the value
                
               
             

            

     // Link range bar to the text box in welcome window


    pw_length_bar.addEventListener('input', link );

    pw_length_box.addEventListener('input', link);



            function link(e){
              var value = e.target.value
              pw_length_bar.value = value
              pw_length_box.value = value
            }

            
        // var bar_value=pw_length_bar.value
        // pw_length_box.textContent=bar_value


        

            //Alternative for controling modals with a function

                 // function load_secondmodal(){
        //   $('#msg_pw_length').modal('hide')
        //   console.log('hi2')
        //   $('#msg_pw_type').modal('show')
        // }

          // $(document).ready(function(){
          //   $("#pw_length_bt").on("click", load_secondmodal)
          // })



//=====================================================================================
//                               Event Sequence
//=====================================================================================


 // Prompt Welcome modal 
   
// Trigger 2nd modal for checkboxes regarding other pw characteristics

// Checking that at least one of the checkboxes is checked, trigger alert if not

// Display the password generator window

// Trigering the password generation episode on clicking the generate password button


  



$('#pw_gen_bt').click(function(e){

  var pw_length=pw_length_box.value

  var pw_ingredients='';

  // Pouring lower case letters to ingredients variable
  
    (pw_lowercase_checkbox.checked) ? pw_ingredients +=abc_lower : '';
  
  //Pouring upper case letters to the ingredients variable
  
    (pw_capital_checkbox.checked) ? pw_ingredients +=abc_upper : '';
  
  // Pouring numbers to the ingredients variable
  
    (pw_number_checkbox.checked) ? pw_ingredients +=number : '';
  
    // pouring symbols to the ingredients variable
  
    (pw_symbol_checkbox.checked) ? pw_ingredients +=symbol :'';
  
    // running the create password function to generate password and then displaying the value

     finalpw= create_pw(pw_length, pw_ingredients)
     console.log('checking DOM variable value', pw_length)
     console.log('final pw',finalpw)
  
  //  x= create_pw(pw_length, pw_ingredients)
  //   console.log('pw value', x)

    // pw_display_area.value 


});








       // Check whether the password is beteen 8 and 128 characters


      //  // create random lower case letter
      //       function get_rdm_lower(){
      //       // 26 represents the english letters, 97 represents the number corresponding with lower case starting with 'a' returing a string
      //       return String.fromCharCode(Math.floor(Math.random()*26)+97);
            
      //       }

      //  // create random upper case letter
      //      function  get_rdm_upper(){
      //       // 26 represents the english letters, 65 represents the number corresponding with lower case starting with 'A' returing a string
      //       return String.fromCharCode(Math.floor(Math.random()*26)+65);
      //       }

      //   // Create random number between 0 and 9
      //       function  get_rdm_num(){
      //       // Obtaining a random number between 0 and 9 from HTML characterset
      //       return String.fromCharCode(Math.floor(Math.random()*10)+48);
      //        }
      //        console.log(create_rdm_num)

      //   // Create special character
      //       function get_rdm_symbol(){
      //         return String.fromCharCode(Math.floor(Math.random()*10)+33);
      //         // //Alternative 
      //         // const symbols='!@#$%^&*(){}[]+<>/,.';
      //         // return symbols[Math.floor(Math.random()*symbols.length)]
      //        }

      //   // Create password : 
      //         create_pw(){
      //           // get these randomly generated ingreadients for the password
      //           // pack them into a body that is the size of length variable

      //         }


      

