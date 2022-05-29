Vue.js Coding Dojo
1. Umfrage zum Framework
2. Einführung in Vue.js (Geschichte & Basics) //Folien oder Live coding?
3. Abwechseld Kleine Aufgabe & Erklärung
4. Zusammenfassung

//Todo list 
Aufgaben ausdenken und aufschreiben.
    1. schaut euch den code an -> momentan werden keine Zellen gerendert
    2. in Tile.vue computed benutzen
    3. number of neighbours implementieren!
Projekt auf andrena git hochladen (mit lösungs branches)




## Cheatsheet einführung in Vue.js
### Geschichte
1. Vue ist eins der Großen 3 Modernen "frameworks" für Web frontends(die anderen sind Angular von Google und react von Meta 😋). 
wobei mann beim wort Framework aufpassen sollte: react ist ja Offiziel ein library und kein FM...
2. vue ist eine Unabhängiges, Community-getriebenes Projet, wurde erstmal **2014** von **Evan You**  geschrieben.
3. Einige Vorteile von vue Sind die
    - Zuverlässig und einfach Zu lernen da es sehr gut documentiert ist
    - Es ist eins der Performatesten FE frameworks
    - Vue ist klein
*** 
### Paradigmen
1. Wie auch bei anderen FWs wird in vue auf deklaratives rendering gesetz.
das heißt mann hat sein Template das wie HTML aussiet und mann kann {{}} doppelt geschweiften klammern auf Daten zugreifen aus dem js/TS code.

2. vue ist reaktive wenn mann das macht, also wenn mann primitive typen ändert wird auch entsprechend das Rendering auf der Seite direkt angepasst. bei komplizierteren Objekten muss mann manchmal einen wrapper von vue verwenden damit auch alles an änderungen registriet wird. Stichwort ref() & reactive()
2. Komponenten sind Bausteine die jeweils Das Template -> HTML
Script -> dein TS code
Style -> css 
in vue 3 sind SFC die bevorzugte Methode. das Sind Dateien die .vue enden

4. vue Directictives:
Das sind abkürzungen im Template code die mann oft braucht und die Struktur einfacher macht.
Ich zeig euch mal die Bekantesten davon Übergang.



