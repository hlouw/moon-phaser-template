import 'phaser';
import { HelloScene } from './hello-scene';

const config: Phaser.Types.Core.GameConfig = {
  title: 'Moon Template',
  width: 800,
  height: 600,
  parent: 'game',
  scene: [HelloScene],
  backgroundColor: '#000033',
};

new Phaser.Game(config);
