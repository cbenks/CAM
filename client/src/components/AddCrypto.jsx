const AddCrypto = ({authenticated}) => {


  let publicOptions =(
    <div>
      <h3>You should not be here.</h3>
    </div>
  )
  let authenticatedOptions = (
    <div>

    </div>
  )
  return(
    <div>
      {authenticated ? authenticatedOptions : publicOptions}
    </div>
  )
}

export default AddCrypto