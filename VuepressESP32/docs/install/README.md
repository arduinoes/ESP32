---
sidebar: auto
---

# ESP32 Arduino
 
Hola y bienvenidos a este tutorial,

[![Introducción](../.vuepress/public/img/introduccion.png)](https://www.youtube.com/watch?v=dZ59MDPcrqo&list=PLgh8bcLDakt3KLia5B5ZIEbvhxp41EPiE)


En este tutorial aprenderemos a programar el microcontrolador ESP32 de espressif con el IDE de Arduino. Este microcontrolador programable es muy popular por que integra conectividad WiFi y Bluetooth a un precio muy económico que lo hace ideal para proyectos IoT “internet de las cosas”.

Podemos encontrar DevKits o placas de desarrollo, que además, integran cámara y micrófono para proyectos de video vigilancia o también micrófono y salida de audio para crear nuestro propio asistente de voz. 

Como vemos las posibilidades son infinitas.

Hablemos ahora de su precio y donde comprarlas, rondan desde 6 €/$ (en tiendas chinas) hasta unos 10 €/$ en amazon.

Yo recomiendo estas dos:

  - Más caras pero ideales para desarrollos con múltiples componentes.

    - Amazon [keyestudio ESP32](https://www.amazon.es/KEYESTUDIO-ESP32-Tablero-para-Arduino/dp/B07Q9YDS2V/ref=sr_1_1_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1VV5PSWXZORF1&keywords=KEYESTUDIO+ESP32+ESP&qid=1656427787&s=electronics&sprefix=keyestudio+esp32+esp%2Celectronics%2C67&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyNFY2TjE3M1NKT1g3JmVuY3J5cHRlZElkPUEwNTY0NTU0MkcyUkQ5SVIxMzhWVyZlbmNyeXB0ZWRBZElkPUEwNDY1MzU0MUgyTzdTQjJWTU5CRiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=)

    - Aliexpress [Placa expansión](https://es.aliexpress.com/item/1005003886718473.html?_randl_currency=EUR&_randl_shipto=ES&src=google&src=google&albch=shopping&acnt=439-079-4345&slnk=&plac=&mtctp=&albbt=Google_7_shopping&gclsrc=aw.ds&albagn=888888&ds_e_adid=597275634909&ds_e_matchtype=&ds_e_device=c&ds_e_network=u&ds_e_product_group_id=296715514933&ds_e_product_id=es1005003886718473&ds_e_product_merchant_id=109196579&ds_e_product_country=ES&ds_e_product_language=es&ds_e_product_channel=online&ds_e_product_store_id=&ds_url_v=2&albcp=17223524136&albag=139444314471&isSmbAutoCall=false&needSmbHouyi=false&gclid=CjwKCAjwzeqVBhAoEiwAOrEmzRnBA2ar26BMogHojaNW8SsRAOfubELQCQ69rG9bE5hZwdIk3pAIMRoCVjMQAvD_BwE&aff_fcid=274b002edb7747e0af0b15f6bca9aed0-1656428327181-00770-UneMJZVf&aff_fsk=UneMJZVf&aff_platform=aaf&sk=UneMJZVf&aff_trace_key=274b002edb7747e0af0b15f6bca9aed0-1656428327181-00770-UneMJZVf&terminal_id=9900710f2c2345f5a740a37b91807b9d&afSmartRedirect=y)

  - Mas económicas pero muy límitada en pines gnd y voltage.

    - RandomNerdTutorials [DOIT ESP32 DEVKIT V1](https://randomnerdtutorials.com/getting-started-with-esp32/)

    - Donde comprar [DOIT ESP32 DEVKIT V1](https://makeradvisor.com/tools/esp32-dev-board-wi-fi-bluetooth/)


## Configuración

### Arduino IDE

Descarga el [Arduino IDE](https://www.arduino.cc/en/software)

![Seleccionar](../.vuepress/public/img/Arduino01.png)

Pulsa en **Just Download**

![Descargar](../.vuepress/public/img/Arduino02.png "Descargar")

### USB to UART Bridge

Descarga el [Driver CP210x](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers)

![Descargar](../.vuepress/public/img/Driver01.png "Descargar")
![Descargar](../.vuepress/public/img/Driver02.png "Descargar")

[![Instalación](../.vuepress/public/img/instalacion.png)](https://youtu.be/HYHlZOjQw4Q)

### Configurar la placa en Arduino

Aquí os dejo dos direcciones que utilizo y funcionan, a día de hoy claro.

Desde [randomnerdtutorials.com](https://randomnerdtutorials.com/installing-the-esp32-board-in-arduino-ide-windows-instructions/)

Selecciona **File > Preferences** e introduce la siguiente línea:

![Preferencias](../.vuepress/public/img/Preferencias.png "Preferencias")
```
https://dl.espressif.com/dl/package_esp32_index.json
```
ó desde [Documentación espressif](https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html)
```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```
Selecciona **Tools > Board > Boards Manager…** y busca:
```
ESP32
```
![Gestor](../.vuepress/public/img/Gestor.png "Gestor")
[![Configuración](../.vuepress/public/img/configuracion.png)](https://youtu.be/KuRgwLvH9WY)


una vez instalado seleccionaremos la placa en **Tools > Board** en mi caso es: **ESP32 Dev Module** en **Tools > Port** seleccionaremos el puerto, depende del sistema operativo lo veremos como **COM y un número** para windows y  **/dev/cu.SLAB_/USBtoUART** en Mac.

Wiki ESP32 KEYESTUDIO [Documentación](https://wiki.keyestudio.com/KS0413_keyestudio_ESP32_Core_Board)

![Imagen](../.vuepress/public/img/ImagenTarjeta.png "Imagen")
![Tarjeta](../.vuepress/public/img/Tarjeta.png "Tarjeta")
![Config](../.vuepress/public/img/Config.png "Config")
![Administrador de dispositivos](../.vuepress/public/img/AdmiDispo.png "Administrador de dispositivos")
![Puerto](../.vuepress/public/img/Puerto.png "Puerto")
![Puerto](../.vuepress/public/img/mac.png "Puerto")

### Ejemplos de verificación

Finalmente selecciona un ejemplo **Archivo > Ejemplos > Basics > Blink** y realiza un test.

Si quieres comprobar la conexión WiFi selecciona el ejemplo **File > Examples > WiFi (ESP32) > WiFiScan** y realiza un test.

[![Test](../.vuepress/public/img/test.png)](https://youtu.be/_WU5XLTfZTY)

