const bcrypt = require('bcrypt');

const password = '$2b$10$PbUcZ4DGvpeRgQu9rUgrp.RUpw8JwgL3cvH8wexxrWch2xlzirT9G'; 

bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
        console.error('Error hashing password:', err);
        return;
    }
    console.log('Hashed password:', hash); // In ra hash mật khẩu
});
