<template>
  <div class="w-full h-screen flex flex-row items-center justify-center">
    <div class="w-[45%]"><LoginAnimatedSvg /></div>
    <div class="w-[45%] items-center justify-center flex">
      <div class="w-[48%] mx-auto space-y-6">
        <h1 class="text-xl font-bold text-[#9232e8]">LorengDolores</h1>
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
          class="w-[100%] h-12 bg-[#9232e8] text-white rounded-lg font-semibold mb-2 hover:bg-white hover:text-[#9232e8] hover:border-[#9232e8] border-[#9232e8] border-2 transition duration-300"
          type="submit"
          @click="login"
        >
          Submit
        </button>
        <p>
          <span></span>
        </p>
        <router-link class="" to="/register">
          <div class="text-center">
            Don't have an account?
            <span class="hover:underline text-[#9232e8] cursor-pointer">
              Register your account now</span
            >
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup>
import LoginAnimatedSvg from "../components/Login-Animated-svg.vue";
</script>
