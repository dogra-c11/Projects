'use strict';
let random_array = [];
let points = 0;
let lost = 0;

let numberGenerator = function (arr) {
    if (arr.length >= 10) return;
    let newNumber = Math.floor(Math.random() * 81 + 1);
    if (arr.indexOf(newNumber) < 0) {
        arr.push(newNumber);
    }
    numberGenerator(arr);
};

numberGenerator(random_array);

function create_grid() {
    let divleft = document.getElementsByTagName('tr');
    let w = 0;
    for (let i = 1; i < 82; i++) {
        let button = document.createElement('td');
        divleft[w].appendChild(button);
        button.setAttribute('id', i);
        button.addEventListener('contextmenu', function () {
            exclamation(event,this);
        });
        button.addEventListener('click', function () {
            check_bomb(this);
        });
        button.addEventListener('mouseover', function () {
            hover(this);
        });
        button.addEventListener('mouseout', function () {
            hover_out(this);
        });

        
        button.style.width="30px"
        button.style.height="40px"
        button.style.textAlign="center";
        button.style.padding="unset";
        button.style.verticalAlign="middle";
        button.style.border="3px solid whitesmoke";
        if (i % 9 == 0) w++;
    }
}

create_grid();

function hover(z){
    if(z.innerHTML=="" && z.style.background!="red")
        z.style.background='grey';
}
function hover_out(z){
    if(z.innerHTML=="" && z.style.background!="red")
    {
        z.style.background="black";
    }
    
}

function check_bomb(x) {
    let bomb = parseInt(x.id);
    if (random_array.includes(bomb) == true && lost != 1) {
        for (let i = 0; i < random_array.length; i++) {
            document.getElementById(random_array[i]).style.background = 'red';
        }
        lost = 1;
        on(0);
    } else {
        if (lost != 1 && x.style.background != 'green') {
            let upper = bomb - 9;
            let lower = bomb + 9;
            if (upper < 1) {
                if (bomb == 1) {
                    //  let lower=bomb+9;
                    let loweright = lower + 1;
                    let right = bomb + 1;
                    let bomb_arr = [];
                    bomb_arr[0] = lower;
                    bomb_arr[1] = loweright;
                    bomb_arr[2] = right;
                    let bombs = 0;
                    for (let i = 0; i < bomb_arr.length; i++) {
                        if (random_array.includes(bomb_arr[i]) == true) {
                            bombs++;
                        }
                    }
                    x.style.background = 'green';
                    x.innerHTML = bombs;
                    points = points + 1;
                    document.getElementById('pts').innerHTML = points;
                    if (points == 71) {
                        lost = 1;
                        on(1);
                    }
                } else if (bomb == 9) {
                    //  let lower=bomb+9;
                    let left = bomb - 1;
                    let lowerleft = lower - 1;
                    let bomb_arr = [];
                    bomb_arr[0] = lower;
                    bomb_arr[1] = lowerleft;
                    bomb_arr[2] = left;
                    let bombs = 0;
                    for (let i = 0; i < bomb_arr.length; i++) {
                        if (random_array.includes(bomb_arr[i]) == true) {
                            bombs++;
                        }
                    }
                    x.style.background = 'green';
                    x.innerHTML = bombs;
                    points = points + 1;
                    document.getElementById('pts').innerHTML = points;
                    if (points == 71) {
                        lost = 1;
                        on(1);
                    }
                } else {
                    //  let lower=bomb+9;
                    let loweright = lower + 1;
                    let right = bomb + 1;
                    let left = bomb - 1;
                    let lowerleft = lower - 1;
                    let bomb_arr = [];
                    bomb_arr[0] = lower;
                    bomb_arr[1] = right;
                    bomb_arr[2] = left;
                    bomb_arr[3] = loweright;
                    bomb_arr[4] = lowerleft;
                    let bombs = 0;
                    for (let i = 0; i < bomb_arr.length; i++) {
                        if (random_array.includes(bomb_arr[i]) == true) {
                            bombs++;
                        }
                    }
                    x.style.background = 'green';
                    x.innerHTML = bombs;
                    points = points + 1;
                    document.getElementById('pts').innerHTML = points;
                    if (points == 71) {
                        lost = 1;
                        on(1);
                    }
                }
            } else if (lower > 81) {
                if (bomb == 73) {
                    let upperight = upper + 1;
                    let right = bomb + 1;
                    let bomb_arr = [];
                    bomb_arr[0] = upper;
                    bomb_arr[1] = upperight;
                    bomb_arr[2] = right;
                    let bombs = 0;
                    for (let i = 0; i < bomb_arr.length; i++) {
                        if (random_array.includes(bomb_arr[i]) == true) {
                            bombs++;
                        }
                    }
                    x.style.background = 'green';
                    x.innerHTML = bombs;
                    points = points + 1;
                    document.getElementById('pts').innerHTML = points;
                    if (points == 71) {
                        lost = 1;
                        on(1);
                    }
                } else if (bomb == 81) {
                    let upperleft = upper - 1;
                    let left = bomb - 1;
                    let bomb_arr = [];
                    bomb_arr[0] = upper;
                    bomb_arr[1] = upperleft;
                    bomb_arr[2] = left;
                    let bombs = 0;
                    for (let i = 0; i < bomb_arr.length; i++) {
                        if (random_array.includes(bomb_arr[i]) == true) {
                            bombs++;
                        }
                    }
                    x.style.background = 'green';
                    x.innerHTML = bombs;
                    points = points + 1;
                    document.getElementById('pts').innerHTML = points;
                    if (points == 71) {
                        lost = 1;
                        on(1);
                    }
                } else {
                    let upperleft = upper - 1;
                    let upperight = upper + 1;
                    let right = bomb + 1;
                    let left = bomb - 1;
                    let bomb_arr = [];
                    bomb_arr[0] = upper;
                    bomb_arr[1] = upperleft;
                    bomb_arr[2] = right;
                    bomb_arr[3] = left;
                    bomb_arr[4] = upperight;
                    let bombs = 0;
                    for (let i = 0; i < bomb_arr.length; i++) {
                        if (random_array.includes(bomb_arr[i]) == true) {
                            bombs++;
                        }
                    }
                    x.style.background = 'green';
                    x.innerHTML = bombs;
                    points = points + 1;
                    document.getElementById('pts').innerHTML = points;
                    if (points == 71) {
                        lost = 1;
                        on(1);
                    }
                }
            } else if (bomb % 9 == 0 && bomb != 9 && bomb != 81) {
                let upperleft = upper - 1;
                let lowerleft = lower - 1;
                let left = bomb - 1;
                let bomb_arr = [];
                bomb_arr[0] = upper;
                bomb_arr[1] = lower;
                bomb_arr[2] = lowerleft;
                bomb_arr[3] = upperleft;
                bomb_arr[4] = left;
                let bombs = 0;
                for (let i = 0; i < bomb_arr.length; i++) {
                    if (random_array.includes(bomb_arr[i]) == true) {
                        bombs++;
                    }
                }
                x.style.background = 'green';
                x.innerHTML = bombs;
                points = points + 1;
                document.getElementById('pts').innerHTML = points;
                if (points == 71) {
                    lost = 1;
                    on(1);
                }
            } else if ((bomb - 1) % 9 == 0 && bomb != 1 && bomb != 73) {
                let right = bomb + 1;
                let upperight = upper + 1;
                let loweright = lower + 1;
                let bomb_arr = [];
                bomb_arr[0] = upper;
                bomb_arr[1] = lower;
                bomb_arr[2] = upperight;
                bomb_arr[3] = loweright;
                bomb_arr[4] = right;
                let bombs = 0;
                for (let i = 0; i < bomb_arr.length; i++) {
                    if (random_array.includes(bomb_arr[i]) == true) {
                        bombs++;
                    }
                }
                x.style.background = 'green';
                x.innerHTML = bombs;
                points = points + 1;
                document.getElementById('pts').innerHTML = points;
                if (points == 71) {
                    lost = 1;
                    on(1);
                }
            } else {
                let right = bomb + 1;
                let left = bomb - 1;
                let upperight = upper + 1;
                let loweright = lower + 1;
                let upperleft = upper - 1;
                let lowerleft = lower - 1;
                let bomb_arr = [];
                bomb_arr[0] = upper;
                bomb_arr[1] = lower;
                bomb_arr[2] = right;
                bomb_arr[3] = left;
                bomb_arr[4] = loweright;
                bomb_arr[5] = upperight;
                bomb_arr[6] = lowerleft;
                bomb_arr[7] = upperleft;
                let bombs = 0;
                for (let i = 0; i < bomb_arr.length; i++) {
                    if (random_array.includes(bomb_arr[i]) == true) {
                        bombs++;
                    }
                }
                x.style.background = 'green';
                x.innerHTML = bombs;
                points = points + 1;
                document.getElementById('pts').innerHTML = points;
                if (points == 71) {
                    lost = 1;
                    on(1);
                }
            }
        }
    }
}

function exclamation(event,y) {
    event.preventDefault();
    if(lost!=1 && y.style.background!="green")
    {y.innerHTML="&#10071";
    y.style.background="black"}
}

function on(x) {
    if (x == 0) document.getElementById('overlaylose').style.display = 'block';
    else document.getElementById('overlaywin').style.display = 'block';
}

function off() {
    document.getElementById('overlaylose').style.display = 'none';
}
