// Преобразуйте объект в JSON, а затем обратно в обычный объект
let user = {
    name: "Василий Иванович",
    age: 35
};

let user1 = JSON.parse(JSON.stringify(user));


// Исключить обратные ссылки
let room = {
    number: 23
};
  
let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
};
  
room.occupiedBy = meetup;
meetup.self = meetup;
  
alert( JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
}));
