import React, { useState } from 'react';
import PageLayout from '../templates/Page';
import Wallets from '../templates/Wallets';

export default function WalletsPage({ wallets, btcRate, ethRate }) {
  const [tabs] = useState(['Ethereum Wallets', 'Bitcoin Wallets']);

  return (
    <PageLayout tabs={tabs}>
      {/* SHOULD BE ABLE TO USE ACTIVE TAB TO FILTER HERE? BETTER IN PAGE? */}
      <Wallets wallets={wallets} rate={ethRate} />

      <Wallets wallets={wallets} rate={btcRate} />
    </PageLayout>
  );
}
