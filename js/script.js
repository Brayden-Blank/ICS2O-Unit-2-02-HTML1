// Copyright (c) 2022 Brayden Blank All rights reserved
//
// Created by: Brayden Blank
// Created on: March 10 2022
// This file contains the JS functions for index.html

/**
 * Do basic math.
 */
function doMathClicked() {
  document.getElementById('multiply-math').innerHTML = '<p>The area is ' + (5 * 4) + 'cm²</p>'
  document.getElementById('add-math').innerHTML = '<p>The perimeter is ' + (5 + 4 + 5 + 4) + 'cm</p>'
}