let plane1: Sprite = null
scene.setBackgroundImage(img`
    999999999999999c1c1c1c1c1c99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999c1c1c1c1c1c99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999c1c1c1c1c1c99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999c1c1c1c1c1c9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999c1c1c1c1c1c9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999c1c1c1c1c1c9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffff99999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffdddddddddddddddddddd99
    999999999999999ccccc1ccccc999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffdddddddddddddddddd99
    999999999999999ccccc1ccccc999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff9999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffff9999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff99999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff999999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff99f999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff999999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff9999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffff9999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff99999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ff999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd99
    999999999999999ccccc1ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991199999999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991199999999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991199999999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991199999999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc9999999999999999999999999999999999999999999999999999999999999199999991999999999999999999991199999999999999999999dddddddddddddddddddd99
    999999999999999ccccccccccc9999999999999999999999999999999999999999999999999999999999911111999991999999999999999111111111119999999999999999dddddddddddddddddddd99
    999999999999999c1c1c1c1c1c9999999999999999999999999999999999999999999999999999999999911111999111119999999999911111111111111119999999999999dddddddddddddddddddd99
    999999999999999c1c1c1c1c1c9999999999999999999999999999999999999999999999999999999999999199999991999999999999999999991199999999999999999999dddddddddddddddddddd99
    999999999999999c1c1c1c1c1c9999999999999999999999999999999999999999999999999999999999999199999991999999999999999999991199999999999999999999dddddddddddddddddddd99
    999999999999999c1c1c1c1c1c9999999999999999999999999999999999999999999999999999999999999199999991999999999999999999991199999999999999999999dddddddddddddddddddd99
    999999999999999c1c1c1c1c1c9999999999999999999999999999999999999999999999999999999999991119999999999999999999999999991199999999999999999999dddddddddddddddddddd99
    999999999999999c1c1c1c1c1c9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111999999999999999999dddddddddddddddddddd99
    999999999999999c1c1c1c1c1c9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991199999999999999999999dddddddddddddddddddd99
    `)
mp.setPlayerIndicatorsVisible(true)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 . . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . 1 . . . . 1 1 . . . . . . . 
    . . 1 1 . . . 1 1 1 . . . . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 . . . 1 1 1 . . . . . . 
    . . 1 . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . 1 . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(114, 27)
controller.moveSprite(mySprite, 100, 100)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . 1 1 1 1 1 1 1 1 1 . . . . 
    . . 1 . . . . 1 . . . . 1 1 . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite2.setPosition(20, 104)
forever(function () {
    plane1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . 1 . . . . 1 1 . . . . . . . 
        . . 1 1 . . . 1 1 1 . . . . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 . . . 1 1 1 . . . . . . 
        . . 1 . . . . 1 1 . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    plane1.setPosition(114, 81)
})
