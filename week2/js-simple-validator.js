             var validator0=prompt ("What is your phone number (include dashes)?")
            if (input.charAt(3, 7) == "-"){ 
                alert("Your Phone Number is Valid")
            } else{
                alert("Please Enter a Valid Number!")
            }
            
        
            var validator1=prompt ("What is your date of birth? (abbreviate, include slashes)" )
            if (input.charAt(2, 5) == "/"){
                alert("Your Date of Birth is Valid")
            } else{
                alert("Please Enter a Valid Date of Birth!")
            }
            
            var validator2=prompt ("What is your Postal Code")
            if (validator2.length === 5){
                alert("Your Date of Birth is Valid")
            } else{
                alert("Please Enter a Valid Postal Code!")
            }
            
            /*var validator3=prompt ("What is your State (abbreviate)")
            if (validator3.length === 2){
                toUpperCase.alert("Your State is ${validator3}")
            } else{
                alert("Please Enter a Valid State!")
            }
            */
            
            var validator3=prompt ("Are you Married? yes/no")
            if (validator3 === "yes"){
                alert("Start golfing...")
            } if else (validator3 === "no"){
                alert("Don't do it man....")
            } else {
                alert("Please Answer Yes or No.")
            }