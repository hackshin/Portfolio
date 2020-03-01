function move()
{
let x =document.getElementById("wRtING");
x.scrollIntoView();
console.log("seome")
}

var check=0;

$(document).ready(()=>{
  

    $("#home").click(()=>{
       
       
      $(".heading2").css("background","rgb(28, 240, 0)");
         
        check++;
        if(check==1)
        {

       
            $(".writing").css("display","block");
            
            $(".Home").empty();
            $(".Home").append("<span style='color: rgb(25, 252, 25)'> PROFESSIONAL PORTFOLIO</span>");
            $(".writing2").css("display","none");
            $(".writing3").css("display","none");
            $(".writing4").css("display","none");
            $(".writing5").css("display","none");
           
         check=0;
        }
       
      })

      $("#project").click(()=>{


        $(".heading2").css("background","yellow");

        check++;
        if(check==1)
        {

        
            $(".writing2").css("display","block");
            $(".Home").empty();
            $(".Home").append("<span style='color:rgba(255, 255, 0, 0.616)'>PROJECTS</span>");
            $(".writing").css("display","none");
            $(".writing3").css("display","none");
            $(".writing4").css("display","none");
            $(".writing5").css("display","none");
         check=0;
        }
       
      })

       
      $("#resource").click(()=>{
        $(".heading2").css("background","red");
        check++;
        if(check==1)
        {

          
            $(".writing3").css("display","block");

            $(".Home").empty();
            $(".Home").append("<span style='color:crimson'>INTEREST'S</span>");
            $(".writing2").css("display","none");
            $(".writing").css("display","none");
            $(".writing4").css("display","none");
            $(".writing5").css("display","none");
         check=0;
        }
       
      })

      $("#resume").click(()=>{

        $(".heading2").css("background","purple");
        check++;
        if(check==1)
        {

          
            $(".writing4").css("display","block");
            $(".Home").empty();
            $(".Home").append("<span style='color:pink'>RESUME</span>");
            $(".writing2").css("display","none");
            $(".writing3").css("display","none");
            $(".writing").css("display","none");
            $(".writing5").css("display","none");
         check=0;
        }
       
      })

      $("#contact").click(()=>{
        $(".heading2").css("background","orange");
        check++;
        if(check==1)
        {

            $(".writing5").css("display","block");
            $(".Home").empty();
            $(".Home").append("<span style='color:orange'>CONTACTS</span>");
            $(".writing2").css("display","none");
            $(".writing3").css("display","none");
            $(".writing").css("display","none");
            $(".writing4").css("display","none");
          
            
         check=0;
        }
       
      })


    //   this is for medis query stuff
    $("#home2").click(()=>{
        check++;

        $(".heading2").css("background","rgb(28, 240, 0)");

        if(check==1)
        {

            $(".writing").css("display","block");
          
            $(".Home").empty();
            $(".Home").append("<span style='color: rgb(25, 252, 25)'> PROFESSIONAL PORTFOLIO</span>");
            $(".writing2").css("display","none");
            $(".writing3").css("display","none");
            $(".writing4").css("display","none");
            $(".writing5").css("display","none");
         check=0;
        }
       
      })

      $("#project2").click(()=>{
        $(".heading2").css("background","yellow");
        check++;
        if(check==1)
        {

        
            $(".writing2").css("display","block");
            $(".Home").empty();
            $(".Home").append("<span style='color:rgba(255, 255, 0, 0.616)'>PROJECTS</span>");
            $(".writing").css("display","none");
            $(".writing3").css("display","none");
            $(".writing4").css("display","none");
            $(".writing5").css("display","none");
         check=0;
        }
       
      })

       
      $("#resource2").click(()=>{

        $(".heading2").css("background","red");

        check++;
        if(check==1)
        {

          
            $(".writing3").css("display","block");

            $(".Home").empty();
            $(".Home").append("<span style='color:crimson'>INTEREST'S</span>");
            $(".writing2").css("display","none");
            $(".writing").css("display","none");
            $(".writing4").css("display","none");
            $(".writing5").css("display","none");
         check=0;
        }
       
      })

      $("#resume2").click(()=>{

        $(".heading2").css("background","purple");

        check++;
        if(check==1)
        {

          
            $(".writing4").css("display","block");
            $(".Home").empty();
            $(".Home").append("<span style='color:pink'>RESUME</span>");
            $(".writing2").css("display","none");
            $(".writing3").css("display","none");
            $(".writing").css("display","none");
            $(".writing5").css("display","none");
         check=0;
        }
       
      })

      $("#contact2").click(()=>{
        $(".heading2").css("background","orange");
        check++;
        if(check==1)
        {

            $(".writing5").css("display","block");
            $(".Home").empty();
            $(".Home").append("<span style='color:orange'>CONTACTS</span>");
            $(".writing2").css("display","none");
            $(".writing3").css("display","none");
            $(".writing").css("display","none");
            $(".writing4").css("display","none");
          
            
         check=0;
        }
       
      })

      var cutit=0;
    $(".heading2").click(()=>{
     
        if(cutit==0)
        {

        $(".touchit").css("display","block");
        $(".heading2").css({
           "transform":"rotate(360deg)",
           "background":"rgba(19, 17, 17, 0.596)"
        })
         cutit=1;
    }else{
        $(".touchit").css("display","none");
       
        $(".heading2").css({
            "transform":"rotate(-360deg)",
            "background":"rgba(30, 143, 255, 0.5)"
         })

        cutit=0;
    }
    })

    window.addEventListener("resize", function(){
        var x = this.window.screen.width;
        
    //    this.console.log(x);
       if(x<=1053) //smaller than 1053 then
       {
           $(".heading").css("display","none");
           $(".heading2").css("display","block");


       }else{
       $(".touchit").css("display","none");
         
       }
     
      });
      
    addEventListener("mousewheel",()=>{
       var jsd= $("body").scrollTop();
       var msd = this.screen.width;
      //  console.log(jsd);
    //    console.log(msd);
    if(jsd>=397)
    {
        $(".side_name").css({
            "left":"60%",
            "top":"80%",
            "background-color":"rgba(255, 255, 255, 0.815)",
            "color":"black",
            
        })
    }
    else if(jsd<397)
    {
        $(".side_name").css({
            "left":"0%",
            "top":"0%",
            "background-color":"rgba(0, 0, 0, 0.815)",
            "color":"white",
            
        })
    }
   
      
    })



 
    
});



var x = location.href;


// console.log(x);
// console.log(x);
var pind = x.slice(-3,-1);
// console.log(pind);
if(pind=="es")
{
  alert("Your Response is Recorded");

}
else if(pind=="le"){
  alert("Failed to submit your Response ");
  
}
// console.log(x.length);

// if(x.length > 40)
// {
//   console.log("After slicing");
//   var pops =x.slice(47,x.length);
//     if(pops =="CommentError")
//     {
//        alert("Comment was not Entered Successfully");
//     }
//     else if(pops=="EmailError")
//     {
//         alert("Email was not Entered Successfully");
//     }
//     else if(pops == "lastnameError")
//     {
//         alert("Lastname was not Entered Succcessfully");
//     }
//     else if(pops=="firstnameError")
//     {
//        alert("First name was not entered Successfully");
//     }
//     else if(pops=="success")
//     {

//       alert("Sent Successfully");

//     }
//     else if(pops=="failed")
//     {
//           alert("Not sent Something wrong happened in the server side");
//     }
//     else{
      

//       alert("something went wrong in server side");
//     }
// }




// console.log(pops);
// console.log("index.php length is "+ pops.length);

// pops will have the value of the response whether there is any error or not let's see how it will work I will try my level hard best are you 
// getting what I am saying to you 


