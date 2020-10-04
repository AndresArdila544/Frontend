<template>
  <div class="p-5">
      <CPU v-if="part== 'A'"/>
      <MotherBoard v-if="part== 'B'"/>
      <RAM v-if="part== 'C'"/>
      <GPU v-if="part== 'D'"/>
      <Cooling v-if="part== 'E'"/>
      <Case v-if="part== 'F'"/>
      <PowerSupply v-if="part== 'G'"/>
      <HDD v-if="part== 'H'"/>
      <SSD v-if="part== 'I'"/>
      <Mouse v-if="part== 'J'"/>
      <Keyboard v-if="part== 'K'"/>
      <Monitor v-if="part== 'L'"/>
  </div>
</template>

<script>
import CPU from './Parts/CPU'
import MotherBoard from './Parts/MotherBoard'
import RAM from './Parts/RAM'
import GPU from './Parts/GPU'
import Cooling from './Parts/Cooling'
import Case from './Parts/Case'
import PowerSupply from './Parts/PowerSupply'
import HDD from './Parts/HDD'
import SSD from './Parts/SSD'
import Mouse from './Parts/Mouse'
import Monitor from './Parts/Monitor'
import Keyboard from './Parts/Keyboard'


export default {
    name: "FormCreateComponent",
    components: {
        CPU,
        MotherBoard,
        RAM,
        GPU,
        Cooling,
        Case,
        PowerSupply,
        HDD,
        SSD,
        Mouse,
        Monitor,
        Keyboard,
    },
    props: {
        part: String,
    }
    
}
</script>

<style>

</style>