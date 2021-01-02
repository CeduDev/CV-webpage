const updateSleepQuality = (value) => {
    document.querySelector('#sleepQualitySlider').innerHTML = 'Sleep quality: ' + value
}

const updateEating = (value) => {
    document.querySelector('#eatingSlider').innerHTML = 'Eating regularity and quality: ' + value
}

const updateMood = (val) => {
    document.querySelector('#moodSlider').innerHTML = 'Mood: ' + val
}