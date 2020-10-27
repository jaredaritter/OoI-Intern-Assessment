import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardTitle from '../../atoms/Text/CardTitle';
import CardAddress from '../../atoms/Text/CardAddress';
import CardBalance from '../../atoms/Text/CardBalance';
import USDIcon from '../../atoms/Icons/USDIcon';
import WalletsIcons from '../../atoms/Icons/WalletsIcon';

const useStyles = makeStyles((theme) => ({
  card: {
    minHeight: 301,
    backgroundColor: '#ffffff',
    fontFamily: '"Roboto", sans-serif',
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 25,
    '& .MuiButton-endIcon': {
      margin: 0,
    },
    '& .MuiButton-startIcon': {
      margin: 0,
    },
  },
}));

export default function WalletCard({ children, wallet, rate }) {
  const classes = useStyles();
  console.table(rate);
  const { name, address, currency, balance } = wallet;

  return (
    <div className={classes.card}>
      {children}
      <CardTitle>{name}</CardTitle>
      <CardAddress>{address}</CardAddress>
      <p>Currency: {currency}</p>
      <CardBalance>
        {balance} {currency === 'Ethereum' ? 'ETH' : 'BTC'}
      </CardBalance>
      <div>
        <CardBalance>
          <USDIcon />
          {balance / rate}
        </CardBalance>
      </div>
      {/* <WalletsIcons /> */}
    </div>
  );
}
