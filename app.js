var request = require('request');
const yargs = require('yargs');

const argv = yargs
    .option({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address describe',
            string: true
        }
    })
    .help()
    .argv;

    encodedAddress = encodeURIComponent(argv.address);
    var googlemapurl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=YOUR-API-KEY`;
    console.log(googlemapurl);
    // command: node app.js --a 'İzmir'
    // export : https://maps.googleapis.com/maps/api/geocode/json?address=%C4%B0zmir&key=YOUR-API-KEY

request({
    url: googlemapurl,
    json: true
}, (error, response, body) => {
    // console.log(JSON.stringify(response, undefined, 2));
    console.log(`Address : ${body.results[0].formatted_address}`);
    console.log(`Latitude : ${body.results[0].geometry.location.lat}`);
    console.log(`Longtitude : ${body.results[0].geometry.location.lng}`);
});
