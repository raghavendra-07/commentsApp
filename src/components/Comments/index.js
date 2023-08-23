import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {commentItemList: [], inputName: '', inputComment: ''}

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentItemList: prevState.commentItemList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isActive: !eachComment.isActive}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    const {commentItemList} = this.state
    this.setState({
      commentItemList: commentItemList.filter(comment => comment.id !== id),
    })
  }

  onAddComment = event => {
    event.preventDefault()
    const {inputName, inputComment} = this.state

    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: uuidv4(),
      name: inputName,
      comment: inputComment,
      date: new Date(),
      isActive: false,
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      commentItemList: [...prevState.commentItemList, newComment],
      inputName: '',
      inputComment: '',
    }))
  }

  onChangeName = event => {
    this.setState({
      inputName: event.target.value,
    })
  }

  onChangeComment = event => {
    this.setState({
      inputComment: event.target.value,
    })
  }

  render() {
    const {commentItemList, inputName, inputComment} = this.state
    return (
      <div className="main-con">
        <div className="inner-con">
          <h1 className="comment-head">Comments</h1>
          <div className="input-con">
            <div className="input-form-con">
              <p className="say-para">Say something about 4.0 Technologies</p>
              <form className="form-con" onSubmit={this.onAddComment}>
                <input
                  className="input-ele"
                  onChange={this.onChangeName}
                  value={inputName}
                  type="text"
                  placeholder="Your Name"
                />
                <textarea
                  className="textarea-ele"
                  onChange={this.onChangeComment}
                  value={inputComment}
                  type="textarea"
                  placeholder="Your Comment"
                  rows="6"
                />
                <button className="add-comment-btn" type="submit">
                  Add Comment
                </button>
              </form>
            </div>
            <img
              className="comment-main-img"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
          <hr className="hr-line" />
          <div>
            <p className="count-comments">
              <span className="count-num">{commentItemList.length}</span>{' '}
              Comments
            </p>

            <ul className="ul-list">
              {commentItemList.map(eachComment => (
                <CommentItem
                  eachCommentItem={eachComment}
                  key={eachComment.id}
                  toggleIsLiked={this.toggleIsLiked}
                  deleteComment={this.deleteComment}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
