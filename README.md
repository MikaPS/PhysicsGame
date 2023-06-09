# Demo3: Physics Game
**Where to play your game (a link to your deployed game)**
- My deployed game can be found here: https://mikaps.github.io/PhysicsGame/

**How your design satisfies the experience requirements below**
- The game uses both continuous and discrete inputs from the player <br>
        - Continuous: clicking on the mouse makes the player move faster, movement using the 'up' and 'down' keys. <br>
        - Discrete: pressing the number '1' decreases water damage, need to click the wood pieces in levels 2-3.

- The player’s goal can only be achieved indirectly (by allowing the physics engine to move key objects into position/contact). <br>
        - The boat is affected by gravity and moves with acceleration.<br>
        - There is collision with the finish line to move to the next level.<br>
        - Collision with rocks will lose the game.

- 3+ physics-based gameplay scenes (possibly implemented with a single Phaser Scene subclass).<br>
        - 3 gameplay scenes are in the First Phaser Scene. In each level, the game becomes more complicated and introduces new ideas.<br>
- Other scenes are used to separate and contextualize the gameplay scenes<br>
        - There are other scenes in between gameplay: Title scene with the name of the game, Instructions scene, Winning scene, and Losing scene.<br>


**How all of your data assets (if you have any) were created**
- I drew all of my assets using the mobile app ibisPaint X and edited using the website remove.bg.
- Font is found on this link: https://www.1001fonts.com/league-spartan-font.html
