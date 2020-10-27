import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PriceInfo from '../molecules/Info/PriceInfo';
import WalletCard from '../molecules/Card/WalletCard';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100%',
  },
}));

export default function ({ wallets, rate }) {
  const classes = useStyles();
  console.table(wallets[0]);

  const WalletCards = wallets.map((wallet, i) => {
    return <WalletCard key={i} wallet={wallet} rate={rate} />;
  });

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <PriceInfo />
          {WalletCards}
        </Grid>
      </Grid>
    </div>
  );
}
