// ==UserScript==
// @name     Fast Math
// @version  1
// @grant    none
// ==/UserScript==
var getValue = document.getElementsByTagName('p')[1].innerHTML;
var fastMath = eval(getValue);
document.getElementsByName("ans")[0].value=fastMath;
