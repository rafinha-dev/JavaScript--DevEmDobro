// let select = document.querySelector('select[name=estado]')

// select.addEventListener('change', function()
// {
//     alert('mudou o select')
// }
// ) ou

document
.querySelector('select[name=estado]')
.addEventListener('change', function(event)
{
    console.log(event.target.value)

}
)