<script lang="ts">
  async function getResult(event:Event) {
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);

    const res = await fetch('/api/calc',{
      method: "POST",
      body : data
    })

      document.getElementById("result").innerText = await res.json();
  }


  function numberClicked(n){
   if(document.getElementById('arithmetic').value == ""){
    const display = document.getElementById('num1');
    display.value += n;
   }else{
    const display = document.getElementById('num2');
    display.value += n;
   }
  }

  function arithmeticClicked(a){
    // console.log("a clicked")
    document.getElementById('arithmetic').value = a;
  }

  function clear(){
    // console.log("c clicked")
    document.getElementById('num1').value="";
    document.getElementById('num2').value="";
    document.getElementById('arithmetic').value="";
    document.getElementById("result").innerText = "";
  }
</script>

  <h1>simple calculator</h1>
  <form on:submit|preventDefault={getResult}>
      <input type="text" name="num1" id="num1" placeholder="first number" />
      <input type="text" name="num2" id="num2" placeholder="second number"/>
      <input hidden type="text" name="arithmetic" id="arithmetic"/>

      <div>
      <button type="button" on:click={()=>numberClicked(1)} value="1">1</button>
      <button type="button" on:click={()=>numberClicked(2)} value="2">2</button>
      <button type="button" on:click={()=>numberClicked(3)} value="3">3</button>
      <button type="button" on:click={()=>arithmeticClicked("+")} value="+">+</button>
      </div>

      <div>
        <button type="button" on:click={()=>numberClicked(4)} value="4">4</button>
        <button type="button" on:click={()=>numberClicked(5)} value="5">5</button>
        <button type="button" on:click={()=>numberClicked(6)} value="6">6</button>
        <button type="button" on:click={()=>arithmeticClicked("-")} value="-">-</button>
      </div>
      <div>
        <button type="button" on:click={()=>numberClicked(7)} value="7">7</button>
        <button type="button" on:click={()=>numberClicked(8)} value="8">8</button>
        <button type="button" on:click={()=>numberClicked(9)} value="9">9</button>
        <button type="button" on:click={()=>arithmeticClicked("*")} value="*">*</button>
      </div>

    <button type="submit">equals</button>
    <button type="button" on:click={()=>clear()}>clear</button>
    <button type="button" on:click={()=>arithmeticClicked("/")} value="/">/</button>

  </form>

  <p>result : 
    <span id="result"></span>
  </p>