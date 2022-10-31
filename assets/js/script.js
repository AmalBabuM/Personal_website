console.log("sarath");



function sumbitData(event) {

    event.preventDefault()
    let error = true
    let name = document.getElementById("name")
    let nameError = document.getElementById("nameError")
    console.log(name.value);
    if (name.value === '') {
        error = false;
        nameError.innerHTML = "Please Enter Your Name"
    } else {
        
        nameError.innerHTML = ""

    }

    if (error===true) {
        called()
    }
}
function called() {
    console.log("Form Submitted")
    // $("#submit-form").submit((e) => {
        // e.preventDefault()

        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbwjmfqmGJxM_Kar8gpvvyCaEVkEALLyOziHPHUU9_EsUxU_e4Xl_2ZJI0W58TGrPq7b/exec",
            data: $("#submit-form").serialize(),
            method: "post",
            success: function (response) {
                alert("Form submitted successfully")
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error: function (err) {
                alert("Something Error")

            }
        })
    // })

}