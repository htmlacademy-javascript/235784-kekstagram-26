const createTestObject = function (id, url, description, likes, comments) {
  this.id = id;
  this.url = `photos/${  url  }.jpg`;
  this.description = description;
  this.likes = likes;
  this.comments = comments;
};

const createTestComments = function (id, avatar, message, name) {
  this.id = id;
  this.avatar = `img/avatar-${  avatar  }.svg`;
  this.message = message;
  this.name = name;
};

export {createTestObject, createTestComments};
