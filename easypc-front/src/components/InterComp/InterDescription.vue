<template>
  <div>
    <div v-if="count == 0">
      <p>
        La CPU, es la parte encargada de procesar todas las instrucciones,
        motivo por el cual es el elemento más importante del computador. Se ha
        definido como el cerebro del ordenador.
      </p>

      <p>
        La CPU tiene un mínimo de un núcleo en su interior, para realizar los
        cálculos y operaciones. Que tenga varios núcleos suele implicar que es
        capaz de realizar más operaciones a la vez. Los threads, son las
        secuencias de instrucciones pertenecientes al sistema operativo o una
        aplicación. Con esto, cada núcleo físico puede actuar como si fuera dos
        núcleos virtuales, ya que cada uno puede trabajar con dos secuencias de
        instrucciones diferentes.
      </p>

      <p>
        Luego está la velocidad del procesador, que se marca en gigahercios, que
        son 1.000.000.000 de acciones por segundo. No sólo importa el número de
        procesadores, sino cómo trabaja cada uno. Cuantos más GHz tenga un
        procesador más rápido será.
      </p>
      <p>
        significa que si tienes un procesador de cuatro núcleos a 1 GHz, este
        será más lento que un procesador de dos núcleos a 2,5 GHz.
      </p>
    </div>
    <div v-if="count == 1">
      <p>
        Una tarjeta madre es una placa de circuito impreso, con algunos
        componentes integrados y a la que se conectan los componentes esenciales
        de una computadora.
      </p>
      <p>
        Se encarga de la comunicación de datos, el control y el monitoreo, la
        gestión de la energía eléctrica, la conexión física de diversos
        componentes y de la temporización.
      </p>
      <p>
        La tarjeta madre alberga los conectores necesarios para el procesador,
        la memoria RAM, los puertos y el resto de las placas, como la tarjeta de
        video.
      </p>
      <p>
        En este caso es importante escoger una tarjeta madre compatible con tu
        CPU que escogiste en el paso anterior. No te preocupes, nosotros te
        mostramos a continuación solo las tarjetas madre compatibles.
      </p>
    </div>
    <div v-if="count == 2">
      <p>
        La memoria RAM es la memoria principal del sistema y como tal dispone de
        una gran velocidad de lectura y escritura, ya que se comunica con casi
        todas las partes de un PC.
      </p>
      <p>
        Es un tipo de memoria volátil, lo que significa que los datos que
        almacena se mantendrán en ella mientras tenga la energía suficiente para
        funcionar correctamente.
      </p>
      <p>
        Su función principal es almacenar datos e instrucciones para que puedan
        ser accedidos por otros componentes básicos, de manera que evita que
        tengan que volver a pasar por el procesador o incluso por la tarjeta
        gráfica. Entre más memoria tengas, más datos podrán manejar tus
        programas.
      </p>
    </div>
    <div v-if="count == 3">
      <p>
        La tarjeta gráfica, es una tarjeta de expansión o un circuito integrado
        que se encarga de procesar los datos que le envía el procesador del
        ordenador y transformarlos en información visible y comprensible para el
        usuario en el monitor.
      </p>
      <p>
        Las tarjetas gráficas dedicadas son placas de vídeo que tienen su propia
        GPU, memoria gráfica, salidas de vídeo y sistema de refrigeración, que
        se conectan a la placa base a través de un puerto PCI-Express.
        Proporcionan un nivel de rendimiento muy superior a los gráficos
        integrados.
      </p>
      <p>
        Entre más memoria dedicada tenga tu tarjeta grafica, podria correr
        juegos mas pesados y a mejor calidad, o realizar trabajos gráficos con
        mayor facilidad.
      </p>
    </div>
    <div v-if="count == 4">
      <p>
        Hasta los circuitos más básicos suelen recalentarse, y por ello, tu CPU
        es más propensa a este problema. Esto debe ser disminuido para el buen
        funcionamiento. Cada vez se hace más necesario un sistema de
        refrigeración más eficiente, debido a las altas frecuencias que manejan
        estos componentes.
      </p>
      <p>
        Existen diversos tipos de refrigeración como el disipador, que solo se
        pone en contacto con la CPU para que este disipe el calor. Este es el
        más básico de todos y no lo verás en un PC de escritorio.
      </p>
      <p>
        Adicionalmente, se encuentra la refrigeración por aire que, además del
        disipador, se incluye en él un ventilador, que enfría el disipador.
      </p>
      <p>
        Finalmente, la refrigeración líquida, consiste en hacer correr un
        líquido refrigerante en un circuito diseñado para retirar el calor de la
        CPU bajando la temperatura. Este es el más avanzado de todos y
        recomendado solo si tienes una CPU potente que emite mucho calor.
      </p>
    </div>
    <div v-if="count == 5">
      <p>
        Las unidades de estado sólido son una alternativa a los discos duros. La
        gran diferencia es que las SSD almacenan los archivos en microchips con
        memorias flash interconectadas entre sí. No tienen cabezales físicos
        para grabar los datos, en su lugar incluyen un procesador integrado para
        realizar operaciones relacionadas con la lectura y escritura de datos.
      </p>
      <p>
        Estos procesadores son los que toman las decisiones sobre cómo
        almacenar, recuperar, almacenar en caché y limpiar los datos del disco,
        y su eficiencia es uno de los factores que determinan la velocidad total
        de la unidad. Además, al no depender del giro de un componente físico,
        también se logra una unidad más silenciosa que los discos mecánicos.
      </p>
      <p>
        Acá te lo dejamos como algo opcional, para que metas tu sistema
        operativo y te prenda en un dos por tres.
      </p>
    </div>
    <div v-if="count == 6">
      <p>
        Los discos duros nos permiten almacenar de forma permanente tus datos.
        Están compuestos de piezas mecánicas y utilizan el magnetismo para
        grabar tus datos y archivos. Se compone de uno o varios discos rígidos
        unidos por un mismo eje y que giran a gran velocidad dentro de una caja
        metálica.
      </p>
      <p>
        Cuanto más finos sean los discos mejor será la grabación, y cuanto más
        rápido giran a mayor velocidad se transmiten los datos, tanto a la hora
        de leerlos como al escribirlos. Suelen ser bastante económicos.
      </p>
    </div>
    <div v-if="count == 7">
      <p>
        La fuente de poder es un componente del computador que se encarga de
        transformar una corriente eléctrica alterna en una corriente eléctrica
        continua transmitiendo la corriente eléctrica imprescindible y necesaria
        a los ordenadores para el buen funcionamiento y protección de estos.
      </p>
      <p>
        Tienes que tener en cuenta que esta fuente de poder debe poder abastecer
        la totalidad de tus componentes, por lo que aca solo te mostramos las
        que cumplen con lo que necesita tu PC.
      </p>
    </div>
    <div v-if="count == 8">
      <p>
        El mouse es un dispositivo apuntador utilizado para facilitar el manejo
        de un entorno gráfico en una computadora.
      </p>
      <p>
        Los puntos por pulgada (DPI) son una medida de la sensibilidad de un
        ratón. Cuanto más alto sea el DPI del ratón, más lejos se moverá el
        cursor de la pantalla cuando muevas el ratón. Un ratón con un ajuste DPI
        más alto detecta y reacciona a movimientos más pequeños.
      </p>
      <p>
        Un DPI más alto no siempre es mejor, ya que no querrás que el cursor del
        ratón vuele por toda la pantalla cuando lo muevas un poco. Por otro
        lado, un ajuste más alto ayuda a que el ratón detecte y responda a
        movimientos más pequeños para que puedas apuntar las cosas con mayor
        precisión.
      </p>
      <p>Recuerda que si lo deseas puedes omitir su selección.</p>
    </div>
    <div v-if="count == 9">
      <p>
        Un teclado es un periférico de entrada, inspirado en el teclado de las
        máquinas de escribir, que utiliza un sistema de teclas, para que actúen
        como palancas mecánicas o interruptores que envían toda la información a
        la computadora. Existen dos tipos: de membrana o mecánicos.
      </p>
      <p>
        Los teclados mecánicos tienen una ventaja muy importante con respecto a
        los de membrana, el recorrido de sus teclas al pulsarlas permite jugar
        de una manera más precisa en combinación con el ratón.
      </p>
      <p>
        Los teclados de membrana se considera que son más incómodos para
        escribir ya que al utilizarlos la pulsación es plana y sin ningún tipo
        de retroalimentación táctil. Sin embargo, son más económicos y
        extremadamente silenciosos.
      </p>
      <p>Recuerda que si lo deseas puedes omitir su selección.</p>
    </div>
    <div v-if="count == 10">
      <p>
        El monitor de PC tiene muchos parecidos con las modernas televisiones.
        Sin embargo, los monitores suelen tener ciertas características que los
        hacen más indicados para las tareas habituales que suelen realizar,
        motivo por lo que no todas las pantallas son monitores para PC.
      </p>
      <p>
        Entre estas caracteristicas se encuentra el Espectro de color, ideal
        para el trabajo gráfico de precisión. Adicionalmente, la resolución y la
        tasa de refresco son de gran importancia. La resolución de pantalla es
        el número de píxeles que hay en la pantalla y la tasa de refresco es el
        número de veces que se refresca la pantalla por segundo, y se mide en
        hercios (Hz).
      </p>
      <p>
        Junto a esto, el tiempo de respuesta, que es el tiempo que tarda un
        píxel en cambiar de estado de encendido a apagado son importantes si
        quieres tener una ventaja en tus videojuegos.
      </p>
      <p>Recuerda que si lo deseas puedes omitir su selección.</p>
    </div>
    <div v-if="count == 11">
      <p>
        El chasis del ordenador, es la estructura metálica o plástica, cuya
        función consiste en albergar y proteger los componentes internos como la
        CPU, la RAM, la tarjeta madre, la fuente de alimentación, entre otros.
      </p>
      <p>
        Este es quizás el elemento de mayor customización de tu PC, con luces
        RGB y paneles transparentes para ver los componentes que llevas dentro!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "InterDescription",
  data: () => ({}),
  props: {
    count: Number,
  },
};
</script>

<style scoped>
  p {
    text-align:justify;
  }
  
</style>