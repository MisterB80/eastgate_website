import type { SSTConfig } from "sst";
import { AstroSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "eastgate-website",
      region: "eu-west-2",
      profile: "eastgate"
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new AstroSite(stack, "site", {
        customDomain: {
          domainName: "eastgatedigital.co.uk",
          domainAlias: "www.eastgatedigital.co.uk"
        }
      });
      stack.addOutputs({
        url: site.url,
      });
    });
  },
} satisfies SSTConfig;
