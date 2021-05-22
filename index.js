$(".btn").click(function() {

    
    var number1 = Math.floor(Math.random() * 3) + 1;
    var number2 = Math.floor(Math.random() * 3) + 1;

    var p1_img = "p1" + number1;
    var p2_img = "p2" + number2;

    $(".p1").attr("src","./images/" + p1_img + ".jpg");
    $(".p2").attr("src","./images/" + p2_img + ".jpg");


    if (number1 === 1 && number2 === 1) 
    {
        $(".winner_text").text("It's a Tie!");

    }
    else if (number1 === 1 && number2 === 2) 
    {
        $(".winner_text").text("Player_2 Wins!");


    }
    else if (number1 === 1 && number2 === 3) 
    {
        $(".winner_text").text("Player_1 Wins!");


    }
    else if (number1 === 2 && number2 === 1)  
    {
        $(".winner_text").text("Player_1 Wins!");


    }
    else if (number1 === 2 && number2 === 2)  
    {
        $(".winner_text").text("It's a Tie!");


    }
    else if (number1 === 2 && number2 === 3)  
    {
        $(".winner_text").text("Player_2 Wins!");


    }
    else if (number1 === 3 && number2 === 1) 
    {
        $(".winner_text").text("Player_2 Wins!");


    }
    else if (number1 === 3 && number2 === 2)  
    {
        $(".winner_text").text("Player_1 Wins!");

    }
    else 
    {
        $(".winner_text").text("It's a Tie!");


    }

})