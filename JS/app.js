

TweenMax.to(".N1", 0.5, { height:"0%"});
TweenMax.to(".N2", 0.5, { height:"0%"});
TweenMax.to(".N3", 0.5, { height:"0%"});
TweenMax.to(".N4", 0.5, { height:"0%"});
TweenMax.to(".N5", 0.5, { height:"0%", onComplete: function(){
    
    TweenMax.to(".bleu", 0.5, {width:"50%",ease: Bounce.easeOut, onComplete: function(){
    
    
    TweenMax.to(".J1",0.5, { width:"20%" });
    TweenMax.to(".J2",0.5, { width:"20%", delay:0.2, function(){
        
        TweenMax.to(".J1",0.5, { height:"0%", delay:0.5 });
        TweenMax.to(".J2",0.5, { height:"0%", delay: 0.8, onComplete: function(){
            
            TweenMax.to(".RJ1",0.5, { width:"50px",height:"50px" });
            TweenMax.to(".RJ2",0.5, { width:"50px",height:"50px", delay: 0.5 });
            TweenMax.to(".RJ3",0.5, { width:"50px",height:"50px", delay: 1 });
            TweenMax.to(".RJ4",0.5, { width:"50px",height:"50px", delay: 1.5 });
            
        }});
        
        
    } });
    
    
} });
    
    
}});