(function($){

    //#region "Plugin"
    $.fn.load = function(action = 'load', params){
        return this.each(function(){                       
            switch(action){
                case 'load':
                    $(this).append(GetLoader(params)).hide().fadeIn("slow");;
                    break;
                case 'unload':
                    LoaderUnload();
                    break;
                default: 
                    console.log('Informe uma ação valida!');
                    break;
            }            
        });
    }
    //#endregion

    //#region "CreateLoader"
    function GetLoader(params){

        let defaults = {
            divClass: 'spinner',
            divAmount: GetDivLoader(params == null ? "spinner": params.divClass)
        }

        //sobreescrita de variaveis
        let options = $.extend(defaults, params);

        let divToAppend = document.createElement('div');
        divToAppend.id = 'loader';
        
        $(divToAppend).css({
            width: "100%", 
            height: "100%", 
            position: "fixed",
            top: 0,
            left: 0,
            "text-align": "center",
            "background-color": "rgba(0, 0, 0, 0.4)"
        });

        let divLoader = document.createElement('div');
        divLoader.className = `lds-${options.divClass}`;

        $(divLoader).css({
            position: "absolute",
            top: "50%",
            left: "50%"
        });
        
        for (let i = 0; i < options.divAmount; i++) {
            $(divLoader.append(document.createElement('div')));    
        }
        
        return $(divToAppend).append(divLoader);                       
    }
    
    function GetDivLoader(classLoader) {
        switch(classLoader)
        {
            case "circle":
                return 1;
            case "default":
                return 12;
            case "ellipsis":
                return 4;
            case "facebook":
                return 3;
            case "heart":
                return 1
            case "hourglass":
                return 0;
            case "grid":
                return 9;
            case "ring":
                return 4;
            case "roller":
                return 8;            
            case "ripple":
                return 2;
            case "spinner":
                return 12;
        }
    }

    //#endregion
  
    //#region "Unload"
    function LoaderUnload(){
        $("#loader").fadeOut(function(){
            $(this).remove();
        });
    }
    //#endregion
  
})(jQuery)