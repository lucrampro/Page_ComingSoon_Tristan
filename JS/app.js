

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
            
            TweenMax.to(".RJ1",0.2, { width:"50px",height:"50px" });
            TweenMax.to(".RJ2",0.2, { width:"50px",height:"50px", delay: 0.2 });
            TweenMax.to(".RJ3",0.2, { width:"50px",height:"50px", delay: 0.4 });
            TweenMax.to(".RJ4",0.2, { width:"50px",height:"50px", delay: 0.8, onComplete: function(){
                
                
                TweenMax.to(".perso", 0.5, { width:"400px",ease: Elastic.easeOut.config(1, 0.3), onComplete: function(){
                    
                    
                    TweenMax.to(".bleu", 0.2, { width:"100%", onComplete: function(){
                        
                        
            TweenMax.to(".RJ1",0.2, { width:"0px",height:"0px" });
            TweenMax.to(".RJ2",0.2, { width:"0px",height:"0px", delay: 0.2 });
            TweenMax.to(".RJ3",0.2, { width:"0px",height:"0px", delay: 0.4 });
            TweenMax.to(".RJ4",0.2, { width:"0px",height:"0px", delay: 0.8, onComplete: function(){
                
                
                
                TweenMax.to(".perso", 1, { right: "35%" });
                TweenMax.to(".bleu",  1, {width:"50%",ease: Back.easeOut.config(1.7), delay:0.2, onComplete: function(){
                    
                    TweenMax.to(".perso", 1, { width:"500px", delay:0.2, onComplete: function(){
                        
                        
                        TweenMax.to("p", 0.1, { width: "250px"});
                        TweenMax.to("p", 0.4, { height: "40px", delay: 0.1});
                        TweenMax.to("p", 0.4, { fontSize: "2rem", delay: 0.5, ease: Bounce.easeOut});
                        
                    } });
                    
                }});
                
                
            } });
                        
                        
                    } });
                    
                }});
                
            } });
            
        }});
        
        
    } });
    
    
} });
    
    
}});