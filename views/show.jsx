const React = require('react')
const Default = require('./layouts/Default')

function Show ({bread, id}) {
    // Confirm we are getting our bread data in the terminal.
    console.log(bread.baker)
      return (
        <Default>
  <h3>{bread.name}</h3>
  <p>
    and it
    {
      bread.hasGluten
      ? <span> does </span>
      : <span> does NOT </span>
    }
    have gluten.
  </p>
  <img src={bread.image} alt={bread.name} />
<p>Baked by {bread.baker.name}</p>
<p>{bread.getBakedBy()}</p>          
  <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>
  <form action={`/breads/${bread.id}?_method=delete`} method="POST">
  <input type='submit' value="delete"/>
</form>


  <li><a href="/breads">Go home</a></li>
</Default>

      )
  }

module.exports = Show
