<?php

/** ... working
 * @param $array
 * @return void
 */
function bubbleSortOrder($array):void {

    $sort = function () use(&$array) {

                 print_r($array);
                 $iterate = true;
                 $len = count($array) - 1;

                 foreach ($array as $index => $item) {
                     $a = $item;
                     $b = $index < $len ? $array[$index + 1] : $item;
                     if($a < $b)
                         continue;
                }

                 print_r($array);

            };


    $sort();


}


$array = [18,14,125,8,9,152,56,5];

bubbleSortOrder($array);