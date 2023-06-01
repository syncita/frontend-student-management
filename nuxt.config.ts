// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
app:{
    // nuxt.config.js
     head: {
      link: [
        { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css' }
      ],
      script: [
        { src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js' },
        { src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js' },
        { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js' }
      ]
    },
    // Other Nuxt.js configuration options
  
}
})
