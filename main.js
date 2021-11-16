class user{
    constructor(email, password, phone, name, secondName, description, photo){
        this.id = Date.now()
        this.email = email; //
        this.password = password; //
        this.phone = phone; //
        this.name = name; //
        this.secondName = secondName; //
        this.description = description; //
        this.photo = photo; //
        this.cart = []; //
        this.cups = [];
    }
}

class cup{

    constructor(name, ownerId, photo, description, price, size, color) {
        this.id = Date.now();
        this.ownerId = ownerId; //
        this.name = name; //
        this.photo = photo; //
        this.description = description; //
        this.price = price; //
        this.size = size; //
        this.color = color; //
    }
}


function GetCurrentUser(){
    let id = JSON.parse(localStorage.getItem('CurrentUser'))
    let Allusers = JSON.parse(localStorage.getItem('users'))
    let res = 0;
    for(i in Allusers){
      if(Allusers[i].id == id){
        res = Allusers[i];
      }
    }
    return res;
  }
