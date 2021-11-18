

class Subject {
   
    observers={};
   
    
   on(event ,fn){
     if(this.observers[event]){
           this.observers[event].push(fn);
     }else{
        this.observers[event]=fn;
     } 
    }
 emit(event,message){
     if(this.observers[event]){
         this.observers[event].forEach(fn =>fn(message));
     }
     }
     off(event,fn){
         this.observers[event]=this.observers[event].filter(ob=>ob!==fn);
     }
    }

 const subject = new Subject();
subject.on("eat", console.log); 
subject.on("study", console.log);

function foo(msg) {
    console.log('foo: ' + msg);
}
subject.on('eat', foo);
subject.on('study', foo);

subject.emit('eat', 'Corn');
subject.emit('study', 'Corn');