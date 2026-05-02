const db = require("../config/db");


exports.addSchool = (data,callback)=>{
    const query = 
    `INSERT INTO schools(name,address,latitude,longitude) 
    VALUES(?,?,?,?)`;
    db.query(query,data,callback);
}


exports.getNearbySchools = (lat,long,callback)=>{
    const range = 1;

    const query = `
    SELECT * FROM schools
    where latitude between ? and ? 
    and longitude between ? and ?


    `;

    db.query(query,
        [lat-range,lat+range,long-range,long+range],
        callback
    );
};