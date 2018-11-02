var app={};

app.show=function(){
    console.log('hello world');
}
var p={};


app.updateContent=function(el,msg){
    return function(){
    var majorHeading=document.getElementById(el);
    majorHeading.innerHTML=msg;
    }

}
app.init=function(){
    var headBtn=document.getElementById('showHeading');
    var subheadingheadBtn=document.getElementById('showSubHeading');

    console.log(app.updateContent('javascript'));
    headBtn.addEventListener('click',app.updateContent('majHeading','javascript'))
    subheadingheadBtn.addEventListener('click',app.updateContent('minorHeading','VDSI-HYD'));}

