export default function launchLoginWindow(setPublicKey) {
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

          //login
          if (event.data.method === "login") {
            const user = event.data.payload.publicKeyAdded;
            setPublicKey(user);
            const userPayload = event.data.payload.users[user];
            // console.log(userPayload);
            localStorage.setItem("pubKey", user);
            identityWindow.close();
          }
        }
      }
    },
    false
  );

  identityWindow = window.open(
    identityUrl + "/log-in",
    null,
    `toolbar=no, width=${w}, height=${h}, top=${y}, left=${x}`
  );
}
