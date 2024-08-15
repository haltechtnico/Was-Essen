document.addEventListener('DOMContentLoaded', () => {
    const meals = [
        { name: 'Spaghetti', image: 'https://via.placeholder.com/300?text=Spaghetti' },
        { name: 'Carbonara', image: 'https://via.placeholder.com/300?text=Carbonara' },
        { name: 'Lasagne', image: 'https://via.placeholder.com/300?text=Lasagne' },
        { name: 'Chili con Carne', image: 'https://via.placeholder.com/300?text=Chili+con+Carne' },
        { name: 'Ratatouille', image: 'https://via.placeholder.com/300?text=Ratatouille' },
        { name: 'Hähnchen-Curry', image: 'https://via.placeholder.com/300?text=Hähnchen-Curry' },
        { name: 'Bolognese', image: 'https://via.placeholder.com/300?text=Bolognese' },
        { name: 'Pizza Margherita', image: 'https://via.placeholder.com/300?text=Pizza+Margherita' },
        { name: 'Käsespätzle', image: 'https://via.placeholder.com/300?text=Käsespätzle' },
        { name: 'Linsensuppe', image: 'https://via.placeholder.com/300?text=Linsensuppe' },
        { name: 'Frittata', image: 'https://via.placeholder.com/300?text=Frittata' },
        { name: 'Tacos', image: 'https://via.placeholder.com/300?text=Tacos' },
        { name: 'Sauerbraten', image: 'https://via.placeholder.com/300?text=Sauerbraten' },
        { name: 'Rinderrouladen', image: 'https://via.placeholder.com/300?text=Rinderrouladen' },
        { name: 'Pfannkuchen', image: 'https://via.placeholder.com/300?text=Pfannkuchen' },
        { name: 'Cevapcici', image: 'https://via.placeholder.com/300?text=Cevapcici' },
        { name: 'Moussaka', image: 'https://via.placeholder.com/300?text=Moussaka' },
        { name: 'Hähnchenbrust mit Zitronen-Kräuter-Sauce', image: 'https://via.placeholder.com/300?text=Hähnchenbrust+mit+Zitronen-Kräuter-Sauce' },
        { name: 'Gulasch', image: 'https://via.placeholder.com/300?text=Gulasch' },
        { name: 'Risotto', image: 'https://via.placeholder.com/300?text=Risotto' },
        { name: 'Bami Goreng', image: 'https://via.placeholder.com/300?text=Bami+Goreng' },
        { name: 'Caesar-Salat', image: 'https://via.placeholder.com/300?text=Caesar-Salat' },
        { name: 'Quiche', image: 'https://via.placeholder.com/300?text=Quiche' },
        { name: 'Gemüsepfanne', image: 'https://via.placeholder.com/300?text=Gemüsepfanne' },
        { name: 'Tomatensuppe', image: 'https://via.placeholder.com/300?text=Tomatensuppe' },
        { name: 'Schnitzel', image: 'https://via.placeholder.com/300?text=Schnitzel' },
        { name: 'Bratkartoffeln', image: 'https://via.placeholder.com/300?text=Bratkartoffeln' },
        { name: 'Knödel', image: 'https://via.placeholder.com/300?text=Knödel' },
        { name: 'Wok-Gemüse', image: 'https://via.placeholder.com/300?text=Wok-Gemüse' },
        { name: 'Ofenkartoffeln', image: 'https://via.placeholder.com/300?text=Ofenkartoffeln' },
        { name: 'Hühnchen Tandoori', image: 'https://via.placeholder.com/300?text=Hühnchen+Tandoori' },
        { name: 'Jägerschnitzel', image: 'https://via.placeholder.com/300?text=Jägerschnitzel' },
        { name: 'Pesto-Pasta', image: 'https://via.placeholder.com/300?text=Pesto-Pasta' },
        { name: 'Cordon Bleu', image: 'https://via.placeholder.com/300?text=Cordon+Bleu' },
        { name: 'Kürbissuppe', image: 'https://via.placeholder.com/300?text=Kürbissuppe' },
        { name: 'Lachsfilet', image: 'https://via.placeholder.com/300?text=Lachsfilet' },
        { name: 'Fajitas', image: 'https://via.placeholder.com/300?text=Fajitas' },
        { name: 'Spinat-Ricotta-Lasagne', image: 'https://via.placeholder.com/300?text=Spinat-Ricotta-Lasagne' },
        { name: 'Muscheln', image: 'https://via.placeholder.com/300?text=Muscheln' },
        { name: 'Bouillabaisse', image: 'https://via.placeholder.com/300?text=Bouillabaisse' },
        { name: 'Pulled Pork', image: 'https://via.placeholder.com/300?text=Pulled+Pork' },
        { name: 'Kebab', image: 'https://via.placeholder.com/300?text=Kebab' },
        { name: 'Kumpir', image: 'https://via.placeholder.com/300?text=Kumpir' },
        { name: 'Gebratene Nudeln', image: 'https://via.placeholder.com/300?text=Gebratene+Nudeln' },
        { name: 'Currywurst', image: 'https://via.placeholder.com/300?text=Currywurst' },
        { name: 'Gebackene Süßkartoffeln', image: 'https://via.placeholder.com/300?text=Gebackene+Süßkartoffeln' },
        { name: 'Tomaten-Mozzarella-Salat', image: 'https://via.placeholder.com/300?text=Tomaten-Mozzarella-Salat' },
        { name: 'Sauerampfer-Suppe', image: 'https://via.placeholder.com/300?text=Sauerampfer-Suppe' },
        { name: 'Wirsingrouladen', image: 'https://via.placeholder.com/300?text=Wirsingrouladen' },
        { name: 'Kürbisrisotto', image: 'https://via.placeholder.com/300?text=Kürbisrisotto' },
        { name: 'Schweinebraten', image: 'https://via.placeholder.com/300?text=Schweinebraten' },
        { name: 'Käsefondue', image: 'https://via.placeholder.com/300?text=Käsefondue' },
        { name: 'Linsencurry', image: 'https://via.placeholder.com/300?text=Linsencurry' },
        { name: 'Spaghetti Aglio e Olio', image: 'https://via.placeholder.com/300?text=Spaghetti+Aglio+e+Olio' },
        { name: 'Borschtsch', image: 'https://via.placeholder.com/300?text=Borschtsch' },
        { name: 'Vegetarische Enchiladas', image: 'https://via.placeholder.com/300?text=Vegetarische+Enchiladas' },
        { name: 'Fisch-Tacos', image: 'https://via.placeholder.com/300?text=Fisch-Tacos' },
        { name: 'Hähnchen-Teriyaki', image: 'https://via.placeholder.com/300?text=Hähnchen-Teriyaki' },
        { name: 'Pappardelle mit Pilzen', image: 'https://via.placeholder.com/300?text=Pappardelle+mit+Pilzen' },
        { name: 'Creme-Suppe', image: 'https://via.placeholder.com/300?text=Creme-Suppe' },
        { name: 'Ratatouille-Pizza', image: 'https://via.placeholder.com/300?text=Ratatouille-Pizza' },
        { name: 'Kokos-Curry', image: 'https://via.placeholder.com/300?text=Kokos-Curry' },
        { name: 'Paprikahuhn', image: 'https://via.placeholder.com/300?text=Paprikahuhn' },
        { name: 'Bulgur-Salat', image: 'https://via.placeholder.com/300?text=Bulgur-Salat' },
        { name: 'Chicken Kiev', image: 'https://via.placeholder.com/300?text=Chicken+Kiev' }
    ];

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function generateMeals() {
        const shuffledMeals = [...meals];
        shuffle(shuffledMeals);
        const mealsUser1 = shuffledMeals.slice();
        shuffle(shuffledMeals);
        const mealsUser2 = shuffledMeals.slice();
        return { mealsUser1, mealsUser2 };
    }

    let { mealsUser1, mealsUser2 } = generateMeals();
    let user1Index = 0;
    let user2Index = 0;
    const user1Results = [];
    const user2Results = [];
    let user1RestartClicked = false;
    let user2RestartClicked = false;

    function showMeal(index, user) {
        const mealImage = document.getElementById(`meal-image-${user}`);
        const mealName = document.getElementById(`meal-name-${user}`);
        const mealList = user === 1 ? mealsUser1 : mealsUser2;

        console.log(`Showing meal ${index} for user ${user}`); // Debug output
        console.log('Meal list:', mealList); // Debug output

        if (mealImage && mealName) {
            if (index < mealList.length) {
                mealImage.src = mealList[index].image;
                mealName.textContent = mealList[index].name;
            } else {
                console.error(`Index ${index} is out of range for user ${user}`);
            }
        } else {
            console.error(`Meal elements not found for user ${user}`);
        }
    }

    function handleSwipe(user, liked) {
        const currentIndex = user === 1 ? user1Index : user2Index;
        const result = {
            meal: (user === 1 ? mealsUser1 : mealsUser2)[currentIndex]?.name,
            liked: liked
        };

        if (user === 1) {
            user1Results.push(result);
            localStorage.setItem('user1Results', JSON.stringify(user1Results));
            user1Index++;
            if (user1Index < mealsUser1.length) {
                showMeal(user1Index, 1);
            } else {
                console.log('No more meals for User 1'); // Debug output
            }
        } else {
            user2Results.push(result);
            localStorage.setItem('user2Results', JSON.stringify(user2Results));
            user2Index++;
            if (user2Index < mealsUser2.length) {
                showMeal(user2Index, 2);
            } else {
                console.log('No more meals for User 2'); // Debug output
            }
        }

        if (user1Index > 0 && user2Index > 0) {
            checkForMatch(result.meal);
        }
    }

    function checkForMatch(meal) {
        const user1Data = JSON.parse(localStorage.getItem('user1Results')) || [];
        const user2Data = JSON.parse(localStorage.getItem('user2Results')) || [];

        const user1Meal = user1Data.find(item => item.meal === meal);
        const user2Meal = user2Data.find(item => item.meal === meal);

        if (user1Meal && user2Meal && user1Meal.liked && user2Meal.liked) {
            displayMatch(meal);
        }
    }

    function displayMatch(meal) {
        const matchImage = meals.find(m => m.name === meal)?.image;

        if (matchImage) {
            document.getElementById('user1-container').innerHTML = `
                <div class="match-display">
                    <h2>Match: ${meal}</h2>
                    <img src="${matchImage}" alt="${meal} Bild">
                    <button id="restart-button-1" class="restart-button">Neustart</button>
                </div>
            `;
            document.getElementById('user2-container').innerHTML = `
                <div class="match-display">
                    <h2>Match: ${meal}</h2>
                    <img src="${matchImage}" alt="${meal} Bild">
                    <button id="restart-button-2" class="restart-button">Neustart</button>
                </div>
            `;

            const restartButton1 = document.getElementById('restart-button-1');
            const restartButton2 = document.getElementById('restart-button-2');

            if (restartButton1) {
                restartButton1.addEventListener('click', () => handleRestart(1));
            }
            if (restartButton2) {
                restartButton2.addEventListener('click', () => handleRestart(2));
            }
        } else {
            console.error(`Match image not found for meal ${meal}`);
        }
    }

    function handleRestart(user) {
        console.log(`User ${user} Restart Clicked`);
        if (user === 1) {
            user1RestartClicked = true;
        } else {
            user2RestartClicked = true;
        }

        if (user1RestartClicked && user2RestartClicked) {
            restartGame();
        }
    }

    function restartGame() {
        console.log('Restarting Game...');
        user1Results.length = 0;
        user2Results.length = 0;

        const { mealsUser1: newMealsUser1, mealsUser2: newMealsUser2 } = generateMeals();
        mealsUser1 = newMealsUser1;
        mealsUser2 = newMealsUser2;
        user1Index = 0;
        user2Index = 0;

        showMeal(user1Index, 1);
        showMeal(user2Index, 2);

        document.getElementById('restart-button-1')?.classList.add('hidden');
        document.getElementById('restart-button-2')?.classList.add('hidden');

        user1RestartClicked = false;
        user2RestartClicked = false;

        console.log('Game Restarted');
    }

    document.getElementById('dislike-button-1')?.addEventListener('click', () => handleSwipe(1, false));
    document.getElementById('like-button-1')?.addEventListener('click', () => handleSwipe(1, true));
    document.getElementById('dislike-button-2')?.addEventListener('click', () => handleSwipe(2, false));
    document.getElementById('like-button-2')?.addEventListener('click', () => handleSwipe(2, true));

    showMeal(user1Index, 1);
    showMeal(user2Index, 2);
});
