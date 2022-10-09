function checkLocalForJob (job, event){
    const storageJobs = localStorage.getItem("appliedJobs")
    let parsedJSON = JSON.parse(localStorage.getItem("appliedJobs"))
    if (!storageJobs){
        applyJobJSON (job, event)
    }else if (storageJobs){
        newJobJSON (job, parsedJSON, event)
    }
}

function applyJobJSON (job, event){
    const tempArray = []
    const jobObject = {title: job.title, enterprise: job.enterprise, location: job.location}
    tempArray.push(jobObject)
    localStorage.setItem("appliedJobs", JSON.stringify(tempArray))
    event.target.innerHTML = `Remover candidatura`
    selectedCards (job, event)
}

function newJobJSON (job, parsedJSON, event){
    const findIndexJSON = parsedJSON.findIndex(object => object.title == job.title)
    if (findIndexJSON < 0){
        const jobObject = {title: job.title, enterprise: job.enterprise, location: job.location}
        parsedJSON = [...parsedJSON, jobObject]
        localStorage.setItem("appliedJobs", JSON.stringify(parsedJSON))
        event.target.innerHTML = `Remover candidatura`
        selectedCards (job, event)
    }else {
        if (!findIndexJSON){
            parsedJSON.shift()
            localStorage.setItem("appliedJobs", JSON.stringify(parsedJSON))
            event.target.innerHTML = `Candidatar`
            removeClickingAgain (job)
        }else {
            parsedJSON.splice(findIndexJSON, findIndexJSON)
            localStorage.setItem("appliedJobs", JSON.stringify(parsedJSON))
            event.target.innerHTML = `Candidatar`
            removeClickingAgain (job)
        }
    }
}

function removeClickingAgain (job){
    const queryLis = document.querySelectorAll(`.selected-card`)
    const queryLisH4 = document.querySelectorAll(`.selected-title`)
    let arrayTemp = []
    arrayTemp = [...queryLisH4]
    if (arrayTemp.findIndex(element => element.innerHTML == job.title) >= 0){
        queryLis[arrayTemp.findIndex(element => element.innerHTML == job.title)].remove()
    }
}