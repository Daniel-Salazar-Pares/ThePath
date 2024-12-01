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
game.onUpdate(function () {
    demon.setImage(assets.image`LilDemon`)
    if (demon.vy < 0) {
        demon.setImage(img`
            ................
            .fffffff........
            ff22222ff.......
            f2ff2222f.......
            fffff22fffff....
            ..fdddbbbbbf....
            ..fdfffffffff...
            ..fbfdddbbbbf...
            ..fbfdfbfbfbf...
            ..fbfbfbfbfbf...
            ..fbfbfbfbfbf...
            ..fbfbbbbbbbf...
            .ffffffffffff...
            .fccc444444f....
            .fccc4ffffff....
            .fccc4fbbbbf....
            .fccc4fbbbbf....
            .fccc4fffbbf....
            .f4444fffbff....
            .ffffff.fff.....
            `)
    } else if (demon.vy > 0) {
        demon.setImage(img`
            . . . . . . . . . . . . . . . . 
            f f f . . . . . . . . . . . . . 
            f 2 f f f f f f . . . . . . . . 
            f f 2 2 2 2 2 f f . . . . . . . 
            . f f f 2 2 2 2 f . . . . . . . 
            . . f f f 2 2 f f f f f . . . . 
            . . f d d d b b b b b f . . . . 
            . . f d f f f f f f f f f . . . 
            . . f b f d d d b b b b f . . . 
            . . f b f d f b f b f b f . . . 
            . . f b f b f b f b f b f . . . 
            . . f b f b f b f b f b f . . . 
            . . f b f b b b b b b b f . . . 
            . f f f f f f f f f f f f . . . 
            . f c c c 4 4 4 4 4 4 f . . . . 
            f f c c c 4 f f f f f f f . . . 
            f 4 4 4 4 4 f b b b f 4 f . . . 
            f f f f f f f f f f f f f . . . 
            `)
    } else if (demon.x % 2 == 0) {
        demon.setImage(img`
            ................
            ................
            ..fffffff.......
            .ff22222ff......
            .f2ff2222f......
            .fffff22fffff...
            ...fdddbbbbbf...
            ...fdfffffffff..
            ...fbfdddbbbbf..
            ...fbfdfbfbfbf..
            ...fbfbfbfbfbf..
            ...fbfbfbfbfbf..
            ...fbfbbbbbbbf..
            ..ffffffffffff..
            fffccc444444f...
            fccccc4fffffff..
            fcccc44fbbbbbf..
            f44444ffbbbbbf..
            ffffffffffffff..
            ..fff...........
            `)
    }
    if (demon.vx < 0) {
        demon.image.flipX()
    }
})