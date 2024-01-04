#!/bin/sh
echo 
# Start the hardhat node in the background
ETHERNAL_API_TOKEN=${ETHERNAL_API_TOKEN} npx hardhat node &

# Wait for the node to start
sleep 10

# Execute your script or commands here
npx hardhat run scripts/local-setup.ts --network localhost
# Keep the script running to keep the container alive
wait
