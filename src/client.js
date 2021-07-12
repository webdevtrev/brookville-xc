import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "411iwivp", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  apiVersion: '2021-07-12',
  useCdn: true,
});