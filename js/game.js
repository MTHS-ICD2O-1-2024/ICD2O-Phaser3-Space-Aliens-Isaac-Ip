/* global Phaser */

// Copyrigtht (c) 2025 Isaac Ip All rights reserved
//
// Created by: Isaac Ip
// created on: Apr 2025
// This is the Phaser 3 game configuration file

/**
 * Start Phaser Game.
 */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    }
  },
  // set background color
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
}
const game = new Phaser.Game(config)
console.log(game)

