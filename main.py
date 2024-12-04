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

def on_on_overlap2(sprite, otherSprite):
    info.change_score_by(1)
    sprites.destroy(otherSprite)
sprites.on_overlap(SpriteKind.player, SpriteKind.Coin, on_on_overlap2)

def on_on_overlap3(sprite8, otherSprite6):
    sprite8.vx = sprite8.vx * -1
sprites.on_overlap(SpriteKind.Monstruo, SpriteKind.EnemyBounce, on_on_overlap3)

def on_overlap_tile2(sprite2, location2):
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

def on_on_overlap4(sprite42, otherSprite22):
    sprites.destroy(otherSprite22)
    if knight.y + 5 < otherSprite22.y:
        info.change_score_by(1)
    else:
        info.change_life_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap4)

def on_on_overlap5(sprite9, otherSprite7):
    otherSprite7.say_text("Hi mighty knight, I see you lost your sword.", 200, False)
sprites.on_overlap(SpriteKind.player, SpriteKind.NPC1, on_on_overlap5)

def on_on_overlap6(sprite6, otherSprite4):
    otherSprite4.say_text("I am the mage, the sword is somwhere in the second phase",
        200,
        False)
sprites.on_overlap(SpriteKind.player, SpriteKind.NPC4, on_on_overlap6)

def on_on_overlap7(sprite4, otherSprite2):
    otherSprite2.say_text("Thank you! Look for the Frank to find your sword.",
        200,
        False)
sprites.on_overlap(SpriteKind.player, SpriteKind.NPC2, on_on_overlap7)

def on_on_overlap8(sprite11, otherSprite9):
    sprites.destroy(otherSprite9)
    if knight.y + 5 < otherSprite9.y:
        info.change_score_by(1)
    else:
        info.change_life_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.Monstruo, on_on_overlap8)

def on_on_overlap9(sprite10, otherSprite8):
    otherSprite8.say_text("Why look for money, if you don't have a sword", 200, False)
sprites.on_overlap(SpriteKind.player, SpriteKind.NPC6, on_on_overlap9)

def on_on_overlap10(sprite5, otherSprite3):
    otherSprite3.say_text("FRAAANKENSTEEEINN", 200, False)
sprites.on_overlap(SpriteKind.player, SpriteKind.NPC3, on_on_overlap10)

EnemyBouncePad: Sprite = None
monstruo: Sprite = None
jump_count = 0
bee: Sprite = None
NPC62: Sprite = None
NPC42: Sprite = None
NPC32: Sprite = None
NPC22: Sprite = None
NPC12: Sprite = None
coin: Sprite = None
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
BouncingEnemies()

def on_on_update():
    global jump_count
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
game.on_update(on_on_update)
