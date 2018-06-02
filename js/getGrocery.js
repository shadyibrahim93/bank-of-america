$(document).ready(function()
{
    
    // Identifying the Variable
    var displayGrocery = $('#display-grocery');
    
    // Doing Something While Script Loads Information
    displayGrocery.html('<img src="/image/pre-loading.gif" alt="Loading Image - Progress" title="Loading Image - Progress">');
    
    // Getting the Json File Data
    $.ajax(
    {
        url: 'js/groceries.json',
        type: 'GET',
        
        // If Code Runs Successfully Run Code Below
        success: function(result)
        {            
            // Delaying For Visual Effects
            setTimeout(function(){

            // Print Results in Console Log for Clarity
            console.log(result);

            var output = "<h1>Grocery List</h1><div class='grocery-container'>";
            
            // Running a Loop to Retrieve All Information
            for (var i in result)
            {
                output +="<div class='product-container leftFadeIn animated'><li class='category txt__orange txt--uppercase'>" + result[i].category + "</li><li class='type'>" + result[i].type + "</li><li class='item txt__orange big__font txt--capital'>" + result[i].item + "</li><li class='brand txt--uppercase'>" + result[i].brand + "</li><li class='quantity'>Qty / " + result[i].qty + "</td></div>";
            }

            output += "</div>";
            // Printing the Information on the Screen
            displayGrocery.html(output);
        }, 9000); // 9000
            
        }, 
            error: function (jqXHR, textStatus, errorThrown) 
        {
                    //If Code Fails Display Error Message
                    console.log(errorThrown);
                    $('#display-grocery').html('Error: ' + errorThrown);
                    console.log(jqXHR);
        }
    });
 });
