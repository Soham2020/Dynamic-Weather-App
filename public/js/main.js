const cityName = document.getElementById('cityName')
const submitBtn = document.getElementById('submitBtn')
const city_name = document.getElementById('city_name')
const temp_status = document.getElementById('temp_status')
const temp = document.getElementById('temp')
const datahide = document.querySelector('.middle_layer')
const temp_real_value = document.getElementById('temp_real_value')
const getInfo = async(event)=>{
    event.preventDefault()
    let cityVal = cityName.value
    if(cityVal === ""){
        city_name.innerText = 'Please give input'
        datahide.classList.add('data_hide')
    }else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=96343c01bd563eebc728373b91375ca3`
            const response = await fetch(url)
            const data = await response.json()
            const arrData = [data]
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_value.innerText = arrData[0].main.temp
            const tempmood = arrData[0].weather[0].main
            if (tempmood == "Clear")
            {
                temp_status.innerHTML = 
                "<i class='fas fa-sun' style='color: yellow'></i>"
            }
            else if(tempmood == 'Clouds'){
                temp_status.innerHTML = 
                "<i class='fas fa-cloud' style='color: #f1f2f6'></i>"
            }
            else if(tempmood == 'Rain'){
                temp_status.innerHTML = 
                "<i class='fas fa-rain' style='color: black'></i>"
            }else{
                temp_status.innerHTML = 
                "<i class='fas fa-sun' style='color: yellow'></i>"
            }
            datahide.classList.remove('data_hide')
        }catch{
            city_name.innerText = `Error`
            datahide.classList.add('data_hide')
        }
    } 
}

submitBtn.addEventListener('click', getInfo)