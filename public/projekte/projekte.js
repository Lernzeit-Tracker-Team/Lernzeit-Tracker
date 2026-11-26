/**
 * Projekte-Seite: Lernziele anlegen, benennen und entfernen.
 */

/**
 * Eine einzelne Lernziel-Karte mit Eingabefeld und Buttons.
 */
class Goal {
    /**
     * Erstellt ein neues, noch unbenanntes Lernziel samt Karte.
     */
    constructor() {
        this.title = "";           // Titel bleibt leer, bis der Nutzer ihn bestaetigt
        this.goal = this.create(); // fertige Karte als <article>
    }

    /**
     * Baut die Karte mit Eingabefeld, Erstellen- und Entfernen-Button.
     * @returns {HTMLElement} die fertige Karte
     */
    create() {
        const goalArticle = document.createElement("article");

        // Eingabefeld im Objekt merken, damit add() den Fokus setzen kann
        this.input = document.createElement("input");
        this.input.placeholder = "Name des Lernziels";

        this.addInfos = document.createElement("button");
        this.addInfos.textContent = "Lernziel erstellen";
        this.addInfos.addEventListener("click", () => {
            this.title = this.input.value;
            const goalTitle = document.createElement("h2");
            goalTitle.textContent = this.title; // textContent: Eingabe wird nicht als HTML ausgefuehrt
            this.input.replaceWith(goalTitle);  // Eingabefeld durch Ueberschrift ersetzen
            this.addInfos.remove();             // Button wird nicht mehr gebraucht
        });

        const removeButton = document.createElement("button");
        removeButton.textContent = "Lernziel entfernen";
        // Pfeilfunktion, damit "this" auf dieses Lernziel zeigt und nicht auf den Button
        removeButton.addEventListener("click", () => this.remove());

        goalArticle.append(this.input, this.addInfos, removeButton);
        return goalArticle;
    }

    /**
     * Entfernt die Karte von der Seite.
     */
    remove() {
        this.goal.remove();
    }
}

/**
 * Verwaltet alle Lernziel-Karten in einem Container.
 */
class GoalList {
    /**
     * @param {HTMLElement} container - Element, in dem die Karten angezeigt werden
     */
    constructor(container) {
        this.container = container;
    }

    /**
     * Legt eine neue, leere Karte an und setzt den Cursor ins Eingabefeld.
     */
    add() {
        const newGoal = new Goal();
        this.container.append(newGoal.goal);
        newGoal.input.focus();
    }

    /**
     * Entfernt alle Karten aus dem Container.
     */
    removeAll() {
        this.container.replaceChildren();
    }
}

// Liste mit dem Container aus dem HTML verbinden
const goalList = new GoalList(document.querySelector(".goalElements"));

// Button "+ Hinzufügen" legt eine neue Karte an
document.querySelector("#addProject").addEventListener("click", () => goalList.add());