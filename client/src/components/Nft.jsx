import Client from '../authentication/auth'

const Nft = ({ nft }) => {

  return(
    <div>
      <h3>{nft.name}</h3>
      <img src={nft.photo} alt="" />
      <h4>{nft.blockchain} </h4>
      <button
        onClick={async () => {
          const nftDelete = parseInt(nft.id)
          await Client.delete(`/nft/${nftDelete}`)
          document.location.reload()
        }}
      >
        x
      </button>
    </div>
  )
}

export default Nft