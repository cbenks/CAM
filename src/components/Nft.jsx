import Client from '../authentication/auth'
import { useNavigate } from 'react-router-dom'

const Nft = ({ nft }) => {
  let navigate = useNavigate()

  return(
    <div className="nft">
      <h3>{nft.name}</h3>
      <h4>on the {nft.blockchain} blockchain</h4>
      <img className="nftphoto" src={nft.photo} alt="" />
      <button className="assbut"
        onClick={async () => {
          const nftDelete = parseInt(nft.id)
          await Client.delete(`/nft/${nftDelete}`)
          navigate("/")
        }}
      >
        x
      </button>
    </div>
  )
}

export default Nft