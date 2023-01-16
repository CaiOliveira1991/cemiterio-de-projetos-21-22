import MyMsg from './MyMsg';
import Msg from './Msg';
import MsgForm from './MsgForm';

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];

  const renderReadReceipts = (message, isMyMsg) => chat.people.map((person, index) => person.last_read === message.id && (
    <div
      key={`read_${index}`}
      className="Recibo"
      style={{
        float: isMyMsg ? 'right' : 'left',
        backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
      }}
    />
  ));

  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMsg = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: '100%' }}>
          <div className="BlockMensagem">
            {isMyMsg
              ? <MyMsg message={message} />
              : <Msg message={message} lastMessage={messages[lastMessageKey]} />}
          </div>
          <div className="Recibos" style={{ marginRight: isMyMsg ? '18px' : '0px', marginLeft: isMyMsg ? '0px' : '68px' }}>
            {renderReadReceipts(message, isMyMsg)}
          </div>
        </div>
      );
    });
  };

  if (!chat) return <div />;

  return (
    <div className="ChatFeed">
      <div className="ChatTxtContainer">
        <div className="ChatTxt">{chat?.title}</div>
        <div className="ChatSubTxt">
          {chat.people.map((person) => ` ${person.person.username}`)}
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: '100px' }} />
      <div className="ContainerMensag">
        <MsgForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;

