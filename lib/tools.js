const fs = require('fs')
const path = require('path');
const { open, close, constants } = fs;

function todayDate()  {
    return new Date().toISOString().split("T")[0];
}
exports.todayDate = todayDate;

function getTodayMonthRange() {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1 ;
    let firstDay = new Date(year, month, 1).getDate();
    // let lastDay = new Date(year, month + 1, 0).getDate(); // Keep here for reference.
    return `${year}-${month}-${firstDay}`;
}
exports.getTodayMonthRange = getTodayMonthRange;

