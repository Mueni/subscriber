
$(document).ready(function(){
    
    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;

    $(".next").click(function(){
        // validating the form 
        var form = $("#msform");
		form.validate({
			rules: {
				firstName: {
					required: true,
				},
                lastName: {
					required: true,
				},
                idNo: {
					required: true,
				},
				phoneNo: {
					required: true,
				},
				changeInfo: {
					required: true,
                    maxlength: 2
				},
                files: {
					required: true,
				},
				
				
			},
			messages: {
				firstName: {
					required: "First Name required",
				},
                lastName: {
					required: "Last Name required",
				},
                idNo: {
					required: "Identification required",
				},
                phoneNo: {
					required: "Phone Number required",
				},
                changeInfo: {
					required: "Select atleast one",
				},
                files: {
					required: "Files required",
				},
				
			},
            highlight: function (element) {
                $(element).parent().addClass('error')
            },
            unhighlight: function (element) {
                $(element).parent().removeClass('error')
            }
            
    
		});

        if (form.valid() == true){
            current_fs = $(this).parent();
            next_fs = $(this).parent().next();
            
            //Add Class Active
            $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
            
            //show the next fieldset
            next_fs.show(); 
            //hide the current fieldset with style
            current_fs.animate({opacity: 0}, {
                step: function(now) {
                    // for making fielset appear animation
                    opacity = 1 - now;
        
                    current_fs.css({
                        'display': 'none',
                        'position': 'relative'
                    });
                    next_fs.css({'opacity': opacity});
                }, 
                duration: 600
            }); 

        }else {
            alert("kinldy fill all inputs")
        }
        

    });
    
    $(".previous").click(function(){
        
        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();
        
        //Remove class active
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
        
        //show the previous fieldset
        previous_fs.show();
    
        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
            step: function(now) {
                // for making fielset appear animation
                opacity = 1 - now;
    
                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({'opacity': opacity});
            }, 
            duration: 600
        });
    });
    
    $('.radio-group .radio').click(function(){
        $(this).parent().find('.radio').removeClass('selected');
        $(this).addClass('selected');
    });
    
    $(".submit").click(function(){
        return false;
    })
        
});
function getInputValue(){
    // Selecting the input element and get its value 
    var changeDetails = new Array();
            $("input[name='changeInfo']:checked").each(function() {
                changeDetails.push($(this).val());
            });

        var dataTest = changeDetails.includes("mpesaOwnership");
        console.log("testCheck", dataTest);

        if(changeDetails.includes("mpesaOwnership")) {
            // $('#modalInfo').modal();
        }

    let data = {
        oldOwnerFName: document.getElementById("oldOwnerFName").value,
        oldOwnerLName: document.getElementById("oldOwnerLName").value,
        oldOwnerId: document.getElementById("oldOwnerId").value,
        oldOwnerPhoneNo: document.getElementById("oldOwnerPhoneNo").value,
        phoneNoChange:document.getElementById("phoneNoChange").value,
        newOwnerFName: document.getElementById("newOwnerFName").value,
        newOwnerLName: document.getElementById("newOwnerLName").value,
        newOwnerId: document.getElementById("newOwnerId").value,
      };

    // Store the values in local Storage 
    localStorage.setItem("data", JSON.stringify(data));

      // Retrieve the data from local storage
    let storageDataString = localStorage.getItem("data");

   /*  let savedData = JSON.parse(storageDataString);
    console.log("data object", savedData);
    console.log("data names", data.oldOwnerFName); */


    document.getElementById("CONames").innerHTML = data.oldOwnerFName;
    document.getElementById("COId").innerHTML = data.oldOwnerId;
    document.getElementById("changeDetails").innerHTML = changeDetails;
    document.getElementById("changeNumber").innerHTML = data.phoneNoChange;
    document.getElementById("NONames").innerHTML = data.newOwnerFName;
    document.getElementById("NOId").innerHTML = data.newOwnerId;

}
