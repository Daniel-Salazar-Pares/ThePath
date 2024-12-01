def on_overlap_tile(sprite2, location2):
    game.game_over(False)
    game.set_game_over_effect(False, effects.melt)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.collectible_red_crystal,
    on_overlap_tile)

def on_a_pressed():
    if demon.x == 0:
        demon.vy = -500
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