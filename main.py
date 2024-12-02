@namespace
class SpriteKind:
    Abrusto = SpriteKind.create()
    slime = SpriteKind.create()
    slimespawn = SpriteKind.create()

def on_overlap_tile(sprite3, location):
    game.game_over(True)
    game.set_game_over_effect(True, effects.confetti)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.collectible_blue_crystal,
    on_overlap_tile)

def on_up_pressed():
    global jump_count
    if jump_count < 2:
        knight.vy = -200
        jump_count += 1
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_overlap_tile2(sprite2, location2):
    game.game_over(False)
    game.set_game_over_effect(False, effects.melt)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.collectible_red_crystal,
    on_overlap_tile2)

def on_on_overlap(sprite4, otherSprite2):
    sprites.destroy(otherSprite2)
    if knight.y + 5 < otherSprite2.y:
        info.change_score_by(1)
    else:
        info.change_life_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap)

def on_on_overlap2(sprite, otherSprite):
    global bee
    sprites.destroy(otherSprite)
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
sprites.on_overlap(SpriteKind.player, SpriteKind.Abrusto, on_on_overlap2)

bee: Sprite = None
jump_count = 0
abrusto: Sprite = None
knight: Sprite = None
scene.set_background_color(9)
knight = sprites.create(assets.image("""
    LilDemon
"""), SpriteKind.player)
info.set_life(3)
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

def on_on_update():
    global jump_count
    if knight.is_hitting_tile(CollisionDirection.BOTTOM):
            jump_count = 0
    if knight.vx != 0:
        knight.set_image(assets.image("""
            LilDemon
        """))
    if knight.vy < 0:
        knight.set_image(img("""
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
        """))
    elif knight.vy > 0:
        knight.set_image(img("""
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
        """))
    elif knight.x % 2 == 0:
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
    if knight.vx < 0:
        knight.image.flip_x()
game.on_update(on_on_update)
