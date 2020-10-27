import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PriceInfo from '../molecules/Info/PriceInfo';
import WalletCard from '../molecules/Card/WalletCard';
import EditWallet from '../molecules/Edit/EditWallet';
import ContainedButton from '../atoms/Button/Contained';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100%',
  },
}));

export default function ({ wallets, rate }) {
  const classes = useStyles();

  const WalletCards = wallets.map((wallet, i) => {
    return <WalletCard key={i} wallet={wallet} rate={rate} />;
  });

  const [wallet, toggleWallet] = useState(false);

  const handleClick = () => {
    toggleWallet(wallet ? false : true);
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <PriceInfo />
          <ContainedButton onClick={handleClick}>
            Add New Wallet
          </ContainedButton>
          {wallet ? <EditWallet /> : null}
          {WalletCards}
        </Grid>
      </Grid>
    </div>
  );
}
