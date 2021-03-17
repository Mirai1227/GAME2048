documentWidth = window.screen.availWidth;//获得设备屏幕的宽度
gridContainerWidth = 0.92 * documentWidth;
cellSideLength = 0.18 * documentWidth;//每个小方块的边长
cellSpace = 0.04 * documentWidth;//每个小方块间的边距

function getPosTop(i,j){
    return cellSpace + i*(cellSpace+cellSideLength);
}

function getPosLeft(i,j){
    return cellSpace + j*(cellSpace+cellSideLength);
}

function getNumberBackgroundColor(number) {
    switch (number) {
        case 2:return "#eee4da";break;
        case 4:return "#ede0c8";break;
        case 8:return "#f2b179";break;
        case 16:return "#f59563";break;
        case 32:return "#f67c5f";break;
        case 64:return "#f65e3b";break;
        case 128:return "#edcf72";break;
        case 256:return "#edcc61";break;
        case 512:return "#9c0";break;
        case 1024:return "#33b5e5";break;
        case 2048:return "#09c";break;
        case 4096:return "#a6c";break;
        case 8192:return "#93c";break;
        
    }

    return "black";
    
}

function getNumberColor(number) {
    if (number <= 4) {
        return "#776e65";
        
    }
    return "white";
    
}
//判断棋盘上是否有空间的函数
function nospace(board) {
    for(var i = 0;i < 4; i ++)
    for(var j = 0;j < 4; j ++){
        if (board[i][j] == 0) {
            return false;
        }
    }
    return true;

}

//判断是否能左移的函数
function canMoveLeft(board) {
    for(var i = 0 ; i < 4 ; i++)
    for(var j = 1 ; j < 4 ; j ++){
        if (board[i][j] != 0) {
            if (board[i][j-1] == 0 || board[i][j-1] == board[i][j]) {
                return true;
            }
            // else{
            //     return false;
            // }
        }
    }
}

//判断是否能右移的函数
function canMoveRight(board){
    for(var i = 0 ; i < 4 ; i++)
    for(var j = 2 ; j >= 0 ; j--){
        if (board[i][j] != 0) {
            if (board[i][j+1] == 0 || board[i][j+1] == board[i][j]) {
                return true;
            } 
            // else {
            //     return false;
            // }
        }
    }
}

//判断是否能上移的函数
function canMoveUp(board){
    for(var j = 0 ; j < 4 ;j ++)
    for(var i = 1 ; i < 4 ; i++){//此处for双重循环需对齐
        if (board[i][j] != 0) {
            if (board[i-1][j] == 0 || board[i-1][j] ==  board[i][j]) {
                return true;                
            }
            // else {
            //     return false;
            // }
        }
    }
}

//判断是否能下移的函数
function canMoveDown(board){
    for(var j = 0 ; j < 4 ;j ++)
    for(var i = 2 ; i >= 0  ; i--){
            if (board[i][j] != 0) {
                if (board[i+1][j] == 0 || board[i+1][j] ==  board[i][j]) {
                    return true;                
                } 
                // else {
                //     return false;
                // }
            }
    }
}
//判断横向有无障碍物
function noBlockHorizontal(row , col1 ,col2 ,board) {
    for( var i = col1 + 1 ; i < col2 ; i ++){//此时的i是一个局部变量
        if (board[row][i] != 0) {//如果board[row][i]上有数字，说明有障碍物
            return false;
        }
        
    }
    return true;
}

//判断竖向有无障碍物
function noBlockVertical(col, row1 ,row2 ,board) {
    for( var i = row1 + 1 ; i < row2 ; i ++){
        if (board[i][col] != 0 ) {
            return false;
        }
        
    }
    return  true;
}

//判断是否还能移动的函数
function nomove( board ) {
    if ( canMoveLeft(board) || 
    canMoveRight(board) || 
    canMoveUp(board) || 
    canMoveDown(board)) {
        return false;
    }
    return true;
}