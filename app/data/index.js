import populate from './dataGenerator'
import users from './raw/users'
import articles from './raw/articles'
import notifications from './raw/notifications'
import conversations from './raw/conversations'
import cards from './raw/cards'
/* import dashboard from './raw/dashboard' */
import _ from 'lodash'

class DataProvider {

  getUser(id = 1) {
    return _.find(users, x => x.id == id);
  }

  getUsers() {
    return users;
  }

  getNotifications() {
    return notifications;
  }

  getArticles(type = 'article') {
    return _.filter(articles, x => x.type == type);
  }

  getArticle(id) {
    return _.find(articles, x => x.id == id);
  }


  getConversation(userId = 1) {
    return _.find(conversations, x => x.withUser.id == userId);
  }

  getChatList() {
    return conversations;
  }

  getComments(postId = 1) {
    return this.getArticle(postId).comments;
  }

  getCards() {
    return cards;
  }

  populateData() {
    populate();
  }

  /*comment started here*/
  getFriends(userID = 1) {
        let user = this.getUser(userID);
        let friends = user.friends;
        let friendsList = [];
        friends.forEach(function(item) {
            friendsList.push(this.getUser(item))
        });
        return friendsList;
  }

  getTransactions(friendsList = [this.getUser(1)]) {
      let transactionsList = [];
      friendsList.forEach(function(item) {
          transactionsList.push({
              type: 'Lending',
              data: item.lendingTransactions
          });
          transactionsList.push({
              type: 'Borrowing',
              data: item.borrowingTransactions
          });
      })
      return transactionsList;
  }
  /*and ended here*/
}

// export default transactionsList;
export let data = new DataProvider();
