// deploy.js
const Client = require('ssh2-sftp-client');
const path = require('path');
const fs = require('fs');

const sftp = new Client();

const config = {
  host: 'dein-server.de',
  port: 22,
  username: 'deinUser',
  password: 'deinPasswort', // oder privateKey nutzen
};

const localDir = path.join(__dirname, 'dist');
const remoteDir = '/var/www/html/'; // oder dein Zielverzeichnis

async function uploadDir(local, remote) {
  try {
    await sftp.connect(config);
    console.log('Verbunden mit SFTP');

    // Remote-Verzeichnis ggf. löschen
    try {
      await sftp.rmdir(remote, true);
    } catch (err) {
      // Ignorieren, falls Verzeichnis nicht existiert
    }

    await sftp.mkdir(remote, true);
    await sftp.uploadDir(local, remote);
    console.log('Upload abgeschlossen');
  } catch (err) {
    console.error('Fehler beim Upload:', err);
  } finally {
    sftp.end();
  }
}

uploadDir(localDir, remoteDir);
