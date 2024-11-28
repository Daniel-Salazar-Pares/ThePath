controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (demon.vy == 0) {
        demon.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.melt)
})
let demon: Sprite = null
scene.setBackgroundColor(9)
demon = sprites.create(assets.image`LilDemon`, SpriteKind.Player)
scene.cameraFollowSprite(demon)
controller.moveSprite(demon, 100, 0)
tiles.setCurrentTilemap(tilemap`level0`)
demon.ay = 500
