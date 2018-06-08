const dUrl = "https://amptservices-dev1.pcfomactl.dev.intranet/AmptService/jsonObject ";

$.ajax(
   {
     url: dUrl, 
     success: function(result){
         console.log(result);
     }
   }
);