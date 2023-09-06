const React = require('react')
const Default = require('./layouts/Default')
// const index = require('/views/index')

function Index ({breads, title})  {
    return (
        <Default title={title}>
          {/* <link rel="shortcut icon" type="image/jpg" href="Favicon_Image_Location"/> */}

  <h2>Check out this BREAD!!!</h2>
  {/* <p>I have {breads[0].name} bread!</p> */}
  {/* This is a JSX comment. */}
  <div className="newButton">
  <a href="/breads/new"><button>Add a new bread</button></a>
</div>
  <ul>
  {
  breads.map((bread, index)=> {
    return (
      <li key={index}>
        <a href={`/breads/${bread.id}`}>
          {bread.name}
        </a>
        <p>{bread.getBakedBy()}</p>
      </li>
    )
  })
}




  </ul>
</Default>

      
    )
}


module.exports = Index
