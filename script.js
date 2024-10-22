function calculateCalories() {
  const age = parseInt(document.getElementById('age').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseInt(document.getElementById('height').value);
  const goal = document.getElementById('goal').value;
  
  let result = document.getElementById('result');
  
  let BMR = 10 * weight + 6.25 * height - 5 * age +5;
  
  let calories;
  let protein, carbs, fats;
  let mealSuggestions = "";
  let sleepRecommendation = "Recomenda-se dormir entre 7-9 horas por noite para otimizar a recuperação e o bem-estar";
  
  if (goal === "maintain") {
    calories = BMR * 1.55;
    protein = weight * 1.8;
    carbs = weight * 4;
    fats = weight * 1;
    
    mealSuggestions = `<p><strong> Sugestão de Cardápio para manter massa</strong></p>
    <ul>
      <li>Café da manhã:Tapioca com queijo branco.</li>
     <li>Almoço: Arroz integral, feijão, carne e verduras.</li>
    <li>Lanche:Fruta com pasta de amendoim .</li>
    <li>Jantar: Peixe grelhado com batata-doce, salada e legumes.</li>
    </ul>`   
    ;
  } else if (goal === "gain"){
    calories = BMR * 1.2;
    protein = weight * 2;
    carbs = weight * 2;
    fats = weight * 0.7;
    
     mealSuggestions = `<p><strong> Sugestão de Cardápio para ganhar massa</strong></p>
    <ul>
      <li>Café da manhã: Ovos mexidos com queijo cottage.</li>
     <li>Almoço: Arroz integral, feijão,Carne magra,folhosos, como alface, rúcula, repolho ou chicória.</li>
    <li>Lanche: Iogurte natural com aveia e frutas.</li>
    <li>Jantar: Peito de frango com batata doce e salada.</li>
    </ul>`    
     ;
  } else if (goal === "lose") {
    calories = BMR * 1.75;
    protein = weight * 2;
    carbs = weight * 5;
    fats = weight * 1;
    
     mealSuggestions = `<p><strong> Sugestão de Cardápio para perder peso</strong></p>
    <ul>
      <li>Café da manhã: Ovos mexidos, suco verde.</li>
     <li>Almoço: Arroz integral, salada de grão-de-bico, tomate, pepino, cebola e peixe assado.</li>
    <li>Lanche: uma fruta ou pão com doce de leite.</li>
    <li>Jantar:  salada de folhas, legumes cozidos e frango grelhado.</li>
    </ul>`    
    ;
 }
 result.innerHTML =`
 <p> Sua necessidade calórica diária estimada é de ${calories.toFixed(2)} calorias.</p>
 
 <p> Para atingir seu objetivo, você deve ingerir: </p>
 <ul>
    <li>${protein.toFixed(2)}g de proteínas por dia. </li>
    <li>${protein.toFixed(2)}g de carboidratos  por dia. </li>
    <li>${protein.toFixed(2)}g de gorduras por dia. </li>
 </ul>
 
 
 ${mealSuggestions}
 <p>${sleepRecommendation}</p>
 <p><strong>Hidratação:</strong> tente beber cerca de ${(weight * 0.035).toFixed(2)} litros de água por dia</p>
 
 `
 }
