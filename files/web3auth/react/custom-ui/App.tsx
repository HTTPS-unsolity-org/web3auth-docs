import { ADAPTER_EVENTS, SafeEventEmitterProvider, WALLET_ADAPTERS } from "@web3auth/base";
import { Web3AuthCore } from "@web3auth/core";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { useEffect, useState } from "react";
import "./App.css";

// REPLACE-wallet-provider-

function CustomUI() {
  const [web3AuthInstance, setWeb3AuthInstance] = useState<Web3AuthCore | null>(null);
  const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(null);

  useEffect(() => {
    const init = async () => {
      try {
        const web3AuthInstance = new Web3AuthCore({
          // REPLACE-chain-namespace-
        });

        subscribeAuthEvents(web3AuthInstance);

        const openloginAdapter = new OpenloginAdapter({
          adapterSettings: {
            clientId: "YOUR_CLIENT_ID",
            network: "testnet",
            uxMode: "redirect",
          },
        });
        web3AuthInstance.configureAdapter(openloginAdapter);
        setWeb3AuthInstance(web3AuthInstance);
        await web3AuthInstance.init();
      } catch (error) {
        console.error(error);
      }
    };

    const subscribeAuthEvents = (web3AuthInstance: Web3AuthCore) => {
      // Can subscribe to all ADAPTER_EVENTS and LOGIN_MODAL_EVENTS
      web3AuthInstance.on(ADAPTER_EVENTS.CONNECTED, (data: unknown) => {
        console.log("Yeah!, you are successfully logged in", data);
        setProvider(web3AuthInstance.provider);
      });

      web3AuthInstance.on(ADAPTER_EVENTS.CONNECTING, () => {
        console.log("connecting");
      });

      web3AuthInstance.on(ADAPTER_EVENTS.DISCONNECTED, () => {
        console.log("disconnected");
      });

      web3AuthInstance.on(ADAPTER_EVENTS.ERRORED, (error) => {
        console.error("some error or user has cancelled login request", error);
      });
    };

    init();
  }, []);

  const login = async (loginProvider: string) => {
    if (!web3AuthInstance) {
      console.log("web3auth not initialized yet");
      return;
    }
    const provider = await web3AuthInstance.connectTo(WALLET_ADAPTERS.OPENLOGIN, { loginProvider, login_hint: "" });
    setProvider(provider);
  };

  const getUserInfo = async () => {
    if (!web3AuthInstance) {
      console.log("web3auth not initialized yet");
      return;
    }
    const user = await web3AuthInstance.getUserInfo();
    console.log("User info", user);
  };

  const logout = async () => {
    if (!web3AuthInstance) {
      console.log("web3auth not initialized yet");
      return;
    }
    await web3AuthInstance.logout();
    setProvider(null);
  };

  const onGetAccounts = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    await getAccounts(provider);
  };

  const onGetBalance = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    await getBalance(provider);
  };

  const onSignMessage = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    await signMessage(provider);
  };

  const onSignTransaction = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    await signTransaction(provider);
  };

  const onSendTransaction = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    await sendTransaction(provider);
  };

  const loggedInView = (
    <>
      <button onClick={getUserInfo} className="card">
        Get User Info
      </button>
      <button onClick={onGetAccounts} className="card">
        Get Accounts
      </button>
      <button onClick={onGetBalance} className="card">
        Get Balance
      </button>
      <button onClick={onSignMessage} className="card">
        Sign Message
      </button>
      <button onClick={onSignTransaction} className="card">
        Sign Transaction
      </button>
      <button onClick={onSendTransaction} className="card">
        Send Transaction
      </button>
      <button onClick={logout} className="card">
        Log Out
      </button>
    </>
  );

  const unloggedInView = (
    <>
      <button onClick={() => login("google")} className="card">
        Google Login
      </button>
      <button onClick={() => login("facebook")} className="card">
        Facebook Login
      </button>
    </>
  );

  return (
    <div className="container">
      <h1 className="title">
        <a target="_blank" href="http://web3auth.io/" rel="noreferrer">
          Web3Auth
        </a>{" "}
        & ReactJS Example
      </h1>

      <div className="grid">{provider ? loggedInView : unloggedInView}</div>

      <footer className="footer">
        <a href="https://github.com/Web3Auth/Web3Auth/tree/master/examples/react-app" target="_blank" rel="noopener noreferrer">
          Source code {"  "}
          <img className="logo" src="/images/github-logo.png" alt="github-logo" />
        </a>
      </footer>
    </div>
  );
}

export default CustomUI;
