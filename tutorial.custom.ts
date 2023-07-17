//% color=#b79900 icon="\uf1ce"
namespace pizza {
    //% blockId=set_players
    //% block="set game for $num player(s) with $list"
    //% num.defl=1
    //% list.shadow=variables_get
    //% list.defl=characters
    export function setPlayersWith(list: Image[], num: number) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
        let xloc = [
        40,
        120,
        40,
        120
        ]
        let yloc = [
        30,
        30,
        90,
        90
        ]
        for (let index = 0; index <= num - 1; index++) {
            mp.setPlayerSprite(mp.getPlayerByIndex(index), sprites.create(list[index], SpriteKind.Player))
            mp.getPlayerSprite(mp.getPlayerByIndex(index)).setStayInScreen(true)
            mp.getPlayerSprite(mp.getPlayerByIndex(index)).setPosition(xloc.shift(), yloc.shift())
            mp.getPlayerSprite(mp.getPlayerByIndex(index)).z = 1000
            mp.moveWithButtons(mp.getPlayerByIndex(index))
        }
    }
    //% blockId=bump_sprite
    //% block="$thisSprite bump $thatSprite"
    //% thisSprite.shadow=variables_get
    //% thisSprite.defl=sprite
    //% thatSprite.shadow=variables_get
    //% thatSprite.defl=otherSprite
    export function bumpSprite(thisSprite: Sprite, thatSprite: Sprite) {
        thatSprite.setPosition((thisSprite.x + 80) % 160, thisSprite.y)
    }
}
namespace logic{
    /**
    * this just holds code
    */
    //% block="check if A button pressed"  weight=300
    //% handlerStatement=1
    export function wrap1(handler: () => void) {
        handler();
    }
}
//% color=#6d5ba4 icon="\uf0f2"
namespace bundles{
    /**
    * this just holds code
    */
    //% block="check if A button pressed"  weight=300
    //% handlerStatement=1
    export function wrap1(handler: () => void) {
        handler();
    }
    /**
    * this just holds code
    */
    //% block="create finish line"  weight=300
    //% handlerStatement=1
    export function wrap2(handler: () => void) {
        handler();
    }
    /**
    * this just holds code
    */
    //% block="create players"  weight=300
    //% handlerStatement=1
    export function wrap3(handler: () => void) {
        handler();
    }
}