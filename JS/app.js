TweenMax.from(".bleu", 0.5, {width:0,ease: Bounce.easeOut, onComplete: function(){
    
    
    TweenMax.to(".J1",0.5, { width:"20%" });
    TweenMax.to(".J2",0.5, { width:"20%", delay:0.2, function(){
        
        TweenMax.to(".J1",0.5, { height:"0%", delay:0.5 });
        TweenMax.to(".J2",0.5, { height:"0%", delay: 0.8 });
        
        
    } });
    
    
} });

