import { Episode, ArchiveItem, Spot, CommunityTestimony, GalvezCategory } from '../types';

export const EPISODES_DATA: Episode[] = [
  {
    id: 'nQsz3eL1cEo',
    episodeNumber: 1,
    title: 'GOL G1 ARMADO OLD SCHOOL CON 500HP',
    vehicle: 'Volkswagen Gol G1 1.9 Turbo "Cuadradito"',
    owner: 'Gustavo',
    yearModel: '1993',
    category: 'VAG Old School',
    youtubeId: 'nQsz3eL1cEo',
    instagramUrl: 'https://www.instagram.com/sportmeet90s/',
    localThumbnail: '/archive/nQsz3eL1cEo.jpg',
    osdTimestamp: 'NOV. 18 1997 - 03:20 AM',
    shortDescription: 'La mística del Gol cuadrado con motor AP forjado llevado a 1.9L, turbo Garrett T4, 500 caballos a la rueda y cero asistencias electrónicas.',
    fullChronicle: [
      'En la mitología de las picadas argentinas de los 90s, el Volkswagen Gol G1 ("el cuadradito") fue la vara con la que se midió la potencia en el asfalto. El auto de Gustavo encarna la transición perfecta entre la era de los carburadores presurizados con soplete y los primeros fierros armados con inyección programable.',
      'Bajo el capot no hay plásticos ni sensores modernos: descansa un legendario bloque AP de Audi/VW forjado de punta a punta (pistones Iapel, bielas Saenz, cigüeñal alivianado) hermanado a una turbina generosa que empieza a soplar con furia a partir de las 4.200 vueltas. Mantener la trompa en línea recta cuando entra el boost en segunda marcha exige manos firmes en el volante y nervios templados.',
      'Estéticamente conserva la pureza de la vieja escuela: llantas Orbital diamantadas de 15 pulgadas, un intercooler frontal disimulado detrás de la parrilla original sin cortar el paragolpes, instrumental auxiliar Autometer en el parante izquierdo y esa postura agazapada inconfundible de los que iban los viernes al Gálvez a bajar los 12 segundos.'
    ],
    specs: [
      { label: 'Plataforma Motriz', value: 'VW AP 1.8 llevado a 1.9L, tapa flujeada' },
      { label: 'Potencia Dinamómetro', value: '500 HP a 1.8 bar de presión constante' },
      { label: 'Sobrealimentación', value: 'Turbina Garrett T4 con wastegate externa 38mm' },
      { label: 'Alimentación', value: 'Inyección programable Megasquirt / 4 inyectores 1000cc' },
      { label: 'Tren Delantero & Cubiertas', value: 'Brazos rotulados, cubiertas Sumitomo HTR 205/50R15' },
      { label: 'Transmisión', value: 'Caja relacionada con piñón y corona rectos, autoblocante' }
    ],
    quote: 'Manejar un Gol de 500 caballos sin control de tracción es como andar a caballo en pelo con una tormenta en la nuca. Tenés que saber cuándo soltar y cuándo bancar la patada.',
    featured: true
  },
  {
    id: 'bT-1bo053mA',
    episodeNumber: 6,
    title: 'EL FIAT UNO TURBO MÁS CONOCIDO DE ARGENTINA & EL FIAT UNO TEAM',
    vehicle: 'Fiat Uno Turbo i.e. 1.4',
    owner: 'Naza (Fiat Uno Team)',
    yearModel: '1994',
    category: 'Mito de Importación',
    youtubeId: 'bT-1bo053mA',
    instagramUrl: 'https://www.instagram.com/sportmeet90s/',
    localThumbnail: '/archive/bT-1bo053mA.jpg',
    osdTimestamp: 'ABR. 09 1996 - AV. LIBERTADOR',
    shortDescription: 'La historia oral de la nave insignia que forjó los códigos de pertenencia en las noches porteñas y dio nacimiento al histórico Fiat Uno Team.',
    fullChronicle: [
      'A mediados de los noventa, cuando el Uno Turbo i.e. desembarcó en cantidades muy limitadas por la apertura de importaciones, causó un terremoto acústico y visual en las estaciones de servicio de Zona Norte. Su tablero digital futurista, los asientos anatómicos de pana roja y el zumbido de la IHI RHB5 hacían palidecer a autos de cilindrada tres veces mayor.',
      'El auto de Naza no es solo una unidad impecable con su color Rosso Corsa original y calcos laterales; es el epicentro social que dio vida al Fiat Uno Team. Antes de las redes sociales y los grupos de WhatsApp, el club se organizaba con llamadas telefónicas desde cabinas públicas y destellos de balizas en la Shell de San Isidro.',
      'En este episodio documental, Naza rememora cómo era afinar la inyección Bosch LE-Jetronic con mecánicos que recién empezaban a entender las computadoras de a bordo, el respeto que se ganó el 1.4 Turbo en las tiradas nocturnas y el espíritu de hermandad que llenaba los playones hasta que salía el sol.'
    ],
    specs: [
      { label: 'Motor', value: '1372 cc Turbo i.e., 8 válvulas, árbol de levas específico' },
      { label: 'Sobrealimentación', value: 'IHI turbo refrigerado por agua con intercooler aire-aire' },
      { label: 'Electrónica', value: 'Bosch LE-Jetronic + Microplex con mapeo optimizado' },
      { label: 'Equipamiento Interior', value: 'Tablero digital verde, butacas envolventes y volante MOMO' },
      { label: 'Llantas & Frenos', value: 'Llantas originales de aleación con 4 discos de freno' },
      { label: 'Comunidad', value: 'Cofundador del mítico Fiat Uno Team Argentina' }
    ],
    quote: 'El Uno Turbo te transmitía todo sin filtros: el silbido en el habitáculo, la trompa que se levantaba en cada cambio y la sensación de ir en un misil de bolsillo.',
    featured: true
  },
  {
    id: 'tZk_F3hE_gg',
    episodeNumber: 2,
    title: 'ESTE CIVIC VTI EG6 ES ÚNICO EN SU ESTADO',
    vehicle: 'Honda Civic VTi EG6 Hatchback',
    owner: 'Dani',
    yearModel: '1995',
    category: 'JDM Holy Grail',
    youtubeId: 'tZk_F3hE_gg',
    instagramUrl: 'https://www.instagram.com/sportmeet90s/',
    localThumbnail: '/archive/tZk_F3hE_gg.jpg',
    osdTimestamp: 'OCT. 24 1995 - COSTANERA NORTE',
    shortDescription: 'El despertar del VTEC en Buenos Aires: 160 HP aspirados a 8.200 RPM en una carrocería ultraliviana con suspensión de doble horquilla.',
    fullChronicle: [
      'Cuando el Civic EG6 Hatchback VTi pisó las avenidas de Buenos Aires en 1993, nadie en los talleres locales entendía cómo un humilde cuatro cilindros de apenas 1.600 centímetros cúbicos sin turbina podía rendir 160 caballos de fábrica y girar seguro hasta las 8.500 RPM.',
      'Dani conserva esta unidad en estado estrictamente original, un auténtico superviviente de una época en la que muchos fueron desguazados en competencias callejeras. La entrada del sistema VTEC a 5.600 RPM sigue provocando una mutación sonora que eriza la piel: el aullido metálico del motor B16A2 cambió para siempre la cultura tuerca porteña.',
      'En este capítulo se analiza la arquitectura de chasis que convirtió al EG6 en una leyenda de las curvas: suspensión independiente en las cuatro ruedas tipo doble triángulo derivada de la Fórmula 1, caja corta de relaciones precisas y una postura aerodinámica que marcó el diseño automotriz noventero.'
    ],
    specs: [
      { label: 'Motor', value: 'B16A2 DOHC VTEC 1.6L 16 válvulas' },
      { label: 'Corte de RPM', value: '8.200 RPM de fábrica (leva cruzada automática VTEC)' },
      { label: 'Chasis', value: 'Doble horquilla en las 4 ruedas (Double Wishbone)' },
      { label: 'Escape', value: 'Múltiple de escape 4-2-1 de acero inoxidable de época' },
      { label: 'Carrocería', value: 'Hatchback 3 puertas, color Milano Red impecable' }
    ],
    quote: 'Escuchar el cambio de leva del VTEC a las 5.800 vueltas cruzando el túnel de Libertador era lo más parecido a un monoplaza en plena calle.',
    featured: false
  },
  {
    id: '95-FjQ-qewQ',
    episodeNumber: 3,
    title: 'TERRIBLE LO QUE ANDA ESTE GACEL TURBO',
    vehicle: 'Volkswagen Gacel 1.8 Turbo',
    owner: 'Pablo & Agus',
    yearModel: '1991',
    category: 'Callejero Puro',
    youtubeId: '95-FjQ-qewQ',
    instagramUrl: 'https://www.instagram.com/sportmeet90s/',
    localThumbnail: '/archive/95-FjQ-qewQ.jpg',
    osdTimestamp: 'AGO. 15 1998 - GRAL. PAZ',
    shortDescription: 'El sedán familiar más modesto transformado en una bestia de aceleración pura capaz de sorprender a los importados de 6 cilindros.',
    fullChronicle: [
      'El Gacel fue durante años el sedán de la familia de clase media argentina. Pero en las manos de los preparadores del conurbano, su bajo peso estructural y la nobleza infinita del motor Audi AP 827 lo convirtieron en un arma letal para el cuarto de milla.',
      'Pablo y Agus detallan cómo fue construir este proyecto desde cero: reforzar torretas, trabajar la distribución, adaptar múltiples de fundición y lograr que la potencia baje al suelo en un auto de tracción delantera con trompa larga. El sonido de este Gacel al acelerar en la General Paz despejada es una oda al ingenio artesanal criollo.'
    ],
    specs: [
      { label: 'Base', value: 'VW Gacel GLS 1.8 carburado convertido a inyección' },
      { label: 'Alimentación', value: 'Rampa de combustible con inyectores Deka 80lb' },
      { label: 'Turbocompresor', value: 'Master Power .50 con intercooler a medida' },
      { label: 'Suspensión', value: 'Amortiguadores regulables Louzao y elásticos trabajados' }
    ],
    quote: 'El Gacel no llama la atención hasta que lo ponés al lado en el semáforo y escucha el soplido de la válvula. Ahí se les borra la sonrisa.',
    featured: false
  },
  {
    id: '4lI-AonUARs',
    episodeNumber: 4,
    title: 'VISITANDO EL PARAÍSO DE LOS FIAT & EL SORPASSO',
    vehicle: 'Fiat 147 IAVA Sorpasso & 128 CL',
    owner: 'Adri & Fran (G-Works Racing)',
    yearModel: '1989',
    category: 'Fierro Nacional Aspirado',
    youtubeId: '4lI-AonUARs',
    instagramUrl: 'https://www.instagram.com/sportmeet90s/',
    localThumbnail: '/archive/4lI-AonUARs.jpg',
    osdTimestamp: 'JUL. 03 1996 - TALLER AVELLANEDA',
    shortDescription: 'El templo donde se forjaron los Fiat más rabiosos del país: tapas trabajadas al flujo de aire, carburadores Weber dobles y trompas lisas.',
    fullChronicle: [
      'En Avellaneda y Lanús se forjó una dinastía que ningún importado pudo erradicar: la devoción por el motor Tipo 1.4 y 1.6 de Fiat. Adri y Fran abren las puertas de su búnker para revelar los secretos de cómo hacer rendir 180 caballos atmosféricos en un motor de 8 válvulas sin turbo.',
      'El Sorpasso de este episodio es una obra maestra: leva Romero de 12.80mm de alzada, resortes dobles Iskenderian, múltiple de admisión corto y dos colosales carburadores Weber 40/40 IDF afinados a puro compás de lámpara estroboscópica. Cuando este 147 regula, el piso del taller tiembla con una cadencia metálica inconfundible.'
    ],
    specs: [
      { label: 'Motor', value: 'Fiat Tipo 1.6 llevado a 1.9L con bielas Scat' },
      { label: 'Carburación', value: 'Doble Weber 40/40 IDF italiano con trompetas pulidas' },
      { label: 'Tapa de Cilindros', value: 'Válvulas Bianchi 41/36mm, conductos ensanchados a mano' },
      { label: 'Escape', value: '4 a 1 largo silenciador Gobbo con salida en 2.5 pulgadas' }
    ],
    quote: 'El carburador tiene alma. Vos le ponés la mano en la trompeta al Weber, sentís la succión en los dedos y sabés exactamente qué chicler cambiar.',
    featured: false
  },
  {
    id: 'LLXwKIFtj9M',
    episodeNumber: 5,
    title: 'COLECCIÓN DE NOVENTOSOS TREMENDA EN ARGENTINA',
    vehicle: 'Point Garage (Golf GTI MK3 VR6, Swift GTi, 205 GTi)',
    owner: 'Gabi (Point Garage)',
    yearModel: '1992-1998',
    category: 'Colección de Archivo',
    youtubeId: 'LLXwKIFtj9M',
    instagramUrl: 'https://www.instagram.com/sportmeet90s/',
    localThumbnail: '/archive/LLXwKIFtj9M.jpg',
    osdTimestamp: 'SEP. 12 1999 - SAN ISIDRO',
    shortDescription: 'Un viaje en el tiempo por el garaje que reúne los mayores exponentes del hot-hatch de la década del 1 a 1 en condición de concurso.',
    fullChronicle: [
      'Entrar al taller de Gabi es retroceder veinticinco años en un instante. En un mismo salón descansan un Volkswagen Golf VR6 con su seis cilindros en V estrecha de 2.8L, un Suzuki Swift GTi MK3 rojo con volante Momo Corse y un Peugeot 205 GTi 1.9 francés.',
      'Gabi documenta cómo fue rescatar estas joyas de los años 90 antes de que fueran adulteradas, conservando sus calcomanías de concesionario de época (Alra, Car One, Dietrich), tapizados de pana intactos y hasta los manuales de usuario sellados en 1996.'
    ],
    specs: [
      { label: 'Vehículos Clave', value: 'Golf VR6 2.8, Swift GTi DOHC 16v, 205 GTi 1.9' },
      { label: 'Originalidad', value: 'Pintura de fábrica, llantas BBS Speedline y Speedline Montecarlo' },
      { label: 'Documentación', value: 'Facturas de importación originales de la aduana 1994-1997' }
    ],
    quote: 'Cada uno de estos autos cuenta una historia distinta de la Argentina de los noventa: el Golf era el ejecutivo que quería andar rápido, y el Swift era el pibe que quería comerse el Gálvez.',
    featured: false
  },
  {
    id: '2k_ivWFJEiU',
    episodeNumber: 7,
    title: 'LA COLECCIÓN DE FIAT MÁS RARA DE ARGENTINA',
    vehicle: 'Fiat 128 IAVA TV1300, 133 IAVA & Duna SCX',
    owner: 'Marcos',
    yearModel: '1978-1992',
    category: 'IAVA & Leyenda',
    youtubeId: '2k_ivWFJEiU',
    instagramUrl: 'https://www.instagram.com/sportmeet90s/',
    localThumbnail: '/archive/2k_ivWFJEiU.jpg',
    osdTimestamp: 'MAY. 20 1997 - PALERMO',
    shortDescription: 'Rarezas mecánicas de la industria nacional: el legado de IAVA y las ediciones limitadas que dominaron el asfalto porteño.',
    fullChronicle: [
      'Marcos custodia piezas que forman parte del patrimonio histórico del automovilismo argentino: desde el 128 IAVA TV1300 con su franja característica hasta el rarísimo Duna SCX diseñado por Oreste Berta.',
      'Este episodio desmenuza la ingeniería previa a la inyección electrónica: levas con cruce pronunciado, carburadores Solex y Weber con apertura simultánea, volantes de dirección de tres rayos y el orgullo de defender la industria mecánica nacional frente a las olas de importados.'
    ],
    specs: [
      { label: 'Especialidades', value: 'Ediciones IAVA auténticas certificadas con chapa identificatoria' },
      { label: 'Mecánica', value: 'Motores Lampredi y 128 preparados con especificaciones de pista' }
    ],
    quote: 'El 128 con la franja IAVA era el sueño del pibe de barrio. Salir a la avenida con ese escape sonando era sentirse Fangio en cada esquina.',
    featured: false
  },
  {
    id: 'nfJiJpokT5k',
    episodeNumber: 8,
    title: 'ESTA COLECCIÓN DE VW ES DIGNA DE MUSEO',
    vehicle: 'VW Gol GTi 2.0, Carat CD, Senda Diésel & Saveiro',
    owner: 'Pedro',
    yearModel: '1990-1996',
    category: 'VAG Clásicos',
    youtubeId: 'nfJiJpokT5k',
    instagramUrl: 'https://www.instagram.com/sportmeet90s/',
    localThumbnail: '/archive/nfJiJpokT5k.jpg',
    osdTimestamp: 'DIC. 04 1998 - MARTÍNEZ',
    shortDescription: 'El primer auto con inyección electrónica de producción masiva en la región: el mitológico Gol GTi 2.0 azul con paragolpes grises.',
    fullChronicle: [
      'El Volkswagen Gol GTi 2.0 presentado en el salón de 1989 marcó un antes y un después: fue el primer automóvil fabricado en el Mercosur equipado con inyección electrónica multipunto (Bosch LE-Jetronic).',
      'Pedro posee una de las colecciones más exhaustivas de la marca en Argentina. En este video se analiza la pureza de líneas del GTi, sus butacas Recaro originales de fábrica, el volante de cuatro rayos con botón de bocina doble y el andar contundente del motor AP 2000.'
    ],
    specs: [
      { label: 'Modelo Insignia', value: 'VW Gol GTi 2.0 1991 color Azul Mónaco' },
      { label: 'Inyección', value: 'Bosch LE-Jetronic analógica de fábrica' },
      { label: 'Interiores', value: 'Butacas deportivas Recaro con tela chevron gris' }
    ],
    quote: 'Cuando salió el Gol GTi en el 90, ver esa sigla roja en la luneta y saber que no tenía cebador era ciencia ficción pura.',
    featured: false
  },
  {
    id: 'hDW5bjA_YjE',
    episodeNumber: 9,
    title: 'EL TALLER MÁS HISTÓRICO DE ARGENTINA',
    vehicle: 'Banco de Pruebas & Archivo de Competición',
    owner: 'Rober',
    yearModel: '1990-2002',
    category: 'Patrimonio de Taller',
    youtubeId: 'hDW5bjA_YjE',
    instagramUrl: 'https://www.instagram.com/sportmeet90s/',
    localThumbnail: '/archive/hDW5bjA_YjE.jpg',
    osdTimestamp: 'MAR. 11 1999 - SAN MARTÍN',
    shortDescription: 'Rober abre las puertas del taller donde se armaron las tapas de cilindros que batieron récords en el Gálvez durante tres décadas.',
    fullChronicle: [
      'Un banco de pruebas analógico de rodillos, herramientas forjadas a mano, flujómetros artesanales y estanterías repletas de trofeos de las picadas del Gálvez. Rober cuenta las noches enteras sin dormir limando conductos antes de la fecha del campeonato.',
      'Historias de bielas partidas al alba, pruebas secretas en la ruta 8 y la devoción por exprimir hasta el último caballo de fuerza con los recursos que había en el país.'
    ],
    specs: [
      { label: 'Instalaciones', value: 'Banco de pruebas de época, rectificadora y flujómetro' },
      { label: 'Trayectoria', value: 'Más de 35 años armando motores de calle y cuarto de milla' }
    ],
    quote: 'El secreto nunca estuvo en la plata; estuvo en las horas que le dedicabas con la lima en la mano buscando que el aire no choque con nada adentro de la tapa.',
    featured: false
  }
];

export const ARCHIVE_ITEMS: ArchiveItem[] = [
  {
    id: 'arch-01',
    title: 'GOL G1 ARMADO OLD SCHOOL 500HP // TIRADA NOCTURNA',
    category: 'armados',
    mediaType: 'image',
    mediaSrc: '/archive/nQsz3eL1cEo.jpg',
    youtubeId: 'nQsz3eL1cEo',
    instagramUrl: 'https://www.instagram.com/sportmeet90s/',
    osdTimestamp: 'NOV. 18 1997 - 03:20 AM',
    location: 'Acceso Norte & Thames, San Isidro',
    story: [
      'Registro fotográfico en negativo Kodak de la bestia armada por Gustavo.',
      '500 caballos sobre chasis de tracción delantera sin ABS ni ESP. El terror de la Panamericana en las madrugadas de jueves.'
    ],
    tags: ['VW GOL G1', 'AP 1.9 TURBO', '500HP', 'OLD SCHOOL'],
    year: '1997'
  },
  {
    id: 'arch-02',
    title: 'FIAT UNO TURBO I.E. // FUNDADORES FIAT UNO TEAM',
    category: 'vhs',
    mediaType: 'image',
    mediaSrc: '/archive/bT-1bo053mA.jpg',
    youtubeId: 'bT-1bo053mA',
    instagramUrl: 'https://www.instagram.com/sportmeet90s/',
    osdTimestamp: 'ABR. 09 1996 - AV. LIBERTADOR',
    location: 'Estación Shell de Libertador y Alvear',
    story: [
      'Naza junto al Uno Turbo que marcó una era.',
      'El silbido inconfundible de la turbina IHI sonando bajo el techo de la estación mientras se congregaba la caravana del Fiat Uno Team rumbo a Costanera.'
    ],
    tags: ['FIAT UNO TURBO', 'IHI RHB5', 'FIAT UNO TEAM', 'ZONA NORTE'],
    year: '1996'
  },
  {
    id: 'arch-03',
    title: 'CIVIC EG6 HATCHBACK // LA SINFONÍA VTEC A 8.200 RPM',
    category: 'jdm_euro',
    mediaType: 'image',
    mediaSrc: '/archive/tZk_F3hE_gg.jpg',
    youtubeId: 'tZk_F3hE_gg',
    instagramUrl: 'https://www.instagram.com/sportmeet90s/',
    osdTimestamp: 'OCT. 24 1995 - COSTANERA NORTE',
    location: 'Costanera Norte frente a los carritos',
    story: [
      'El misil japonés de Dani en Milano Red.',
      'Cuando el B16A2 pasaba a leva alta a las 5.800 RPM en el túnel de Libertador, los ecos rebotaban en el asfalto como si fuera Suzuka en plena capital.'
    ],
    tags: ['HONDA CIVIC EG6', 'B16A2 VTEC', 'JDM ARGENTINA', 'MILANO RED'],
    year: '1995'
  },
  {
    id: 'arch-04',
    title: 'GACEL TURBO 1.8 // EL LOBO DISFRAZADO DE CORDERO',
    category: 'musculo',
    mediaType: 'image',
    mediaSrc: '/archive/95-FjQ-qewQ.jpg',
    youtubeId: '95-FjQ-qewQ',
    instagramUrl: 'https://www.instagram.com/sportmeet90s/',
    osdTimestamp: 'AGO. 15 1998 - GRAL. PAZ',
    location: 'General Paz y Constituyentes',
    story: [
      'El sedán de Pablo y Agus calzado con Master Power .50.',
      'Nadie sospechaba lo que escondía este modesto Volkswagen familiar hasta que clavaba primera y salía traccionando cruzado entre los puentes.'
    ],
    tags: ['VW GACEL', 'TURBO AP', 'CALLEJERO', 'PICADAS'],
    year: '1998'
  },
  {
    id: 'arch-05',
    title: 'FIAT 147 SORPASSO // DOS WEBER 40/40 A PURO BRÍO',
    category: 'musculo',
    mediaType: 'image',
    mediaSrc: '/archive/4lI-AonUARs.jpg',
    youtubeId: '4lI-AonUARs',
    instagramUrl: 'https://www.instagram.com/sportmeet90s/',
    osdTimestamp: 'JUL. 03 1996 - TALLER AVELLANEDA',
    location: 'G-Works Racing, Avellaneda',
    story: [
      'La gloria del motor Tipo llevado al límite por Adri y Fran.',
      'El ralentí más trabado y rabioso del conurbano sur: trompa lisa, sin paragolpes, trompetas abiertas pulidas a espejo y olor a nafta de avión.'
    ],
    tags: ['FIAT 147', 'SORPASSO', 'WEBER 40/40', 'ASPIRADO RABIOSO'],
    year: '1996'
  },
  {
    id: 'arch-06',
    title: 'SUZUKI SWIFT GTI MK3 // EL REY DE LA RELACIÓN PESO/POTENCIA',
    category: 'jdm_euro',
    mediaType: 'image',
    mediaSrc: '/IMAGENES_Y_VIDEOS/SaveClip.App_844435777_17911959942491318_7222409746034177579_n.jpg',
    youtubeId: 'LLXwKIFtj9M',
    instagramUrl: 'https://www.instagram.com/sportmeet90s/',
    osdTimestamp: 'ENE. 12 1997 - PINAMAR',
    location: 'Av. Bunge y Libertador, Pinamar',
    story: [
      'Apenas 810 kilos de peso y un motor G13B 1.3L 16 válvulas DOHC que parecía una moto de pista.',
      'Con un múltiple de escape de competición, chip a medida y una relación de caja cerrada, el Swift GTi se devoraba a autos que costaban el triple en las calles de la costa.'
    ],
    tags: ['SUZUKI SWIFT GTI', 'G13B DOHC', 'POCKET ROCKET', 'PINAMAR 97'],
    year: '1997'
  },
  {
    id: 'arch-07',
    title: 'COLECCIÓN HOT-HATCH EURO // LA ÉPOCA DE ORO',
    category: 'jdm_euro',
    mediaType: 'image',
    mediaSrc: '/IMAGENES_Y_VIDEOS/SaveClip.App_841753733_17911959816491318_4281358055663737517_n.jpg',
    youtubeId: 'LLXwKIFtj9M',
    instagramUrl: 'https://www.instagram.com/sportmeet90s/',
    osdTimestamp: 'SEP. 19 1999 - SAN ISIDRO',
    location: 'Point Garage, San Isidro',
    story: [
      'Golf VR6, Peugeot 205 GTi 1.9 y BMW E36 Coupé descansando en el búnker de Gabi.',
      'El testimonio tangible de cómo la convertibilidad llenó los garages de fierros europeos de alta estirpe.'
    ],
    tags: ['GOLF VR6', 'PEUGEOT 205 GTI', 'BMW E36', 'EURO HOT HATCH'],
    year: '1999'
  },
  {
    id: 'arch-08',
    title: 'LA RECTA DEL GÁLVEZ // VIERNES DE CUARTO DE MILLA',
    category: 'kodak',
    mediaType: 'image',
    mediaSrc: '/IMAGENES_Y_VIDEOS/SaveClip.App_841499130_17911959888491318_2937227480003444232_n.jpg',
    youtubeId: '95-FjQ-qewQ',
    instagramUrl: 'https://www.instagram.com/sportmeet90s/',
    osdTimestamp: 'VIERNES 03:15 AM - AUTÓDROMO GÁLVEZ',
    location: 'Autódromo Oscar y Juan Gálvez, CABA',
    story: [
      'El cajón de pre-largada iluminado por los reflectores de vapor de sodio.',
      'El humo de los neumáticos calentando en el agua, el silbido de los turbos en la largada y las tribunas del Gálvez vibrando hasta las cuatro de la madrugada.'
    ],
    tags: ['GÁLVEZ', '402 METROS', 'PICADAS NOCTURNAS', 'CATEDRAL'],
    year: '1996'
  }
];

export const SPOTS_DATA: Spot[] = [
  {
    id: 'zona-norte',
    title: 'ZONA NORTE: AV. DEL LIBERTADOR, MÁRQUEZ Y EL BAJO DE SAN ISIDRO',
    zone: 'San Isidro / Vicente López / Olivos',
    peakHour: 'Viernes y Sábados // 23:30 a 04:30 AM',
    era: '1992 - 2001',
    photo: '/IMAGENES_Y_VIDEOS/SaveClip.App_839414082_17911960065491318_9097120242057877960_n.jpg',
    osdTimestamp: 'OCT. 1995 - SHELL LIBERTADOR',
    coordinates: '34°28\'18"S 58°30\'12"W',
    leadChronicle: 'El kilómetro cero de la cultura de encuentros en Argentina. Las estaciones de servicio Shell, Esso e YPF sobre Av. del Libertador funcionaban como salones de exposición al aire libre donde no existía la prisa.',
    rituals: [
      'Lavar el auto el viernes a la tarde a mano con franela, pasar cera paste wax hasta que la chapa fuera un espejo y calzar las cubiertas limpias con silicona en los flancos.',
      'Llegar temprano para agarrar lugar bajo los tubos fluorescentes blancos del playón principal: quien conseguía estacionar de trompa a la avenida tenía el escenario asegurado.',
      'Abrir el capot para que respire el motor y dejar a la vista las tapas de válvulas pulidas, los cables de bujía de silicona amarilla o roja, las mangueras malladas y los carburadores dobles.',
      'Música saliendo de los estéreos Alpine o Pioneer con frentes desmontables y ecualizador gráfico parpadeando en la consola central.'
    ],
    iconicCars: [
      'Fiat Uno Turbo i.e. Rosso Corsa',
      'Volkswagen Gol GTi 2.0 Azul Mónaco',
      'Suzuki Swift GTi MK2/MK3',
      'Honda Civic Hatchback VTi EG6',
      'Peugeot 205 GTi 1.9',
      'Renault Fuego GTA Max'
    ]
  },
  {
    id: 'panamericana-gralpaz',
    title: 'PANAMERICANA, GENERAL PAZ Y COSTANERA NORTE',
    zone: 'Arterias Rápidas Metropolitanas',
    peakHour: 'Madrugadas de Jueves y Viernes // 02:00 a 05:00 AM',
    era: '1994 - 2002',
    photo: '/IMAGENES_Y_VIDEOS/SaveClip.App_838851337_17911959915491318_2029569923983001083_n.jpg',
    osdTimestamp: 'VIERNES 03:45 AM - GRAL. PAZ',
    coordinates: '34°32\'05"S 58°31\'44"W',
    leadChronicle: 'Cuando el playón de la estación quedaba chico y el rumor de que "había tirada" corría de boca en boca, las caravanas salían en tropel hacia los tramos despejados de la General Paz o los accesos de Panamericana.',
    rituals: [
      'El código de las luces altas: dos destellos en el retrovisor a la altura de Thames o Constituyentes para avisar que se venía emparejando la marcha en tercera velocidad.',
      'El frenaje parejo hasta los 60 km/h y los tres toques de bocina antes de abrir mariposas a fondo y escuchar el rugido ensordecedor rebotar en los guardarraíles.',
      'Paradas estratégicas en los carritos de Costanera Norte a comer un bondiola completo mientras se repasaba quién había metido mejor los cambios.'
    ],
    iconicCars: [
      'VW Gol G1 1.9 Turbo con 500HP',
      'VW Gacel Turbo con inyección programable',
      'Fiat Duna SCX enfierrado',
      'BMW M3 E36 Coupé',
      'Mitsubishi Eclipse GSX / GST',
      'Ford Sierra XR4 con leva y escape'
    ]
  },
  {
    id: 'el-galvez',
    title: 'EL AUTÓDROMO DE BUENOS AIRES (EL GÁLVEZ) — LA CATEDRAL',
    zone: 'Villa Riachuelo, CABA (Puerta 1)',
    peakHour: 'Todos los Viernes // 21:00 a 04:30 AM',
    era: '1990 - Presente',
    photo: '/IMAGENES_Y_VIDEOS/SaveClip.App_844757823_17911960239491318_7313375227828960550_n.jpg',
    osdTimestamp: 'VIERNES 02:15 AM - PISTA 1 GÁLVEZ',
    coordinates: '34°42\'08"S 58°27\'46"W',
    leadChronicle: 'El santuario donde morían todas las mentiras de estación de servicio. Frente a la fotocélula electrónica de la recta principal del Gálvez, no había relato que valiera: los 402 metros cantaban la verdad en décimas de segundo.',
    rituals: [
      'Hacer cola sobre la avenida Roca desde las 8 de la noche para entrar a boxes y conseguir lugar en el cajón de pre-largada.',
      'El ritual del agua y el burnout: quemar caucho en el charco de agua hasta llenar el habitáculo de humo denso y dejar las cubiertas a temperatura de chicle.',
      'Mirar fijamente el árbol de luces del semáforo: tres amarillas que caían como gotas pesadas y el verde que desataba el infierno en el asfalto.',
      'La tribuna colmada gritando por el duelo clásico: un Fiat 147 al corte contra un Gol turbo o un Falcon V8 de libre preparación.'
    ],
    iconicCars: [
      'Fiat 147 Sorpasso Clase 4 y 5',
      'Fiat 128 con motor 1.6 de Clase 6',
      'VW Gol Cuadrado Clase 7 y 8',
      'Falcon y Chevy con cajas Saenz de Clase 9',
      'Honda Civic Turbo de categorías importadas'
    ]
  },
  {
    id: 'veranos-costa',
    title: 'VERANOS EN LA COSTA: PINAMAR Y VILLA GESELL (ENERO 96-99)',
    zone: 'Av. Bunge, La Frontera & Centro Gesellino',
    peakHour: 'Enero // Al caer el sol y de 00:00 a 05:00 AM',
    era: '1995 - 2000',
    photo: '/IMAGENES_Y_VIDEOS/SaveClip.App_837536842_17911959852491318_2698193094577380634_n.jpg',
    osdTimestamp: 'ENE. 22 1998 - PINAMAR BUNGE',
    coordinates: '37°06\'41"S 56°51\'38"W',
    leadChronicle: 'Durante el mes de enero, toda la escena nocturna de Buenos Aires migraba quinientos kilómetros hacia el sur. La Avenida Bunge en Pinamar y la 3 en Villa Gesell se convertían en pasarelas de ostentación mecánica.',
    rituals: [
      'El desfile a paso de hombre por Bunge desde el mediodía con las ventanillas bajas, escuchando eurodance o grunge en los parlantes 6x9 colocados en la luneta trasera.',
      'Las juntadas improvisadas en las rotondas de La Frontera al atardecer para ver qué naves habían llegado desde Capital o Rosario.',
      'El olor a salitre mezclado con nafta especial mientras los autos regulaban bajo las luces de los paradores.'
    ],
    iconicCars: [
      'Suzuki Swift GTi MK3 impecables',
      'Honda Civic Coupé EJ1 y Hatch EG6',
      'Renault Fuego GTA Max con llantas de época',
      'BMW 325i E36 Cabrio y Coupé',
      'Mitsubishi Eclipse con alerón alto',
      'Jeep Wrangler y Cherokee de apoyo'
    ]
  }
];

export const TESTIMONIALS_DATA: CommunityTestimony[] = [
  {
    id: 'test-1',
    author: 'Mariano "El Ruso" V.',
    car: 'Fiat 128 Super Europa 1.5 con dos Weber 40/40',
    year: 'Octubre 1996',
    location: 'Shell de Libertador y Alvear, Martínez',
    testimony: 'Teníamos 20 años y no existía internet. Para saber qué chicler ponerle al Weber, te ibas el jueves a la noche al taller de don Mario en Florida y te quedabas cebando mate hasta las tres de la mañana mientras él escuchaba el motor con una varilla de madera apoyada en la tapa de válvulas. El viernes llegabas a la Shell de Libertador con el 128 recién lavado, regulando a 1.200 vueltas con la leva Romero que parecía un caballo al galope. Cuando estacionaba un Swift GTi o un Uno Turbo al lado, no nos puteábamos: abríamos los dos capots, nos convidábamos un pucho y nos quedábamos discutiendo si era mejor la inyección japonesa o la carburación criolla hasta que salía el sol.'
  },
  {
    id: 'test-2',
    author: 'Esteban "Tati" Cardozo',
    car: 'Volkswagen Gol GL 1.8 Cuadrado (Turbo armado en San Martín)',
    year: 'Diciembre 1997',
    location: 'Puerta 1 del Autódromo Gálvez, Recta de 402m',
    testimony: 'Esa noche de diciembre del 97 en el Gálvez hacía un calor insoportable en boxes. Yo había armado el Gol con una turbina T3 de desarmadero y una inyección que me había programado un pibe de Haedo en un diskette de 3 y medio. En la pre-largada me tocó al lado un Civic VTEC rojo que estaba de concurso. Cuando prendió el verde, el Gol pegó un salto con las dos Sumitomo chillando en primera, clavé segunda con el embrague multidisco y sentí que el asiento se me doblaba en la espalda. Bajé los 12.40 segundos y se me cayó el silenciador en los últimos 50 metros. Volví remolcado al parque cerrado con toda la tribuna aplaudiendo. Esa hermandad no se compra con ninguna plata de hoy.'
  },
  {
    id: 'test-3',
    author: 'Hernán P. (Ex Fiat Uno Team)',
    car: 'Fiat Uno Turbo i.e. 1.4 Rosso Corsa',
    year: 'Enero 1998',
    location: 'Avenida Bunge y Playa, Pinamar',
    testimony: 'El viaje por la Ruta 2 cuando todavía no era autovía completa era una aventura mística. Ibamos cinco Uno Turbo en fila india cruzando Dolores a las cuatro de la mañana. Cuando llegamos a Pinamar, Bunge era una fiesta: la gente en las veredas comiendo helado se daba vuelta cuando sentía el silbido de la válvula de alivio. No había fotomultas, no había celos ni toxicidad de redes sociales; había pasión genuina por las máquinas bien armadas y por el respeto entre amigos que compartían la misma locura.'
  }
];

export const GALVEZ_CATEGORIES: GalvezCategory[] = [
  {
    clase: 'Clase 1 & 2',
    name: 'Estándar Mejorado & Callejeros Iniciales',
    timeRange: '17.00s a 15.50s',
    typicalCars: 'Fiat 147 Spazio 1.3, VW Senda 1.6, Renault 12, Peugeot 504',
    tuningRules: 'Mecánica de calle estricta, cubiertas radiales de uso diario, escape libre permitido desde múltiple original, interiores completos.',
    mythicRecord: 'El mítico 147 de Lanús clavando 15.60s con un carburador de una boca trabajado y escape Gobbo.'
  },
  {
    clase: 'Clase 3 & 4',
    name: 'Aspirados Callejeros Rabiosos & Hot-Hatches',
    timeRange: '15.49s a 14.20s',
    typicalCars: 'Fiat 128 1.5, Swift GTi 1.3 16v, Gol GTi 2.0, Civic EG6 VTi, 205 GTi',
    tuningRules: 'Levas mejoradas, múltiples trabajados, carburadores dobles Weber o Solex permitidos, cubiertas radiales deportivas (Sumitomo/Yokohama).',
    mythicRecord: 'Swift GTi estándar con chip y múltiple metiendo 14.40s constantes ante la incredulidad de los 2.0 litros.'
  },
  {
    clase: 'Clase 5 & 6',
    name: 'Aspirados al Límite & Primeros Turbos de Calle',
    timeRange: '14.19s a 13.00s',
    typicalCars: 'Fiat 147 Sorpasso con motor Tipo 1.9, Gol AP 2.0 con leva y tapa, Uno Turbo i.e. chipeado',
    tuningRules: 'Relación de compresión elevada, tapas trabajadas a flujo máximo, embragues cerámicos sinterizados, cajas de cambio con relaciones cortas.',
    mythicRecord: 'El Sorpasso de Avellaneda regulando a 1.500 RPM y cruzando la línea en 13.25s sin abrir capot.'
  },
  {
    clase: 'Clase 7 & 8',
    name: 'Turbos Forjados & Músculo V8 Preparado',
    timeRange: '12.99s a 11.50s',
    typicalCars: 'Gol G1 AP Turbo 1.9L con 400-500HP, Falcon Sprint enfierrado, Chevy Serie 2 con tres Weber 48/48',
    tuningRules: 'Pistones forjados, turbinas grandes con presiones superiores a 1.5 bar, inyecciones programables, autoblocantes, neumáticos de compuesto blando.',
    mythicRecord: 'Gol Cuadrado "El Misil de San Martín" rompiendo la barrera de los 12 segundos con cubiertas de calle.'
  },
  {
    clase: 'Clase 9 / Libres',
    name: 'Los Monstruos de la Catedral (Tracción Trasera & Libres)',
    timeRange: 'Menos de 11.49s (Zona de Récord 10s)',
    typicalCars: 'Falcon con motor V8 302/351, Chevy con motor 250 enfierrado a fondo, Cascos alivianados',
    tuningRules: 'Cajas Saenz con acople a crabots, chasis tubular reforzado, ruedas dragster slicks tipo Mickey Thompson, combustible de alto octanaje.',
    mythicRecord: 'La Chevy negra de boxes bajando a 10.30s en una noche fría de julio del 98 que aún se recuerda en cada asado.'
  }
];
