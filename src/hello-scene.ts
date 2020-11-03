import 'phaser';

export class HelloScene extends Phaser.Scene {
  hello!: Phaser.GameObjects.Text;

  constructor() {
    super('hello');
  }

  preload() {
    this.load.image({
      key: 'logo',
      url: require('./assets/phaser3-logo.png'),
    });
  }

  create() {
    this.hello = this.add.text(200, 200, 'Hello', {
      font: '128px Arial Bold',
      fill: '#FBFBAC',
    });

    this.add.image(400, 70, 'logo');
  }
}
