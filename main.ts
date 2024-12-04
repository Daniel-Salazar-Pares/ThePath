namespace SpriteKind {
    export const Abrusto = SpriteKind.create()
    export const slime = SpriteKind.create()
    export const slimespawn = SpriteKind.create()
    export const Coin = SpriteKind.create()
    export const Monstrup = SpriteKind.create()
    export const Monstruo = SpriteKind.create()
    export const EnemyBounce = SpriteKind.create()
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite2, location2) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.melt)
})
function BouncingEnemies () {
    for (let value2 of tiles.getTilesByType(assets.tile`bee`)) {
        monstruo = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f . . . . 
            . . f 1 1 1 7 7 7 7 7 f . . . . 
            . . f 1 5 5 5 5 5 5 7 f . . . . 
            . . f 7 5 f f 5 5 5 f f . . . . 
            . . f 7 5 f f 5 5 5 f f . . . . 
            . . f 7 5 5 5 5 5 5 7 f . . . . 
            . . f 7 f 5 f 5 f 5 f f . . . . 
            . f f f f 5 f f f 5 f f f . . . 
            f f 7 f f f f 5 f f f 7 f f . . 
            f 7 7 5 f 5 f 5 f 5 f 7 7 f . . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            f f f f f f f f f f f f f f . . 
            `, SpriteKind.Monstruo)
        animation.runImageAnimation(
        monstruo,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f . . . . 
            . . f 1 1 1 7 7 7 7 7 f . . . . 
            . . f 1 5 5 5 5 5 5 7 f . . . . 
            . . f 7 5 f f 5 5 5 f f . . . . 
            . . f 7 5 f f 5 5 5 f f . . . . 
            . . f 7 5 5 5 5 5 5 7 f . . . . 
            . . f 7 f 5 f 5 f 5 f f . . . . 
            . f f f f 5 f f f 5 f f f . . . 
            f f 7 f f f f 5 f f f 7 f f . . 
            f 7 7 5 f 5 f 5 f 5 f 7 7 f . . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            f f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f . . . . 
            . . f 1 1 1 7 7 7 7 7 f . . . . 
            . . f 1 5 5 5 5 5 5 7 f . . . . 
            . . f 7 5 f f 5 5 5 f f . . . . 
            . . f 7 5 f f 5 5 5 f f . . . . 
            . . f 7 5 5 5 5 5 5 7 f . . . . 
            . . f 7 f 5 f 5 f 5 f f . . . . 
            . . f f f 5 f f f 5 f f . . . . 
            . . . f f f f f f f f . . . . . 
            . . f f f f f f f f f f . . . . 
            . f f f f f f f f f f f f . . . 
            f f 7 f f f f 5 f f f 7 f f . . 
            f 7 7 5 f 5 f 5 f 5 f 7 7 f . . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            f f f f f f f f f f f f f f . . 
            `],
        100,
        true
        )
        tiles.placeOnTile(monstruo, value2)
        tiles.setTileAt(value2, assets.tile`transparency16`)
        monstruo.vx = -50
    }
    for (let value2 of tiles.getTilesByType(assets.tile`myTile23`)) {
        EnemyBouncePad = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 3 3 . 
            . . f f f f f f f f f 3 3 3 3 . 
            . . f 3 1 1 7 3 3 3 3 f 3 . 3 . 
            . . f 3 3 3 3 3 3 3 7 3 . . 3 . 
            . . f 7 5 3 3 3 5 5 3 f . 3 . . 
            . . f 7 3 3 3 3 5 3 f f . 3 . . 
            . . f 3 3 5 5 3 5 3 7 f 3 . . . 
            . . 3 7 3 5 f 3 3 5 f 3 . . . . 
            . 3 3 3 f 3 3 f 3 5 f 3 f . . . 
            3 3 7 f 3 f f 5 3 f 3 7 f f . . 
            3 3 3 3 f 5 f 5 3 3 f 7 7 f . . 
            f 7 7 7 7 7 7 7 3 7 7 7 7 f . . 
            f f f f f f f f 3 f f f f f . . 
            `, SpriteKind.EnemyBounce)
        tiles.placeOnTile(EnemyBouncePad, value2)
        tiles.setTileAt(value2, assets.tile`transparency16`)
        EnemyBouncePad.setFlag(SpriteFlag.Invisible, true)
    }
}
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
    bee = sprites.create(img`
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
    bee,
    assets.animation`myAnim`,
    100,
    true
    )
    bee.setPosition(knight.x + 100, knight.y - 40)
    bee.follow(knight, 70)
})
sprites.onOverlap(SpriteKind.Monstruo, SpriteKind.EnemyBounce, function (sprite, otherSprite) {
    sprite.vx = sprite.vx * -1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Monstruo, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (knight.y + 5 < otherSprite.y) {
        info.changeScoreBy(1)
    } else {
        info.changeLifeBy(-1)
    }
})
let bee: Sprite = null
let EnemyBouncePad: Sprite = null
let monstruo: Sprite = null
let jump_count = 0
let coin: Sprite = null
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
for (let value2 of tiles.getTilesByType(sprites.swamp.swampTile16)) {
    coin = sprites.create(img`
        . . . . . f f f f f f . . . . . 
        . . . f f f 5 5 5 5 f f f . . . 
        . . f f 5 5 4 4 4 4 1 1 f f . . 
        . f f 5 4 4 4 4 4 1 1 4 1 f f . 
        . f 5 4 4 4 4 5 1 1 4 1 4 4 f . 
        . f 5 4 4 4 5 1 1 4 1 4 4 4 f . 
        . f 5 4 4 5 1 1 4 1 4 4 4 4 f . 
        . f 5 4 4 1 1 4 1 4 4 4 4 4 f . 
        . f 5 4 1 1 5 1 4 4 4 4 4 4 f . 
        . f 5 1 1 4 1 4 4 4 4 4 4 4 f . 
        . f 1 1 4 1 5 4 4 4 4 4 4 4 f . 
        . f 1 4 1 4 4 4 4 4 4 4 4 4 f . 
        . . f 1 4 4 4 4 4 4 4 4 4 f . . 
        . . . f 5 5 4 4 4 4 4 4 f . . . 
        . . . . f f 4 4 4 4 f f . . . . 
        . . . . . . f f f f . . . . . . 
        `, SpriteKind.Coin)
    animation.runImageAnimation(
    coin,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f 5 5 5 5 f f . . . . 
        . . . f 5 5 4 4 4 4 1 1 f . . . 
        . . f 5 4 4 4 4 4 1 1 4 1 f . . 
        . f 5 4 4 4 4 5 1 1 4 1 4 4 f . 
        . f 5 4 4 4 5 1 1 4 1 4 4 4 f . 
        . f 5 4 4 5 1 1 4 1 4 4 4 4 f . 
        . f 5 4 4 1 1 4 1 4 4 4 4 4 f . 
        . f 5 4 1 1 5 1 4 4 4 4 4 4 f . 
        . f 5 1 1 4 1 4 4 4 4 4 4 4 f . 
        . f 1 1 4 1 5 4 4 4 4 4 4 4 f . 
        . f 1 4 1 4 4 4 4 4 4 4 4 4 f . 
        . . f 1 4 4 4 4 4 4 4 4 4 f . . 
        . . . f 5 5 4 4 4 4 4 4 f . . . 
        . . . . f f 4 4 4 4 f f . . . . 
        . . . . . . f f f f . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . . f 1 1 5 1 f . . . . . 
        . . . . f 1 1 4 1 4 4 f . . . . 
        . . . . f 1 4 1 4 4 4 f . . . . 
        . . . f 1 4 1 5 5 4 4 4 f . . . 
        . . . f 5 1 4 5 4 4 4 4 f . . . 
        . . . f 1 4 5 5 4 4 4 4 f . . . 
        . . . f 5 4 4 5 4 4 4 4 f . . . 
        . . . f 5 4 4 5 4 4 4 4 f . . . 
        . . . f 5 4 4 5 4 4 4 4 f . . . 
        . . . f 5 4 4 5 4 4 4 4 f . . . 
        . . . f 5 4 4 4 4 4 4 4 f . . . 
        . . . f 5 4 4 4 4 4 4 4 f . . . 
        . . . . f 5 4 4 4 4 4 f . . . . 
        . . . . . f 4 4 4 4 f . . . . . 
        . . . . . . f f f f . . . . . . 
        `,img`
        . . . . . . . f f . . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . f 5 4 f . . . . . . 
        . . . . . . f 5 4 f . . . . . . 
        . . . . . f 5 4 4 4 f . . . . . 
        . . . . . f 5 4 4 4 f . . . . . 
        . . . . . f 5 4 4 4 f . . . . . 
        . . . . . f 5 4 4 4 f . . . . . 
        . . . . . f 5 4 4 4 f . . . . . 
        . . . . . f 5 4 4 4 f . . . . . 
        . . . . . f 5 4 4 4 f . . . . . 
        . . . . . f 5 4 4 4 f . . . . . 
        . . . . . . f 4 4 f . . . . . . 
        . . . . . . f 4 4 f . . . . . . 
        . . . . . . f 4 4 f . . . . . . 
        . . . . . . . f f . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . f 5 4 4 4 4 4 f . . . . 
        . . . . f 5 4 4 4 4 4 f . . . . 
        . . . f 5 4 4 5 5 4 4 4 f . . . 
        . . . f 5 4 4 5 4 4 4 4 f . . . 
        . . . f 5 4 5 5 4 4 4 4 f . . . 
        . . . f 5 4 4 5 4 4 4 4 f . . . 
        . . . f 5 4 4 5 4 4 4 4 f . . . 
        . . . f 5 4 4 5 4 4 4 1 f . . . 
        . . . f 5 4 4 5 4 4 1 1 f . . . 
        . . . f 5 4 4 4 4 1 1 4 f . . . 
        . . . f 5 4 4 4 1 1 4 1 f . . . 
        . . . . f 5 4 1 1 4 1 f . . . . 
        . . . . . f 1 1 4 1 f . . . . . 
        . . . . . . f f f f . . . . . . 
        `],
    200,
    true
    )
    tiles.placeOnTile(coin, value2)
    tiles.setTileAt(value2, assets.tile`transparency16`)
}
BouncingEnemies()
game.onUpdate(function () {
    knight.setImage(assets.image`LilDemon`)
    if (knight.isHittingTile(CollisionDirection.Bottom)) {
        jump_count = 0
    }
    if (knight.vy < 0) {
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
    } else if (knight.vy > 0) {
        knight.setImage(img`
            ................
            ................
            fff.............
            f2ffffff........
            ff22222ff.......
            .fff2222f.......
            ..fff22fffff....
            ..fdddbbbbbf....
            ..fdfffffffff...
            ..fbfdddbbbbf...
            ..fbfdfbfbfbf...
            ..fbfbfbfbfbf...
            ..fbfbfbfbfbf...
            ..fbfbbbbbbbf...
            .ffffffffffff...
            .fccc444444f....
            ffccc4fffffff...
            f44444fbbbf4f...
            fffffffffffff...
            ................
            `)
    } else {
    	
    }
    if (knight.vx < 0) {
        knight.image.flipX()
    }
})
