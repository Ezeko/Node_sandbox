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
    check = fs.existsSync(folder_name)
    if (check) {
        fs.rmdirSync(folder_name) //deleting folder with fs
    }
    else {
        console.log('oops!!!! folder ' + folder_name + ' does not exist')
    }
}

create_folder('files')

fs.writeFileSync('./files/test.txt', 'Hello there!!! \n Testing microphone 1, 2')