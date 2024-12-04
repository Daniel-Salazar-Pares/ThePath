enum RadioMessage {
    message1 = 49434
}
namespace SpriteKind {
    export const Abrusto = SpriteKind.create()
    export const slime = SpriteKind.create()
    export const slimespawn = SpriteKind.create()
    export const wrongPathSign = SpriteKind.create()
    export const Breakableblock = SpriteKind.create()
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Breakableblock, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    music.play(music.createSoundEffect(WaveShape.Noise, 821, 0, 117, 0, 200, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite2, location2) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.melt)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite4, otherSprite2) {
    sprites.destroy(otherSprite2)
    if (knight.y + 5 < otherSprite2.y) {
        music.play(music.createSoundEffect(WaveShape.Noise, 1, 241, 232, 206, 230, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        info.changeScoreBy(1)
    } else {
        music.play(music.createSoundEffect(WaveShape.Triangle, 286, 107, 255, 157, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        info.changeLifeBy(-1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Abrusto, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    music.play(music.createSoundEffect(WaveShape.Noise, 494, 3, 133, 106, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.wrongPathSign, function (sprite, otherSprite) {
    otherSprite.sayText("This does not look to be the correct path", 200, false)
})
info.onLifeZero(function () {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.melt)
})
let bat: Sprite = null
let jump_count = 0
let brekableStone: Sprite = null
let singal: Sprite = null
let abrusto: Sprite = null
let knight: Sprite = null
scene.setBackgroundColor(9)
knight = sprites.create(assets.image`LilDemon`, SpriteKind.Player)
info.setLife(3)
info.setScore(0)
scene.cameraFollowSprite(knight)
controller.moveSprite(knight, 100, 0)
music.setTempo(120)
music.play(music.createSong(hex`0078000408040200001c00010a006400f401640000040000000000000000000000000005000004b40000000400012504000800012508000c0001240c001000012210001400012214001800012018001c00011e1c002000011e24002800012228002c00011d2c003000012230003400012534003800012938003c0001273c004000012540004400012044004800012048004c0001274c005000012250005400011e58005c00011e5c006000012260006400012264006800011e68006c00011d6c007000011b70007400011b74007800011d78007c0001247c008000012706001c00010a006400f4016400000400000000000000000000000000000000026800000004000312141608000c00031214160c00100003121416140018000312141618001c000312141624002800031214162c0030000312141638003c0003121416400044000312141644004800031214164c00500003121416540058000312141658005c0003121416`), music.PlaybackMode.LoopingInBackground)
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
for (let value of tiles.getTilesByType(assets.tile`myTile23`)) {
    singal = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f f f f . 
        . f f f f f d d d d d d d d f . 
        . f d d d d e f f e e e d d f . 
        . f d d e e f d d f e e e d f . 
        . f d e e e f d d f e e e d f . 
        . f d e e e e f f e e e e e f . 
        . f e e e e f d d f e e e e f . 
        . f e e e e e f f e e e e e f . 
        . f e e e e f e e f f f f f . . 
        . . f f f f f e e f . . . . . . 
        . . . . . . f e e e f . . . . . 
        . . . . . . . f e e f . . . . . 
        . . . . . . . f e e f . . . . . 
        . . . . . . . f e e f . . . . . 
        `, SpriteKind.wrongPathSign)
    tiles.placeOnTile(singal, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`purpleSpawn`)) {
    brekableStone = sprites.create(img`
        . . f f f f f f f f f f f f . . 
        . f d d d d d d d d d d d d f . 
        f d d d c d d d c c c c d d d f 
        f d d c c d d d c c c c c d d f 
        f d c c c d d d c d d c c c d f 
        f d c d c c c c c d d c c c d f 
        f d c c c c c c c c c c c c d f 
        f d c c c c c c c c c c d c d f 
        f c c c c c c d d c c c c c c f 
        f c c c c c c d d c c c c c c f 
        f c c c c c c c c c c c c c c f 
        f c c c c c c c c c c c c c c f 
        f c c c c c c c c c c c c c c f 
        f c c c c c c c c c c c c c c f 
        . f c c c c c c c c c c c c f . 
        . . f f f f f f f f f f f f . . 
        `, SpriteKind.Breakableblock)
    tiles.placeOnTile(brekableStone, value)
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
