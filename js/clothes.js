const clothes = document.getElementById('clothes')

let dataApi;

console.log("Holas");
window.addEventListener('load', () => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('api/api.json')
        dataApi = await res.json()
        // console.log(data);
        dibujarCard(dataApi)
    } catch (error) {
        console.log(error)
    }
}

let Card = ''
const dibujarCard = () => {
    Card = ""
    dataApi.forEach(clothe => {
            Card += `
            <div class="col-12 mb-2 col-md-4 mt-3 btnDataClothe">
                    <div class="card-sm-6">
                        <div class="view zoom overlay">
                            <img class="img-fluid w-100"
                                src="${clothe.imagen.vista1}" alt="Sample">
                            <h4 class="mb-0"><span class="badge badge-primary badge-pill badge-news">Sale</span></h4>
                        </div>
                        <div class="card-body text-center">
                            <h5>${clothe.nombre}</h5>
                            <p class="small text-muted text-uppercase mb-2">Shirts</p>
                            <hr>
                            <h6 class="mb-3">
                                <span class="text-danger mr-1">${clothe.precio}</span>
                            </h6>
                        </div>
                    </div>
                </div>
            `       
        }
    )
    console.log(clothes);
    clothes.innerHTML = Card


}