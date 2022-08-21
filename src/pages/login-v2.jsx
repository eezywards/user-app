import React from "react";
import SignClient from "@walletconnect/sign-client";
import QRCodeModal from "@walletconnect/qrcode-modal";

function LoginV2() {

  const [client, setClient] = React.useState(null);

  const signClient = async () => {
    const client = await SignClient.init({
    projectId: "916cb3be319946519ff9c0793d80e01a",
    metadata: {
      name: "eezywards",
      description: "Loyalty program",
      url: "#",
      icons: ["https://walletconnect.com/walletconnect-logo.png"],
    }
  });
    await setClient(client);
  }
  
  // const onSessionConnected = async (error, payload) => {
  //   if (error) {
  //     console.error(error);
  //     return;
  //   }
  //   console.log(payload);
  //   const { accounts } = payload;
  //   console.log(accounts);
  //   const { ethAddress } = accounts[0];
  //   console.log(ethAddress);
  //   const response = await fetch("https://eezypos.azurewebsites.net/api/getUser?ethAddress=" + ethAddress);
  //   const data = await response.json();
  //   console.log(data);
  // };
  
  const walletConnect = async () => {
    try {
      const { uri, approval } = await client.connect({
        requiredNamespaces: {
          eip155: {
            methods: [
              "eth_sendTransaction",
              "eth_signTransaction",
              "eth_sign",
              "personal_sign",
              "eth_signTypedData",
            ],
            chains: ["eip155:1"],
            events: ["chainChanged", "accountsChanged"],
          },
        },
      });
    
      // Open QRCode modal if a URI was returned (i.e. we're not connecting an existing pairing).
      if (uri) {
        QRCodeModal.open(uri, () => {
          console.log("EVENT", "QR Code Modal closed");
        });
      }
    
      // Await session approval from the wallet.
      const session = await approval();
      // Handle the returned session (e.g. update UI to "connected" state).
      // await onSessionConnected(session);
    } catch (e) {
      console.error(e);
    } finally {
      // Close the QRCode modal in case it was open.
      QRCodeModal.close();
    }
  }

  return (
    <section className="allsection">
      <div className="logos">
        <center><img src="img/logo/eezywards-logo.svg" /></center>
        <div className="bcontainers">
          <button onClick={walletConnect} class="button buttonl2">Log in with wallet</button>
        </div>
      </div>
    </section>
  );
}


export default LoginV2;
