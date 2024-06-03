<template>
  <div class="w-full h-screen flex flex-row items-center justify-center">
    <div class="w-[45%]"><AnimatedSvg /></div>
    <div class="w-[45%] items-center justify-center flex">
      <div class="w-[45%] mx-auto space-y-6">
        <h1 class="text-xl font-bold text-[#554CF9]">LorengDolores</h1>
        <h1 class="text-2xl font-bold">Welcome to LorengDolores</h1>
        <p>Log in to your account to access LorengDolores</p>
        <div>
          <label for="username" class="block mb-2 text-sm font-medium"
            >Username</label
          >
          <input
            type="text"
            id="username"
            class="border border-gray-300 bg-white text-sm rounded-lg block w-full p-2.5"
            placeholder="Johnny"
            required
          />
        </div>
        <div>
          <label for="password" class="block mb-2 text-sm font-medium"
            >Password</label
          >
          <input
            type="password"
            id="password"
            class="border border-gray-300 bg-white text-sm rounded-lg block w-full p-2.5"
            placeholder="•••••••••"
            required
          />
        </div>
        <button
          class="w-[100%] h-12 bg-[#554CF9] text-white rounded-lg font-semibold mb-2 hover:bg-white hover:text-[#554CF9] hover:border-[#554CF9] border-[#554CF9] border-2 transition duration-300"
          type="submit"
          @click="login"
        >
          Submit
        </button>
        <p>
          Don't have an account?
          <span class="hover:underline text-[#554CF9] cursor-pointer"
            >Register your account now</span
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import AnimatedSvg from "../components/Animated-svg.vue";
</script>
