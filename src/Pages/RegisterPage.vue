<template>
  <div class="w-full h-screen flex flex-row items-center justify-center">
    <div class="w-[45%]"><RegisterAnimatedSvg /></div>
    <div class="w-[45%] h-[90%] items-center justify-center flex">
      <div class="w-[48%] mx-auto space-y-5">
        <h1 class="text-xl font-bold text-[#9232e8] mt-10">
          <span>logo!!!</span>LorengDolores
        </h1>
        <h1 class="text-2xl font-bold">Create your Loreng Account</h1>
        <p>Register your account to LorengDolores</p>
        <div>
          <label for="name" class="block mb-2 text-sm font-medium">Name</label>
          <input
            type="text"
            id="name"
            class="border border-gray-300 bg-white text-sm rounded-lg block w-full p-2.5"
            placeholder="Johnny"
            required
          />
        </div>
        <div>
          <label for="username" class="block mb-2 text-sm font-medium"
            >Username</label
          >
          <input
            type="text"
            id="username"
            class="border border-gray-300 bg-white text-sm rounded-lg block w-full p-2.5"
            placeholder="Johnny123"
            required
          />
        </div>
        <div>
          <label for="email" class="block mb-2 text-sm font-medium"
            >Email</label
          >
          <input
            type="email"
            id="email"
            class="border border-gray-300 bg-white text-sm rounded-lg block w-full p-2.5"
            placeholder="brianfabular@gmail.com"
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
        <div>
          <label for="image" class="block mb-2 text-sm font-medium"
            >Upload Image</label
          >
          <input
            type="file"
            class="file-input file-input-bordered file-input-sm w-full max-w-lg"
          />
        </div>
        <div class="pt-2">
          <button
            class="w-[100%] mb-5 h-12 bg-[#9232e8] text-white rounded-lg font-semibold hover:bg-white hover:text-[#9232e8] hover:border-[#9232e8] border-[#9232e8] border-2 transition duration-300"
            type="submit"
            @click="register"
          >
            Create Account
          </button>

          <router-link class="" to="/">
            <div class="text-center">
              Already have an account?
              <span class="hover:underline text-[#9232e8] cursor-pointer">
                Login</span
              >
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import RegisterAnimatedSvg from "../components/Register-Animated-svg.vue";
</script>
