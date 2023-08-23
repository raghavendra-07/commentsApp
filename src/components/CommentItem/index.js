// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {eachCommentItem, toggleIsLiked, deleteComment} = props
  const {id, name, comment, isActive, initialClassName, date} = eachCommentItem

  const initial = name ? name[0].toUpperCase() : ''
  const postedTime = formatDistanceToNow(date)

  const imgUrl = isActive
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickLikeBtn = () => {
    toggleIsLiked(id)
  }

  const onClickDeleteBtn = () => {
    deleteComment(id)
  }

  return (
    <li className="li-list-con">
      <div className="initial-classname-con">
        <div className="initial-container">
          <div className={initialClassName}>
            <p className="initial-logo">{initial}</p>
          </div>
        </div>

        <div className="name-time-con">
          <p className="username">{name}</p>
          <p className="time">{postedTime}</p>
        </div>
      </div>

      <p className="comment-class">{comment}</p>
      <div className="buttons-con">
        <button className="btn-con" onClick={onClickLikeBtn} type="button">
          <img className="like-img" src={imgUrl} alt="like" /> Like
        </button>
        <button
          className="btn-con"
          onClick={onClickDeleteBtn}
          data-testid="delete"
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
