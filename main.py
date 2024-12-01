def on_overlap_tile(sprite2, location2):
    game.game_over(False)
    game.set_game_over_effect(False, effects.melt)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.collectible_red_crystal,
    on_overlap_tile)

def on_a_pressed():
    if demon.x == 0:
        demon.vy = 5
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_overlap_tile2(sprite, location):
    game.game_over(True)
    game.set_game_over_effect(True, effects.confetti)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.collectible_blue_crystal,
    on_overlap_tile2)

demon: Sprite = None
scene.set_background_color(9)
demon = sprites.create(assets.image("""
    LilDemon
"""), SpriteKind.player)
scene.camera_follow_sprite(demon)
controller.move_sprite(demon, 100, 0)
tiles.set_current_tilemap(tilemap("""
    level0
"""))
demon.ay = 500

def on_on_update():
    demon.set_image(assets.image("""
        LilDemon
    """))
    if demon.vy < 0:
        demon.set_image(img("""
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
    elif demon.vy > 0:
        demon.set_image(img("""
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
    elif demon.x % 2 == 0:
        demon.set_image(img("""
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
    if demon.vx < 0:
        demon.image.flip_x()
game.on_update(on_on_update)
