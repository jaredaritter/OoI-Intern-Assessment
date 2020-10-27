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

// APPARENTLY I'M TOO UNFAMILIAR WITH API ENDPOINTS AND THEIR APPLICATION METHODS TO IMPLEMENT THE POST, PUT, AND DELETE ROUTES PROPERLY IN THE GIVEN TIME. MY EXPERIENCE HAS BEEN ROUTING TO STATIC PAGES FROM LOCAL AND HOSTED MONGODB DBS. THIS HAS BEEN A MONUMENTALLY HELPFUL LEARNING EXPERIENCE ON THE HOLES IN MY KNOWLEDGE AND WHERE I NEED TO FOCUS MY EFFORTS.

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
  // SUCCESSFULLY REDIRECTS
  res.redirect('/');
});

module.exports = router;
