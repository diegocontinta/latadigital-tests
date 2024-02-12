<?php

/** Retrieve ordered array base on array of integer numbers
 * @param {array} $array int
 * @return array
 */
function bubbleSortOrder($array):array {

        $iterate = true;
        while ($iterate) {
            $iterate = false;
            foreach ($array as $index => $item) {
                if (isset($array[$index + 1]) && $item > $array[$index + 1]) {
                    $temp = $item;
                    $array[$index] = $array[$index + 1];
                    $array[$index + 1] = $temp;
                    $iterate = true;
                }
            }
        }
        return $array;
}