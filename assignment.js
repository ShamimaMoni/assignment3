function kilometerToMeter(distance){
    if (distance<0){
        console.log("Distance cannot be negative");
    }
    else{
    var meter = distance*1000;
    return meter;
    }
}

function budgetCalculator(clock, phone, laptop){
    if (clock<0 || phone<0 || laptop<0){
        console.log("Amount can not be negative");
    }
    else{
        var total = clock*50 + phone*100 + laptop*500;
        return total;
    }
}

function hotelCost(noOfStay){
    if (noOfStay <0){
        console.log("Days of stay can not be negative");
    }
    else if (noOfStay <= 10){
        var cost = noOfStay*100;
        return cost;
    } 
    else if (noOfStay <= 20){
        var cost = 10*100 + (noOfStay-10)*80;
        return cost;
    }
    else{
        var cost = 10*100 + 10*80 + (noOfStay-20)*50;
        return cost;
    }
}

function megaFriend(names){
    max = names[0].length;
    maxName = names[0];
    for (var i = 1; i< names.length; i++){
        if (max< names[i].length){
            max = names[i].length;
            maxName = names[i];
        }
    }

    return maxName;
}

var convertDistance = kilometerToMeter(5);
console.log(convertDistance);

var clockNo = 3;
var phoneNo = 10;
var laptopNo = 2;
var totalBudget = budgetCalculator(clockNo, phoneNo, laptopNo);
console.log(totalBudget);

var stayDuration = 13;
var totalCost = hotelCost(stayDuration);
console.log(totalCost);

var friendName = ["kamal", "robi", "shafiul", "robin", "mahbub"];
var bigFriend = megaFriend(friendName);
console.log(bigFriend);