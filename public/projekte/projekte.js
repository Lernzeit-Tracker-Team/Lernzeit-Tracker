class Goal {
    constructor(){
        this.title = "";
        this.goal = this.create();
    }    

    create(){
        const goalArticle = document.createElement("article");
        
        this.input = document.createElement("input");
        this.input.placeholder="Name des Lernziels";

        this.addInfos = document.createElement("button");  
        this.addInfos.textContent = "Lernziel erstellen";            
        this.addInfos.addEventListener("click", () => {
            this.title = this.input.value;
            const goalTitle = document.createElement("h2");
            goalTitle.textContent = this.title;   
            this.input.replaceWith(goalTitle);
            this.addInfos.remove();
        });

        const removeButton = document.createElement("button");
        removeButton.textContent = "Lernziel entfernen";
        removeButton.addEventListener("click", ()=> this.remove());

        goalArticle.append(this.input, this.addInfos, removeButton);
        
        return goalArticle;

    }

    remove () {
        this.goal.remove();
    }
}

class GoalList {
    constructor(container){
        this.container = container;
    };

    add () {
        const newGoal = new Goal();
        this.container.append(newGoal.goal);
        newGoal.input.focus();
    }

    removeAll (){
        this.container.replaceChildren();
    }
}

const goalList = new GoalList(document.querySelector(".goalElements"));

document.querySelector("#addProject").addEventListener("click", ()=>{goalList.add()})