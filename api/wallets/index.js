const router = require('express').Router();
const { Logger } = require('node-core-utils');
const logger = new Logger('Wallet Routes');

router.get('/', async (req, res) => {
  const app = req.app.get('app');
  let wallets = [];
  try {
    wallets = await app.getWallets();
  } catch (e) {
    logger.error(e);
    return res.status(500).send();
  }
  res.json(wallets);
});

router.post('/', async (req, res) => {
  const app = req.app.get('app');
  let wallets = [];
  try {
    wallets = await app.getWallets();
  } catch (e) {
    logger.error(e);
    return res.status(500).send();
  }
  res.json(wallets);
});

router.put('/', async (req, res) => {
  const app = req.app.get('app');
  let wallets = [];
  try {
    wallets = await app.getWallets();
  } catch (e) {
    logger.error(e);
    return res.status(500).send();
  }
  res.json(wallets);
});

router.delete('/', async (req, res) => {
  const app = req.app.get('app');
  let wallets = [];
  try {
    wallets = await app.getWallets();
  } catch (e) {
    logger.error(e);
    return res.status(500).send();
  }
  res.redirect('/');
});

module.exports = router;
