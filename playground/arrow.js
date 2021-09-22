// const square = function(x) {
//     return x*x
    
// }

// const square = (x) => {
//     return x*x
// }

// const square = (x) => x*x

// console.log(square(2));

const event = {
    name: 'Birthday Party',
    guesList : ['Andrew','Jen','Mike'],
    printGuestList() {

        console.log('Guest List for ' + this.name)

        this.guesList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name);
        })
    }
}

event.printGuestList()