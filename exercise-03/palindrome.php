<?php

/**
 * Check if word or phrase is a palindrome
 * @param $str
 * @return bool
 */
function isPalindrome($str) : bool  {

    $str = strtolower( preg_replace('/[^\p{L}]/', '', $str) );

    return $str === strrev($str);
}



