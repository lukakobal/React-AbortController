# ⚛️ React 72 – useEffect AbortController

## 🎯 Kaj se učimo
Preklic API klica, ko komponenta izgine.

## 🧠 Ključni koncepti
- useEffect
- cleanup funkcija
- AbortController
- preprečevanje memory leak napak

## 🚀 Zakaj je to pomembno
V resničnih aplikacijah uporabniki pogosto zapustijo stran preden se podatki naložijo. Če fetch ne ustavimo, React poskuša posodobiti komponento, ki ne obstaja več → napake in slab performance.


https://codesandbox.io/p/sandbox/xftrkq?file=%2Fsrc%2Fstyles.css%3A1%2C1-27%2C1
