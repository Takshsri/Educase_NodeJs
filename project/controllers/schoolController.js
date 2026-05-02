const school = require('../models/schoolModels');

function calculateDistance(lat1,lon1,lat2,lon2){
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI /180;
    const dLon = (lon2 - lon1) *Math.PI /180;
    const a = 
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) ** 2;
    return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));


}

exports.addSchool = (req,res)=>{
    const {name,address,latitude,longitude} = req.body;

    if(!name || !address || !latitude || !longitude){
        return res.status(400).json({error:"All fields are required"});
    }

    school.addSchool([name,address,latitude,longitude],(err)=>{
        if(err){
            return res.status(500).json({error : err.message});
        }
        res.json({message :"School added Successfully"});
    });
};

exports.listSchools = (req,res)=>{
      const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    return res.status(400).json({ error: "Coordinates required" });
  }

  const lat = parseFloat(latitude);
  const lng = parseFloat(longitude);

  school.getNearbySchools(lat, lng, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    const sorted = results
      .map(s => ({
        ...s,
        distance: calculateDistance(
          lat,
          lng,
          s.latitude,
          s.longitude
        )
      }))
      .sort((a, b) => a.distance - b.distance);

    res.json(sorted);
  });
};