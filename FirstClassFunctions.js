// FIRST CLASS FUNCTIONS

function Monday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
  }
  
  function Tuesday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
  }
  
  function Wednesday() {
    console.log("Go for a five-mile run");
    console.log("Go for a five-mile run");
  }
  
  function Thursday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
  }
  
  function Friday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
  }
  /**
   * This looks like a lot of work. Let us reduce it;
   * furthermore that is what functions are for
   */

  //Puting morning runs in their own function
  function runs(){
    console.log("Go for a five-mile run");
  }

  //Puting gymwork in their own function
  function gym(){
    console.log("Pump iron");
  }

  //Putting swimming in their own function
  function swim(){
    console.log("Swim 40 laps");
  }

  //Now Monday would like like:
  function monday(){
      runs();
      gym();
  }

  /** 
   * But always the first activity is running
   * Let us pass the post run activities as variable (it varies over time/days)
   * */ 
  function exerciseRoutines(postRunActivity){
      runs();
      postRunActivity(); //postRunActivity becomes a call-back function since we invoke it after runs()
  }

  function monday(){
      exerciseRoutines(gym);
  
  function exerciseRoutines(postRunActivity){
    runs();
    postRunActivity();
  }
}
  monday();