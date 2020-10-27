import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardTitle from '../../atoms/Text/CardTitle';
import CardAddress from '../../atoms/Text/CardAddress';
import CardBalance from '../../atoms/Text/CardBalance';
import USDIcon from '../../atoms/Icons/USDIcon';
// import WalletsIcons from '../../atoms/Icons/WalletsIcon';
import { usdFormatter, cryptoFormatter } from '../../../util/index';
import ContainedButton from '../../atoms/Button/Contained';

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
  const { name, address, currency, balance } = wallet;
  const formattedBalance = cryptoFormatter(balance);
  const formattedCashBalance = usdFormatter.format(balance / rate);

  const handleEdit = (e) => {
    console.log('Begin Editting');
  };

  const handleRemove = (e) => {
    console.log('Begin Remove');
  };

  return (
    <div className={classes.card}>
      {children}
      <CardTitle>{name}</CardTitle>
      <CardAddress>{address}</CardAddress>
      <p>Currency: {currency}</p>
      <CardBalance>
        {formattedBalance} {currency === 'Ethereum' ? 'ETH' : 'BTC'}
      </CardBalance>
      <div>
        <CardBalance>
          <USDIcon />
          {formattedCashBalance}
        </CardBalance>
      </div>
      {/* <WalletsIcons /> */}
      <ContainedButton onClick={handleEdit}>Edit Wallet</ContainedButton>
      <ContainedButton onClick={handleRemove}>Remove Wallet</ContainedButton>
    </div>
  );
}
