# Presentación

- eleloibonnoi@gmail.com
- <https://blog.toplap.org/>
- Referentes: Sol LeWitt, Vera Molnár
- Último jueves de cada mes — From Scratch — BCN
- [Manifiesto TOPLAP](https://toplap.org/wiki/ManifestoDraft)

**Comunidades:**
- Telegram: Algorithmic Barcelona, Live Code Earth, TOPLAP
- Mayo: International Live Coding Conference — BCN
- [Eulerroom](https://eulerroom.com/) — Solstice — [YouTube](https://www.youtube.com/@Eulerroom)

**Entornos colaborativos:**
- [Mercury](https://github.com/tmhglnd/mercury)
- [Strudel](https://strudel.cc/)
- [Kabel](https://kabel.salat.dev/)
- [Flok](https://flok.cc/)
- [Punctual](https://github.com/dktr0/Punctual)


---

# Sonido

- [Parkellipsen](https://parkellipsen.de/)
- [Mercury Playground](https://github.com/tmhglnd/mercury-playground)
- [Historia de Tidal Cycles](https://tidalcycles.org/docs/around_tidal/tidal_history/)

**Referencias:**
- *Heavy Lifting* × Graham Dunning — Live Coding Jam — YouTube
- Charli XCX — Vroom Vroom — YouTube

## Lenguajes

| Lenguaje | Descripción |
|---|---|
| [Sonic Pi](https://sonic-pi.net/) | Menos caos, más estructurado — techno |
| [Mercury Playground](https://mercury-playground.pages.dev/) | Techno, corre sobre SuperCollider |
| [SuperCollider](https://supercollider.github.io/) | Síntesis (oscilador, envolvente) — fuera de la dictadura del tiempo — dron, ambient |
| [Tidal Cycles](https://tidalcycles.org/) | Funciona sobre SuperCollider — Haskell |
| [Strudel](https://strudel.tidalcycles.org/) | Versión web de Tidal |

- Tutoriales SuperCollider: [Eli Fieldsteel](https://www.youtube.com/user/elifieldsteel)
- [Video intro Tidal](https://www.youtube.com/watch?v=KUujFuTcuKc)

## Tidal Cycleeleloibonnoi@gmail.com


https://blog.toplap.org/
sol lewit
vera molinar


último jueves de cada mes - from scratch - bcn
https://toplap.org/wiki/ManifestoDraft
grupo telegram:
algorithmic-barcelona
live code earth
toplab
mayo international live coding conference bcn
https://eulerroom.com/ - solstice - youtube - https://www.youtube.com/@Eulerroom
https://github.com/tmhglnd/mercury
https://strudel.cc/
https://kabel.salat.dev/
https://flok.cc/
https://github.com/dktr0/Punctual


SONIDO

https://parkellipsen.de/
https://github.com/tmhglnd/mercury-playground

https://tidalcycles.org/docs/around_tidal/tidal_history/

heavy lifting x graham dunning - live coding jam - youtube
charly xcx vroom vroom youtube

lenguajes
sonic pi - menos caos, más estructurado - techno
mercury  (playground) https://mercury-playground.pages.dev/ - techno
(por debajo super collider) https://supercollider.github.io/ SINTESIS ej crear sintetizador (oscilador, envolvente) - fuera de la dictadura del tiempo de la música - dron, ambient 
https://www.youtube.com/user/elifieldsteel eli fieldsteel tutoriales
tidal cycles funciona tb sobre super collider - haskell https://tidalcycles.org/
versión de web de tidal - strudel.tidalcycles.org
https://www.youtube.com/watch?v=KUujFuTcuKc


TIDAL CYCLES
funciona como sampler
ciclos - cambios en la siguiente entrada del ciclo - (no pensado para melodías)
https://www.youtube.com/channel/UC5skJN2WYbyYHUmrMQ00LtA mike hodnick tutoriales
.s - cargar sample
ejemplo amencutup(32) está dividido en 32 partes
n “0 1 2 3 4 5 6 7”
.s “amencutup”
.sometimes
.rarely


https://strudel.cc/workshop/first-sounds/
ctrl+enter - play
ctrl+. - stop

sound("<[ casio casio casio casio]*2 jazz >")
entre [] valor en cada ciclo
entre < > coge  valor diferente por cada ciclo
bd/2 suena una de cada 2
silencio - o ~
agrupación en un solo tepo con [  ]
sound("bd [hh hh] sd [hh bd]”
igual q sound (bd hh*2 sd hh*2)

sintáxis: https://strudel.cc/workshop/recap/

n("0 1 4 2").sound("jazz")
n("0 1 4 2").sound("jazz <metal casio>" ) 
jazz, metal, jazz, casio 

notas piano como sinte https://strudel.cc/workshop/first-notes/

efectos https://strudel.cc/learn/effects/




s

Funciona como sampler. Trabaja con ciclos — los cambios entran en el siguiente ciclo (no está pensado para melodías).

- Tutoriales: [Mike Hodnick](https://www.youtube.com/channel/UC5skJN2WYbyYHUmrMQ00LtA)
- `.s` — cargar sample
- Ejemplo: `amencutup(32)` — sample dividido en 32 partes

```
n "0 1 2 3 4 5 6 7"
.s "amencutup"
.sometimes
.rarely
```

## Strudel

- [Workshop — primeros sonidos](https://strudel.cc/workshop/first-sounds/)
- `Ctrl+Enter` — play
- `Ctrl+.` — stop

**Sintaxis:**

```js
sound("<[ casio casio casio casio]*2 jazz >")
```

- `[ ]` — valor en cada ciclo
- `< >` — valor diferente por cada ciclo
- `bd/2` — suena una de cada dos
- `~` — silencio
- `[ ]` — agrupación en un solo tempo

```js
sound("bd [hh hh] sd [hh bd]")
// equivale a:
sound("bd hh*2 sd hh*2")
```

```js
n("0 1 4 2").sound("jazz")
n("0 1 4 2").sound("jazz <metal casio>")
// jazz, metal, jazz, casio...
```

- [Notas piano como sintetizador](https://strudel.cc/workshop/first-notes/)
- [Efectos](https://strudel.cc/learn/effects/)
- [Referencia de sintaxis](https://strudel.cc/workshop/recap/)


---

# Visual

## Ciclario

## Hydra — Olivia Jack

- [ojack.xyz](https://ojack.xyz/)
- [hydra.ojack.xyz](https://hydra.ojack.xyz/)
- Inspiración en feedback de video y síntesis modular analógica
- [@hydra_patterns](https://mastodon.social/@hydra_patterns) en Mastodon

**Recursos:**
- [Hydra Garden](https://hydra.ojack.xyz/garden/)
- [Documentación](https://hydra.ojack.xyz/docs)
- [API](https://hydra.ojack.xyz/api/)
- `Ctrl+Enter` — ejecutar línea
- `Shift+Ctrl+Enter` — ejecutar todo el código

**Proyectos:**
- [Coded Distance](https://turbulente.net/Coded-Distance)
- [I should have slept more](https://www.turbulente.net/I-should-have-slept-more) *(Crash Landing)*
- [Animatron](https://github.com/loopier/animatron)
- [Livecodera](https://livecodera.glitch.me/)

## Otros entornos visuales

- [p5live](https://teddavis.org/p5live/)
- [Look Mum No Computer](https://www.lookmumnocomputer.com/)

> Video desde archivo propio: mejor local. El resto, online.
