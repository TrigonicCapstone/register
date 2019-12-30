

function scroll_to_class(element_class, removed_height) {
	var scroll_to = $(element_class).offset().top - removed_height;
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 0);
	}
}


function bar_progress(progress_line_object, direction) {
	var number_of_steps = progress_line_object.data('number-of-steps');
	var now_value = progress_line_object.data('now-value');
	var new_value = 0;
	if(direction == 'right') {
		new_value = now_value + ( 100 / number_of_steps );
	}
	else if(direction == 'left') {
		new_value = now_value - ( 100 / number_of_steps );
	}
	progress_line_object.attr('style', 'width: ' + new_value + '%;').data('now-value', new_value);
}

jQuery(document).ready(function() {

    /*
        Fullscreen background
    */
    $.backstretch("images/login/1.jpg");
    
    $('#top-navbar-1').on('shown.bs.collapse', function(){
    	$.backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
    	$.backstretch("resize");
    });
    
    /*
        Form validation
    */
    $('.login-form input[type="text"], .login-form input[type="password"], .login-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    $('.login-form').on('submit', function(e) {
    	
    	$(this).find('input[type="text"], input[type="password"], textarea').each(function(){
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	
    });

    // Register Wizard Configuration

    
    $('.f1 fieldset:first').fadeIn('slow');
    
    $('.f1 input[type="text"], .f1 input[type="password"], .f1 textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    // next step
    $('.f1 .btn-next').on('click', function() {
    	var parent_fieldset = $(this).parents('fieldset');
		var next_step = true;
		
    	// navigation steps / progress steps
    	var current_active_step = $(this).parents('.f1').find('.f1-step.active');
		var progress_line = $(this).parents('.f1').find('.f1-progress-line');
		
    	// fields validation
       
    	parent_fieldset.find('input[type="text"], textarea').each(function() {
    		if( $(this).val() == ""  ) {
				$(this).addClass('input-error');
				
    			next_step = false;
    		}
    		else {
    			$(this).removeClass('input-error');
			}			
    	});
    	// fields validation
    	
    	if( next_step ) {
    		parent_fieldset.fadeOut(400, function() {
    			// change icons
    			current_active_step.removeClass('active').addClass('activated').next().addClass('active');
    			// progress bar
    			bar_progress(progress_line, 'right');
    			// show next step
	    		$(this).next().fadeIn();
	    		// scroll window to beginning of the form
    			scroll_to_class( $('.f1'), 20 );
	    	});
    	}
    	
	});

        var quantityNumber = 1;   
        
	$('.f1 .btn-next-account').on('click', function() {
            
    	var parent_fieldset = $(this).parents('fieldset');
		var next_step = true;
	document.getElementById("pre-ser").style.display = "none";
        document.getElementById("next-nor").style.display = 'none';

    	// navigation steps / progress steps
    	var current_active_step = $(this).parents('.f1').find('.f1-step.active');
	var progress_line = $(this).parents('.f1').find('.f1-progress-line');
		
    	// fields validation
        var check = document.getElementById("f1-quantity").value;
    	parent_fieldset.find('input[type="text"], textarea').each(function() {
    		if( $(this).val() == ""  ) {
				$(this).addClass('input-error');
				
    			next_step = false;
    		}else {
                    $(this).removeClass('input-error');
                    if (/^\d+$/.test(check)) {
                       
                    } else {
                        
                        $("#modal-title").text("Incorrect quantity!");
			$("#modal-desc").text("Please enter a correct quantity. Quantity must be a positive number!");
                        $("#trigonicModal").modal('show');
                        $(this).addClass('input-error');
				
    			next_step = false;
                    }
                }
                
                
//			
    	});
    	// fields validation
    	
    	if( next_step ) {
                        
			var full_name = $(".f1-full-name").val();
			var phone_number = $(".f1-phone-number").val();
			var address = $(".f1-address").val();
			var quantity = $(".f1-quantity").val();
			if(quantity == 1){
                            document.getElementById("next-ser").style.display = "none";
                            document.getElementById("next-nor").style.display = 'inline-block';
                        }
                        
                        const service = document.querySelector("#snkrs");
                        var formService = document.getElementById("snkrs");
        
                        while (formService.hasChildNodes()) {
                                formService.removeChild(formService.firstChild);
                        }
                                for (var i = 1; i <= quantity; i++) {                   
                        service.innerHTML += "<div id='field' style='position: relative;float: left;width: 510px; height: 270px;'><h4>Sneaker " + i + ":</h4><div class='form-group'>"
                                     +"<label class='sr-only' for='f1-sneaker-name'>Sneaker name</label>"
                                    +"<input type='text' autocomplete='off' list='suggest' name='f1-sneaker-name" + i + "' placeholder='Sneaker name...' class='f1-sneaker-name" + i + " form-control' id='f1-sneaker-name" + i + "'>"
                                    +"<h4>Choose service :</h4>"
                                    +"<label class='sr-only' for='f1-service'>Service</label>"
                                    +"<input type='checkbox' name='f1-clean-sneaker" + i + "' id='f1-clean-sneaker" + i + "' value='Clean Sneaker' style='margin-left:20px;' checked='true' disabled='true'> Clean Sneaker"
                                    +"<input type='checkbox' name='f1-repaint-soles" + i + "' id='f1-repaint-soles" + i + "' value='Repaint Soles' style='margin-left:200px;'> Repaint Soles</br>"
                                    +"<input type='checkbox' name='f1-dye-sneaker-body" + i + "' id='f1-dye-sneaker-body" + i + "' value='Dye Sneaker's Body' style='margin-left:20px;'> Dye Sneaker's Body"
                                    +"<input type='checkbox' name='f1-disinfectant-soles" + i + "' id='f1-disinfectant-soles" + i + "' value='Disinfectant Soles' style='margin-left:164px;'> Disinfectant Soles</br>"
                                    +"<input type='checkbox' name='f1-PasteSewInstead-solesr" + i + "' id='f1-PasteSewInstead-solesr" + i + "' value='Paste|Sew|Instead Solesr' style='margin-left:20px;'> Paste|Sew|Instead Soles"
                                    +"<input type='checkbox' name='f1-spray-nano" + i + "' id='f1-spray-nano" + i + "' value='Spray Nano' style='margin-left:129px;'> Spray Nano"
                                    +"<div id='total" + i + "' style='width: 510px;'><h3 style='margin-left:200px;'>Service Price: <span id='price" + i + "' ></span></h3></div></br>"
                                +"</div>";
                                
//                                +"<div class='f1-buttons'>"
//                                    +"<button type='button' class='btn btn-previous'>Previous</button>"
//                            
//                                    +"<button type='button' class='btn btn-next-accounts'>Next</button>"
//                                +"</div></h4></div>";
                            
                             
                        }
                        
                        checkService();
                       
                        
				if ( next_step)
				{
                                    parent_fieldset.fadeOut(400, function() {
                                                
					 	// change icons
					 	//current_active_step.removeClass('active').addClass('activated').next().addClass('active');
					 	// progress bar
					 	//bar_progress(progress_line, 'right');
					 	// show next step
					 	$(this).next().fadeIn();
					 	// scroll window to beginning of the form
					 	scroll_to_class( $('.f1'), 20 );
					 });
				}

    		
    	}
    	
	});
        
        function addPrice(){
            var servicePrice = 100000;
            var repaintSoles = "f1-repaint-soles" + quantityNumber;
            var dyeSneakersBody = "f1-dye-sneaker-body" + quantityNumber;
            var disinfectantSoles = "f1-disinfectant-soles" + quantityNumber;
            var pasteSewInsteadSolesr = "f1-PasteSewInstead-solesr" + quantityNumber;  
            var sprayNano = "f1-spray-nano" + quantityNumber;
            var priceID = "#price" + quantityNumber;
            var price = "price" + quantityNumber;
            if(document.getElementById(repaintSoles).checked == true){
                servicePrice += parseFloat(349000);
            }
            if(document.getElementById(dyeSneakersBody).checked == true){
                servicePrice += parseFloat(399000);
            }
            if(document.getElementById(disinfectantSoles).checked == true){
                servicePrice += parseFloat(149000);
            }
            if(document.getElementById(pasteSewInsteadSolesr).checked == true){
                servicePrice += parseFloat(179000);
            }
            if(document.getElementById(sprayNano).checked == true){
                servicePrice += parseFloat(199000);
            }
            
            document.querySelector(priceID).innerHTML = servicePrice + "<sup>vnd</sup>";
            document.getElementById(price).value = servicePrice;
        }    
        
        
                        
       function checkService(){
                        var repaintSoles = "f1-repaint-soles" + quantityNumber;
                        var dyeSneakersBody = "f1-dye-sneaker-body" + quantityNumber;
                        var disinfectantSoles = "f1-disinfectant-soles" + quantityNumber;
                        var pasteSewInsteadSolesr = "f1-PasteSewInstead-solesr" + quantityNumber;  
                        var sprayNano = "f1-spray-nano" + quantityNumber;
                        var price = "price" + quantityNumber;
                        document.getElementById(price).value = 100000;
                        document.getElementById(repaintSoles).onclick = function(){
                            addPrice();
                        }
                        document.getElementById(dyeSneakersBody).onclick = function(){
                            addPrice();
                        }
                        document.getElementById(disinfectantSoles).onclick = function(){
                            addPrice();
                        }
                        document.getElementById(pasteSewInsteadSolesr).onclick = function(){
                            addPrice();
                        }
                        document.getElementById(sprayNano).onclick = function(){
                            addPrice();
                        }
                        
       }
       
        var sumFee = 0;
        document.getElementById("f1-pick-up").onclick = function(){
            if(this.checked){
                sumFee += parseFloat(10000);
                document.querySelector("#fee").innerHTML = sumFee + "<sup>vnd</sup>";
            }else{
                 sumFee -= parseFloat(10000);
                document.querySelector("#fee").innerHTML = sumFee + "<sup>vnd</sup>";
            }
        }
        document.getElementById("f1-release").onclick = function(){
            if(this.checked){
                 sumFee += parseFloat(10000);
                document.querySelector("#fee").innerHTML =  sumFee + "<sup>vnd</sup>";
            }else{
                 sumFee -= parseFloat(10000);
                document.querySelector("#fee").innerHTML = sumFee + "<sup>vnd</sup>";
            }
        }
        

        var count = 1;
	var pos = 0;
        var posNext = 510;
        var lengthQuantity = 510;
        var posPre;
        
    $('.f1 .btn-next-service').on('click', function() {
       
        var quantity = $(".f1-quantity").val();
        var check = true;
        var cont = "f1-sneaker-name" + count;
        if(document.getElementById(cont).value == ""){
                check = false;
            }
  
        if(check == true){
            quantityNumber++;
            checkService();
            document.getElementById("pre-ser").style.display = 'inline-block';
            document.getElementById("pre-nor").style.display = 'none';
            var elem = document.getElementById("snkrs");
                

            var id = setInterval(frame, 0);
                function frame() {
                    posPre = posNext - 510;
                    if (pos == posNext) {
                        clearInterval(id);
                        if (posNext !== (lengthQuantity*quantity - 510)) {
                            posNext = posNext + 510;
                            count++;
                            ;
                        }
                        
                    } else {
                        pos += 3;
                        elem.style.right = pos + 'px';
                        
                    }
                }
                
                if(count == (quantity - 1)){
                    count++;
                    document.getElementById("next-nor").style.display = 'inline-block';
                    document.getElementById("next-ser").style.display = 'none';
                }
      
        }
        
                
    	
	});
    $('.f1 .btn-previous-service').on('click', function() {
        quantityNumber--;
        checkService();
        if(posPre != null){ 
            
            var elem = document.getElementById("snkrs");
               var quantity = $(".f1-quantity").val();
               
                posNext = posPre + 510;
                var id = setInterval(frame, 0);
                function frame() {

                    if (pos == posPre) {
                        clearInterval(id);
                        if (posPre !== 0) {
                            posPre = posPre - 510;
                            count--;  
                        }
                        
                    } else {
                        pos -= 3;
                        elem.style.right = pos + 'px';
                        
                    }
                }
                
                if(count == (quantity - 1)){
                    document.getElementById("next-ser").style.display = 'inline-block';
                    document.getElementById("next-nor").style.display = 'none';
                    
                }
                if(count == 2){
                    count--;
                    document.getElementById("pre-nor").style.display = 'inline-block';
                    document.getElementById("pre-ser").style.display = 'none';
                }
        }
    	
    });        
    $('.f1 .btn-previous-nor').on('click', function() {
    	// navigation steps / progress steps
    	var current_active_step = $(this).parents('.f1').find('.f1-step.active');
    	var progress_line = $(this).parents('.f1').find('.f1-progress-line');
        document.getElementById("next-ser").style.display = "inline-block";

    	$(this).parents('fieldset').fadeOut(400, function() {
    		// change icons
    		//current_active_step.removeClass('active').prev().removeClass('activated').addClass('active');
    		// progress bar
    		//bar_progress(progress_line, 'left');
    		// show previous step
    		$(this).prev().fadeIn();
    		// scroll window to beginning of the form
			scroll_to_class( $('.f1'), 20 );
    	});
    });
    $('.f1 .btn-next-service-nor').on('click', function() {
       
	
       // navigation steps / progress steps
    	var current_active_step = $(this).parents('.f1').find('.f1-step.active');
    	var progress_line = $(this).parents('.f1').find('.f1-progress-line');
        var quantity = $(".f1-quantity").val();
        var next_step = true;
        
        
        for (var i = 1; i <= quantity; i++) {
            var cont = "f1-sneaker-name" + i;
             if(document.getElementById(cont).value == ""){
                    next_step = false;
            }
        }
      
         
        if(next_step == true){
             $(this).parents('fieldset').fadeOut(400, function() {
    		// change icons
		//current_active_step.removeClass('active').addClass('activated').next().addClass('active');
		// progress bar
		//bar_progress(progress_line, 'right');
		// show next step
		$(this).next().fadeIn();
		// scroll window to beginning of the form
		scroll_to_class( $('.f1'), 20 );
    	});
        } 
    	
	});
        var arrSneakerName= [];
        var arrService= []; 
        var totalPrice = 0;
        var shippingService = [];
    $('.f1 .btn-next-shipping').on('click', function() {
       
		
       // navigation steps / progress steps
    	var current_active_step = $(this).parents('.f1').find('.f1-step.active');
    	var progress_line = $(this).parents('.f1').find('.f1-progress-line');
        var quantity = $(".f1-quantity").val();
        var full_name = $(".f1-full-name").val();
	var phone_number = $(".f1-phone-number").val();
	var address = $(".f1-address").val();
        var sum = 0;
    	const listService = document.querySelector("#list-service");   
    	const fullName = document.querySelector("#txtFullName");   
    	const phoneNumber = document.querySelector("#txtPhoneNumber");   
    	const address_cus = document.querySelector("#txtAddress");   
    	const quantity_cus = document.querySelector("#txtQuantity");   
        fullName.innerHTML = "<span>" + full_name + "</span>";
        phoneNumber.innerHTML = "<span>" + phone_number + "</span>";
        address_cus.innerHTML = "<span>" + address + "</span>";
        quantity_cus.innerHTML = "<span>" + quantity + "</span>";
        var pickUpService;
        var releaseService;
        if(document.getElementById("f1-pick-up").checked == true){
            pickUpService = "Yes";
            shippingService.push("PickUp");
        }else{
            pickUpService = "No";
            
        }
        if(document.getElementById("f1-release").checked == true){
            releaseService = "Yes";
            shippingService.push("Release");
        }else{
            releaseService = "No";
        }
        
        const pickUp = document.querySelector("#txtPickUp");
        pickUp.innerHTML = "<span>" + pickUpService + "</span>";
        
        
        const release = document.querySelector("#txtRelease");
        release.innerHTML = "<span>" + releaseService + "</span>";
        
        var bill = document.getElementById("list-service");
        
        while (bill.hasChildNodes()) {
            bill.removeChild(bill.firstChild);
        }
        
        for (var i = 1; i <= quantity; i++) {
            var cont = "f1-sneaker-name" + i;
            var cleanService = "f1-clean-sneaker" + i;
            var repaintSoles = "f1-repaint-soles" + i;
            var dyeSneakersBody = "f1-dye-sneaker-body" + i;
            var disinfectantSoles = "f1-disinfectant-soles" + i;
            var pasteSewInsteadSolesr = "f1-PasteSewInstead-solesr" + i;  
            var sprayNano = "f1-spray-nano" + i;
            var choose = "cusChoice" + i;
            var total = "price" + i;
            arrService.push(document.getElementById(cleanService).value);
            listService.innerHTML += "<div id='cusChoice" + i +"' style='text-align: right;'><legend style='border-bottom: 1px solid #7B0D1E; text-align: left;'>Sneaker" + i 
                    + "</legend><span style='float: left;'>Sneaker name: </span><span style='float: right; text-align: left;'>" + document.getElementById(cont).value 
                    + "</span></br><span style='float: left;'>Service: </span>"
                    +"<span style='float: right;'>" + document.getElementById(cleanService).value + "</span></br>"                          
                    +"</div>";  
            if(document.getElementById(repaintSoles).checked == true){
                
                document.getElementById(choose).innerHTML +=  document.getElementById(repaintSoles).value + "</br>" ;
                arrService.push(document.getElementById(repaintSoles).value);
            }
            if(document.getElementById(dyeSneakersBody).checked == true){
               
                document.getElementById(choose).innerHTML +=  document.getElementById(dyeSneakersBody).value + "</br>" ;
                arrService.push(document.getElementById(dyeSneakersBody).value);
            }
            if(document.getElementById(dyeSneakersBody).checked == true){
                
                document.getElementById(choose).innerHTML +=  document.getElementById(disinfectantSoles).value + "</br>";
                arrService.push(document.getElementById(disinfectantSoles).value);
            }
            if(document.getElementById(pasteSewInsteadSolesr).checked == true){
                
                document.getElementById(choose).innerHTML +=  document.getElementById(pasteSewInsteadSolesr).value + "</br>";
                arrService.push(document.getElementById(pasteSewInsteadSolesr).value);
            }
            if(document.getElementById(sprayNano).checked == true){
                
                document.getElementById(choose).innerHTML +=  document.getElementById(sprayNano).value + "</br>";
                arrService.push(document.getElementById(sprayNano).value);
            }
            sum += parseFloat(document.getElementById(total).value);
            document.querySelector("#txtServicePrice").innerHTML = sum + "<sup>vnd</sup>";
           
            document.querySelector("#txtShippingFee").innerHTML = sumFee + "<sup>vnd</sup>";
            document.querySelector("#txtTotal").innerHTML = sumFee + sum + "<sup>vnd</sup>";
            arrSneakerName.push(document.getElementById(cont).value);
            totalPrice = sum + sumFee;
        }
       
            $(this).parents('fieldset').fadeOut(400, function() {
    		// change icons
		current_active_step.removeClass('active').addClass('activated').next().addClass('active');
		// progress bar
                bar_progress(progress_line, 'right');
		// show next step
		$(this).next().fadeIn();
		// scroll window to beginning of the form
		scroll_to_class( $('.f1'), 20 );
    	});
       
    	
    	
	});
    // previous step
    $('.f1 .btn-previous').on('click', function() {
    	// navigation steps / progress steps
    	var current_active_step = $(this).parents('.f1').find('.f1-step.active');
    	var progress_line = $(this).parents('.f1').find('.f1-progress-line');
    	
    	$(this).parents('fieldset').fadeOut(400, function() {
    		// change icons
    		current_active_step.removeClass('active').prev().removeClass('activated').addClass('active');
    		// progress bar
    		bar_progress(progress_line, 'left');
    		// show previous step
    		$(this).prev().fadeIn();
    		// scroll window to beginning of the form
			scroll_to_class( $('.f1'), 20 );
    	});
    });
    
    $('.f1 .btn-previously').on('click', function() {
    	// navigation steps / progress steps
    	var current_active_step = $(this).parents('.f1').find('.f1-step.active');
    	var progress_line = $(this).parents('.f1').find('.f1-progress-line');
//    	document.getElementById("next-ser").style.display = 'inline-block';
//    	document.getElementById("next-nor").style.display = 'none';
    	$(this).parents('fieldset').fadeOut(400, function() {
    		// change icons
    		//current_active_step.removeClass('active').prev().removeClass('activated').addClass('active');
    		// progress bar
    		//bar_progress(progress_line, 'left');
    		// show previous step
    		$(this).prev().fadeIn();
    		// scroll window to beginning of the form
			scroll_to_class( $('.f1'), 20 );
    	});
    });
      $('.f1 .btn-submit').on('click', function() {
    	saveService();
        alert("Confirm Successfully!");
    });
    function makeid() {
         var text = "Trigonic_";
         var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 9; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
     }
    function saveService() {
            var quantity = $(".f1-quantity").val();
            var full_name = $(".f1-full-name").val();
            var phone_number = $(".f1-phone-number").val();
            var address = $(".f1-address").val();
            var sneakerName = arrSneakerName.toString();
            var service = arrService.toString();
            var ship = shippingService.toString();
            var date = new Date();
            var QR = makeid();
            //for (var i = 0; i < quantity; i++) {
            const docRef = firestore.collection("orderServiceSneaker/").doc();
            console.log("I'm going to save " + full_name + phone_number + address + quantity + sneakerName + service + ship + date + QR + totalPrice + " to Firestore");
              docRef.set({
                 fullName: full_name,
                 phoneNumber: phone_number,
                 address: address,
                 quantity: quantity,
                 sneakerName: sneakerName,
                 service: service,
                 shipping: ship,
                 date: date,
                 QR: QR,
                 totalPrice: totalPrice
            
              }).then(function(){
                console.log("Status save!");  
              }).catch (function(){
                 console.log("Got an error: ", error);
              });
        //}
              

  }
    // submit
    $('.f1 ').on('submit', function(e) {
    	
    	// fields validation
    	$(this).find('input[type="text"],  input[type="password"], textarea').each(function() {
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
				$(this).removeClass('input-error');
				e.preventDefault();


				// Start Register here
           
    		}
    	});
    	// fields validation
    	
    });
    
    
});
