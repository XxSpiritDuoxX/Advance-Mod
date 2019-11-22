type: DoubleTurret
name: Silver Turret
description: Sprays useless silver bullets everywhere. What a mess.
health: 200
size: 1
reload: 4
range: 100
ammoUseEffect: shellEjectSmall
inaccuracy: 30
rotatespeed: 12
ammo: {
  silver: {
    speed: 3
    damage: 3
    bulletWidth: 7
    bulletHeight: 9
    shootEffect: shootSmall
    smokeEffect: shootSmallSmoke
    ammoMultiplier: 5
  }
}
requirements: [
  silver/40
  copper/70
]
category: turret
research: duo
