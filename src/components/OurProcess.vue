<template>
  <div class="bg-center  bg-no-repeat bg-center bg-cover elative blueBG">
      <div class="p-20">
        <h1 class="text-3xl font-bold text-center">Our Process</h1>
        <div class="m-20">
            <div class="grid lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 gap-4">
                <div class="grid justify-items-center">
                    <img src="../assets/images/Calculator.svg" alt="calculator" class="mb-2">
                    <h4 class="font-bold text-center">Free Painting Estimate</h4>
                </div>
                <div class="grid justify-items-center">
                    <img src="../assets/images/Calendar.svg" alt="calendar" class="mb-2">
                    <h4 class="font-bold text-center">Schedule Service</h4>
                </div>
                <div class="grid justify-items-center">
                    <img src="../assets/images/PaintRoller.svg" alt="paint roller" class="mb-2">
                    <h4 class="font-bold text-center">Painting Begins</h4>
                </div>
                <div class="grid justify-items-center">
                    <img src="../assets/images/CheckMark.svg" alt="check mark" class="mb-2">
                    <h4 class="font-bold text-center">Project Completion</h4>
                </div>             
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
name: "OurProcess"
}
</script>

<style scoped>
.blueBG {
    background-color: #9FB6BF;
}
</style>