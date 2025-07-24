function ativar() {
    return (<div class="container">

    <h1>
      Descubra abaixo o nome de uma pessoa muito especial!
    </h1>
    <div class="coracoes">
    
        <div class="heart heart1"></div>
        <div class="heart heart2"></div>
        <div class="heart heart3"></div>
    
    </div>
    <div id="nome">
     
        <div class="box" id="f" onclick="acrostic('f')"></div>
        <div class="box" id="r" onclick="acrostic(r)"></div>
        <div class="box" id="a" onclick="acrostic(a)"></div>
        <div class="box" id="n" onclick="acrostic(n)"></div>
        <div class="box" id="c" onclick="acrostic(c)"></div>
        <div class="box" id="e" onclick="acrostic(e)"></div>
        <div class="box" id="l" onclick="acrostic(l)"></div>
        <div class="box" id="y" onclick="acrostic(y)"></div>
        <div class="box" id="a2" name="botao" onclick="resposta(); acrostic(a2)"></div>

        
        
      </div>
        

      <div id="res1"></div>

      <div id="res"></div>

    </div>
    )
}   

let contudo =   ativar()
let ret = document.getElementById(`retorne`)
ret.innerHTML(contudo)


