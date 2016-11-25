const electron = require('electron')

const app = electron.app

const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')
const express = require('express')
const server = express()


server.get('/', function (req, res) {
  res.send('Hello World!')
})

server.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})





let mainWindow

function createWindow () {

  mainWindow = new BrowserWindow({width: 500, height: 60,title:"NETDROMM"})


  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))


  //mainWindow.webContents.openDevTools()


  mainWindow.on('closed', function () {

    mainWindow = null
  })
}


app.on('ready', createWindow)


app.on('window-all-closed', function () {

  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {

  if (mainWindow === null) {
    createWindow()
  }
})
