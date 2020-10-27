# Jared's personal notes for the this project

## Final notes

I'm out of my alloted 4 hours and out of real progress that I can make without more learning.

This was an enlightening experience and a significant challenge. You will unfortunately find that a significant portion of the project does not work due to my lack of familiarity with meshing front and back ends together through APIs. I have known that this is a weakness of mine and have kicked it down the road focusing on fundamentals but that approach has bitten me on this.

I have tried to put comments in areas of the code where I had difficulty or was unable to implement properly and have condensed my takeaways below. Thank you for this opportunity!

Pros:

- Able to use version control tools as requested comfortably.
- By and large able to understand all of the front end requirements, implement most if in a crude fashion, and take advantage of some of the built in components and features despite not having seen them before.
- General understanding of the front end codebase outside of the methods and actions relating to linking to the back end.
- Able to implement logger and parse backend index.js file appropriately
- Able to parse more complicated back end than I have seen before and create the post, put, and delete endpoints.
- Able to understand the intention of the full project, I just do not have the technical knowledge to implement the features in the time required.

Cons:

- Unfamiliar with the special 'children' property until seeing it here and had difficulty using it for more than basic passthrough
  - This became an issue for appropriate filtering of the coins
- Unable to implement wallet modification buttons linking to back end and unable to take that information appropriately for back end use. Very much need to brush up on Node and Express use.
- The linking of front and back ends through this style of API caused me a lot of trouble and I was ultimately not able to learn enough to get it working in the time.
- My testing knowledge is rudimentary with no time left to implement any further testing.

## Thoughts

I'm having to spend quite a bit of time looking things up because they are being done in ways different than I am used to. I can mostly understand and read the codebase but the Material UI and Atomic Design make the code busy and harder to parse.
It is certainly better to use the existing code to complete the assignment as most development would rather use existing structures but due to time constraints it may be faster to just rebuild things and do it the way I know.
The API routing and endpoints along with the integration between front and back end is significantly different than what I have learned on and is a large hinderance for me. This needs to be a future focus as it is the core of what I will be doing.

## Mini thoughts

- NPM warning on install for client with high risk packages.
  - Will not address due to reported possible breaking changes by the audit.
- Has basic Create-React-App scaffold for front end
- Express backend
- Children is a special prop for passthrough
- Full use of hooks and API for data flow and connection
- Have to restart node for changes to take effect. I'm spoiled by recent use of CRA and wasted time chasing bugs that were not there, I just had not restarted the server. Bleh!

# UNICEF Office of Innovation Blockchain Team Intern Assessment

It is not required to complete every part of this assessment. Go as far as you can in the allotted time.

1. Fork the repository
2. Clone your forked repository
3. `npm install && cd client; npm install`
4. Create a new branch `unicef-assesment`
5. To start the server: `node index.js`
6. To start the client: `cd client; npm run start`

## Front End

1. Create a new Molecule - WalletCard.jsx (COMPLETED)
2. Add your WalletCard component to the Wallets template (COMPLETED)
3. Add one WalletCard for each wallet of the ‘wallets’ prop. (COMPLETED)
4. Display all of the wallet properties on your WalletCard (COME BACK TO **\*\*\*\***)
   1. Use react material components or existing atoms/molecules. (TRIED USING THEIR COMPONENTS WITH OKAY SUCCESS)
   2. Properly format amounts for ETH/BTC. (COMPLETED ???????)
   3. Display & format USD amounts using the `rate` prop. (COMPLETED ??????)
5. Filter the wallets array on the Wallets page to display only the Ethereum wallets on the Ethereum tab and Bitcoin on the Bitcoin tab. (COME BACK TO **\*\*\*\*** FEEL LIKE I'M MISSING SOMETHING OBVIOUS)
6. Create a form to add/edit wallets. (COMPLETED KINDA. NEEDS WORK ON PROPS)
7. Add an ‘Add New Wallet’ button to the Wallets Template (COMPLETED)
8. Create three new actions: (CREATED BUT NOT IMPLEMENTED. WILL COME BACK IF I HAVE TIME)
   1. addWallet.js
      Using fetch, POST the new data to the backend
   2. editWallet.js
      Using fetch, PUT the updated data to the backend
   3. removeWallet.js
      Using fetch, DELETE wallet data from the backend
9. Add ‘Edit Wallet’ & ‘Remove Wallet’ buttons to your WalletCard (COMPLETED)
10. Wire up your new actions. (NOT SPENDING TIME SINCE ACTIONS ARE NOT IMPLEMENTED)

### Expected Results:

1. WalletCards are displayed on page when the app opens (TRUE)
2. Add/Remove/Edit Wallets (BUTTONS PRESENT BUT LIMITED FUNCTION)
3. WalletCards update as the Wallet details change on the backend. (UNKNOWN, MIGHT BE HELPFUL TO USE THIS AFTER WORKING ON BACK END)

## Back End

1. Complete the `logRequest` middleware to log each request path and the user’s ip address. (COMPLETED)
   1. Use the existing Logger library
   2. Create a new logger object named ‘logReqest’
   3. Log to the `info` transport
2. Add new endpoints to the `/wallets` route for POST, PUT and DELETE (COMPLETED)
3. Create three new application methods:
   1. addWallet
   2. updateWallet
   3. deleteWallet
4. Wire up your endpoints to the application.
5. Make the unit tests pass when you run `npm run test`
6. Add additional unit tests for the edge cases in your new code.

## Submission

Once you complete the assignment, please make your repository private and invite `mehranhydary` and `tenthirtyone` to the repository so that your solution can be reviewed by UNICEF.
