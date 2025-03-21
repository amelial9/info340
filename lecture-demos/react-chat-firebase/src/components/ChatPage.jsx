import React from 'react';

import { ChannelList } from './ChannelList.jsx';
import { ChatPane } from './ChatPane.jsx';

const CHANNEL_NAMES = ["general", "social", "random", "birds"];


export default function ChatPage(props) {
  const {currentUser, messageArray, addMessageFunction} = props;

  return (
    <div className="row flex-grow-1">
      <div className="col-3">
        <ChannelList channelNames={CHANNEL_NAMES} />
      </div>
      <div className="col d-flex flex-column">
        <ChatPane
          currentUser={currentUser}
          messageArray={messageArray}
          addMessageFunction={addMessageFunction}
        />
      </div>
    </div>
  )
}