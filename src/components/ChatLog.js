import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const entryComponents = [];
  for (const entry of props.entries) {
    entryComponents.push(
      <li key={entry.id}>
        <ChatEntry
          // key={entry.id}
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          toggleLikesCallback={props.toggleLikesCallback}
          countLikesCallback={props.countLikesCallback}
          colors={props.colors}
        />
      </li>
    );
  }

  return <div className="chat-log">{entryComponents}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
  colors: PropTypes.array,
  toggleLikesCallback: PropTypes.func,
  countLikesCallback: PropTypes.func,
};

export default ChatLog;
