function random(){
    var myrandom=Math.round(Math.random()*4)
    var link1="https://akns-images.eonline.com/eol_images/Entire_Site/201785/rs_634x1024-170905110758-634.Mario-JR-090517.jpg?fit=around|634:auto&output-quality=90&crop=634:auto;center,top"
    var link2="https://cdn.gamer-network.net/2019/usgamer/final-fantasy-7-remake-cloud.jpg/EG11/thumbnail/1920x1080/format/jpg/quality/75/final-fantasy-7-remake-replaces-longtime-cloud-strife-voice-actor.jpg"
    var link3="https://www.pngitem.com/pimgs/m/171-1716831_transparent-ryu-street-fighter-5-png-ryu-png.png"
    var link4="https://i.kinja-img.com/gawker-media/image/upload/c_scale,f_auto,fl_progressive,pg_1,q_80,w_800/zwwlvzjj0ximj6hsaxyi.jpg"
    var link5="https://i.pinimg.com/originals/35/a8/9c/35a89c00c4062df64a2c8f010daf0f23.jpg"
    if (myrandom==0)
        { 
        window.location=link1
        alert("It's me Mario");
        }
    else if (myrandom==1)
       { window.location=link2
        alert("I was a Soldier");}
    else if (myrandom==2)
       { window.location=link3
        alert("Hadoken!");}
    else if (myrandom==3)
       { window.location=link4
        alert("Tracer here!")}
    else if (myrandom==4)
       { window.location=link5
        alert("I'm no hero") }
}

