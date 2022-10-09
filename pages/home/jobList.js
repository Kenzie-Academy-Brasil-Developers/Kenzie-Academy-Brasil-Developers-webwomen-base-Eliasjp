function sendLi (){
    jobsData.forEach(job => createLi(job))
}

function createLi (job){
      const li = document.createElement(`li`)
            li.classList = `job-card`

      const liTitle = document.createElement(`h3`)
            liTitle.classList = `job-title`
            liTitle.innerHTML = `${job.title}`

      const liInfo = document.createElement(`div`)
            liInfo.classList = `liInfo`

      const liEnterprise = document.createElement(`small`)
            liEnterprise.classList = `job-enterprise`
            liEnterprise.innerHTML = `${job.enterprise}`

      const liLocation = document.createElement(`small`)
            liLocation.classList = `job-location`
            liLocation.innerHTML = `${job.location}`

      const liDescrition = document.createElement(`p`)
            liDescrition.classList = `job-description`
            liDescrition.innerHTML = `${job.descrition}`

      const liFooter = document.createElement(`footer`)
            liFooter.classList = `job-footer`

      const modalitiesContainer = document.createElement(`div`)
            modalitiesContainer.classList = `modalities-container`

      job.modalities.forEach(modalities => {
            const modalitiesSpan = document.createElement(`span`)
                  modalitiesSpan.classList = `modalities-span`

            const modalitiesInfo = document.createElement(`p`)
                  modalitiesInfo.classList = `job-info`
                  modalitiesInfo.innerHTML = `${modalities}`

            modalitiesContainer.append(modalitiesSpan)
            modalitiesSpan.append(modalitiesInfo)
      })

      const liButton = document.createElement(`button`)
            liButton.classList = `job-apply`
            if (!JSON.parse(localStorage.getItem("appliedJobs")) || JSON.parse(localStorage.getItem("appliedJobs")).findIndex(object => object.title == job.title) < 0){
                  liButton.innerHTML = `Candidatar`
            }else {
                  liButton.innerHTML = `Remover candidatura`
                  selectedCards (job)
            }
            liButton.addEventListener(`click`, (event) => checkLocalForJob (job, event))

      const ulQuery = document.querySelector(`.jobList`)

      ulQuery.append(li)
      li.append(liTitle, liInfo, liDescrition, liFooter)
      liInfo.append(liEnterprise, liLocation)
      liFooter.append(modalitiesContainer, liButton)
}

sendLi()