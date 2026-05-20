function input(){
    var name = new String;
    name = document.getElementById("name").value;
    var len = name.length;
    var msg="";
    var msg2="";
    msg = "Length of name: " + len;
    var space = name.indexOf(" ");
    var lastspace = name.lastIndexOf(" ");
    if(space == lastspace && space !=-1) {
        msg ="Total words = 2 <br> Space found at index:"+space;
    }
    else if(space&&lastspace == -1) {
        msg = "Total words = 1 <br> No spaces found";
    }
    else {
        msg = "Index of first space:" + space;
        msg2 = "Index of last space: " + lastspace;
    }
    document.getElementById("msgSpan").innerHTML = msg;
    document.getElementById("msgSpan2").innerHTML = msg2;
}


function showDetails()
            {
               //alert("dgd");
                var msg="";
                var name=new String();
                name=document.getElementById("uname").value;
                var len=name.length;
                var fsp=name.indexOf(" "); 
                var lsp=name.lastIndexOf(" ");
                if(len>0)
                    {
                    msg="Total Char(s)=" + len;
                    }
                
                if(fsp==-1)
                    {
                        if(len>0)
                            msg=msg + "<br>No Space <br>Total word(s)=1";
                    }
                else if(fsp==lsp)
                    {
                        if(len>(lsp+1))
                            msg=msg + "<br>1 Space found <br>Total word(s)=2";
                        else
                            msg=msg + "<br>1 Space found <br>Total word(s)=1";
                    }
                else
                    {
                         if(len>(lsp+1))
                            msg=msg + "<br>2 Space found <br>Total word(s)=3";
                        else
                            msg=msg + "<br>2 Space found <br>Total word(s)=2";
                       
                    }

                    var nov=0;
                    var ctr=0;
                    for(ctr;ctr<len;ctr++)
                    {
                        var v=name.charAt(ctr);
                        if(v=='a' || v=='e' || v=='i' || v=='o' || v=='u')
                            nov++;
                    }
                    var noc=len-nov;
                    msg=msg + "<br>Total Vowel=" + nov + ", Total Consonant=" + noc;
                    document.getElementById("display").innerHTML=msg;

            }