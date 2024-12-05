@namespace
class SpriteKind:
    Abrusto = SpriteKind.create()
    slime = SpriteKind.create()
    slimespawn = SpriteKind.create()
    Coin = SpriteKind.create()
    Monstrup = SpriteKind.create()
    Monstruo = SpriteKind.create()
    EnemyBounce = SpriteKind.create()
    NPC1 = SpriteKind.create()
    NPC2 = SpriteKind.create()
    NPC3 = SpriteKind.create()
    NPC4 = SpriteKind.create()
    NPC5 = SpriteKind.create()
    NPC6 = SpriteKind.create()
    button = SpriteKind.create()
    boss = SpriteKind.create()
    Boss1 = SpriteKind.create()
    Espada = SpriteKind.create()
    crosshair = SpriteKind.create()
    breackableNotch = SpriteKind.create()

def on_on_overlap(sprite7, otherSprite5):
    global bee
    sprites.destroy(otherSprite5)
    bee = sprites.create(img("""
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
        """),
        SpriteKind.enemy)
    animation.run_image_animation(bee, assets.animation("""
        myAnim
    """), 100, True)
    bee.set_position(knight.x + 100, knight.y - 40)
    bee.follow(knight, 70)
sprites.on_overlap(SpriteKind.player, SpriteKind.Abrusto, on_on_overlap)

def on_overlap_tile(sprite3, location):
    level_2()
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.collectible_blue_crystal,
    on_overlap_tile)

def on_up_pressed():
    global jump_count
    if knightExists:
        if jump_count < 2:
            knight.vy = -200
            music.play(music.create_sound_effect(WaveShape.NOISE,
                    330,
                    1801,
                    148,
                    148,
                    100,
                    SoundExpressionEffect.NONE,
                    InterpolationCurve.LINEAR),
                music.PlaybackMode.IN_BACKGROUND)
            jump_count += 1
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def otpions():
    global livesChange, backToMenu, unMute, mute
    scene.set_background_image(img("""
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
    """))
    livesChange = sprites.create(img("""
            . f f f . . f f f f . f f f f f . . . 2 2 . 2 2 . 
                    f . . . f . f . . . . . . f . . . . 2 2 2 2 2 2 2 
                    f . . . . . f . . . . . . f . . . . 2 2 2 2 2 2 2 
                    . f f f . . f f f . . . . f . . . . 2 2 2 2 2 2 2 
                    . . . . f . f . . . . . . f . . . . . 2 2 2 2 2 . 
                    f . . . f . f . . . . . . f . . . . . . 2 2 2 . . 
                    . f f f . . f f f f . . . f . . . . . . . 2 . . .
        """),
        SpriteKind.button)
    backToMenu = sprites.create(img("""
            f f f . . f f f f . . f f f . f . . f . . . . . . 
                    f . . f . f . . f . f . . . . f . . f . . . . . . 
                    f . . f . f . . f . f . . . . f . f . . . . . . . 
                    f f f . . f . . f . f . . . . f f . . . . . . . . 
                    f . . f . f f f f . f . . . . f . f . . . . . . . 
                    f . . f . f . . f . f . . . . f . . f . . . . . . 
                    f f f . . f . . f . . f f f . f . . f . . . . . .
        """),
        SpriteKind.button)
    if Muted == True:
        unMute = sprites.create(img("""
                f . . f . f . . . f . f f . . . f f . f . . . f . f f f f f . f f f f . . 
                            f . . f . f f . . f . f . f . f . f . f . . . f . . . f . . . f . . . . . 
                            f . . f . f . f . f . f . . f . . f . f . . . f . . . f . . . f . . . . . 
                            f . . f . f . f . f . f . . . . . f . f . . . f . . . f . . . f f f . . . 
                            f . . f . f . f . f . f . . . . . f . f . . . f . . . f . . . f . . . . . 
                            f . . f . f . . f f . f . . . . . f . f . . . f . . . f . . . f . . . . . 
                            f f f f . f . . . f . f . . . . . f . f f f f f . . . f . . . f f f f . .
            """),
            SpriteKind.button)
        unMute.set_position(111, 85)
    elif Muted == False:
        mute = sprites.create(img("""
                f f . . . f f . f . . . f . f f f f f . f f f f . 
                            f . f . f . f . f . . . f . . . f . . . f . . . . 
                            f . . f . . f . f . . . f . . . f . . . f . . . . 
                            f . . . . . f . f . . . f . . . f . . . f f f . . 
                            f . . . . . f . f . . . f . . . f . . . f . . . . 
                            f . . . . . f . f . . . f . . . f . . . f . . . . 
                            f . . . . . f . f f f f f . . . f . . . f f f f .
            """),
            SpriteKind.button)
        mute.set_position(111, 85)
    else:
        pass
    livesChange.set_position(41, 85)
    backToMenu.set_position(18, 14)

def on_on_overlap2(sprite4, otherSprite2):
    global croshair, lives, Muted
    if otherSprite2 == Play:
        if controller.A.is_pressed():
            sprites.destroy_all_sprites_of_kind(SpriteKind.crosshair)
            sprites.destroy_all_sprites_of_kind(SpriteKind.button)
            level_1()
    elif otherSprite2 == Options:
        if controller.A.is_pressed():
            sprites.destroy_all_sprites_of_kind(SpriteKind.button)
            sprites.destroy_all_sprites_of_kind(SpriteKind.crosshair)
            croshair = sprites.create(img("""
                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . f f . . . . 
                                    . . . . . . . f f f f f . . . . 
                                    . . . . . f f f . . f . . . . . 
                                    . . . . f f . . . f f . . . . . 
                                    . . . . . f f . . f . . . . . . 
                                    . . . . . f f f f f . . . . . . 
                                    . . . . f f . f f . . . . . . . 
                                    . . . f f . . . . . . . . . . . 
                                    . . f f . . . . . . . . . . . . 
                                    . f f . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . .
                """),
                SpriteKind.crosshair)
            controller.move_sprite(croshair)
            otpions()
    elif otherSprite2 == livesChange:
        if controller.A.is_pressed():
            sprites.destroy_all_sprites_of_kind(SpriteKind.crosshair)
            lives = game.ask_for_number("Set lives:", 1)
            croshair = sprites.create(img("""
                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . f f . . . . 
                                    . . . . . . . f f f f f . . . . 
                                    . . . . . f f f . . f . . . . . 
                                    . . . . f f . . . f f . . . . . 
                                    . . . . . f f . . f . . . . . . 
                                    . . . . . f f f f f . . . . . . 
                                    . . . . f f . f f . . . . . . . 
                                    . . . f f . . . . . . . . . . . 
                                    . . f f . . . . . . . . . . . . 
                                    . f f . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . .
                """),
                SpriteKind.crosshair)
            controller.move_sprite(croshair)
            otpions()
    elif otherSprite2 == mute:
        if controller.A.is_pressed():
            sprites.destroy_all_sprites_of_kind(SpriteKind.crosshair)
            music.set_volume(0)
            sprites.destroy_all_sprites_of_kind(SpriteKind.button)
            Muted = True
            croshair = sprites.create(img("""
                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . f f . . . . 
                                    . . . . . . . f f f f f . . . . 
                                    . . . . . f f f . . f . . . . . 
                                    . . . . f f . . . f f . . . . . 
                                    . . . . . f f . . f . . . . . . 
                                    . . . . . f f f f f . . . . . . 
                                    . . . . f f . f f . . . . . . . 
                                    . . . f f . . . . . . . . . . . 
                                    . . f f . . . . . . . . . . . . 
                                    . f f . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . .
                """),
                SpriteKind.crosshair)
            controller.move_sprite(croshair)
            otpions()
    elif otherSprite2 == unMute:
        if controller.A.is_pressed():
            sprites.destroy_all_sprites_of_kind(SpriteKind.crosshair)
            music.set_volume(150)
            sprites.destroy_all_sprites_of_kind(SpriteKind.button)
            Muted = False
            croshair = sprites.create(img("""
                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . f f . . . . 
                                    . . . . . . . f f f f f . . . . 
                                    . . . . . f f f . . f . . . . . 
                                    . . . . f f . . . f f . . . . . 
                                    . . . . . f f . . f . . . . . . 
                                    . . . . . f f f f f . . . . . . 
                                    . . . . f f . f f . . . . . . . 
                                    . . . f f . . . . . . . . . . . 
                                    . . f f . . . . . . . . . . . . 
                                    . f f . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . .
                """),
                SpriteKind.crosshair)
            controller.move_sprite(croshair)
            otpions()
    elif otherSprite2 == backToMenu:
        if controller.A.is_pressed():
            sprites.destroy_all_sprites_of_kind(SpriteKind.crosshair)
            sprites.destroy_all_sprites_of_kind(SpriteKind.button)
            main_menu()
    else:
        pass
sprites.on_overlap(SpriteKind.crosshair, SpriteKind.button, on_on_overlap2)

def on_on_overlap3(sprite, otherSprite):
    music.play(music.create_sound_effect(WaveShape.NOISE,
            553,
            419,
            255,
            139,
            200,
            SoundExpressionEffect.NONE,
            InterpolationCurve.LINEAR),
        music.PlaybackMode.IN_BACKGROUND)
    sprites.destroy(otherSprite)
sprites.on_overlap(SpriteKind.player,
    SpriteKind.breackableNotch,
    on_on_overlap3)

def on_on_overlap4(sprite2, otherSprite3):
    info.change_score_by(1)
    music.play(music.create_sound_effect(WaveShape.SQUARE,
            4253,
            3852,
            255,
            0,
            200,
            SoundExpressionEffect.NONE,
            InterpolationCurve.LINEAR),
        music.PlaybackMode.IN_BACKGROUND)
    sprites.destroy(otherSprite3)
sprites.on_overlap(SpriteKind.player, SpriteKind.Coin, on_on_overlap4)

def on_on_overlap5(sprite8, otherSprite6):
    sprite8.vx = sprite8.vx * -1
sprites.on_overlap(SpriteKind.Monstruo, SpriteKind.EnemyBounce, on_on_overlap5)

def on_overlap_tile2(sprite22, location2):
    game.game_over(False)
    game.set_game_over_effect(False, effects.melt)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.collectible_red_crystal,
    on_overlap_tile2)

def BouncingEnemies():
    global monstruo, EnemyBouncePad
    for value2 in tiles.get_tiles_by_type(assets.tile("""
        bee
    """)):
        monstruo = sprites.create(img("""
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
            """),
            SpriteKind.Monstruo)
        animation.run_image_animation(monstruo,
            [img("""
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
                """),
                img("""
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
                """)],
            100,
            True)
        tiles.place_on_tile(monstruo, value2)
        tiles.set_tile_at(value2, assets.tile("""
            transparency16
        """))
        monstruo.vx = -50
    for value22 in tiles.get_tiles_by_type(assets.tile("""
        myTile23
    """)):
        EnemyBouncePad = sprites.create(img("""
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
            """),
            SpriteKind.EnemyBounce)
        tiles.place_on_tile(EnemyBouncePad, value22)
        tiles.set_tile_at(value22, assets.tile("""
            transparency16
        """))
        EnemyBouncePad.set_flag(SpriteFlag.INVISIBLE, True)

def on_on_overlap6(sprite42, otherSprite22):
    sprites.destroy(otherSprite22)
    if knight.y + 5 < otherSprite22.y:
        info.change_score_by(1)
    else:
        info.change_life_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap6)

def on_on_overlap7(sprite9, otherSprite7):
    otherSprite7.say_text("Hi mighty knight, I see you lost your sword.", 200, False)
sprites.on_overlap(SpriteKind.player, SpriteKind.NPC1, on_on_overlap7)

def on_on_zero(status):
    global BossAlive, espada
    sprites.destroy(MyBoss, effects.disintegrate, 500)
    sprites.destroy(statusbar)
    BossAlive = False
    info.change_score_by(50)
    espada = sprites.create(img("""
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
        """),
        SpriteKind.Espada)
    tiles.place_on_tile(espada, tiles.get_tile_location(30, 13))
statusbars.on_zero(StatusBarKind.enemy_health, on_on_zero)

def on_on_overlap8(sprite102, otherSprite82):
    otherSprite82.say_text("Why look for money, if you don't have a sword", 200, False)
sprites.on_overlap(SpriteKind.player, SpriteKind.NPC6, on_on_overlap8)

def on_on_overlap9(sprite6, otherSprite4):
    otherSprite4.say_text("I am the mage, the sword is somwhere in the second phase",
        200,
        False)
sprites.on_overlap(SpriteKind.player, SpriteKind.NPC4, on_on_overlap9)

def level_2():
    global NPC62
    sprites.destroy_all_sprites_of_kind(SpriteKind.Monstruo)
    sprites.destroy_all_sprites_of_kind(SpriteKind.Coin)
    sprites.destroy_all_sprites_of_kind(SpriteKind.Abrusto)
    sprites.destroy_all_sprites_of_kind(SpriteKind.NPC1)
    sprites.destroy_all_sprites_of_kind(SpriteKind.NPC2)
    sprites.destroy_all_sprites_of_kind(SpriteKind.NPC3)
    sprites.destroy_all_sprites_of_kind(SpriteKind.NPC4)
    sprites.destroy_all_sprites_of_kind(SpriteKind.NPC6)
    sprites.destroy_all_sprites_of_kind(SpriteKind.enemy)
    # Configurar el nivel 2
    scene.set_background_color(9)
    tiles.set_current_tilemap(tilemap("""
        level10
    """))
    music.stop_all_sounds()
    music.play(music.create_song(hex("""
            0078000408040106001c00010a006400f401640000040000000000000000000000000000000002af00000004000212160400080001160c0010000312141614001800011618001c0001161c002000030f12162000240001162400280002121628002c0001163000340002121634003800011238003c0001123c004000011440004400011244004800011248004c000212144c0050000112540058000311121658005c0001165c006000011260006400011468006c0001166c007000011670007400011474007800011678007c00030f12167c008000021114
        """)),
        music.PlaybackMode.LOOPING_IN_BACKGROUND)
    knight.set_position(10, 10)
    knight.ay = 500
    # Crear NPC del nivel 2
    for value282 in tiles.get_tiles_by_type(assets.tile("""
        myTile29
    """)):
        NPC62 = sprites.create(img("""
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
            """),
            SpriteKind.NPC6)
        animation.run_image_animation(NPC62,
            [img("""
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
                """),
                img("""
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
                """)],
            200,
            True)
        tiles.place_on_tile(NPC62, value282)
        tiles.set_tile_at(value282, assets.tile("""
            transparency16
        """))
    boss1()
def boss1():
    global MyBoss, BossAlive, statusbar
    MyBoss = sprites.create(img("""
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
        """),
        SpriteKind.Boss1)
    MyBoss.set_scale(2, ScaleAnchor.MIDDLE)
    MyBoss.ay = 350
    tiles.place_on_tile(MyBoss, tiles.get_tile_location(30, 8))
    BossAlive = True
    statusbar = statusbars.create(140, 10, StatusBarKind.enemy_health)
    statusbar.attach_to_sprite(MyBoss)
    statusbar.position_direction(CollisionDirection.TOP)
    statusbar.set_offset_padding(0, -20)
    statusbar.set_color(2, 12, 5)
    statusbar.set_status_bar_flag(StatusBarFlag.SMOOTH_TRANSITION, True)
    statusbar.set_bar_border(2, 15)
    statusbar.max = 1000
    statusbar.value = 1000

def on_on_overlap10(sprite5, otherSprite32):
    game.game_over(True)
    game.set_game_over_effect(True, effects.confetti)
sprites.on_overlap(SpriteKind.player, SpriteKind.Espada, on_on_overlap10)

def on_on_overlap11(sprite10, otherSprite8):
    if knight.vy > 0 and knight.y < MyBoss.y:
        knight.vy = -150
        statusbar.value += -150
    else:
        info.change_life_by(-1)
    pause(1000)
sprites.on_overlap(SpriteKind.player, SpriteKind.Boss1, on_on_overlap11)

def main_menu():
    global Play, Options, knightExists, croshair
    scene.set_background_image(img("""
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
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbcccbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbccccbbbbbbbbbbbbcccbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbcccbbbbbbbbbbbbcccbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbcccbbbbbbbbbbbbcccbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbccccbbbbbbbbbbbbccccccccbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbcccccbbbbbbbbccccccccccccbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbbcccccccbbbbbbbbccccccccccccbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccbbbbbbbbbccccccccccbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbccccbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbcccbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbcccbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbccccccbbbbbbbbbcccbbbbbbbbbbcccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbccccccccccbbbbbbbcccbbbbbbbbbbcccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbccccccccccccbbbbbbcccbbbbbbbbbbcccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbcccccccccccccbbbbbbcccbbbbbbbbbcccccbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbcccccbbbbccccbbbbbbcccbbbbcccbbccccbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbccccbbbbbccccbbbbbbccccbbbcccbbcccbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbcccbbbbbcccccbbcccbccccccccccbbcccbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbcccbbbbcccccccccccbccccccccccbbcccbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
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
    """))
    music.play(music.melody_playable(music.jump_up),
        music.PlaybackMode.UNTIL_DONE)
    Play = sprites.create(img("""
            f f f . . f . . . . f f f f . f . . . f . 
                    f . . f . f . . . . f . . f . f f . f f . 
                    f . . f . f . . . . f . . f . . f f f . . 
                    f f f . . f . . . . f . . f . . . f . . . 
                    f . . . . f . . . . f f f f . . . f . . . 
                    f . . . . f . . . . f . . f . . . f . . . 
                    f . . . . f f f f . f . . f . . . f . . .
        """),
        SpriteKind.button)
    Options = sprites.create(img("""
            . f f f . . f f f . . f f f f f . f . . f f f . . f . . . . . f . . f f f . 
                    f . . . f . f . . f . . . f . . . f . f . . . f . f f . . . . f . f . . . f 
                    f . . . f . f . . f . . . f . . . f . f . . . f . f . f . . . f . f . . . . 
                    f . . . f . f f f . . . . f . . . f . f . . . f . f . . f . . f . . f f f . 
                    f . . . f . f . . . . . . f . . . f . f . . . f . f . . . f . f . . . . . f 
                    f . . . f . f . . . . . . f . . . f . f . . . f . f . . . . f f . f . . . f 
                    . f f f . . f . . . . . . f . . . f . . f f f . . f . . . . . f . . f f f .
        """),
        SpriteKind.button)
    Play.set_position(41, 85)
    Options.set_position(111, 85)
    knightExists = False
    croshair = sprites.create(img("""
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . f f . . . . 
                    . . . . . . . f f f f f . . . . 
                    . . . . . f f f . . f . . . . . 
                    . . . . f f . . . f f . . . . . 
                    . . . . . f f . . f . . . . . . 
                    . . . . . f f f f f . . . . . . 
                    . . . . f f . f f . . . . . . . 
                    . . . f f . . . . . . . . . . . 
                    . . f f . . . . . . . . . . . . 
                    . f f . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . .
        """),
        SpriteKind.crosshair)
    controller.move_sprite(croshair)

def on_on_overlap12(sprite11, otherSprite9):
    sprites.destroy(otherSprite9)
    if knight.y + 5 < otherSprite9.y:
        info.change_score_by(1)
    else:
        info.change_life_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.Monstruo, on_on_overlap12)

def on_on_overlap13(sprite52, otherSprite322):
    otherSprite322.say_text("FRAAANKENSTEEEINN", 200, False)
sprites.on_overlap(SpriteKind.player, SpriteKind.NPC3, on_on_overlap13)

def on_on_overlap14(sprite43, otherSprite23):
    otherSprite23.say_text("Thank you! Look for the Frank to find your sword.",
        200,
        False)
sprites.on_overlap(SpriteKind.player, SpriteKind.NPC2, on_on_overlap14)

def level_1():
    global knightExists, knight, abrusto, coin, NPC12, NPC22, NPC32, NPC42, NPC62, BreackableBlock
    scene.set_background_image(img("""
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
    """))
    scene.set_background_color(9)
    knightExists = True
    knight = sprites.create(assets.image("""
        LilDemon
    """), SpriteKind.player)
    music.play(music.create_song(hex("""
            0078000408040200001c00010a006400f401640000040000000000000000000000000005000004b40000000400012504000800012508000c0001240c001000012210001400012214001800012018001c00011e1c002000011e24002800012228002c00011d2c003000012230003400012534003800012938003c0001273c004000012540004400012044004800012048004c0001274c005000012250005400011e58005c00011e5c006000012260006400012264006800011e68006c00011d6c007000011b70007400011b74007800011d78007c0001247c008000012706001c00010a006400f4016400000400000000000000000000000000000000026800000004000312141608000c00031214160c00100003121416140018000312141618001c000312141624002800031214162c0030000312141638003c0003121416400044000312141644004800031214164c00500003121416540058000312141658005c0003121416
        """)),
        music.PlaybackMode.LOOPING_IN_BACKGROUND)
    info.set_life(lives)
    info.set_score(0)
    scene.camera_follow_sprite(knight)
    controller.move_sprite(knight, 100, 0)
    tiles.set_current_tilemap(tilemap("""
        level0
    """))
    knight.ay = 500
    for value in tiles.get_tiles_by_type(assets.tile("""
        myTile2
    """)):
        abrusto = sprites.create(img("""
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
            """),
            SpriteKind.Abrusto)
        tiles.place_on_tile(abrusto, value)
        tiles.set_tile_at(value, assets.tile("""
            transparency16
        """))
    for value23 in tiles.get_tiles_by_type(sprites.swamp.swamp_tile16):
        coin = sprites.create(img("""
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
            """),
            SpriteKind.Coin)
        animation.run_image_animation(coin,
            [img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """)],
            200,
            True)
        tiles.place_on_tile(coin, value23)
        tiles.set_tile_at(value23, assets.tile("""
            transparency16
        """))
    for value24 in tiles.get_tiles_by_type(assets.tile("""
        myTile24
    """)):
        NPC12 = sprites.create(img("""
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
            """),
            SpriteKind.NPC1)
        animation.run_image_animation(NPC12,
            [img("""
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
                """),
                img("""
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
                """)],
            200,
            True)
        tiles.place_on_tile(NPC12, value24)
        tiles.set_tile_at(value24, assets.tile("""
            transparency16
        """))
    for value25 in tiles.get_tiles_by_type(assets.tile("""
        myTile26
    """)):
        NPC22 = sprites.create(img("""
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
            """),
            SpriteKind.NPC2)
        animation.run_image_animation(NPC22,
            [img("""
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
                """),
                img("""
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
                """)],
            200,
            True)
        tiles.place_on_tile(NPC22, value25)
        tiles.set_tile_at(value25, assets.tile("""
            transparency16
        """))
    for value26 in tiles.get_tiles_by_type(assets.tile("""
        myTile27
    """)):
        NPC32 = sprites.create(img("""
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
            """),
            SpriteKind.NPC3)
        animation.run_image_animation(NPC32,
            [img("""
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
                """),
                img("""
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
                """)],
            200,
            True)
        tiles.place_on_tile(NPC32, value26)
        tiles.set_tile_at(value26, assets.tile("""
            transparency16
        """))
    for value27 in tiles.get_tiles_by_type(assets.tile("""
        myTile28
    """)):
        NPC42 = sprites.create(img("""
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
            """),
            SpriteKind.NPC4)
        animation.run_image_animation(NPC42,
            [img("""
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
                """),
                img("""
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
                """)],
            200,
            True)
        tiles.place_on_tile(NPC42, value27)
        tiles.set_tile_at(value27, assets.tile("""
            transparency16
        """))
    for value28 in tiles.get_tiles_by_type(sprites.dungeon.hazard_lava1):
        NPC62 = sprites.create(img("""
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
            """),
            SpriteKind.NPC6)
        animation.run_image_animation(NPC62,
            [img("""
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
                """),
                img("""
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
                """)],
            200,
            True)
        tiles.place_on_tile(NPC62, value28)
        tiles.set_tile_at(value28, assets.tile("""
            transparency16
        """))
    for value3 in tiles.get_tiles_by_type(assets.tile("""
        myTile30
    """)):
        BreackableBlock = sprites.create(img("""
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
            """),
            SpriteKind.breackableNotch)
        tiles.place_on_tile(BreackableBlock, value3)
        tiles.set_tile_at(value3, assets.tile("""
            transparency16
        """))
    BouncingEnemies()
BreackableBlock: Sprite = None
NPC42: Sprite = None
NPC32: Sprite = None
NPC22: Sprite = None
NPC12: Sprite = None
coin: Sprite = None
abrusto: Sprite = None
NPC62: Sprite = None
espada: Sprite = None
statusbar: StatusBarSprite = None
MyBoss: Sprite = None
EnemyBouncePad: Sprite = None
monstruo: Sprite = None
croshair: Sprite = None
Options: Sprite = None
Play: Sprite = None
mute: Sprite = None
unMute: Sprite = None
Muted = False
backToMenu: Sprite = None
livesChange: Sprite = None
jump_count = 0
knightExists = False
knight: Sprite = None
bee: Sprite = None
BossAlive = False
lives = 0
music.set_volume(150)
lives = 3
BossAlive = False
main_menu()

def on_on_update():
    if BossAlive:
        if knight.x < MyBoss.x:
            MyBoss.vx = -40
            MyBoss.set_image(img("""
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
            """))
        elif knight.x > MyBoss.x:
            MyBoss.vx = 40
            MyBoss.set_image(img("""
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
            """))
        if Math.percent_chance(1):
            MyBoss.vy = -100
game.on_update(on_on_update)

def on_on_update2():
    global jump_count
    if knightExists:
        knight.set_image(assets.image("""
            LilDemon
        """))
        if knight.is_hitting_tile(CollisionDirection.BOTTOM):
            jump_count = 0
        if knight.vy < 0:
            knight.set_image(img("""
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
            """))
        elif knight.vy > 0:
            knight.set_image(img("""
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
            """))
        if knight.vx < 0:
            knight.image.flip_x()
game.on_update(on_on_update2)
