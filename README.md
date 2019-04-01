# Angular truffle box

https://truffleframework.com/boxes/angular-truffle-box

## Troubleshooting

### Error: Returned values aren't valid, did it run Out of Gas?

Try deleting the build folder and run compile & migrate again (npm run cm).

### Error: XXX has not been deployed to detected network (network/artifact mismatch)

- Add your contract to 2_deploy_contracts.js
- Run compile & migrate again
