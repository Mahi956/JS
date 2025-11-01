function rps( user , computer ){
    if(user==='rock' && computer==='paper') return 'paper-computer win';
    if(user==='rock' && computer==='scissor') return 'rock-user win ';
    if(user==='paper' && computer==='scissor') return 'scissor-computer win';
    if(user==='paper' && computer==='rock') return 'paper-user win';
    if(user==='scissor' && computer==='rock') return 'rock-computer win';
    if(user==='scissor' && computer==='paper') return 'scissor-user win';
    if(user==='rock' && computer==='rock') return 'draw';
    if(user==='paper' && computer==='paper') return 'draw';
    if(user==='scissor' && computer==='scissor') return 'draw';

}
console.log(rps("paper", "paper"));