namespace SpriteKind {
    export const Abrusto = SpriteKind.create()
    export const slime = SpriteKind.create()
    export const slimespawn = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite3, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jump_count < 2) {
        knight.vy = -200
        jump_count += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite2, location2) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.melt)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite4, otherSprite2) {
    sprites.destroy(otherSprite2)
    if (knight.y + 5 < otherSprite2.y) {
        info.changeScoreBy(1)
    } else {
        info.changeLifeBy(-1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Abrusto, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    bat = sprites.create(img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c b b b b b b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b c b b b c b b b b f . . . . 
        f b 1 f f f 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    bat,
    assets.animation`myAnim`,
    100,
    true
    )
    bat.setPosition(knight.x + 100, knight.y - 40)
    bat.follow(knight, 70)
})
let bat: Sprite = null
let jump_count = 0
let abrusto: Sprite = null
let knight: Sprite = null
scene.setBackgroundColor(9)
knight = sprites.create(assets.image`LilDemon`, SpriteKind.Player)
info.setLife(3)
info.setScore(0)
scene.cameraFollowSprite(knight)
controller.moveSprite(knight, 100, 0)
tiles.setCurrentTilemap(tilemap`level0`)
knight.ay = 500
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
    if (knight.isHittingTile(CollisionDirection.Bottom)) {
        jump_count = 0
    }
    if (knight.vx != 0) {
        knight.setImage(assets.image`LilDemon`)
    }
    if (knight.vy < 0) {
        knight.setImage(img`
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
    } else if (knight.vy > 0) {
        knight.setImage(img`
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
    } else if (knight.x % 2 == 0) {
        knight.setImage(img`
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
    if (knight.vx < 0) {
        knight.image.flipX()
    }
})
