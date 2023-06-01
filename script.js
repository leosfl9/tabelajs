var qtdAlunos = 10
var qtdNotas = 4
let mediaGeral = 0
let th = ""
let td = ""
let n = 0
let i = 0
let j = 0
let k = 4

        function gerarTabela(){
          i = i + 1

          if (n <= 10){
                n = n + 1;
                console.log(n);
            }
          
          if (i < 2){

            var table = `
            <img src="img/logo.png" alt="logo do senai"><br>
            <table class="table" id="tabela">
                            <thead id="thead">
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nome</th>
                                <div id="id">
                                  <th scope="col">Nota 1</th>
                                  <th scope="col">Nota 2</th>
                                  <th scope="col">Nota 3</th>
                                  <th scope="col">Nota 4</th>
                                  ${th}
                                </div>
                                <th scope="col" id="media_header">Média</th>
                                <th scope="col">Situação</th>
                              </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>${n}</th>
                                        <td><input type='text' class='form-control' id='' placeholder='nome'></td>
                                        <td><input type='number' id='av${n}1' style="width: 12vh" class='form-control' min='0' max='100' placeholder=''></td>
                                        <td><input type='number' id='av${n}2' style="width: 12vh" class='form-control' min='0' max='100' placeholder=''></td>
                                        <td><input type='number' id='av${n}3' style="width: 12vh" class='form-control' min='0' max='100' placeholder=''></td>
                                        <td><input type='number' id='av${n}4' style="width: 12vh" class='form-control' min='0' max='100' placeholder=''></td>
                                        ${td}
                                        <td><output id="media${n}"></output></td>
                                        <td><output id="resultado${n}"></output></td>
                                </tr>
                            </tbody>
                          </table>
                          
                          <output style="margin-left: 10px;" id="mediageral">Média geral: </output>
                          <br>
                          <br>
                          <button style="margin-left: 10px;" type="button" class="btn btn-primary btn-lg" onclick="Verificar()">Verificar</button>
                          <button style="margin-left: 10px;" type="button" class="btn btn-primary btn-lg" onclick="ampliaLinha()">Ampliar linhas</button>
                          `
  
            document.getElementById('body').innerHTML = table

          }

        }

        function ampliaLinha(){

          gerarTabela();

          if (n < 11){

          var linha = `<tr>
                        <th>${n}</th>
                          <td><input type='text' class='form-control' id='' placeholder='nome'></td>
                          <td><input type='number' id='av${n}1' style="width: 12vh" class='form-control' min='0' max='100' placeholder=''></td>
                          <td><input type='number' id='av${n}2' style="width: 12vh" class='form-control' min='0' max='100' placeholder=''></td>
                          <td><input type='number' id='av${n}3' style="width: 12vh" class='form-control' min='0' max='100' placeholder=''></td>
                          <td><input type='number' id='av${n}4' style="width: 12vh" class='form-control' min='0' max='100' placeholder=''></td>
                          ${td}
                          <td><output id="media${n}"></output></td>
                          <td><output id="resultado${n}"></output></td>
                      </tr>`
          
          document.getElementById('tabela').innerHTML += linha
          
          } else{
            alert('Limite de linhas atingido!')
          }
        }

        
        function Verificar(){
          mediaGeral = 0;

            for(let aluno=1; aluno<=qtdAlunos;aluno++){
              let notaParcial;
              let notaSoma = 0;

              for(let nota=1;nota<=qtdNotas;nota++){
                  notaParcial = Number(document.getElementById(`av${aluno}${nota}`).value);
                  notaSoma = notaSoma + notaParcial;
              }

              let media = (notaSoma)/qtdNotas;
              mediaGeral = mediaGeral + media
              document.getElementById(`media${aluno}`).innerText = media

              if(media >= 60){
                document.getElementById(`resultado${aluno}`).innerText = 'Aprovado'
                document.getElementById(`resultado${aluno}`).style.backgroundColor = 'limegreen'

              } else if(media >= 40 && media < 60){
                  document.getElementById(`resultado${aluno}`).innerText = 'Recuperação'
                  document.getElementById(`resultado${aluno}`).style.backgroundColor = 'yellow' 

              } else if(media < 40){
                  document.getElementById(`resultado${aluno}`).innerText = 'Reprovado'
                  document.getElementById(`resultado${aluno}`).style.backgroundColor = 'red'
              }

              document.getElementById('mediageral').innerText = 'Média geral: ' + mediaGeral / n;
            }
        }