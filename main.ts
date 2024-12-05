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
    export const button = SpriteKind.create()
    export const boss = SpriteKind.create()
    export const Boss1 = SpriteKind.create()
    export const Espada = SpriteKind.create()
    export const crosshair = SpriteKind.create()
    export const breackableNotch = SpriteKind.create()
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
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (knightExists) {
        if (jump_count < 2) {
            knight.vy = -200
            music.play(music.createSoundEffect(WaveShape.Noise, 330, 1801, 148, 148, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            jump_count += 1
        }
    }
})
function otpions () {
    scene.setBackgroundImage(img`
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbccccccbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbccccbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbccccbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbccccbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbccccbbbbbbbbbbbbbbcccccccccccbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbcccbbbbbbbbbbbbbbcccccccccccbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbcccbbbcccccbbbbbbcccccccccccbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbccccbbbcccccccbbbbbbcccbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbcccbbbccccbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbccccbccccccccccbbbbbcccbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbcccbcccccccccbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbccccbcccbccccccbbbbbcccbbbbbbbbbbbbbbbbbbbcccccccccccbbbbbbcccccccccccccccbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbccccbbcccbbbbcccbbbbbcccbbbbbbbbbbbcccbbbbbcccccccccccbbbbbbcccccccccccccccbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbccccbbcccbbcccccbbbbbcccbcccbbbbbbbcccbbbbbccccbbbbcccbbbbbbcccccccbbbbccccbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbcccccbbccccccccccbbbbbcccccccbbbbbbbcccbbbbbccccbbbbcccbbbbbbccccccbbbbbbcccbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccbbbcccccccccbbbbbbcccccccbbbbbbbcccbbbbbcccccbbccccbbbbbbbccccbbbbbbbcccbbbbbccccbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccbbbccccccccbbbbbbbcccccccbbbbbbbcccbbbbbbccccccccccbbbbbbbccccbbbbbbbcccbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbccccbbbbbbbbbbbbccccbbbbbbbbbcccbbbbbbccccccccccbbbbbbbccccbbbbbbbcccbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbbcccbbbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `)
    livesChange = sprites.create(img`
        . f f f . . f f f f . f f f f f . . . 2 2 . 2 2 . 
        f . . . f . f . . . . . . f . . . . 2 2 2 2 2 2 2 
        f . . . . . f . . . . . . f . . . . 2 2 2 2 2 2 2 
        . f f f . . f f f . . . . f . . . . 2 2 2 2 2 2 2 
        . . . . f . f . . . . . . f . . . . . 2 2 2 2 2 . 
        f . . . f . f . . . . . . f . . . . . . 2 2 2 . . 
        . f f f . . f f f f . . . f . . . . . . . 2 . . . 
        `, SpriteKind.button)
    backToMenu = sprites.create(img`
        f f f . . f f f f . . f f f . f . . f . . . . . . 
        f . . f . f . . f . f . . . . f . . f . . . . . . 
        f . . f . f . . f . f . . . . f . f . . . . . . . 
        f f f . . f . . f . f . . . . f f . . . . . . . . 
        f . . f . f f f f . f . . . . f . f . . . . . . . 
        f . . f . f . . f . f . . . . f . . f . . . . . . 
        f f f . . f . . f . . f f f . f . . f . . . . . . 
        `, SpriteKind.button)
    if (Muted == true) {
        unMute = sprites.create(img`
            f . . f . f . . . f . f f . . . f f . f . . . f . f f f f f . f f f f . . 
            f . . f . f f . . f . f . f . f . f . f . . . f . . . f . . . f . . . . . 
            f . . f . f . f . f . f . . f . . f . f . . . f . . . f . . . f . . . . . 
            f . . f . f . f . f . f . . . . . f . f . . . f . . . f . . . f f f . . . 
            f . . f . f . f . f . f . . . . . f . f . . . f . . . f . . . f . . . . . 
            f . . f . f . . f f . f . . . . . f . f . . . f . . . f . . . f . . . . . 
            f f f f . f . . . f . f . . . . . f . f f f f f . . . f . . . f f f f . . 
            `, SpriteKind.button)
        unMute.setPosition(111, 85)
    } else if (Muted == false) {
        mute = sprites.create(img`
            f f . . . f f . f . . . f . f f f f f . f f f f . 
            f . f . f . f . f . . . f . . . f . . . f . . . . 
            f . . f . . f . f . . . f . . . f . . . f . . . . 
            f . . . . . f . f . . . f . . . f . . . f f f . . 
            f . . . . . f . f . . . f . . . f . . . f . . . . 
            f . . . . . f . f . . . f . . . f . . . f . . . . 
            f . . . . . f . f f f f f . . . f . . . f f f f . 
            `, SpriteKind.button)
        mute.setPosition(111, 85)
    } else {
    	
    }
    livesChange.setPosition(41, 85)
    backToMenu.setPosition(18, 14)
}
sprites.onOverlap(SpriteKind.crosshair, SpriteKind.button, function (sprite4, otherSprite2) {
    if (otherSprite2 == Play) {
        if (controller.A.isPressed()) {
            sprites.destroyAllSpritesOfKind(SpriteKind.crosshair)
            sprites.destroyAllSpritesOfKind(SpriteKind.button)
            level_1()
        }
    } else if (otherSprite2 == Options) {
        if (controller.A.isPressed()) {
            sprites.destroyAllSpritesOfKind(SpriteKind.button)
            sprites.destroyAllSpritesOfKind(SpriteKind.crosshair)
            croshair = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . c c c . 
                . . . . . . . . . . . c 1 1 c . 
                . . . . . . . . . . c 1 b d c . 
                . . . . . . . . . c 1 c d c . . 
                . . . . . . . . c 1 c d f . . . 
                . e e . . . . c d c d f . . . . 
                . e 5 e . . f d c b f . . . . . 
                . f 5 e . f b c b f . . . . . . 
                . f 5 5 e e c c f . . . . . . . 
                . . e e 2 3 e f . . . . . . . . 
                . . f f e 2 e . . . . . . . . . 
                . . f e f e e f f . . . . . . . 
                f f e f f f 5 5 e f . . . . . . 
                f f f . . . e e f f . . . . . . 
                . f f . . . . . . . . . . . . . 
                `, SpriteKind.crosshair)
            controller.moveSprite(croshair)
            otpions()
        }
    } else if (otherSprite2 == livesChange) {
        if (controller.A.isPressed()) {
            sprites.destroyAllSpritesOfKind(SpriteKind.crosshair)
            lives = game.askForNumber("Set lives:", 1)
            croshair = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . c c c . 
                . . . . . . . . . . . c 1 1 c . 
                . . . . . . . . . . c 1 b d c . 
                . . . . . . . . . c 1 c d c . . 
                . . . . . . . . c 1 c d f . . . 
                . e e . . . . c d c d f . . . . 
                . e 5 e . . f d c b f . . . . . 
                . f 5 e . f b c b f . . . . . . 
                . f 5 5 e e c c f . . . . . . . 
                . . e e 2 3 e f . . . . . . . . 
                . . f f e 2 e . . . . . . . . . 
                . . f e f e e f f . . . . . . . 
                f f e f f f 5 5 e f . . . . . . 
                f f f . . . e e f f . . . . . . 
                . f f . . . . . . . . . . . . . 
                `, SpriteKind.crosshair)
            controller.moveSprite(croshair)
            otpions()
        }
    } else if (otherSprite2 == mute) {
        if (controller.A.isPressed()) {
            sprites.destroyAllSpritesOfKind(SpriteKind.crosshair)
            music.setVolume(0)
            sprites.destroyAllSpritesOfKind(SpriteKind.button)
            Muted = true
            croshair = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . c c c . 
                . . . . . . . . . . . c 1 1 c . 
                . . . . . . . . . . c 1 b d c . 
                . . . . . . . . . c 1 c d c . . 
                . . . . . . . . c 1 c d f . . . 
                . e e . . . . c d c d f . . . . 
                . e 5 e . . f d c b f . . . . . 
                . f 5 e . f b c b f . . . . . . 
                . f 5 5 e e c c f . . . . . . . 
                . . e e 2 3 e f . . . . . . . . 
                . . f f e 2 e . . . . . . . . . 
                . . f e f e e f f . . . . . . . 
                f f e f f f 5 5 e f . . . . . . 
                f f f . . . e e f f . . . . . . 
                . f f . . . . . . . . . . . . . 
                `, SpriteKind.crosshair)
            controller.moveSprite(croshair)
            otpions()
        }
    } else if (otherSprite2 == unMute) {
        if (controller.A.isPressed()) {
            sprites.destroyAllSpritesOfKind(SpriteKind.crosshair)
            music.setVolume(150)
            sprites.destroyAllSpritesOfKind(SpriteKind.button)
            Muted = false
            croshair = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . c c c . 
                . . . . . . . . . . . c 1 1 c . 
                . . . . . . . . . . c 1 b d c . 
                . . . . . . . . . c 1 c d c . . 
                . . . . . . . . c 1 c d f . . . 
                . e e . . . . c d c d f . . . . 
                . e 5 e . . f d c b f . . . . . 
                . f 5 e . f b c b f . . . . . . 
                . f 5 5 e e c c f . . . . . . . 
                . . e e 2 3 e f . . . . . . . . 
                . . f f e 2 e . . . . . . . . . 
                . . f e f e e f f . . . . . . . 
                f f e f f f 5 5 e f . . . . . . 
                f f f . . . e e f f . . . . . . 
                . f f . . . . . . . . . . . . . 
                `, SpriteKind.crosshair)
            controller.moveSprite(croshair)
            otpions()
        }
    } else if (otherSprite2 == backToMenu) {
        if (controller.A.isPressed()) {
            sprites.destroyAllSpritesOfKind(SpriteKind.crosshair)
            sprites.destroyAllSpritesOfKind(SpriteKind.button)
            main_menu()
        }
    } else {
    	
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.breackableNotch, function (sprite, otherSprite) {
    music.play(music.createSoundEffect(WaveShape.Noise, 553, 419, 255, 139, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    sprites.destroy(otherSprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile31`, function (sprite2, location2) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile32`, function (sprite32, location) {
    level_2()
})
sprites.onOverlap(SpriteKind.Monstruo, SpriteKind.EnemyBounce, function (sprite8, otherSprite6) {
    sprite8.vx = sprite8.vx * -1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (knightExists) {
        if (jump_count < 2) {
            knight.vy = -200
            music.play(music.createSoundEffect(WaveShape.Noise, 330, 1801, 148, 148, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            jump_count += 1
        }
    }
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
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    sprites.destroy(MyBoss, effects.disintegrate, 500)
    sprites.destroy(statusbar)
    BossAlive = false
    info.changeScoreBy(50)
    espada = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . c c c . 
        . . . . . . . . . . . c 1 1 c . 
        . . . . . . . . . . c 1 b d c . 
        . . . . . . . . . c 1 c d c . . 
        . . . . . . . . c 1 c d f . . . 
        . e e . . . . c d c d f . . . . 
        . e 5 e . . f d c b f . . . . . 
        . f 5 e . f b c b f . . . . . . 
        . f 5 5 e e c c f . . . . . . . 
        . . e e 2 3 e f . . . . . . . . 
        . . f f e 2 e . . . . . . . . . 
        . . f e f e e f f . . . . . . . 
        f f e f f f 5 5 e f . . . . . . 
        f f f . . . e e f f . . . . . . 
        . f f . . . . . . . . . . . . . 
        `, SpriteKind.Espada)
    tiles.placeOnTile(espada, tiles.getTileLocation(30, 13))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC6, function (sprite102, otherSprite82) {
    otherSprite82.sayText("Why look for money, if you don't have a sword", 200, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC4, function (sprite6, otherSprite4) {
    otherSprite4.sayText("I am the mage, the sword is somwhere in the second phase. Perhaps that strange portal can bring you there", 200, false)
})
function level_2 () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Monstruo)
    sprites.destroyAllSpritesOfKind(SpriteKind.Coin)
    sprites.destroyAllSpritesOfKind(SpriteKind.Abrusto)
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC1)
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC2)
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC3)
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC4)
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC6)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    // Configurar el nivel 2
    scene.setBackgroundColor(9)
    tiles.setCurrentTilemap(tilemap`level10`)
    music.stopAllSounds()
    music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.LoopingInBackground)
    knight.setPosition(26, 29)
    knight.ay = 500
    // Crear NPC del nivel 2
    for (let value282 of tiles.getTilesByType(assets.tile`myTile29`)) {
        NPC62 = sprites.create(img`
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
            `, SpriteKind.NPC6)
        animation.runImageAnimation(
        NPC62,
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
        tiles.placeOnTile(NPC62, value282)
        tiles.setTileAt(value282, assets.tile`transparency16`)
    }
    boss1()
}
function boss1 () {
    MyBoss = sprites.create(img`
        .......ff..................
        ......f69ff................
        .....f9966cf...............
        ....f9199666f...ffff.......
        ....f911996cffff6c6cff.....
        ....c3193a6cfc6cccccc6f....
        ....fa99a99fccccc66ccccf...
        ....f991999fc666cc6966ccf..
        .....f99961fc69b6c666b6c6f.
        .....f999f9f699966c6cfbccf.
        ....f9c1fcfc619996ccf.fbcf.
        ...f16f9fcc699b91ccf..f9cf.
        ...f96f9fc66b9699cccf.f966f
        ..f19cf9f69996b69cc6f.f99cf
        ..f99f.f.f9999bc9cccf.f19cf
        .f99bf...f99999bcbccf..f6f.
        f991f....f9b999666cc6f.f6f.
        fb99f...f199919666cccf.f9f.
        .fb9f...f199996696cccf..f..
        ..f9f...f19996c66ccccf.....
        ..f6f..f19996ccc6c6cf......
        ..f9f..f19966cccc66991f....
        ..f6f..f9996ccfccc6999f....
        ...f..f19966ccffcc66991f...
        ......f9966ccf..fcc6699f...
        ......f99c6c6f..f6c6c99f...
        .....9966ccccf..fccc6699f..
        .....99c6c6c6f..f6c6cc69f..
        .....966cccff....fffffff...
        .....6cc6c6................
        `, SpriteKind.Boss1)
    MyBoss.setScale(2, ScaleAnchor.Middle)
    MyBoss.ay = 350
    tiles.placeOnTile(MyBoss, tiles.getTileLocation(30, 8))
    BossAlive = true
    statusbar = statusbars.create(140, 10, StatusBarKind.EnemyHealth)
    statusbar.attachToSprite(MyBoss)
    statusbar.positionDirection(CollisionDirection.Top)
    statusbar.setOffsetPadding(0, -20)
    statusbar.setColor(2, 12, 5)
    statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    statusbar.setBarBorder(2, 15)
    statusbar.max = 1000
    statusbar.value = 1000
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Espada, function (sprite5, otherSprite32) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Boss1, function (sprite10, otherSprite8) {
    if (knight.vy > 0 && knight.y < MyBoss.y) {
        knight.vy = -150
        statusbar.value += -150
    } else {
        info.changeLifeBy(-1)
    }
    pause(1000)
})
function main_menu () {
    scene.setBackgroundImage(img`
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbcccccccccccbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbcccccbccccccccbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbcccbbbbbccccccccbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbcccbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbcccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbcccccccccccccbbbccccbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbcccccccccccccbbbcccbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbccccccccccccccbbbcccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbccccccbbbbbcccbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbccccbbbbbbbcccbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbccccbbbbbbbcccbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbccccbbbbbbbcccbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbccccbbbbbbbcccbbbccccbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbcccbbbbbbbcccbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbcccbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf69ffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf9966cfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf9199666fbbbffffbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf911996cffff6c6cffbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc3193a6cfc6cccccc6fbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfa99a99fccccc66ccccfbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf991999fc666cc6966ccfbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf99961fc69b6c666b6c6fbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999f9f699966c6cfbccfbbbbbbbbbbbbbbbbb
        bbbbbbbbbfffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf9c1fcfc619996ccfbfbcfbbbbbbbbbbbbbbbbb
        bbbbbbbbff22222ffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbccccbbbbbbbbbbbbcccbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbf16f9fcc699b91ccfbbf9cfbbbbbbbbbbbbbbbbb
        bbbbbbbbf2ff2222fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbcccbbbbbbbbbbbbcccbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbf96f9fc66b9699cccfbf966fbbbbbbbbbbbbbbbb
        bbbbbbbbfffff22fffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbcccbbbbbbbbbbbbcccbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbf19cf9f69996b69cc6fbf99cfbbbbbbbbbbbbbbbb
        bbbbbbbbbbfdddbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbccccbbbbbbbbbbbbccccccccbbbcccbbbbbbbbbbbbbbbbbbbbbf99fbfbf9999bc9cccfbf19cfbbbbbbbbbbbbbbbb
        bbbbbbbbbbfdfffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbcccccbbbbbbbbccccccccccccbbbcccbbbbbbbbbbbbbbbbbbbbf99bfbbbf99999bcbccfbbf6fbbbbbbbbbbbbbbbbb
        bbbbbbbbbbfbfdddbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbbcccccccbbbbbbbbccccccccccccbbbccccbbbbbbbbbbbbbbbbbbf991fbbbbf9b999666cc6fbf6fbbbbbbbbbbbbbbbbb
        bbbbbbbbbbfbfdfbfbfbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccbbbbbbbbbccccccccccbbbbbccccbbbbbbbbbbbbbbbbbbfb99fbbbf199919666cccfbf9fbbbbbbbbbbbbbbbbb
        bbbbbbbbbbfbfbfbfbfbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbccccbbbbbbbbccccbbbbbbbbbbbbbbbbbbbfb9fbbbf199996696cccfbbfbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbfbfbfbfbfbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbcccbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbf9fbbbf19996c66ccccfbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbfbfbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbf6fbbf19996ccc6c6cfbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbcccbccccccbbbbbbbbbbbbbf9fbbf19966cccc66991fbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbfccc444444fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbccccccbbbbbbbbbcccbbbbbbbbbbcccccccccccbbbbbbbbbbbbf6fbbf9996ccfccc6999fbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbfccc4ffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbccccccccccbbbbbbbcccbbbbbbbbbbcccccccccccbbbbbbbbbbbbbfbbf19966ccffcc66991fbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbfccc4fbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbccccccccccccbbbbbbcccbbbbbbbbbbcccccccccccbbbbbbbbbbbbbbbbf9966ccfbbfcc6699fbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbfccc4fbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbcccccccccccccbbbbbbcccbbbbbbbbbcccccbbbbcccbbbbbbbbbbbbbbbbf99c6c6fbbf6c6c99fbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbfccc4fffbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbcccccbbbbccccbbbbbbcccbbbbcccbbccccbbbbbcccbbbbbbbbbbbbbbb9966ccccfbbfccc6699fbbbbbbbbbbbbbbbbbb
        bbbbbbbbbf4444fffbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbccccbbbbbccccbbbbbbccccbbbcccbbcccbbbbbbcccbbbbbbbbbbbbbbb99c6c6c6fbbf6c6cc69fbbbbbbbbbbbbbbbbbb
        bbbbbbbbbffffffbfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbcccbbbbbcccccbbcccbccccccccccbbcccbbbbbbcccbbbbbbbbbbbbbbb966cccffbbbbfffffffbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbcccbbbbcccccccccccbccccccccccbbcccbbbbbbcccbbbbbbbbbbbbbbb6cc6c6bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbccccbbccccccccccccbbcccccccccbbcccbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbccccccccccccccccccbbbbccccccbbbcccbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbccccccccccbbcccccbbbbbbbbbbbbbbcccbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `)
    music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.UntilDone)
    Play = sprites.create(img`
        f f f . . f . . . . f f f f . f . . . f . 
        f . . f . f . . . . f . . f . f f . f f . 
        f . . f . f . . . . f . . f . . f f f . . 
        f f f . . f . . . . f . . f . . . f . . . 
        f . . . . f . . . . f f f f . . . f . . . 
        f . . . . f . . . . f . . f . . . f . . . 
        f . . . . f f f f . f . . f . . . f . . . 
        `, SpriteKind.button)
    Options = sprites.create(img`
        . f f f . . f f f . . f f f f f . f . . f f f . . f . . . . . f . . f f f . 
        f . . . f . f . . f . . . f . . . f . f . . . f . f f . . . . f . f . . . f 
        f . . . f . f . . f . . . f . . . f . f . . . f . f . f . . . f . f . . . . 
        f . . . f . f f f . . . . f . . . f . f . . . f . f . . f . . f . . f f f . 
        f . . . f . f . . . . . . f . . . f . f . . . f . f . . . f . f . . . . . f 
        f . . . f . f . . . . . . f . . . f . f . . . f . f . . . . f f . f . . . f 
        . f f f . . f . . . . . . f . . . f . . f f f . . f . . . . . f . . f f f . 
        `, SpriteKind.button)
    Play.setPosition(41, 85)
    Options.setPosition(111, 85)
    knightExists = false
    croshair = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . c c c . 
        . . . . . . . . . . . c 1 1 c . 
        . . . . . . . . . . c 1 b d c . 
        . . . . . . . . . c 1 c d c . . 
        . . . . . . . . c 1 c d f . . . 
        . e e . . . . c d c d f . . . . 
        . e 5 e . . f d c b f . . . . . 
        . f 5 e . f b c b f . . . . . . 
        . f 5 5 e e c c f . . . . . . . 
        . . e e 2 3 e f . . . . . . . . 
        . . f f e 2 e . . . . . . . . . 
        . . f e f e e f f . . . . . . . 
        f f e f f f 5 5 e f . . . . . . 
        f f f . . . e e f f . . . . . . 
        . f f . . . . . . . . . . . . . 
        `, SpriteKind.crosshair)
    controller.moveSprite(croshair)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite3, otherSprite3) {
    info.changeScoreBy(1)
    music.play(music.createSoundEffect(WaveShape.Square, 4253, 3852, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    sprites.destroy(otherSprite3)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Monstruo, function (sprite11, otherSprite9) {
    sprites.destroy(otherSprite9)
    if (knight.y + 5 < otherSprite9.y) {
        info.changeScoreBy(1)
    } else {
        info.changeLifeBy(-1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC2, function (sprite43, otherSprite23) {
    otherSprite23.sayText("Thank you! Look for the Frank to find your sword.", 200, false)
})
function level_1 () {
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    scene.setBackgroundColor(9)
    knightExists = true
    knight = sprites.create(assets.image`LilDemon`, SpriteKind.Player)
    music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.LoopingInBackground)
    info.setLife(lives)
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
    for (let value3 of tiles.getTilesByType(assets.tile`myTile30`)) {
        BreackableBlock = sprites.create(img`
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
            `, SpriteKind.breackableNotch)
        tiles.placeOnTile(BreackableBlock, value3)
        tiles.setTileAt(value3, assets.tile`transparency16`)
    }
    BouncingEnemies()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC3, function (sprite52, otherSprite322) {
    otherSprite322.sayText("FRAAANKENSTEEEINN", 200, false)
})
let BreackableBlock: Sprite = null
let NPC42: Sprite = null
let NPC32: Sprite = null
let NPC22: Sprite = null
let NPC12: Sprite = null
let coin: Sprite = null
let abrusto: Sprite = null
let NPC62: Sprite = null
let espada: Sprite = null
let statusbar: StatusBarSprite = null
let MyBoss: Sprite = null
let EnemyBouncePad: Sprite = null
let monstruo: Sprite = null
let croshair: Sprite = null
let Options: Sprite = null
let Play: Sprite = null
let mute: Sprite = null
let unMute: Sprite = null
let Muted = false
let backToMenu: Sprite = null
let livesChange: Sprite = null
let jump_count = 0
let knightExists = false
let knight: Sprite = null
let bee: Sprite = null
let BossAlive = false
let lives = 0
music.setVolume(150)
lives = 3
BossAlive = false
main_menu()
game.onUpdate(function () {
    if (BossAlive) {
        if (knight.x < MyBoss.x) {
            MyBoss.vx = -40
            MyBoss.setImage(img`
                .......ff..................
                ......f69ff................
                .....f9966cf...............
                ....f9199666f...ffff.......
                ....f911996cffff6c6cff.....
                ....c3193a6cfc6cccccc6f....
                ....fa99a99fccccc66ccccf...
                ....f991999fc666cc6966ccf..
                .....f99961fc69b6c666b6c6f.
                .....f999f9f699966c6cfbccf.
                ....f9c1fcfc619996ccf.fbcf.
                ...f16f9fcc699b91ccf..f9cf.
                ...f96f9fc66b9699cccf.f966f
                ..f19cf9f69996b69cc6f.f99cf
                ..f99f.f.f9999bc9cccf.f19cf
                .f99bf...f99999bcbccf..f6f.
                f991f....f9b999666cc6f.f6f.
                fb99f...f199919666cccf.f9f.
                .fb9f...f199996696cccf..f..
                ..f9f...f19996c66ccccf.....
                ..f6f..f19996ccc6c6cf......
                ..f9f..f19966cccc66991f....
                ..f6f..f9996ccfccc6999f....
                ...f..f19966ccffcc66991f...
                ......f9966ccf..fcc6699f...
                ......f99c6c6f..f6c6c99f...
                .....9966ccccf..fccc6699f..
                .....99c6c6c6f..f6c6cc69f..
                .....966cccff....fffffff...
                .....6cc6c6................
                `)
        } else if (knight.x > MyBoss.x) {
            MyBoss.vx = 40
            MyBoss.setImage(img`
                ..................ff.......
                ................ff96f......
                ...............fc6699f.....
                .......ffff...f6669919f....
                .....ffc6c6ffffc699119f....
                ....f6cccccc6cfc6a3913c....
                ...fcccc66cccccf99a99af....
                ..fcc6696cc666cf999199f....
                .f6c6b666c6b96cf16999f.....
                .fccbfc6c669996f9f999f.....
                .fcbf.fcc699916cfcf1c9f....
                .fc9f..fcc19b996ccf9f61f...
                f669f.fccc9969b66cf9f69f...
                fc99f.f6cc96b69996f9fc91f..
                fc91f.fccc9cb9999f.f.f99f..
                .f6f..fccbcb99999f...fb99f.
                .f6f.f6cc666999b9f....f199f
                .f9f.fccc666919991f...f99bf
                ..f..fccc696699991f...f9bf.
                .....fcccc66c69991f...f9f..
                ......fc6c6ccc69991f..f6f..
                .....fcc9ccccc66991f..f9f..
                .....f9c9ccfccc6999f..f6f..
                ....fcc99bf.fcc66991f..f...
                ....f6c999f..fcc6699f......
                ...f6c9919f..f6c6c99f......
                ...f6c9919f..fccc6699f.....
                ...fccc99f...f6c6cc69f.....
                ...f6c669f....fffffff......
                ....fffff..................
                `)
        }
        if (Math.percentChance(1)) {
            MyBoss.vy = -100
        }
    }
})
game.onUpdate(function () {
    if (knightExists) {
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
    }
})
