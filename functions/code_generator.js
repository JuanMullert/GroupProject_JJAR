function create_random_code(string_length){
  var random_string = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz'
  for(var i, i = 0; i < string_length; i++){
    random_string += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return random_string
}

module.exports = create_random_code;