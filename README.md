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

Komut ile kullanıcı arayüzünden bir argüman gönderip bu argumanı parse edip gelen değere göre de google map apiden filtreleme yapmak isteyebiliriz. Tüm bunları ve daha fazlasını yargs  paketi ile sağlayabiliriz.

Detaylı incelemek isterseniz:

https://www.npmjs.com/package/yargs

npm üzerinden kurulumunu: 

## npm install yargs@latest --save

komutunu yazıp son versiyonunu kaydedebilirsiniz.

Daha sonra address argumanını kullanıp google map apiden belirttiğimiz adrese göre json result döndürmek için :

## node app.js --address 'İzmir'

Result değeri:

Address : Izmir, İzmir, Turkey

Latitude : 38.423734

Longtitude : 27.142826
