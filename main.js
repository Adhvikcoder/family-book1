var images=["https://mail.google.com/mail/u/0?ui=2&ik=c6fa4045df&attid=0.1&permmsgid=msg-f:1705275875957241387&th=17aa5b5fce79762b&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ--4tOaPjgnrC__qvlKzIHYc2ODtTg6T4EeuA2iWtTf3FTq71Jq0OKY99Ne9R9XJixQMxctd-7qmbi83Kbby3EA6o9Xo4GYsbLiTcRN4HYasXO-Esx16jiaV6Y&disp=emb&realattid=a6b7ece11cb7ca42_0.1.1",
"https://mail.google.com/mail/u/0?ui=2&ik=c6fa4045df&attid=0.1&permmsgid=msg-f:1705275819215747776&th=17aa5b52986afac0&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ_ly-A1ypTlKgrcefF5gyHCg7v3h-0OIC6sQUATMEOmfTT2d8admcg-5RWOGxXCSl-u0moYnFUY1UxyFZhhek_s9KpEXI1ONVbaMCkIbRgJmamevt-KUq6yMSM&disp=emb&realattid=5c467060212389aa_0.1.1",
"https://mail.google.com/mail/u/0?ui=2&ik=c6fa4045df&attid=0.1&permmsgid=msg-f:1705275763740353876&th=17aa5b45add3a554&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ-ruAapjSmJbi5EkiqnxnN2uOmdouMJ-gL7le9NTsKZJlkeXFOt_FB-z9IRrHmnLaDUNoMtEIuHK8MNYymTx4WLvO-Jqz80sXIXTR3OmoBJa8BSiKFwR2rQR3A&disp=emb&realattid=6af67b130105ba08_0.1.1",
"https://mail.google.com/mail/u/0?ui=2&ik=c6fa4045df&attid=0.1&permmsgid=msg-f:1705275745011538614&th=17aa5b4151809ab6&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ-NLH3YUT57OqWsDVwi5_KKTxaZSYaTYGZhwKJ9H-a66vtKPaR0zQ1WKUc2XKRuks6oBZMy9pLDm_EJFlP9_hVMYNPhLBbuSnDlLxBFBuDV8Y4sxkS9v2tCg8A&disp=emb&realattid=91eee2da9c71ab89_0.1.1"]

var names=["Dog","dad","mom","brother"]



var i=[0];

function update(){
    i++;
    var number_members= 4
    
    if(i > number_members){
        i=0
    }

    var updatedImage= images[i];
    var updatedName= names[i];

    document.getElementById("family_member_img").src= updatedImage
    document.getElementById("family_member_name").src= updatedName
}
