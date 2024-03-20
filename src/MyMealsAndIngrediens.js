const MyMealsAndIngrediens = ({selectedDay, updateDay}) => {
    
const editMyMeal = (myInput, value) => {
    updateDay({
        ...selectedDay,
        [myInput]: value
    })
}

if (!selectedDay) return <p>Планируйте свое питание на неделю заранее</p>

    return (
        <div className="whole-plan">
        
            <input  
                type="text" 
                className="myInput" 
                placeholder="Сегодня..." 
                id='title'
                value={selectedDay.title}
                onChange={(e) => editMyMeal('title', e.target.value)}
                
                />
            <textarea 
                placeholder="Напишите свой план" 
                id="mealForADay"
                value={selectedDay.mealForADay}
                onChange={(e) => editMyMeal('mealForADay', e.target.value)}
                />

            <textarea 
                placeholder="Список ингредиентов" 
                id="mealForADay"
                value={selectedDay.ingredients}
                onChange={(e) => editMyMeal('ingredients', e.target.value)}
                />
            
        </div>
    )
}

export default MyMealsAndIngrediens;
