module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "~@/scss/_variables.scss";
          @import "~bootstrap/scss/bootstrap";
          @import "~@/scss/_bootswatch.scss";
        `,
      },
    },
  },
};
