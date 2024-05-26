export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    let retour
    await fetch(`https://www.fattb.be/Tennis/consultation.php?annee=2023&matricule=${body.matricule}&clubMatch=&equipeMatch=&semaine=1&division=0&chercherMatchSemaine=Chercher`)
    .then(function (response) {
        return response.text();
    })
    .then(function (html) {
        if (!html.includes("<li>par matricule</li>")){
            // extract data
            retour = { matricule: body.matricule, data: JSON.stringify({ test: "Hello" }) }
        }else{
            retour = 'error'
        }
    })

    return retour
})