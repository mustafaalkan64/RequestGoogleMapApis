# Nodejs Google Map apisinden request npm package ile bilgilere erişme

Request package http protokollerle çalışmanın kolay bir halidir. 

Kısaca özetlemek gerekirse restfull servisler gibi düşünebiliriz.

Herhangi bir api'dan get ve post işlemleri yapabilir, json data elde edebiliriz.

Http authantication sağlayabilir, custom header ekleyebiliriz.

Ayrıntılı döküman: 

https://www.npmjs.com/package/request

Bu uygulamada da google map apisinden basit bir şekilde json data gösterme işlemi gerçekleştirilmiştir.

Bunun için yapmanız gereken ilk kurulum için:

## npm install

Komut ile kullanıcı arayüzünden bir argüman gönderip bu parametreye göre de google map apiden filtreleme yapmak isteyebiliriz.

Bunun için de 

## npm install yargs@latest --save

komutunu yazıp yargs paketi kurmamız gereklidir.

Daha sonra address argumanını kullanıp google map apiden belirttiğimiz adrese göre result döndürmek için :

## node app.js --address 'İzmir'

Result değeri:

Address : Izmir, İzmir, Turkey
Latitude : 38.423734
Longtitude : 27.142826
