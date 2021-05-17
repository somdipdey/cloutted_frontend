export default function launchLogout(publicKey, setPublicKey) {
  const h = 1000;
  const w = 800;
  const y = window.outerHeight / 2 + window.screenY - h / 2;
  const x = window.outerWidth / 2 + window.screenX - w / 2;

  const identityUrl = "https://identity.bitclout.com";

  let identityWindow;

  window.addEventListener(
    "message",
    (event) => {
      //do we have data
      if (event.data && event.origin) {
        //can we trust it
        if (event.origin === "https://identity.bitclout.com") {
          //initialize
          if (event.data.method === "initialize") {
            const data = { id: event.data.id, service: "identity" };

            identityWindow.postMessage(data, "*");
          }

          if (event.data.method === "login") {
            publicKey = null;
            setPublicKey(publicKey);

            identityWindow.close();
          }
        }
      }
    },
    false
  );

  identityWindow = window.open(
    identityUrl + "/logout?publicKey=" + publicKey,
    null,
    `toolbar=no, width=${w}, height=${h}, top=${y}, left=${x}`
  );
}
