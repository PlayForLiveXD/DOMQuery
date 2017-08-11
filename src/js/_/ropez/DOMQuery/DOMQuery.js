// </ropez description = Framework for Document Object Model Query>

var DOMQuery = function(type,settings)
{

//@>

   var $$ = this;
   
   var _main = null;
   var _root = null;
   var _name = null;
   var _dom  = null;
   var _domain = new ApplicationDomain(type,settings);

   var Debugger = function(target)
   {

   };


   function ApplicationDomain($type,$settings)
   {


   	  var TumultHype = function()
   	  {

   	  	  var Tumult = function()
   	  	  {

   	  	  };// END FUNCTION PROTOTYPE :> Tumult;

   	  	  var Hype = function()
   	  	  {
              
   	  	  };// END FUNCTION PROTOTYPE :> Hype;


   	  };

   	   this.type = null;
   	   this.hypeDocument = null;
   	   this.element = null;
   	   this.event = null;


   	   if($type == "hype")
   	   {
   	   	   this.hypeDocument = $settings[0];
   	   	   this.element = $settings[1];
   	   	   this.event = $settings[2];
           this.type = $type;
   	   };


   };// END FUNCTION PROTOTYPE : $formatToString;


   function $formatToString(value,mode)
   {
       
       var r = ('<'+value+'/>');
   	   return r;

   };// END FUNCTION : $formatToString;

   var DocumentObjectModel = function()
   {

             var $$ = this;
	         
	         this.mouseX = 0;
	         this.mouseY = 0;
	         
	         $( document ).on( "mousemove", function( e )
	         {
	         
	                 $$.mouseX = e.pageX;
	                 $$.mouseY = e.pageY;
                
             });// END FUNCTION UNDEFINED document(MOUSE_MOVE);

	     
	         function $target(value)
	         {

	         	var char0 = null;
	            if( (typeof value) != "string"){ return $(value); };
	            char0 = value.charAt(0);

	             if(char0  == "#"|| char0 == ".")
	             {
	                return $(value);
	             }
	             else
	             {
	                return $("#"+value);
	             };
	             
	             return value;
	             
	         }; //@<- END PUBLIC FUNCTION METHOD :> xxx;
	         
	         
	         this.root = $("document");
	         
	         this.target = function(value)
	         {
	         	 return $target(value);
	         }; //@<- END  PUBLIC FUNCTION METHOD :> xxx;


	       //  this.$ = function(value){   return 'EvalCommands'; };
	       //  this._ = function(value){   return 'EvalNamespace'; };

	       //  this._$ = function(value){   return 'EvalScript'; };
	       //  this.__ = function(value){   return 'EvalNamespaceS'; }; 
	         
	         this.setProperty = function(target,value)
	         {
	         
	         }; //@<- END  PUBLIC FUNCTION METHOD :> xxx;
	         
	         this.getProperty = function(target)
	         {
	             
	         }; //@<- END  PUBLIC FUNCTION METHOD :> xxx;
	         
	         this.callProperty = function(target,arguments)
	         {
	         
	         }; //@<- END  PUBLIC FUNCTION METHOD :> xxx;
	         
	         this.clone = function(value)
	         {
	         
	         }; //@<- END  PUBLIC FUNCTION METHOD :> xxx;
	         
	         
	         this.addChildAt = function(child,index)
	         {
	         
	         }; //@<- END  PUBLIC FUNCTION METHOD :> xxx;
	         
	         this.addChild = function(child)
	         {
	         
	         }; //@<- END FUNCTION METHOD :> xxx;
	         
	         this.removeChildAt = function()
	         {
	         
	         }; //@<- END  PUBLIC FUNCTION METHOD :> xxx;
	         
	         
	         
	         //*.Namespaces ::> 
	         
	         this.new = function(definition)
	         {
	             return new definition();
	         }; //@<- END  PUBLIC FUNCTION METHOD :> xxx;
	         
	         this.as = function()
	         {
	            
	         }; //@<- END  PUBLIC FUNCTION METHOD :> xxx;
	         
	         this.set = function(target,value)
	         {
	         
	         }; //@<- END  PUBLIC FUNCTION METHOD :> xxx;
	         
	         this.get = function(target)
	         {
	         
	         
	         }; //@<- END  PUBLIC FUNCTION METHOD :> xxx;

	         this.random = function(min, max)
	         {
	         	return Math.random() * (max - min) + min;
	         }; //@<- END FUNCTION METHOD :> xxx;


	         this.randomArray = function(value)
	         {
               return value[Math.floor(Math.random() * value.length)]
	         }; //@<- END FUNCTION METHOD :> xxx;

	         this.removeIndex = function(value,index)
	         {


	         }; //@<- END FUNCTION METHOD :> xxx;

	         
	         this.onTimer = function(delay,listen)
	         {
	         
	              setInterval(function(){ listen() }, delay);
	         
	         }; //@<- END FUNCTION METHOD :> xxx;

	         this.onEnterFrame = function(fps,listen)
	         {
	         
	              setInterval(function(){ listen() }, (fps/2));
	         
	         }; //@<- END FUNCTION METHOD :> xxx;
	          
	         this.onClick = function(target,listen)
	         {
	              $target(target).on("click",listen);
	         }; //@<- END FUNCTION METHOD :> xxx;
	          
	         this.onMouseDown = function(target,listen)
	         {
	              $target(target).on("mousedown",listen);
	         }; //@<- END FUNCTION METHOD :> xxx;
	         
	         this.onMouseUp = function(target,listen)
	         {
	              $target(target).on("click",listen);
	         }; //@<- END FUNCTION METHOD :> xxx;
	         
	         this.onMouseOver = function(target,listen)
	         {
	              $target(target).on("mouseover",listen);
	         }; //@<- END FUNCTION METHOD :> xxx;
	         
	         this.onMouseOut = function(target,listen)
	         {
	              $target(target).on("mouseout",listen);
	         }; //@<- END FUNCTION METHOD :> xxx;
	         
	         this.onMouseMove = function(target,listen)
	         {
	              $target(target).on("mousemove",listen);
	         }; //@<- END FUNCTION METHOD :> xxx;
	          
	          
	         this.name = function(target,value)
	         {
	          
	         }; //@<- END FUNCTION METHOD :> name;
	          

	         this.visible = function(target,value)
	         {
	            if(value) { $target(target).show(); } else { $target(target).hide(); };
	            return $target(target).not(":visible");
	         }; //@<- END FUNCTION METHOD :> visible;
	          
	          
	         this.alpha = function(target,value)
	         {

	         }; //@<- END FUNCTION METHOD :> alpha;
	          
	          
	         this.x = function(target,value)
	         {   
	                   $target(target).css({left: value, position:'absolute'}).left;
	            return $target(target).position().left;
	         }; //@<- END FUNCTION METHOD :> x;
	          
	          this.y = function(target,value)
	          {
	                   $target(target).css({top: value, position:'absolute'}).top;
	            return $target(target).position().top;
	          }; //@<- END FUNCTION METHOD :> y;
	          
	          this.z = function(target,value)
	          {
	          
	          }; //@<- END FUNCTION METHOD :> z;
	          
	          
	          this.moveX = function(target,v,forward)
              {

    	           if(forward == undefined || forward == false)
    	           {
    		             $target(target).css({ left: ($target(target).position().left-v) , position:'absolute'});
    	           }
    	           else
    	           {
    		           $target(target).css({ left: ($target(target).position().left+v) , position:'absolute'});
    	           };
                   return $target(target).position().left;

              }; //@<- END FUNCTION METHOD :> moveX;


              this.moveY = function(target,v,forward)
              {

    	            if(forward == undefined || forward == false)
    	            {
    		            $target(target).css({ top: ($target(target).position().top-v) , position:'absolute'});
    	            }
    	            else
    	            {
    		            $target(target).css({ top: ($target(target).position().top+v) , position:'absolute'});
    	            };
    	            return $target(target).position().top;

              }; //@<- END FUNCTION METHOD :> moveY;
	          
	          this.width = function(target,value)
	          {
	              return $target(target).width(value).width();
	          }; //@<- END FUNCTION METHOD :> xxx;
	          
	          this.height = function(target,value)
	          {
	              return $target(target).height(value).height();
	          }; //@<- END FUNCTION METHOD :> height;

	          this.length = function(target,value)
	          {

	          }; //@<- END FUNCTION METHOD :> length;
	          
	          this.moveWidth = function(target,value,forward)
	          {
	            
	          }; //@<- END FUNCTION METHOD :> moveWidth;
	          
	          this.moveHeight = function(target,value,forward)
	          {
	          
	          }; //@<- END FUNCTION METHOD :> moveHeight;
	          
	          
	          this.length = function(target,value)
	          {
	          
	          }; //@<- END FUNCTION METHOD :> length;
	          
	          
	          this.scaleX = function(target,value)
	          {
	          
	          
	          }; //@<- END FUNCTION METHOD :> scaleX;
	          
	          this.scaleY = function(target,value)
	          {
	          
	          }; //@<- END FUNCTION METHOD :> scaleY;
	          
	          this.scaleZ = function(target,value)
	          {
	          
	          }; //@<- END FUNCTION METHOD :> scaleZ;
	          
	          this.position = function(target,x,y,z)
	          { 
	             $target(target).css({top: x, left: y, position:'absolute'});                  
	          }; //@<- END FUNCTION METHOD :> position;
	          
	          this.size = function(target,w,h,l)
	          {
	              $target(target).width(w).height(h);
	          }; //@<- END FUNCTION METHOD :> size;
	          
	          
	          this.text = function(target,value)
	          {
	             return $target(target).text(value);
	          }; //@<- END FUNCTION METHOD :> text;
	                    
	          
	          this.request = function(url,vars,progress,listen)
	          {
	          
			        $.ajax({
			                data:  vars,
			                url:   url,
			                type:  'post',
			                beforeSend: function () {
			                        progress();
			                },
			                success:  function (response)
			                {
			                       listen(response);  
			                }
			        });
	          
	          }; //@<- END FUNCTION METHOD :> request;


	          this.group = function(elements)
	          {
	          	return new $$.Group(elements);
	          }; //@<- END FUNCTION METHOD :> group;

	          this.added = function(target)
	          {
	          	return new $$.DisplayObject(target);
	          }; //@<- END FUNCTION METHOD :> added;


	          this.Group = function(elements)
	          {

		          	var $Group = this;

		          	if(elements == undefined || elements.length){ return null; };
		          	var i = -1;
		          	var l = elements.length;
		          	var o = [];

		          	for(i = 0 ; i < l ; i++)
		          	{

		          		o[i] = new $$.DisplayObject(elements[i]);

		          	};



		          	 this.px = $$.x(target);
		          	 this.py = $$.y(target);
		          	 this.pz = $$.z(target);

		          	 this.sw = $$.width(target);
		          	 this.sh = $$.height(target);
		          	 this.sl = $$.length(target);

		          	 this.x = function(value) { return $$.x(target,value); };
		          	 this.y = function(value) { return $$.y(target,value); };
		          	 this.z = function(value) { return $$.z(target,value); };

		          	 this.width = function(value) {  return $$.width(target,value); };
		          	 this.height = function(value) { return $$.height(target,value); };
		          	 this.length = function(value) { return $$.length(target,value); };

		          	 this.position = function(x,y,z)
		          	 {

		          	 	$Group.x(x);
		          	 	$Group.y(y);
		          	 	$Group.z(z);

		          	 };

		          	 this.size = function(w,h,l)
		          	 {

		          	 	$Group.width(w);
		          	 	$Group.height(h);
		          	 	$Group.length(l);

		          	 };

		          	 this.reset = function()
		          	 {

		          	 	$Group.x(this.px);
		          	 	$Group.y(this.py);
		          	 	$Group.z(this.pz);

		          	 };



	          }; //@<- END FUNCTION PROTOTYPE :> Group;

	          this.DisplayObject = function(target)
	          {

	          	 var $DisplayObject = this;

	          	 this.px = $$.x(target);
	          	 this.py = $$.y(target);
	          	 this.pz = $$.z(target);

	          	 this.sw = $$.width(target);
	          	 this.sh = $$.height(target);
	          	 this.sl = $$.length(target);

	          	 this.x = function(value) { return $$.x(target,value); };
	          	 this.y = function(value) { return $$.y(target,value); };
	          	 this.z = function(value) { return $$.z(target,value); };

	          	 this.width = function(value) {  return $$.width(target,value); };
	          	 this.height = function(value) { return $$.height(target,value); };
	          	 this.length = function(value) { return $$.length(target,value); };

	          	 this.position = function(x,y,z)
	          	 {

	          	 	$DisplayObject.x(x);
	          	 	$DisplayObject.y(y);
	          	 	$DisplayObject.z(z);

	          	 };

	          	 this.size = function(w,h,l)
	          	 {

	          	 	$DisplayObject.width(w);
	          	 	$DisplayObject.height(h);
	          	 	$DisplayObject.length(l);

	          	 };

	          	 this.reset = function()
	          	 {

	          	 	$DisplayObject.x(this.px);
	          	 	$DisplayObject.y(this.py);
	          	 	$DisplayObject.z(this.pz);

	          	 };


	          }; //@<- END PUBLIC FUNCTION PROTOTYPE :> DisplayObject;

	          
	          this.BitmapData = function(width,height,transparent,fillColor)
	          {
	          
	          
	            var w = width;
	            var h = height;
	            var t = (transparent) ? true : false ;
	            var fc = fillColor;
	            
	            this.width = function()  { return  w; };
	            this.height = function() { return  h; };
	            this.transparent = function() { return  t; };
	            
	          
	          
	          }; //@<- END PUBLIC FUNCTION PROTOTYPE :> BitmapData;
	          
	          this.DisplayList = function()
	          {
	          
	          }; //@<- END PUBLIC FUNCTION PROTOTYPE :> DisplayList;
	          
	          this.Draw = function(value)
	          {
	          
	          }; //@<- END PUBLIC FUNCTION PROTOTYPE :> Draw;
	          
	          this.Graphics = function(value)
	          {
	          
	          }; //@<- END PUBLIC FUNCTION PROTOTYPE :> Graphics;
	          
	          this.Bitmap = function(value)
	          {
	          
	          }; //@<- END PUBLIC FUNCTION PROTOTYPE :> Bitmap;
	          
	          this.Shape = function(value)
	          {
	          
	          }; //@<- END PUBLIC FUNCTION PROTOTYPE :> Shape;
	          
	          this.SimppleButton = function(upState,overState,downState,hitTestArea)
	          {

                  
                  var _upState = $target(upState);
                  var _overState = $target(overState);
                  var _downState = $target(downState);
                  var _hitTestArea = $target(hitTestArea);

                  this.upState = function(target)
                  {

                  };

                  this.overState = function(target)
                  {

                  };

                  this.downState = function(target)
                  {

                  };

                  this.hitTestArea = function(target)
                  {

                  };

	          
	          }; //@<- END PUBLIC FUNCTION PROTOTYPE :> SimppleButton;
	          
	          this.Sprite = function(value)
	          {
	          
	          } //@<- END PUBLIC FUNCTION PROTOTYPE :> Sprite;
	          
	          this.FilmClip = function(value)
	          {
	          
	          }; //@<- END PUBLIC FUNCTION PROTOTYPE :> FilmClip;
	          
	          
              this.MovieClip = function(value)
              {
              
              }; //@<- END PUBLIC FUNCTION PROTOTYPE :> MovieClip;
              
              
              this.File = function(setPath)
              {
              
                  var _path = null;
                  var _data = null;
                  
                  this.path = function(value)
                  {
                     _path = value;
                  };
                  
                  this.load = function(listen)
                  {
                  
                  
                     $.get(_path, function( data )
                     {
                          _data = data;
                          listen(_data);                   
                     });   
                  
                  };
                  
                  this.path(path);
                  
                  this.toString = function() {  return (""+_data+""); };
              
               }; //@<- END PUBLIC FUNCTION PROTOTYPE :> File;





               this.hit = function(rectA,rectB)
	           {
	           
	           
	              if(
	               
	               ( $$.y(rectA)+$$.height(rectA) ) >  $$.y(rectB)
	                && 
	               ( $$.x(rectA)+$$.width(rectA) ) >  $$.x(rectB)
	                && 
	                 $$.x(rectA) <  ($$.x(rectB)+$$.width(rectB))
	                &&
	                $$.y(rectA) <  ($$.y(rectB)+$$.height(rectB))
	               	               
	               )
	               {
	               
	                   return true;
	                   
	               }
	               else
	               {
	                   return false;
	               };
	               
	               
	                   return false;
	           }; //@<- END PUBLIC FUNCTION METHOD :> hit;


//</ropez include = HTML5.js format = js>;
//</ropez include = HTML5Document.js format = js>;
//this.document = function(target) { return new HTML5Document(target); };



   };// END FUNCTION PROTOTYPE :> DOM;


   this.init = function(definition)
   {

      _dom  = {};
      _main = definition;
      _name = _main.name;
      _root = new _main( new DocumentObjectModel() );     
      try{ _root[_name](); }catch(e) { };


   }; // END METHOD :> init;

};// END FUNCTION PROTOTYPE :> DOMQuery;


