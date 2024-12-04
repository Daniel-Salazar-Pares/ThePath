namespace SpriteKind {
    export const Abrusto = SpriteKind.create()
    export const slime = SpriteKind.create()
    export const slimespawn = SpriteKind.create()
    export const Coin = SpriteKind.create()
    export const Monstrup = SpriteKind.create()
    export const Monstruo = SpriteKind.create()
    export const EnemyBounce = SpriteKind.create()
    export const NPC1 = SpriteKind.create()
    export const NPC2 = SpriteKind.create()
    export const NPC3 = SpriteKind.create()
    export const NPC4 = SpriteKind.create()
    export const NPC5 = SpriteKind.create()
    export const NPC6 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Abrusto, function (sprite7, otherSprite5) {
    sprites.destroy(otherSprite5)
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
sprites.onOverlap(SpriteKind.Monstruo, SpriteKind.EnemyBounce, function (sprite8, otherSprite6) {
    sprite8.vx = sprite8.vx * -1
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
    for (let value22 of tiles.getTilesByType(assets.tile`myTile23`)) {
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
        tiles.placeOnTile(EnemyBouncePad, value22)
        tiles.setTileAt(value22, assets.tile`transparency16`)
        EnemyBouncePad.setFlag(SpriteFlag.Invisible, true)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite42, otherSprite22) {
    sprites.destroy(otherSprite22)
    if (knight.y + 5 < otherSprite22.y) {
        info.changeScoreBy(1)
    } else {
        info.changeLifeBy(-1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC1, function (sprite9, otherSprite7) {
    otherSprite7.sayText("Hi mighty knight, I see you lost your sword.", 200, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC4, function (sprite6, otherSprite4) {
    otherSprite4.sayText("I am the mage, the sword is somwhere in the second phase", 200, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC2, function (sprite4, otherSprite2) {
    otherSprite2.sayText("Thank you! Look for the Frank to find your sword.", 200, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Monstruo, function (sprite11, otherSprite9) {
    sprites.destroy(otherSprite9)
    if (knight.y + 5 < otherSprite9.y) {
        info.changeScoreBy(1)
    } else {
        info.changeLifeBy(-1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC6, function (sprite10, otherSprite8) {
    otherSprite8.sayText("Why look for money, if you don't have a sword", 200, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC3, function (sprite5, otherSprite3) {
    otherSprite3.sayText("FRAAANKENSTEEEINN", 200, false)
})
let EnemyBouncePad: Sprite = null
let monstruo: Sprite = null
let jump_count = 0
let bee: Sprite = null
let NPC62: Sprite = null
let NPC42: Sprite = null
let NPC32: Sprite = null
let NPC22: Sprite = null
let NPC12: Sprite = null
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
for (let value23 of tiles.getTilesByType(sprites.swamp.swampTile16)) {
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
    tiles.placeOnTile(coin, value23)
    tiles.setTileAt(value23, assets.tile`transparency16`)
}
for (let value24 of tiles.getTilesByType(assets.tile`myTile24`)) {
    NPC12 = sprites.create(img`
        . . . . . f f f f f f . . . . . 
        . . . . f e 7 7 7 7 e f . . . . 
        . . . f e 1 5 c 8 1 5 e f . . . 
        . . . f 5 4 4 c c 4 4 5 f . . . 
        . . f 4 4 7 e e e f f 4 4 f . . 
        . . f 7 7 e e e 3 c 1 f 7 f . . 
        . . f 7 e e e 3 d c 1 e 7 f . . 
        . f 7 e e f 3 d d 3 f e e 7 f . 
        . f e e e e f f f f e e e e f . 
        . f e e f c 3 d d 3 c f e e f . 
        . f e f d f c 8 c c f d f e f . 
        . . f d 3 f 8 8 8 8 f 3 d f . . 
        . . f 8 f c 8 8 c 8 f c 3 f . . 
        . . f c f 8 8 c c 8 c f 8 f . . 
        . . . f c f f c c c c f c f . . 
        . . . . f 3 d f f f f f f . . . 
        `, SpriteKind.NPC1)
    animation.runImageAnimation(
    NPC12,
    [img`
        . . . . . f f f f f f . . . . . 
        . . . . f e 7 7 7 7 e f . . . . 
        . . . f e 1 5 c 8 1 5 e 2 . . . 
        . . . f 5 4 4 c c 4 4 2 f 2 . . 
        . . f 4 4 7 e e e e e 4 2 f . . 
        . . f 7 7 e e e 3 f f e 7 f . . 
        . . f 7 e e e 3 d c 1 f 7 f . . 
        . f 7 e e f 3 f f 3 f e e 7 f . 
        . f e e e e f f f f e e e e f . 
        . f e e f c 3 d d 3 c f e e f . 
        . f e f d f c 8 c c f d f e f . 
        . . f d 3 f 8 8 8 8 f 3 d f . . 
        . . f 8 f c 8 8 c 8 f c 3 f . . 
        . . f c f 8 8 c c 8 c f 8 f . . 
        . . f f c f f c c c c f c f . . 
        . . . f f 3 d f f f f f f . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f e 7 7 7 7 e f . . . . 
        . . . f e 1 5 c 8 1 5 e f . . . 
        . . . f 5 4 4 c c 4 4 5 f . . . 
        . . f 4 4 7 e e e f f 4 4 f . . 
        . . f 7 7 e e e 3 c 1 f 7 f . . 
        . . f 7 e e e 3 d c 1 e 7 f . . 
        . f 7 e e f 3 d d 3 f e e 7 f . 
        . f e e e e f f f f e e e e f . 
        . f e e f c 3 d d 3 c f e e f . 
        . f e f d f c 8 c c f d f e f . 
        . . f d 3 f 8 8 8 8 f 3 d f . . 
        . . f 8 f c 8 8 c 8 f c 3 f . . 
        . . f c f 8 8 c c 8 c f 8 f . . 
        . . . f c f f c c c c f c f . . 
        . . . . f 3 d f f f f f f . . . 
        `],
    200,
    true
    )
    tiles.placeOnTile(NPC12, value24)
    tiles.setTileAt(value24, assets.tile`transparency16`)
}
for (let value25 of tiles.getTilesByType(assets.tile`myTile26`)) {
    NPC22 = sprites.create(img`
        . e . . . e e e e e e . . . . . 
        . e 4 e e 4 4 d 4 4 4 e . . . . 
        . . e 4 4 4 d d d 4 d 4 e . . . 
        . . . e 4 d d e d d d d e . . . 
        . . e e d e d e e d e d e . . . 
        . e . e d e e d d e e d e . . . 
        . . . . 4 1 c d d c 1 4 . . . . 
        . . . . e e 4 d d 4 e e . . . . 
        . . . c c b e 4 4 e b c c . . . 
        . . c 1 b c b 1 1 b c b 1 c . . 
        . . c b b c c b b c c b b c . . 
        . . e 4 e c 1 c c 1 c e 4 e . . 
        . e . 4 e b c b b c b e 4 . e . 
        . e . . b c b c c b c b . . e . 
        . . e e c b d b b d b c e e . . 
        . . . . . c b b b b c . . . . . 
        . . . . c 1 b c c b 1 c . . . . 
        `, SpriteKind.NPC2)
    animation.runImageAnimation(
    NPC22,
    [img`
        . e . . . e e e e e e . . . . . 
        . e 4 e e 4 4 d 4 4 4 e . . . . 
        . . e 4 4 4 d d d 4 d 4 e . . . 
        . . e e e d d e d d d e e e . . 
        . e d d e e d e e d e e d d e . 
        . e d 4 e e e d d e e e 4 d e . 
        . . e d e 1 c d d c 1 e d e . . 
        . . e d 4 e 4 d d 4 e 4 d e . . 
        . . c b 1 b e 4 4 e b 1 b c . . 
        . . c b b c b 1 1 b c b b c . . 
        . . . c c c c b b c c c c . . . 
        . . . . c c 1 c c 1 c c . . . . 
        . . . . b b c b b c b b . . . . 
        . . . c b c b c c b c b c . . . 
        . . . c c b d b b d b c c . . . 
        . . . . c b b c c b b c . . . . 
        . . . c 1 b c d d c b 1 c . . . 
        `,img`
        . e . . . e e e e e e . . . . . 
        . e 4 e e 4 4 d 4 4 4 e . . . . 
        . . e 4 4 4 d d d 4 d 4 e . . . 
        . . . e 4 d d e d d d d e . . . 
        . . e e d e d e e d e d e . . . 
        . e . e d e e d d e e d e . . . 
        . . . . 4 1 c d d c 1 4 . . . . 
        . . . . e e 4 d d 4 e e . . . . 
        . . . c c b e 4 4 e b c c . . . 
        . . c 1 b c b 1 1 b c b 1 c . . 
        . . c b b c c b b c c b b c . . 
        . . e 4 e c 1 c c 1 c e 4 e . . 
        . e . 4 e b c b b c b e 4 . e . 
        . e . . b c b c c b c b . . e . 
        . . e e c b d b b d b c e e . . 
        . . . . . c b b b b c . . . . . 
        . . . . c 1 b c c b 1 c . . . . 
        `],
    200,
    true
    )
    tiles.placeOnTile(NPC22, value25)
    tiles.setTileAt(value25, assets.tile`transparency16`)
}
for (let value26 of tiles.getTilesByType(assets.tile`myTile27`)) {
    NPC32 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f c c c f f . . . . 
        . . . . f c c f c c c f . . . . 
        . . . . f c f c c f c f . . . . 
        . . f . f 7 7 7 7 7 7 f . f . . 
        . . f f f 7 7 7 7 7 7 f f f . . 
        . . f . e e e 7 7 e e e . f . . 
        . . . . e 7 7 7 7 7 7 e . . . . 
        . . . . . e 7 7 7 7 e . . . . . 
        . . . . f c e 7 7 e c f . . . . 
        . . . f c c 7 7 7 7 c c f . . . 
        . . . f c f 7 7 7 7 f c f . . . 
        . . e 7 f f 4 7 7 4 f f 7 e . . 
        . e 7 7 e f f 4 4 f f e 7 e . . 
        . e 7 7 7 f c c c c f f e . . . 
        . . e e 7 f c c c c f . . . . . 
        . . . . e e 4 e 4 4 e . . . . . 
        `, SpriteKind.NPC3)
    animation.runImageAnimation(
    NPC32,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f c c c f f . . . . 
        . . . . f c c f c c c f . . . . 
        . . . . f c f c c f c f . . . . 
        . . f . f 7 7 7 7 7 7 f . f . . 
        . . f f f 7 7 7 7 7 7 f f f . . 
        . . f f e e e 7 7 e e e f f . . 
        . . . f e 7 7 7 7 7 7 e f . . . 
        . . . . f e 7 7 7 7 e f . . . . 
        . . . . f c e 7 7 e c f . . . . 
        . . . f c c 7 7 7 7 c c f . . . 
        . . f f c f 7 7 7 7 f c f f . . 
        . . e 7 f f 4 7 7 4 f f 7 e . . 
        . e 7 7 e f f 4 4 f f e 7 e . . 
        . e 7 7 7 f c c c c f f e . . . 
        . . e e 7 f c c c c f f . . . . 
        . . . . e e 4 e 4 4 e f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f c c c f f . . . 
        . . . . . f c c f c c c f . . . 
        . . . . . f c f c c f c f . . . 
        . . . f . f f 7 7 7 7 f f . f . 
        . . . f f f 7 7 7 7 7 7 f f f . 
        . . . f . e e e 7 7 e e e . f . 
        . . . . . e 7 7 7 7 7 7 e . . . 
        . . . . . . e 7 7 7 7 e . . . . 
        . . . . . f c e 7 7 e c f . . . 
        . . . . f c c 7 7 7 7 c c f . . 
        . . . . f c f 7 7 7 7 f c f . . 
        . . . e 7 f f 4 7 7 4 f f 7 e . 
        . . . e 7 e f f 4 4 f f e 7 7 e 
        . . . . e f f c c c c f 7 7 7 e 
        . . . . . . f c c c c f 7 e e . 
        . . . . . . e 4 4 e 4 e e . . . 
        `],
    200,
    true
    )
    tiles.placeOnTile(NPC32, value26)
    tiles.setTileAt(value26, assets.tile`transparency16`)
}
for (let value27 of tiles.getTilesByType(assets.tile`myTile28`)) {
    NPC42 = sprites.create(img`
        . . . . . . f f f f f . . . . . 
        . . . . f f c c c c f f . . . . 
        . . . f c c c c f f f f f f . . 
        . . f c c c c f f f . . . . . . 
        . . f f f f f f f . . . . . . . 
        . f f 4 4 d 4 e f f f . . . . . 
        . . . f f d f d f . . . . . . . 
        . . . f d d d d f . . . . . . . 
        . . . . f c c c f . . . . . . . 
        . . . . f c c c f . . f f . . . 
        . f f f f c c c f f f d d f . . 
        f e e e e f c c f f e b 4 d f . 
        . f f f f f f f f f f f b 4 f . 
        . . . . . . f . . . . . f f d f 
        . . . . . . . . . . . . . . f f 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.NPC4)
    animation.runImageAnimation(
    NPC42,
    [img`
        . . . . . . f f f f f . . . . . 
        . . . . f f c c c c f f . . . . 
        . . . f c c c c f f f f f f . . 
        . . f c c c c f f f . . . . . . 
        . . f f f f f f f . . . . . . . 
        . f f 4 4 d 4 e f f f . . . . . 
        . . . f f d f d f . . . . . . . 
        . . . f d d d d f . . . . . . . 
        . . . . f c c c f . . . . . . . 
        . . . . f c c c f . . f f . . . 
        . f f f f c c c f f f d d f . . 
        f e e e e f c c f f e b 4 d f . 
        . f f f f f f f f f f f b 4 f . 
        . . . . . . f . . . . . f f d f 
        . . . . . . . . . . . . . . f f 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . f f c c c c f f . . . . 
        . . . f c c c c f f f f f f . . 
        . . f c c c c f f f . . . . . . 
        . . f f f f f f f . . . . . . . 
        . f f 4 4 d 4 e f f f . . . . . 
        . . . f f d f d f . . . . . . . 
        . . . f d d d d f . . . . . . . 
        . . . . f c c c f . . . . . . . 
        . . . . f c c c f . . f f . . . 
        . f f f f c c c f f f d d f . . 
        f e e e e f c c f f e b 4 d f . 
        . f f f f f f f f f f f b 4 f . 
        . . . . . . f . . . . . f f d f 
        . . . . . . . . . . . . . . f f 
        `],
    200,
    true
    )
    tiles.placeOnTile(NPC42, value27)
    tiles.setTileAt(value27, assets.tile`transparency16`)
}
for (let value28 of tiles.getTilesByType(sprites.dungeon.hazardLava1)) {
    NPC62 = sprites.create(img`
        . . . . . f c c c c f . . . . . 
        . . . . f f f c c f f f . . . . 
        . . . f f c c f f c c f f . . . 
        . . . f c f f c c f f c f . . . 
        . . . f f b 1 1 f 1 b f f . . . 
        . . . f f f f 1 1 f f f f . . . 
        . e e e f 1 f 1 1 f 1 f e e e . 
        . . e e e f b 1 1 b f e e e . . 
        . . . e f e f b b f e f e . . . 
        . . . f c c e e e e c c f . . . 
        . . . f c f c 1 1 c f c f . . . 
        . . f c f f 1 c c 1 f f c f . . 
        . f 1 b f f f c c f f f 1 f . . 
        . f 1 1 b f c c c c f e f . . . 
        . . f f e f c c c c f e e . . . 
        . e e e f f c f c c f e e e . . 
        . . . . . . . f c c c f e e e . 
        `, SpriteKind.NPC6)
    animation.runImageAnimation(
    NPC62,
    [img`
        . . . . . f c c c c f . . . . . 
        . . . . f f f c c f f f . . . . 
        . . . f f c c f f c c f f . . . 
        . . . f c f f c c f f c f . . . 
        . . . f f b 1 1 f 1 b f f . . . 
        . . . f f f f 1 1 f f f f . . . 
        . e e e f 1 f 1 1 f 1 f e e e . 
        . . e e e f b 1 1 b f e e e . . 
        . . . e f e f b b f e f e . . . 
        . . . f c c e e e e c c f . . . 
        . . . f c f c 1 1 c f c f . . . 
        . . f c f f 1 c c 1 f f c f . . 
        . f 1 b f f f c c f f f 1 f . . 
        . f 1 1 b f c c c c f e f . . . 
        . . f f e f c c c c f e e . . . 
        . e e e f f c f c c f e e e . . 
        . . . . . . . f c c c f e e e . 
        `,img`
        . . . . . f c c c c f . . . . . 
        . . . . f f f c c f f f . . . . 
        . . . f f c c f f c c f f . . . 
        . . . f c f f c c f f c f . . . 
        . . . f f b 1 1 f 1 b f f . . . 
        . . . f f f f 1 1 f f f f . . . 
        . e e e f 1 f 1 1 f 1 f e e e . 
        . . e e e f b 1 1 b f e e e . . 
        . . . e f e f b b f e f e . . . 
        . . . f c c e e e e c c f . . . 
        . . . f c f c 1 1 c f c f . . . 
        . . f c f f 1 c c 1 f f c f . . 
        . . f 1 f e f c c f e f b 1 f . 
        . . . f e f c c c c f b 1 1 f . 
        . . . e e f c c c c f e f f . . 
        . . e e e f c c f c f f e e e . 
        . e e e f c c c f . . . . . . . 
        `],
    200,
    true
    )
    tiles.placeOnTile(NPC62, value28)
    tiles.setTileAt(value28, assets.tile`transparency16`)
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
            `)
    }
    if (knight.vx < 0) {
        knight.image.flipX()
    }
})
