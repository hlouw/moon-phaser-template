import 'phaser';

export class HelloScene extends Phaser.Scene {
  hello!: Phaser.GameObjects.Text;

  constructor() {
    super('hello');
  }

  create() {
    this.hello = this.add.text(100, 100, 'Hello', {
      font: '128px Arial Bold',
      fill: '#FBFBAC',
    });
  }
}
