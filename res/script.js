//Create vars for all the ids
const index = document.getElementById("index");
const cookies = document.getElementById("cookies");
const content = document.getElementById("content");
const rotiPorc = document.getElementById("roti-porc");


//Add all functions to show content
function showIndex(){
    content.innerHTML = "<p>Bienvenue dans la cuisine d'Audrey!</p>";
}

function showCookies(){
    content.innerHTML = `<h1 class="title">Les cookies à tomber par terre</h1>

            <div class="top-content">
                <div class="ingredients">
                    <div>
                        <h2>Ingrédients</h2>
                    </div>
                    <div class="ingr-container">
                        <ul>
                            <li>225g de beurre</li>
                            <li>220g de sucre cassonade</li>
                            <li>150g de sucre blanc</li>
                            <li>2 oeufs</li>
                            <li>10ml d'extrait de vanille</li>
                            <li>312g de farine</li>
                            <li>5g de bicarbonate</li>
                            <li>5g de sel</li>
                            <li>Pépites de chocolat selon la gourmandise</li>
                        </ul>
                    </div>
                </div>
                <div class="img-container">
                    <a href="/res/img/Cookies.jpg" data-lightbox="Cookies" data-title="Les fameux cookies d'Audrey !"><img src="/res/img/Cookies.jpg" alt="Oh ! On n'a pas encore pris de photo !" width=100%></a> 

                    
                </div>
            </div>
            
            <h2 class="category">Préparation</h2>
            <ul>
                <li>Préchauffer le four à 190°C.</li>
                <li>Mélanger le beurre et les sucres pendant 1 minute dans un robot à vitesse lente.</li>
                <li>Augmenter la puissance (Kitchen Aid: Puissance 4) pendant 2 minutes.</li>
                <li>Ajouter les oeufs (sans la coquille de préférence) et re-mélanger à puissance moyenne (4) pendant 1 minute</li>
                <li>Ajouter l'extrait de vanille, la farine, le bicarbonate et le sel et mélanger encore jusqu'à ce que tout soit bien incorporé.</li>
                <li>Ajouter les pépites de chocolat selon votre goût et mélanger délicatement.</li>
                <li>En utilisant une couillère à glace (ou couillère à soupe), poser des boules de pâte sur une grille de cuisson avec du papier sulfurique sans trop surcharger la grille.</li>
                <li>Enfourner à mi-hauteur pendant 10 à 12 minutes. Les boules de pâte vont s'étaler au fur et à mesure.</li>
                <li>À servir avec un verre de lait et un bon dessin animé !</li>
            </ul>`;
}

function showRotiPorc(){
    content.innerHTML = `<h1 class="title">Rôti de porc à la Audrey</h1>
            <div class="top-content">
                <div class="ingredients">
                    <div>
                        <h2>Ingrédients</h2>
                    </div>
                    <div class="ingr-container">
                        <h3>Le rôti</h3>
                        <ul>
                            <li>Un rôti de porc entre 700gr/1kg avec du gras dessus</li>
                        </ul>
                        <h3>La marinade</h3>
                        <ul>
                            <li>Moutarde à l'ancienne (1 c à soupe)</li>
                            <li>Moutarde forte (2 c à soupe)</li>
                            <li>Huile d'olive (1/2c à soupe)</li>
                            <li>Sauce soja salée (2c à soupe env)</li>
                            <li>Sirop d'érable (4c à soupe env)</li>
                            <li>Thym</li>
                            <li>Sauge</li>
                            <li>Ciboulette</li>
                        </ul>
                        <h3>La sauce</h3>
                        <ul>
                            <li>Une échalote</li>
                            <li>Vin rouge (env. 10cl)</li>
                            <li>Beurre (pour un rendu brillant et épais)</li>
                            <li>Sauce soja (1c à café environ) </li>
                            <li>Moutarde à l'ancienne (1c à café)</li>
                            <li>Moutarde forte (1c à café)</li>
                            <li>Sirop d'érable (à mesurer selon niveau acidité/sel)</li>
                        </ul>
                    </div>
                </div>
                <div class="img-container">
                    <a href="res/img/...jpg" data-lightbox="Roti de Porc" data-title="Le rôti de porc à la Audrey !"><img src="res/img/...jpg" alt="Oh ! On n'a pas encore pris de photo !" width=100%></a>                    
                </div>
            </div>
            
            <h2 class="category">Préparation</h2>
            <ul>
                <li>Faire revenir le rôti de porc feu fort 10min de chaque côté pour bien le faire dorer, saler, poivrer.</li>
                <li>Au bout de 5min, rajouter dans la poêle beurre, thym, sauge et un filet d'huile (très léger, pour pas que le beurre brûle). Arroser le porc avec le mélange beurre et herbes.</li>
                <li>Préparer la marinade</li>
                <li>Préchauffer le four à 200 degrés (chaleur tournante).</li>
                <li>Sortir le rôti de la poêle, bien garder les sucs pour la sauce.</li>
                <li>Rôti dans de l'aluminium, mettre la marinade sur le rôti et fermer l'alu hermétiquement.</li>
                <li>Au four pendant 1h, la viande est cuite à cœur quand elle a atteint 70 degrés sur la partie la plus épaisse.</li>
                <li>Pendant la cuisson, préparer la sauce en utilisant les sucs de cuisson dès que possible.</li>
                <li>Laisser réduire la sauce 15 à 20 minutes à feu moyen</li>
                <li>Accompagner de spaetzle, riz, pâtes, carottes glacées au sirop d'érable, etc.</li>
            </ul>`;
}

//Add all the event listeners
index.addEventListener("click", showIndex);
cookies.addEventListener("click", showCookies);
rotiPorc.addEventListener("click", showRotiPorc);
