console.log('JavaScript cargado correctamente');
// Función para guardar el nombre del asesor en el localStorage
function guardarAsesor() {
  const asesor = document.getElementById('asesor').value;
  localStorage.setItem('asesor', asesor);
  alert('Nombre del asesor guardado');
}

// Función para guardar el nombre del cliente en el localStorage
function guardarCliente() {
  const cliente = document.getElementById('cliente').value;
  localStorage.setItem('cliente', cliente);
  alert('Nombre del cliente guardado');
}

// Función para desplazarse al tema correspondiente
function scrollToTema(temaId) {
  const element = document.getElementById(temaId);
  element.scrollIntoView({ behavior: 'smooth' });
}

// Función para generar el mensaje personalizado
function generarMensaje(caso) {
  const asesor = localStorage.getItem('asesor') || 'Asesor';
  const cliente = localStorage.getItem('cliente') || 'Cliente';
    
  const mensajes = {
    'tema1_1': `¡Bienvenid@ a Movistar! Soy ${asesor}, Lucía me transfirió tu caso, seré yo
quien continuará tu atención. 🙌🏻. Agradezco tu tiempo en espera. Te brindaré más detalles sobre tu solicitud.

CUANDO ENCUENTRAS UN NÚMERO EN LA CONVERSACIÓN QUE PODRÍA SER EL NÚMERO EN CONSULTA:
SPEECH 01:
${cliente}, ¿la consulta es por el mismo número del que nos escribes? ☺️

SPEECH 02:
¿La consulta sería por la línea terminada en XXXX? 😎

CUANDO NO ENCUENTRAS POSIBLE NÚMERO EN CONSULTA:
SPEECH 01:
¿La consulta sería por los servicios asociados al DNI terminado en XXXX?😎

SPEECH 02:
Brindanos tu número en consulta para poder personalizar tu atención, por favor.🙏🏻`,

    'tema1_2': `PUEDES UTILIZAR O TOMAR COMO EJEMPLOS, LOS SIGUIENTES SPEECHES:
Hola, soy ${asesor}, Lucía me transfirió tu caso, seré yo quien continuará tu atención.🙌🏻. Agradezco tu tiempo en espera. Te brindaré más detalles sobre tu solicitud.

Hola, soy ${asesor} y continuaré con tu atención, Lucía me transfirió tu caso. Mantenemos el compromiso de brindarte la mejor atención.💙 Ahora te daré mayor detalle y ayuda sobre tu solicitud.😎

Hola, soy ${asesor}, continuaré con tu atención, ya que Lucía me transfirió tu caso.☺️
`,
    'tema1_3': 'En caso requieras de atención especial en otro idioma, o tengas alguna dificultad para atenderte por este medio, indícanos para poder ofrecerte la atención más adecuada.💙☺️.',
    'tema1_4': `PRIMERA COMUNICACIÓN:
Hola, ${cliente}. Visualizo que tu consulta es acerca de una línea Movistar Negocios💼. Por favor escríbenos al WhatsApp 999 949 241 o ingresando a través del siguiente enlace: www.smvst.com/whatsappempresas Seguimos trabajando para mantenerte siempre conectado. No olvides guardarnos como contacto.🙌🏻

SEGUNDA COMUNICACIÓN (CLIENTE SIN SOLUCIÓN - POTENCIALMENTE CRÍTICO) - "NO ME CONTESTAN, NO TENGO SOLUCIÓN"
Hola, ${cliente}. Por favor, envíanos tus datos completos (por interno) para poder notificar al área correspondiente y se puedan comunicar contigo a la brevedad posible. Recuerda que puedes escribirnos a nuestro WhatsApp Negocios al 999 949 241 o a través del siguiente enlace: www.smvst.com/whatsappempresas.💼 🙌🏻Recuerda que deberás escribirnos desde el mismo número empresas que deseas consultar.
`,
    'tema1_5': `SPEECH 01:
${cliente}, por tu seguridad, la solicitud requerida se debe realizar a través de nuestras oficinas. 🏢Gracias por contactarnos.🤝🏻

SPEECH 02:
Por tu seguridad, ${cliente}, el requerimiento se tendrá que hacer directamente en una de nuestras oficinas. Agradecemos tu comprensión.🤝🏻

SPEECH 03:
#Nombre, por tu seguridad, la solicitud requerida debes realizarla dirigiéndote a cualquiera de nuestras oficinas: (brindar link de centros de oficina). Gracias por contactarnos.💙
`,
    'tema1_6': `REVISIÓN DE CASOS E HISTORIAL:
${cliente}, en este momento estoy verificando tu caso para poder ayudarte.💪🏻
Gracias por enviarme tus datos. Permíteme un instante mientras reviso tu consulta.🙏🏻


CLIENTE CON FALTA DE RESPETO:

SPEECH 01:
Hola. Este es tu canal de atención Movistar y estamos aquí para darte el soporte que requieres,🔧  sin embargo, para ello necesito que utilices términos adecuados y daremos inicio a tu atención. Descuida, que por aquí podremos revisar y solucionar todas las consultas que necesites. ¿Cómo puedo ayudarte?🙌🏻

SPEECH 02:
Por favor usa términos adecuados para continuar con la atención. 🙏🏻

SPEECH 03:
Gracias por contactarnos. 🙌🏻

CONVERSACIONES VICIO:

Si tienes alguna consulta sobre nuestro servicio o productos, estamos aquí para atenderte.💪🏻

  
AVERÍAS MASIVAS:
Hemos detectado algunos inconvenientes con nuestro servicio en la zona en la que te encuentras. ⚙️ En el transcurso del día podrás contar con tus servicios de manera regular. Estaremos pronto de vuelta para atenderte.🙏🏻

CAÍDA DE APLICATIVOS Y/O RED:
${cliente}, estamos realizando trabajos de mantenimiento en nuestros sistemas comerciales ⚙️. Por favor, ponte en contacto con nosotros nuevamente por este medio en el transcurso del día para poder ayudarte en lo que necesitas.🙏🏻
`,
    'tema1_7': `GRABAR AUDIO DESDE EL CELULAR, ENVIÁRSELO POR CORREO O WHATSAPP WEB PARA CARGARLO EN WEBCHAT:
Descuida, para enviar un audio mediante la web, puedes grabarlo desde tu Pc o descargarlo. Posterior a ello, adjuntarlo como un archivo desde la parte derecha de este chat, ahí podrás adjuntar audios, imágenes y emojis. 🤝🏻

SI CLIENTE REALMENTE NO PUEDE GRABAR, DERIVAMOS A WHATSAPP PARA QUE CONCLUYA DESDE SU MÓVIL Y EN ESE CANAL SU ATENCIÓN:
${cliente}, si en caso no puedes enviar el audio por este medio, no te preocupes, comunícate con nosotros a través de nuestro canal de atención por WhatsApp 999 955 555 y te ayudaremos sin ningún inconveniente. 🙌🏻

SI EN CASO EL CLIENTE SE ENCUENTRE DEMASIADO CRÍTICO Y QUIERE QUE LO ATENDAMOS POR ESTE MEDIO:
¡No te preocupes! Por favor, transcribeme la información solicitada, para continuar con tu solicitud. ☺️
`,
    'tema1_8': `CLIENTE QUE ENCOLADO, MENCIONA MOLESTIA POR EL TIEMPO DE ASIGNACIÓN A UN EJECUTIVO:
Hola, ${cliente}. Agradecemos tu comprensión. Hemos reforzado nuestra capacidad de atención por este canal, sin embargo, en ocasiones, la atención podría demorar un poco más de lo habitual. ⏳ En breve te daré detalles de tu caso.

CLIENTE POST-INCIDENCIA O TRABAJO PROGRAMADO:
Hola, ${cliente}. Gracias por tu tiempo en espera🙏🏻. Te cuento que estuvimos con [inconvenientes con el sistema/lentitud en el sistema/mantenimiento/etc.], sin embargo, ya estamos listos para atenderte. ☺️

CLIENTE ESCRIBE DENTRO DEL HORARIO DE ATENCIÓN, PERO ES ASIGNADO FUERA DE HORARIO Y NO TIENE EQUIPO DE RESPALDO:
Hola, ${cliente}. Gracias por tu tiempo en espera🙏🏻. A pesar de estar fuera del horario de atención, tu satisfacción es importante para nosotros y nos hemos quedado en línea para atenderte en este momento.💙
`,
    'tema1_9': `VALIDAR SISTEMAS:
${cliente}, me encuentro revisando tu caso. Me pondré en contacto contigo apenas consiga mayor detalle. Muchas gracias. ☺️

ATENDER SOLICITUD:
${cliente}, estoy gestionando tu solicitud, un momento, por favor. 🙏🏻
`,
    'tema1_10': `SPEECH 01:
Permíteme verificar tu caso para ayudarte.🙌🏻

SPEECH 02:
Me encuentro revisando tu caso. Me pondré en contacto contigo apenas consiga mayor detalle. 🚀
`,
    'tema1_11': `SPEECH 01:
Estoy revisando tu caso, apenas tenga una respuesta te escribiré. Agradezco tu paciencia.🙏🏻

SPEECH 02:
Permíteme unos instantes, ya que continúo revisando tu caso.🙌🏻
`,
    'tema1_12': `SPEECH 01:
${cliente}, tal vez en estos momentos no puedas responder, pero, no te preocupes, estaré esperándote 3 minutos más para poderte ayudar.🙌🏻

SPEECH 02:
${cliente}, estuve atento a tu respuesta por un lapso de 7 minutos. Tal vez en estos momentos estés ocupado, pero, descuida, puedes volver a escribirnos cuando te encuentres disponible y uno de mis compañeros continuará con tu atención. ¡Te esperamos!☺️

SPEECH 03:
${cliente}, tal vez te encuentres ocupado, pero descuida, estaré aquí por 3 minutos más por si me necesitas. Si no puedes responder en ese tiempo, uno de mis compañeros te ayudará cuando estés disponible.💪🏻
`,
    'tema1_13': `2DAS LÍNEAS:
${cliente}, en este momento te transferiré con nuestra área especializada para que te brinden el soporte correspondiente, un momento por favor. 🙏🏻

FUERA DE HORARIO DE ATENCIÓN:
En estos momentos nuestra área especializada se encuentra fuera de servicio. Por favor, contáctanos nuevamente por este medio en el horario de (#hora inicio) a (#hora fin)☺️`,
    'tema1_14': `CON SOLUCIÓN:

SPEECH 01:
Espero haber podido ayudarte con tu consulta. ¿Podría ayudarte con algo adicional?☺️

SPEECH 02:
${cliente}, recuerda que, si tienes alguna consulta sobre nuestros servicios o productos, estamos aquí para atenderte. Gracias por contactarte con nosotros. 🙌🏻

SIN SOLUCIÓN (48 HORAS):
Descuida, estaré realizando el seguimiento a tu caso para que se regularice lo más pronto posible, valido que tu caso fue escalado con nuestra área especializada y en un plazo de 48 horas ⌚ se estaría realizando la solución al inconveniente presentado. Gracias por contactarnos.💙

SIN SOLUCIÓN (7 DÍAS):
Verifico que tu caso ya fue derivado con nuestra área especializada para que se regularice en un plazo no mayor a 7 días ⏰. De igual manera, estaremos realizando el seguimiento correspondiente para que sea lo más pronto posible. Seguiremos mejorando nuestros servicios para ti.💙
`,
    'tema1_15': `3 MINUTOS:
${cliente}, tal vez te encuentres ocupado, pero descuida, estaré aquí por 3 minutos más por si me necesitas. Cuando regreses te contaremos las ofertas y mejoras para ti, con la finalidad de que disfrutes de mejores experiencias en nuestro servicio.

7 MINUTOS:

SPEECH 01:
${cliente}, estuve atento a tu respuesta por un lapso de 3 minutos. Tal vez en estos momentos estés ocupado, pero descuida, puedes volver a escribirnos cuando te encuentres disponible. Recuerda que, contamos con promociones exclusivas para ti🎉 ¡No dejes pasar esta oportunidad y empieza a disfrutar de grandes experiencias! ¡Te esperamos!☺️

SPEECH 02:
${cliente}, estuve a la espera de tu comunicación.⏳ Recuerda que siempre estaremos pendientes de brindarte nuevos beneficios con excelentes ¡PRECIAZOS! 🧨Espero que mi atención haya sido satisfactoria y haber solucionado tu consulta. En los próximos días te llegará una encuesta donde podrás calificarnos en la escala del 0 al 9 donde 9 es la nota máxima.🙌🏻
`,

    'tema2_2': `Hola ${cliente}, soy ${asesor}. Aquí tienes la información sobre el Tema 2, Subtema 2.`,
    'tema3_1': `Hola ${cliente}, soy ${asesor}. Aquí tienes la información sobre el Tema 3, Subtema 1.`,
    'tema3_2': `Hola ${cliente}, soy ${asesor}. Aquí tienes la información sobre el Tema 3, Subtema 2.`,
    // Añade más mensajes según sea necesario
  };

  const mensaje = mensajes[caso] || 'No se encontró el mensaje para este caso';
  document.getElementById('mensaje').value = mensaje;
}
