import dummyData from './DummyDB.js';

let update;
let msgList = dummyData;

export default {
  subscribe (cb) {
    update = cb;
  },
  addMsg (message) {
    message.id = msgList.length;
    msgList.push(message);
    update(message);
  },
  getAll (allCB) {
    allCB(msgList);
  },
};