const pot = (x,n) =>{
    if (n <= 0) return 1;
    return pot(x,n-1) * x ;
}

export default pot