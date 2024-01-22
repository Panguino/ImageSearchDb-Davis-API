module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: "cloudinary",
        providerOptions: {
          cloud_name: env("CLOUDINARY_NAME"),
          api_key: env("CLOUDINARY_KEY"),
          api_secret: env("CLOUDINARY_SECRET"),
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: env('MAIL_DEFAULT_FROM'),
          defaultReplyTo: env('MAIL_DEFAULT_REPLY_TO')
        },
      }
    },
    graphql: {
      config: {
        endpoint: "/graphql",
        shadowCRUD: true,
        playgroundAlways: true,
        depthLimit: 15,
        amountLimit: 100,
        apolloServer: {
          tracing: false,
          introspection: true,
        },
      },
    },
    'deploy-plugin': {
      enabled: env('DEPLOYMENT_ENABLED'),
      resolve: './src/plugins/deploy-plugin',
      config: {
        post_url: env('DEPLOYMENT_URL'),
        button_text: env('DEPLOYMENT_BUTTON_TEXT'),
        result_text: env('DEPLOYMENT_RESULT_TEXT')
      }
    }
  });
  