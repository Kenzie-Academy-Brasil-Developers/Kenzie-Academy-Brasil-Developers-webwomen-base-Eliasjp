function selectedCards (job){
    const li = document.createElement(`li`)
          li.classList = `selected-card`
          
    const selectedContainer = document.createElement(`div`)
          selectedContainer.classList = `selected-main-container`

    const h4 = document.createElement(`h4`)
          h4.classList = `selected-title`
          h4.innerHTML = `${job.title}`

    const smallInfoContainer = document.createElement(`div`)
          smallInfoContainer.classList = `small-info-container`

    const smallEnterprise = document.createElement(`small`)
          smallEnterprise.classList = `selected-enterprise`
          smallEnterprise.innerHTML = `${job.enterprise}`

    const smallLocation = document.createElement(`small`)
          smallLocation.classList = `selected-location`
          smallLocation.innerHTML = `${job.location}`

    const removeSelected = document.createElement(`button`)
          removeSelected.classList = `remove-selected-card`
          removeSelected.addEventListener(`click`, () => {
                removeSelectedJSON(job)
                localSelected (job)
                li.remove()
          })

    const trashIcon = document.createElement(`img`)
          trashIcon.src = `assets/img/trash.svg`
          trashIcon.alt = `delete-selected-job`

    const queryUl = document.querySelector(`.selected-list`)

    queryUl.append(li)
    li.append(selectedContainer, removeSelected)
    selectedContainer.append(h4, smallInfoContainer)
    smallInfoContainer.append(smallEnterprise,smallLocation)
    removeSelected.append(trashIcon)
}

function removeSelectedJSON (job){
    let parsedJSON = JSON.parse(localStorage.getItem("appliedJobs"))
    const findIndexJSON = parsedJSON.findIndex(object => object.title == job.title)
    if (!findIndexJSON){
        parsedJSON.shift()
        localStorage.setItem("appliedJobs", JSON.stringify(parsedJSON))
    }else {
        parsedJSON.splice(findIndexJSON, findIndexJSON)
        localStorage.setItem("appliedJobs", JSON.stringify(parsedJSON))
    }
}

function localSelected (job){
    const queryUlH3 = document.querySelectorAll(`.job-title`)
    const queryUlButton = document.querySelectorAll(`.job-apply`)
    let tempArray = []
    tempArray = [...queryUlH3]
    if (tempArray.findIndex(element => element.innerHTML == job.title) >= 0){
        const indexElement = tempArray.findIndex(element => element.innerHTML == job.title)
        queryUlButton[indexElement].innerHTML = `Candidatar`
    }
}