import React, { useState } from 'react';
import PageLayout from '../templates/Page';
import Wallets from '../templates/Wallets';

export default function WalletsPage({ wallets, btcRate, ethRate }) {
  const [tabs] = useState(['Ethereum Wallets', 'Bitcoin Wallets']);

  // UNSURE WHERE TO IMPLEMENT FILTER DUE TO PASSTHROUGH OF WALLETS. MY IMPULSE IS TO USE THE ACTIVETAB FROM PAGELAYOUT TO FILTER FOR ETHEREUM OR BITCOIN AND THEN JUST RENDER THE WALLETS THAT MATCH.
  return (
    <PageLayout tabs={tabs}>
      <Wallets wallets={wallets} rate={ethRate} />

      <Wallets wallets={wallets} rate={btcRate} />
    </PageLayout>
  );
}
