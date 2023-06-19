# Analizador de texto

## Indice

* 1. Introducción del proyecto
* 2. Utilidad del proyecto 
* 3. Información necesaria para el uso de la aplicación web 
* 4. Funcionalidad 
* 5. Diseño
* 6. Contribuyentes del proyecto

***

## 1. Introducción del proyecto

Este analizador de texto es una herramienta que permite el análisis de las medidas de la complejidad de un texto. Se obtiene información muy útil; el número de caracteres, el número de caracteres sin espacios ni signos de puntuación, el número de palabras, la cantidad de números, la suma de los números, y el promedio de la longitud de las palabras que el usuario ingrese.   **Las metricas y funcionalidades dadas se retoman con mayor detalle a continuación.**
* **Caracteres:** La aplicación cuenta el número total de caracteres, incluyendo numeros, letras, espacios y signos de puntuación. 
* **Caracteres sin espacios:** Cuenta el número de caracteres, excluyendo espacios y signos de puntuación. 
* **Palabras:** Se cuenta el número de palabras totales. 
* **Números:** Se realiza un conteo de los números presentes en el texto introducido. 
* **Suma números:** La aplicación suma todos los números presentes en el texto.
* **Promedio longitud:** Se calcula el promedio de longitud de caracteres de las palabras o numeros introducidos. 
  Las métricas son actualizadas en tiempo real conforme el usuario ingresa el texto. Una vez que se obtienen los valores deseados, se puede limpiar el contenido de la caja de texto haciendo click en el boton “Reestablecer”.

## 2. Utilidad del proyecto 

El analizador de texto permite al usuario identificar si el texto introducido se adapta a los estándares de longitud, al número de caracteres, al recuento de palabras y al analisis de números para aplicarse en el ámbito académico, profesional o simplemente con fines recreativos. 

## 3. Información necesaria para el uso de la aplicación web 

Para utilizar esta herramienta simplemente el usuario tiene que escribir un texto o puede copiarlo y pegarlo directamente en la caja de texto, el valor de las métricas apareceran automáticamente, de manera que el usuario pueda analizarlas con los fines que desee. Para analizar un nuevo texto, se puede hacer click en el boton “Reestablecer” y volver a realizar el proceso antes mencionado. 

## 4. Funcionalidad 

Para la funcionalidad del análisis del texto se utiliza el lenguaje de programación JavaScript. Las funciones se implementan en el archivo src/analyzer.js en el objeto analyzer, el cual a su vez contiene seis métodos. 
* **getWordCount:** Retorna el recuento de palabras que se encuentran en el parámetro text de tipo string. Se utiliza el método trim() para eliminar los espacios que puedan ser introducidos antes o despues del texto. Tambien se utiliza el método split() para convertir la cadena de texto en un arreglo donde cada palabra constituye un elemento para posteriomente contar con .length. 
* **getCharacterCount:** Retorna el recuento de caracteres mediante trim(), y posteriormente se cuenta con .length.
* **getCharacterCountExcludingSpaces** Retorna el recuento de caracteres excluyendo espacios y signos de puntuación, mediante el método replace() para eliminar tanto los signos de puntuación como los espacios, posteriormente se utiliza .length. 
* **getNumberCount** Retorna el conteo de los números. Se utiliza trim(), split(), posteriormente se utiliza un bucle For, de manera que si un elemento dado en un arreglo es un número, se cuenta en la variable numeros. 
* **getNumberSum:** Retorna la suma de todos los números, mediante trim(), split() y un bucle For para analizar si un elemento del arreglo es un número, este sea sumado en la variable total. 
* **getAverageWordLength** Retorna la longitud media de palabras, mediante trim(), split() y .length para sacar el número de palabras (el número de elementos en un arreglo), así como replace() para quitar los espacios y .length para obtener el número de letras total. Finalmente se saca el promedio dividiendo el número de letras total entre el número de palabras. Con toFixed() se retorna 2 dígitos decimales. 

    En el archivo src/index.js se seleccionan los elementos con .querySelector y .getElementById y se modifica el contenido con .innerHTML. 

## 5.  Diseño

Como un primer acercamiento se realizó un prototipo de diseño de baja fidelidad, donde se decidió que el header de la página “Analizador de texto” se mostrara centrado en la parte superior. Así mismo se decidió que los elementos de la lista, donde se muestra el resultado del análisis de las métricas, fueran mostrados centrados en la parte superior, inmediatamente debajo de estas se observa el cuadro donde se espera que se escriba el texto y el boton de reestablecer, para limpiar las métricas. Finalmente en la parte de abajo se posicionó un footer con el nombre de la autora del presente analizador de texto (Figura 1). 
![Prototipo de baja fidelidad](prototipo%20baja%20.png)
_Figura 1: Prototipo de baja fidelidad_

Respecto a la paleta de colores, en una primera instancia el diseño se hizo en tonalidades rosas, como se puede apreciar en el prototipo de alta fidelidad (Figura 2).
![Prototipo de alta fidelidad](Prototipo%20alta%20.png)
_Figura 2: Prototipo de alta fidelidad_

Sin embargo, se decidió utilizar una imagen de fondo que se consideró visualmente muy atractiva y con buena resolución con una foto de un gato, por lo que se tomó la decisión de utilizar tonalidades cafés y beige, que combinan bien con dicha foto, este cambio resultó en un diseño mas sobrio, pero al mismo tiempo muy estético por la imagen del gato. Al header se le agregó un text-shadow, y a los elementos de la lista un borde con esquinas redondeadas en un tono beige y un box-shadow,  así como un color de fondo en distintas tonalidades cafés. En el caso de la caja de texto se utilizó un cursor pointer y la leyenda que indica donde va escrito el texto. En el boton para reestablecer se utilizó un borde circular, y para el nombre de la autora un tipo de fuente distinto al del resto de la página web.
![Versión final](version%20final.png)
_Figura 3: Versión final_



## 6. Contribuyentes del proyecto

Se muestra el nombre de la autora en la parte inferior izquierda “Dulce María Ramírez Rendon”, quien es estudiante de Laboratoria. 



[def]: pro