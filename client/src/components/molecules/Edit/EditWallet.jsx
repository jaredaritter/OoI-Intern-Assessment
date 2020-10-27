import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { usdFormatter, cryptoFormatter } from '../../../util/index';

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

export default function EditWallet({ children, wallet, rate }) {
  const classes = useStyles();
  let { name, address, currency, balance } = '';
  if (wallet) {
    name = wallet.name;
    address = wallet.address;
    currency = wallet.currency;
    balance = wallet.balance;
  }
  // const formattedBalance = cryptoFormatter(balance);
  // const formattedCashBalance = usdFormatter.format(balance / rate);

  return (
    <div className={classes.card}>
      {children}
      <form action="" method="post">
        <div>
          <label htmlFor="name">Name </label>
          <input type="text" name="name" id="name" value={name} />
        </div>
        <div>
          <label htmlFor="address">Address: </label>
          <input type="text" name="address" id="address" value={address} />
        </div>
        <div>
          <label htmlFor="currency">Currency: </label>
          <input type="text" name="currency" id="currency" value={currency} />
        </div>
        <div>
          <label htmlFor="balance">Balance: </label>
          <input type="text" name="balance" id="balance" value={balance} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
