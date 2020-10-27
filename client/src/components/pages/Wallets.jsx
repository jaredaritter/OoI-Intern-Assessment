import React, { useState } from 'react';
import PageLayout from '../templates/Page';
import Wallets from '../templates/Wallets';

export default function WalletsPage({ wallets, btcRate, ethRate }) {
  const [tabs] = useState(['Ethereum Wallets', 'Bitcoin Wallets']);

  // UNSURE WHERE/HOW TO IMPLEMENT FILTER DUE TO PASSTHROUGH. MY IMPULSE IS TO USE THE ACTIVETAB FROM PAGELAYOUT TO FILTER FOR ETHEREUM OR BITCOIN AND THEN JUST RENDER THE WALLETS THAT MATCH BUT I'M NOT HAVING ANY LUCK IMPLEMENTING IT WITH THIS STRUCTURE. TIME TO MOVE ON.

  // const ethWallets = wallets.filter((wallet) => {
  //   return wallet.currency === 'Ethereum';
  // });
  // const btcWallets = wallets.filter((wallet) => {
  //   return wallet.currency === 'Bitcoin';
  // });

  return (
    <PageLayout tabs={tabs}>
      <Wallets wallets={wallets} rate={ethRate} />

      <Wallets wallets={wallets} rate={btcRate} />
    </PageLayout>
  );
}
