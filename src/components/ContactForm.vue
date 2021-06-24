<template>
  <div class="p-20">
<!--    <div class=" grid gap-y-8 grid-cols-1 md:grid-cols-2 md:px-6 lg:px-8 xl:px-16 py-16 mx-auto bg-green-600 text-gray-900 rounded-lg shadow-lg">-->

        <h3 class="text-white text-2xl text-center">Contact Us</h3>
        <form class="contact-form" @submit.prevent="sendEmail">
          <div class="mt-8">
            <label class="uppercase text-sm text-white font-bold">Name</label>
            <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" name="user_name">
          </div>
          <div class="mt-8">
            <label class="uppercase text-sm text-white font-bold">Email</label>
            <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="email" name="user_email">
          </div>
          <div class="mt-8">
            <label class="uppercase text-sm text-white font-bold">Message</label>
            <textarea class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" name="message"></textarea>
          </div>
          <div class="mt-8">
            <input class="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline" type="submit" value="Send">
          </div>
        </form>

    </div>

</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'ContactForm',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('', '', e.target,
            '', {
              name: this.name,
              email: this.email,
              message: this.message
            })

      } catch(error) {
        console.log({error})
      }
      // Reset form field
      e.target.reset()
    },
  }
}
</script>
