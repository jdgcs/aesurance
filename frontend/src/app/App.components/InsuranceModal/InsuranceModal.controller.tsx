import {
  AesuranceContract,
  aesuranceContracts,
} from "helpers/aesuranceContracts";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "reducers";
//prettier-ignore
//@ts-ignore
import { RpcAepp, Node } from '@aeternity/aepp-sdk/es'
//@ts-ignore
import Ae from "@aeternity/aepp-sdk/es/ae/universal"; // or other flavor
//@ts-ignore
import { AE_AMOUNT_FORMATS } from "@aeternity/aepp-sdk/es/utils/amount-formatter";
//@ts-ignore
import WalletDetector from "@aeternity/aepp-sdk/es/utils/aepp-wallet-communication/wallet-detector";
//@ts-ignore
import BrowserWindowMessageConnection from "@aeternity/aepp-sdk/es/utils/aepp-wallet-communication/connection/browser-window-message";

import { hideInsurance } from "./InsuranceModal.actions";
import { InsuranceModalView } from "./InsuranceModal.view";

const NODE_URL = "https://mainnet.aeternity.io";
const COMPILER_URL = "https://compiler.aepps.com";

type InsuranceModalProps = {};

export const InsuranceModal = ({}: InsuranceModalProps) => {
  const dispatch = useDispatch();
  const { insuranceId, showing } = useSelector(
    (state: State) => state.insuranceModal
  );

  const hideCallback = () => {
    dispatch(hideInsurance());
  };

  const insurance: AesuranceContract = aesuranceContracts.filter(
    (aesuranceContract) => aesuranceContract._id === insuranceId
  )?.[0];

  const buyCallback = (
    insuranceId: number,
    target: string,
    premium: number
  ) => {
    (async function () {
      let detector: any;
      let client: any;
      let accounts: any;
      let selectedAccountAddress: any;
      let walletName: any;
      let pub: any;
      let balance: any;
      let addressResponse: any;

      const errorAsField = async (fn: any) => {
        try {
          return { result: await fn };
        } catch (error) {
          console.log(error);
          return { error };
        }
      };

      async function scanForWallets() {
        // call-back function for new wallet event
        const handleWallets = async function ({ wallets, newWallet }: any) {
          newWallet = newWallet || Object.values(wallets)[0];
          // ask if you want to connect
          if (
            window.confirm(`Do you want to connect to wallet ${newWallet.name}`)
          ) {
            // Stop scanning wallets
            detector.stopScan();
            // Connect to wallet
            await connectToWallet(newWallet);
          }
        };
        // Create connection object for WalletDetector
        const scannerConnection = await BrowserWindowMessageConnection({
          connectionInfo: { id: "spy" },
        });
        // Initialize WalletDetector
        detector = await WalletDetector({ connection: scannerConnection });
        // Start scanning
        detector.scan(handleWallets);
      }

      async function connectToWallet(wallet: any) {
        // Connect to the wallet using wallet connection object
        // At this line sdk will send connection request to the wallet and waiting for response
        await client.connectToWallet(await wallet.getConnection());
        // After connection established we can subscribe for accounts
        accounts = await client.subscribeAddress("subscribe", "connected");
        // Now we have list of available account and we can get the selected account just using usual SDK interface
        selectedAccountAddress = await client.address();
        // In `client.rpcClient` you can find all information regarding to connected waellet
        walletName = client.rpcClient.info.name;

        // BUG HERE...
        // const result = await client.contractCall(
        //   code, 'ct_2meHkLcAoZPrQj7P5WjFyJJRLJqRtv43z1QEbpcS1gHs9W8Q3g', 'register_oracle', [1, 1]
        // ).catch(function(e: any) {
        //   console.log("resolve error: ", e);
        //   return;
        // });
        // console.log(result)
        await client.spend(premium, 'ak_PSD9mqMX1utzK18me9iV5k9XMGfL32pCxeJqBrLPxq2Pe1Zfb', { denomination: AE_AMOUNT_FORMATS.AE }) // spend one AE

      }

      client = await RpcAepp({
        name: "AEPP",
        nodes: [
          {
            name: "test-net",
            //@ts-ignore
            instance: await Node({
              url: NODE_URL,
            }),
          },
        ],
        compilerUrl: COMPILER_URL,
        // call-back for update network notification
        onNetworkChange(params: any) {
          if (this.getNetworkId() !== params.networkId)
            alert(
              `Connected network ${this.getNetworkId()} is not supported with wallet network ${
                params.networkId
              }`
            );
        },
        // call-back for update address notification
        onAddressChange: async (addresses: any) => {
          pub = await client.address();
          balance = await client.balance(pub).catch((e: any) => "0");
          addressResponse = await errorAsField(client.address());
        },
        // call-back for update address notification
        onDisconnect(msg: any) {},
      });
      // Start looking for wallets
      await scanForWallets(); // Start looking for new wallets


    })();

    console.log(insuranceId, target, premium);
    if (insuranceId === 0)
      // contracts.AesuranceShipping.methods
      //   .buyInsurance(target)
      //   .send({ value: premium })
      console.log("Buy insurance 0");
    if (insuranceId === 1)
      // contracts.AesuranceLife.methods
      //   .buyInsurance(target)
      //   .send({ value: premium })
      console.log("Buy insurance 1");
    if (insuranceId === 2)
      // contracts.AesuranceFlight.methods
      //   .buyInsurance(target)
      //   .send({ value: premium })
      console.log("Buy insurance 2");
  };

  return (
    <InsuranceModalView
      showing={showing}
      insurance={insurance}
      hideCallback={hideCallback}
      buyCallback={buyCallback}
    />
  );
};

const code = `
// THIS IS NOT SECURITY AUDITED
// DO NEVER USE THIS WITHOUT SECURITY AUDIT FIRST

payable contract CreateOracle =
    datatype event = QueryCreated(int)
    record state = {
        source_oracle : oracle(string, string),
        id_query : map(int, oracle_query(string, string)),
        queries: int
      }

    entrypoint get_queries (): int =
      state.queries

    stateful entrypoint init () = 
      let greeter_oracle : oracle(string, string) = register_oracle(5, 500)
      {source_oracle = greeter_oracle,
        id_query = {},
        queries = 0}

    stateful function register_oracle(      						
        qfee : int,     						 //Minimum payment fee
        rttl : int) : oracle(string, string) =   //oracle expiration time blocks
      Oracle.register(Contract.address, qfee, RelativeTTL(rttl))

    stateful entrypoint extend_oracle(ttl : int) : unit =		//oracle expiration time blocks 
      Oracle.extend(state.source_oracle, RelativeTTL(ttl))

    entrypoint get_question(q : oracle_query(string, string)) : string =    //id of query in oracle
      Oracle.get_question(state.source_oracle, q)    

    entrypoint get__answer(q : oracle_query(string, string)) : option(string) =    //id of query in oracle
      Oracle.get_answer(state.source_oracle, q)  

    payable stateful entrypoint create_query(
        q    : string,      				//question
        qfee : int,         				//fee
        qttl : int,         				//last height oracle to post a reply
        rttl : int) : oracle_query(string, string) =  //time stays on the chain
      require(qfee =< Call.value, "insufficient value for qfee")    	//check the fee
      let query : oracle_query(string, string) = Oracle.query(state.source_oracle, q, qfee, RelativeTTL(qttl), RelativeTTL(rttl))
      put(state{queries = state.queries + 1})
      put(state{id_query[state.queries] = query })
      Chain.event(QueryCreated(state.queries))
      query
    
    entrypoint get_query_address(id: int) :oracle_query(string, string) =
      state.id_query[id]

    stateful entrypoint respond(
            q    : oracle_query(string, string),   //id of query in oracle
            r    : string) =  			           //reply
      Oracle.respond(state.source_oracle, q, r)

    `;
