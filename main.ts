scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite2, location2) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.melt)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (demon.x == 0) {
        demon.vy = 5
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
let demon: Sprite = null
scene.setBackgroundColor(9)
demon = sprites.create(assets.image`LilDemon`, SpriteKind.Player)
scene.cameraFollowSprite(demon)
controller.moveSprite(demon, 100, 0)
tiles.setCurrentTilemap(tilemap`level0`)
demon.ay = 500
