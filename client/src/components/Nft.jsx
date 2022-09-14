import Client from '../authentication/auth'
import { useNavigate } from 'react-router-dom'

const Nft = ({ nft }) => {
  let navigate = useNavigate()

  return(
    <div className="nft">
      <h3>{nft.name}</h3>
      <img className="nftphoto" src={nft.photo} alt="" />
      <h4>{nft.blockchain} </h4>
      <button className="assbut"
        onClick={async () => {
          const nftDelete = parseInt(nft.id)
          await Client.delete(`/nft/${nftDelete}`)
          navigate("/home")
        }}
      >
        x
      </button>
    </div>
  )
}

export default Nft