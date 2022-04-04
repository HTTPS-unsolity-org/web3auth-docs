/** @type {import('@docusaurus/plugin-content-docs/lib/types').Sidebars} */
module.exports = {
  docs: [
    "README",
    {
      type: "category",
      label: "Overview",
      collapsible: true,
      collapsed: false,
      items: [
        "overview/what-is-web3auth",
        "overview/web3auth-working",
        "overview/key-management",
        "overview/audits",
      ],
    },
    {
      type: "category",
      label: "Get Started",
      link: { type: 'doc', id: "get-started/get-started" },
      items: ["get-started/quickstart", "get-started/using-dashboard"]
    },
    {
      type: "category",
      label: "Developing with Web3Auth",
      link: { type: 'doc', id: "developing-with-web3auth/developing-with-web3auth" },
      items: [
        "developing-with-web3auth/understand-sdk",
        "developing-with-web3auth/adapters",
        "developing-with-web3auth/connect-blockchain",
        "developing-with-web3auth/whitelabeling",
        {
          type: "category",
          label: "Using Custom Authentication",
          link: { type: 'doc', id: "developing-with-web3auth/customauth/customauth" },
          items: ["developing-with-web3auth/customauth/verifiers"]
        },
      ],
    },
    {
      type: "category",
      label: "API Reference",
      link: { type: 'doc', id: "api-reference/api-reference" },
      items: [
        {
          type: "category",
          label: "Web",
          items: [
            "api-reference/web/choosesdk",
            "api-reference/web/plugnplay",
            "api-reference/web/customui",
            {
              type: "category",
              label: "Adapters",
              link: { type: 'doc', id: "api-reference/web/adapters/adapters" },
              items: [
                "api-reference/web/adapters/openlogin",
                "api-reference/web/adapters/torus-evm",
                "api-reference/web/adapters/torus-solana",
                "api-reference/web/adapters/metamask",
                "api-reference/web/adapters/phantom",
                "api-reference/web/adapters/wallet-connect-v1",
              ]
            },
            {
              type: "category",
              label: "Providers",
              link: { type: 'doc', id: "api-reference/web/providers/providers" },
              items: [
                "api-reference/web/providers/evm",
                "api-reference/web/providers/solana",
              ]
            },
            ,
            "api-reference/web/customauth",
          ]
        },
        {
          Android: [
            "api-reference/android/setting-up",
            "api-reference/android/usage",
            "api-reference/android/whitelabel",
            "api-reference/android/customauth",
          ],
        },
        {
          iOS: ["api-reference/ios/setting-up", "api-reference/ios/usage", "api-reference/ios/whitelabel", "api-reference/ios/customauth"],
        },
        {
          "React Native": [
            "api-reference/react-native/setting-up",
            "api-reference/react-native/usage",
            "api-reference/react-native/whitelabel",
            "api-reference/react-native/customauth",
          ],
        },
        {
          Flutter: [
            "api-reference/flutter/setting-up",
            "api-reference/flutter/usage",
            "api-reference/flutter/whitelabel",
            "api-reference/flutter/customauth",
          ],
        },
      ],
    },
    "examples",
    {
      type: "category",
      label: "Contribute",
      items: ["contribute/open-source", "contribute/bug-bounty"],
    },
    {
      Legal: ["legal/cookie-policy", "legal/privacy-policy", "legal/terms-and-conditions"],
    },
    { type: 'html', value: "<hr /><strong style='color: #606770'>Quick Links</strong>", defaultStyle: true, },

    {
      type: "link",
      label: "GitHub",
      href: "https://github.com/web3auth/web3auth",
    },
    {
      type: "link",
      label: "Support",
      href: "https://t.me/web3authdev",
    },
    {
      type: "link",
      label: "Discord",
      href: "https://discord.gg/web3auth",
    },
    {
      type: "link",
      label: "Dashboard",
      href: "https://dashboard.web3auth.io/",
    },
    {
      type: "link",
      label: "Schedule a Demo",
      href: "https://calendly.com/web3auth/meeting-with-web3auth",
    },
    {
      type: "link",
      label: "Status",
      href: "https://status.web3auth.io/",
    },
  ],
};
