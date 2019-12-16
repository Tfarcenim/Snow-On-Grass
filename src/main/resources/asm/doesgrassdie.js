
function initializeCoreMod() {
  return {
    "doesgrassdie": {
      "target": {
        "type": "METHOD", "class": "net.minecraft.block.SpreadableSnowyDirtBlock",
        "methodName": "func_220257_b", //doesGrassLive
         "methodDesc": "(Lnet/minecraft/block/BlockState;Lnet/minecraft/world/IWorldReader;Lnet/minecraft/util/math/BlockPos;)Z"
      },
      "transformer": function(method) {
              print('[SnowOnGrass]: Patching Minecraft\' SpreadableSnowyDirtBlock#doesGrassLive');

         var i;
         for (i = 0; i < 7; i++) {
             method.instructions.remove(method.instructions.get(17));
             }
        return method;
      }
    }
  };
}
