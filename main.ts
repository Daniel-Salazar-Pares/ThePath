namespace SpriteKind {
    export const Abrusto = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite3, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite2, location2) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.melt)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (demon.x == 0) {
        demon.vy = 5
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Abrusto, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    bee = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 1 1 1 f 1 1 1 f . . . . 
        . . . f 1 1 1 1 1 1 1 f . . . . 
        . . . . . 1 1 f 1 1 . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . f f 5 5 5 5 5 f f . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    bee,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 1 1 1 f 1 1 1 f . . . . 
        . . . f 1 1 1 1 1 1 1 f . . . . 
        . . . . . 1 1 f 1 1 . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . f f 5 5 5 5 5 f f . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . f f 5 5 5 5 5 f f . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    bee.setPosition(demon.x - 80, demon.y - 80)
    bee.follow(demon)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let bee: Sprite = null
let abrusto: Sprite = null
let demon: Sprite = null
scene.setBackgroundColor(9)
demon = sprites.create(assets.image`LilDemon`, SpriteKind.Player)
scene.cameraFollowSprite(demon)
controller.moveSprite(demon, 100, 0)
tiles.setCurrentTilemap(tilemap`level3`)
demon.ay = 500
for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
    abrusto = sprites.create(img`
        . . . . . f f f f f f . . . . . 
        . . . f f 6 6 6 6 6 6 f f . . . 
        . . f 6 6 6 6 c c c c 6 6 f . . 
        . f 6 6 c 6 6 c c 6 6 c 6 6 f . 
        . f 6 6 c c c c c 6 6 c c 6 f . 
        f 6 c c c c c c c c c c c c 6 f 
        f 6 6 6 c c c c c c c c c 6 6 f 
        f 6 6 6 c c c c c c c c c c 6 f 
        f 6 c c c 6 c c c c 6 6 c c 6 f 
        f 6 c c c c c c c c 6 6 c c 6 f 
        f 6 c c c c c c f f c c c c 6 f 
        f f c c f f f c f f c f f c f f 
        f f c c f f f c c c c f f c f f 
        f f f c f f f c c f c c c f f f 
        . f f f f f f f f f f f f f f . 
        . . f f f f f f f f f f f f . . 
        `, SpriteKind.Abrusto)
    tiles.placeOnTile(abrusto, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
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
