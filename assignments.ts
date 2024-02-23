/*task#2
var person="Harry"
console.log("Hello ",person," would you like to learn some python today?")*/



//task#3//
// var person="harry potter"
// var split_word=person.split(" ")
// var title_case=[""]
// for (let i=0; i<split_word.length;i++){
//     title_case[i]=((split_word[i])[0].toUpperCase())+split_word[i].slice(1)
// }
// title_case.join("")
// console.log(`Lowercase: ${person.toLowerCase()}\nUppercase: ${person.toUpperCase()}\nTitlecase: ${title_case}`)



//task#4//
// console.log(`Albus Dumbledore once said "Perhaps those who are best suited to power are those who have never sought it."`)



//task#5//
// var famous_person="Albus Dumbledore"
// var message:string=(`${famous_person} once said "Perhaps those who are best suited to power are those who have never sought it."`) 
// console.log(message)



// //task#6//
// var person_name:string=`\t\tUmar\n\t\t\n`
// console.log(person_name)
// var trimmed_name=person_name.trim()
// console.log(trimmed_name)



//task#7&8//
// console.log(2+6)
// console.log(10-2)
// console.log(2*4)
// console.log(16/2)



// //task#9//
// var fav_num=2
// var message=`My favourite number is ${fav_num}.`
// console.log(message)



//task#10//
/*This comment explains the program in task#9. 
 I store my favourite number in a variable 'fav_num'.
 Then I store my message in a variable 'message'.
 Then I finally print my message*/



 //task#11//
//  var names=["Harry","Ronald","Hermoine","Malfoy"]
//  for (let i=0; i<names.length;i++){
//     console.log(`${i+1}. ${names[i]}\n`)
//  }



//task#12//
//  var names=["Harry","Ronald","Hermoine","Malfoy"]
//  for (let i=0; i<names.length;i++){
//     console.log(`Asalam u alaikum ${names[i]}!\n`)
//  }



// //task#13//
// let fav_transport=["Serene airplane","Honda Civic","Toyota Corolla","Sohrab Bicycle"]
// for (let i=0; i<fav_transport.length; i++){
//     console.log(`I would like to own a ${fav_transport[i]}`)
// }



//task#14//
// let guest_list=["Harry","Ronald","Hermoine","Snape"]
// for (let i=0; i<guest_list.length; i++){
//     console.log(`Hello ${guest_list[i]}!! You are invited for dinner.`)
// }
// console.log("\n")



// //task#15//
// let person_notcoming="Harry"
// console.log(`${person_notcoming} will not make it to the dinner.`)
// let new_person="Dumbledore"
// for (let j=0; j<guest_list.length; j++){
//     if (guest_list[j]==person_notcoming){
//         guest_list[j]=new_person
//     }
// }
// console.log("\n")
// for (let i=0; i<guest_list.length; i++){
//     console.log(`Hello ${guest_list[i]}!! You are invited for dinner.`)
// }
// console.log("\n")



// //task#16//
// console.log("Good news!! I have found a bigger table!")
// let new1="Voldemort"
// let new2="Malfoy"
// let new3="Tom Riddle"
// for (let i=guest_list.length; i>0; i--){
//     guest_list[i]=guest_list[i-1]
// }
// guest_list[0]=new1
// for (let i=guest_list.length; i>guest_list.length/2;i--){
//     guest_list[i]=guest_list[i-1]
// }
// guest_list[guest_list.length/2]=new2
// guest_list.push(new3)
// console.log("\n")
// for (let i=0; i<guest_list.length; i++){
//     console.log(`Hello ${guest_list[i]}!! You are invited for dinner.`)
// }
// console.log("\n")



// //task#17//
// console.log("Now only 2 people can be invited as table is being delayed!")
// console.log("\n")
// for (let i=guest_list.length-1;i>1;i--){
//     console.log(`I am sorry ${guest_list.pop()}, I cant invite you to the dinner!`)
// }
// console.log("\n")
// for (let i=0;i<guest_list.length;i++){
//     console.log(`You are lucky ${guest_list[i]}! You are still invited to the dinner!`)
// }
// delete guest_list[0]
// delete guest_list[1]
// console.log(`\nThe list left now is: ${guest_list}`)



//task#18//
// let placestovisit=["Iraq","Syria","Spain","Turkey","Iran"]
// // for (let i=0;i<placestovisit.length;i++){
// //     console.log(placestovisit[i])
// // }
// var printword:string
// let words_printed:string[]=[]
// for (let i=0; i<placestovisit.length;i++){
//     while (words_printed.indexOf(placestovisit[i])!=-1){
//         i++
//         if (i==placestovisit.length){i=0}
//     }
//     printword=placestovisit[i]
//     for(let j=0; j<placestovisit.length; j++){
//         while (words_printed.indexOf(placestovisit[j])!=-1){
//             j++
//         }
//         if(placestovisit[j]<printword){
//             printword=placestovisit[j]
//         }
//     }
//     words_printed.push(printword)
//     console.log(printword)
//     if (words_printed.length==placestovisit.length){break}
// }



//task#19//
// let guest_list=["Harry","Ronald","Hermoine","Snape"]
// console.log(`The number of people being invited for dinner are ${guest_list.length}.`)



//task#20//
// let rivers=["Indus","Jhelum","Chenab","Ravi","Sutlej","Beas"]



//task#21//
// let animal= {type:"dog", breed:"husky", color:"brown", age:"3 years"}



//task#22//
//we will use task#20 array for index error and give an index whixh doesn't exist//
// let rivers=["Indus","Jhelum","Chenab","Ravi","Sutlej","Beas"]
// console.log(rivers[-1])
// //the corrrect version is as://
// console.log(rivers[2])



//task#23//
// let car={make:"Honda", model:"Accord", year:"1999", color:"black", mileage:100000}
// //5 Tests which evaluate to TRUE//
// console.log("Is make='Honda'? I predict True.")
// console.log(car.make=="Honda")
// console.log("Is model='Accord'? I predict True.")
// console.log(car.model=="Accord")
// console.log("Is year='1999'? I predict True.")
// console.log(car.year=="1999")
// console.log("Is color='black'? I predict True.")
// console.log(car.color=="black")
// console.log("Is mileage<120000'? I predict True.")
// console.log(car.mileage<120000)

// //5 Tests which evaluate to FALSE//
// console.log("Is make='Suzuki'? I predict False.")
// console.log(car.make=="Suzuki")

// console.log("Is model='Civic'? I predict False.")
// console.log(car.model=="Civic")

// console.log("Is year='1998'? I predict True.")
// console.log(car.year=="1998")

// console.log("Is color='gray'? I predict False.")
// console.log(car.color=="gray")

// console.log("Is mileage>120000'? I predict False.")
// console.log(car.mileage>120000)




//task#24//
// //1. String test://
// let string1="UAE"
// let string2="UK"
// console.log(`${string1}=${string1}? ${string1==string1}`)
// console.log(`${string1}=${string2}? ${string1==string2}`)

// //2. Lower case function://
// let u_case="ELEPHANT"
// let l_case="elephant"
// console.log(`${u_case}=${l_case}? ${u_case==l_case}`)
// console.log(`${u_case}.toLowerCase()=${l_case}? ${u_case.toLowerCase()==l_case}`)

// //3. Numerical tests://
// let num1=2
// let num2=10
// console.log(`${num1}=${num2}? ${num1==num2}`)
// console.log(`${num1}<${num2}? ${num1<num2}`)
// console.log(`${num1}>${num2}? ${num1>num2}`)
// console.log(`${num1}<=${num2}? ${num1<=num2}`)
// console.log(`${num1}>=${num2}? ${num1>=num2}`)

// //4. AND and OR operators://
// let num3=12
// let num4=20
// let num5=23
// console.log(`${num3}<${num4} and ${num4}<${num5}? ${num3<num4 && num4<num5}`)
// console.log(`${num3}<${num4} or ${num4}>${num5}? ${num3<num4 || num4>num5}`)

// //5. Item in array or not: (using includes() function)//
// let sample_array=[0,1,2,3]
// function check(array,index){
//     if (array.indexOf(index)!=-1){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(`Is 2 present in the array? ${check(sample_array,2)}`)
// console.log(`Is 10 present in the array? ${check(sample_array,10)}`)



//task#25//
//version1://
// let alien_color="green"
// console.log("Is alien's color green?")
// if (alien_color=="green"){
//     console.log("You just earned 5 points!!")
// }
// else(
//     console.log("\n")
// )
//version2://
// let alien_color="red"
// console.log("Is alien's color green?")
// if (alien_color=="green"){
//     console.log("You just earned 5 points!!")
// }
// else{
//     console.log("\n")
// }



//task#26//
// function alien (alien_color){
//     if (alien_color=="green"){
//         console.log("You just earned 5 points.")
//     }
//     else{
//         console.log("You just earned 10 points.")
//     }
// }
// //1st version
// alien("green")
// //2nd version
// alien("blue")



//task#27//
// function alien(color){
//     if (color=="green"){
//         console.log("You just earned 5 points")
//     }
//     if (color=="yellow") {
//         console.log("You just earned 10 points")
//     } 
//     if (color=="red") {
//         console.log("You just earned 15 points")
//     }
// }
// //1st version
// alien("green")
// //2nd version
// alien("yellow")
// //3rd version
// alien("red")



//task#28
// let age=20

// if (age<2){
//     console.log("The person is a baby.")
// }
// if (age>=2 && age<4){
//     console.log("The person is a toddler.")
// }
// if (age>=4 && age<13){
//     console.log("The person is a kid.")
// }
// if (age>=13 && age<20){
//     console.log("The person is a teenager.")
// }
// if (age>=20 && age<65){
//     console.log("The person is an adult.")
// }
// else{
//     console.log("The person is an elder.")
// }



//task#29
// let favorite_fruit=["mango","lychee","apricot"]
// function check_fruits(fruit_array,fruit){
//     if (fruit_array.indexOf(fruit)!=-1){
//         return true
//     }
//     else{
//         return false
//     }
// }
// if (check_fruits(favorite_fruit,"apple")){
//     console.log(`You really like apples!`)
// }
// if (check_fruits(favorite_fruit,"mango")){
//     console.log(`You really like mangoes!`)
// }
// if (check_fruits(favorite_fruit,"orange")){
//     console.log(`You really like oranges!`)
// }
// if (check_fruits(favorite_fruit,"apricot")){
//     console.log(`You really like apricots!`)
// }
// if (check_fruits(favorite_fruit,"watermelon")){
//     console.log(`You really like watermelons!`)
// }



//task30//
// let user_names=["umar","ali","admin","zain","fahim"]
// for (let i=0; i<user_names.length; i++){
//     if (user_names[i]=="admin"){
//         console.log(`Hello ${user_names[i]}, would you like to see a status report?`)
//     }
//     else{
//     console.log(`Hello ${user_names[i]}, thank you for logging in again.`)
// }
// }



//task#31//
// let user_names=[]
// if (user_names.length==0){
//     console.log("We need to find some users!")
// }
// else{
// for (let i=0; i<user_names.length; i++){
//     if (user_names[i]=="admin"){
//         console.log(`Hello ${user_names[i]}, would you like to see a status report?`)
//     }
//     else{
//     console.log(`Hello ${user_names[i]}, thank you for logging in again.`)
// }
// }
// }



//task#32//
// let current_users=["umar","ali","admin","zain","fahim"]
// let new_users=["hamza","UMAR","Zain","haidar","haroon"]
// let repeat
// for (let i=0; i<new_users.length; i++){
//     for (let j=0; j<current_users.length; j++){
//         if (new_users[i].toLowerCase()==current_users[j].toLowerCase()){
//             repeat=true
//             break
//         }
//         else{
//             repeat=false
//         }
//     }
//     if (repeat==true){
//         console.log(`Sorry. The username '${new_users[i]}' has already been used. Enter a new name.`)
//     }
//     else{
//         console.log(`The username '${new_users[i]}' is available.`)
//     }
// }



//task#33//
// let numbers=[1,2,3,4,5,6,7,8,9]
// let suffix:string
// for (let i=0; i<numbers.length; i++){
//     if (numbers[i]==1){
//         suffix="st"
//     }
//     else if (numbers[i]==2){
//         suffix="nd"
//     }
//     else if (numbers[i]==3){
//         suffix="rd"
//     }
//     else{
//         suffix="th"
//     }
//     console.log(`${numbers[i]}${suffix}`)
// }



//task#34//
// let pizzas=["Fagita","Chicken Tiqqa","BBQ"]
// for (let i=0; i<pizzas.length; i++){
//     console.log(`I like ${pizzas[i]} pizza.`)
// }
// console.log(`I like pizza a lot. There are many types of pizzas amongst\nwhich my favurite ones are:
// ${pizzas[0]}, ${pizzas[1]} and ${pizzas[2]}.\nI really love pizza.`)



//task#35//
// let animals=["dog","cat","rabbit"]
// for (let i=0; i<animals.length; i++){
//     console.log(`A ${animals[i]} would make a great pet.`)
// }
// console.log("Any of these animlas would make a great pet.")



//task#36//
// function make_shirt(size,msg){
//     console.log(`The shirt is of ${size} size with '${msg}' printed on it.`)
// }
// make_shirt("small","Hello World")



//task#37//
// function make_shirt(size="large",msg="I love TypeScript"){
//     console.log(`The shirt is of ${size} size with '${msg}' printed on it.`)
// }
// make_shirt("large")
// make_shirt("medium")
// make_shirt(undefined,"Hello there")



//task#38//
// function describe_city(city:string,country="Pakistan"){
//     console.log(`${city} is in ${country}.`)
// }
// describe_city("Karachi")
// describe_city("Lahore")
// describe_city("Damascus","Syria")



//task#39//
// function city_country(city,country){
//     console.log(`"${city}, ${country}"`)
// }
// city_country("Karachi","Pakistan")
// city_country("Faisalabad","Pakistan")
// city_country("Jhelum","Pakistan")



//task#40//
// function make_album(artist:string,album:string,tracks?:number){
//     if(tracks!=undefined){
//         return {"artist":artist, "album":album,"tracks":tracks}  
//     }
//     else{
//         return {"artist":artist, "album":album}
//     }
// }
// console.log(make_album("Harry","Hogwarts",2))
// console.log(make_album("Ron","Diagon Alley",6))
// console.log(make_album("Malfoy","Ministry"))



//task#41//
// function show_magicians(magician_names){
//     for (let i =0; i<magician_names.length; i++){
//         console.log(magician_names[i])
//     }
// }
// let magicians=["Harry","Dumbledore","Minerva","Lupin"]
// // show_magicians(magicians)



// //task#42//
// function make_great(magician_names){
//     for (let i=0; i<magician_names.length; i++){
//     magician_names[i]=magician_names[i].concat(" the Great")
//     }
//     return magician_names
// }
// // make_great(magicians)
// // show_magicians(magicians)



// //task#43//
// let great_array=make_great([...magicians])
// show_magicians(great_array)
// show_magicians(magicians)



//task#44//
// function sandwich(items){
//     console.log("The sandwich ordered has following items:\n")
//     for (let i=0; i<items.length; i++){
//         console.log(`${i+1}. ${items[i]}`)
//     }
// }
// sandwich(["chicken","lettuce","ketchup","sauce"])



//task#45//
// function car(manufacture,model,...args){
//     let car_details:object={"manufacture":manufacture, "model":model}
//     let split
//     for (let i=2; i<arguments.length; i++){
//         split=arguments[i].split("=")
//         car_details[split[0]]=split[1]
//     }
//     return car_details
// }
// console.log(car("Honda","Accord 2006","color=white","transmission=manual"))
