import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const SongDetails = props => {
  const {songDetails, onClickDelete} = props
  const {id, imageUrl, name, genre, duration} = songDetails
  const clickDelete = () => {
    onClickDelete(id)
  }

  return (
    <li className="song-details">
      <div className="image-name">
        <img src={imageUrl} alt="track" className="image" />
        <div className="name-genre">
          <p className="song-name">{name}</p>
          <p className="song-genre">{genre}</p>
        </div>
      </div>
      <div className="duration-delete">
        <p className="song-name">{duration}</p>
        <button
          type="button"
          testid="delete"
          onClick={clickDelete}
          className="delete-button"
        >
          <AiOutlineDelete className="delete-icon" />
        </button>
      </div>
    </li>
  )
}

export default SongDetails
