
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const name = process.env.DOCKER_USERNAME;
  while(true) {
    console.log("Microservices rock {$name}  !");
    await sleep(5000);
  }
}

main();
