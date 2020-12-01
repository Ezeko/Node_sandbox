const fs = require('fs');
const { chdir } = require('process');
// console.log(__dirname)
// console.log(__filename)

//creating folder with fs

const create_folder = (folder_name) => {
    check = fs.existsSync(folder_name)
    if (check) {
        console.log('Opps!!!! folder ' + folder_name + ' already exist' )
    } else{
        fs.mkdirSync(folder_name)
    }
}




const del_folder = (folder_name) => {
    check = fs.existsSync(folder_name) //checking if folder exist
    if (check) {
        fs.rmdirSync(folder_name) //deleting folder with fs
    }
    else {
        console.log('oops!!!! folder ' + folder_name + ' does not exist')
    }
}

try{

    create_folder('files')
} 
catch (e) {
    console.log('An error occur', e)
}

try{

    del_folder('files')
} 
catch (e) {
    console.log('An error occur', e)
}
//writing file
fs.writeFileSync('./files/test.txt', 'Hello there!!! \n Testing microphone 1, 2')

//reading files
console.log(fs.readdirSync('files')) //checking files inside folder

console.log(fs.existsSync('./files/test.txt')) //with exact path you can check files with exists
console.log('checking')

//reading files

file = fs.readFileSync('./files/test.txt', 'utf-8')

console.log(file)

// fs.readFile('./files/test.txt', 'utf8', (err, file) => console.log(file)) // reading with async