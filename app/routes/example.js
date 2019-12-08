const express = require('express'),
	  router = express.Router();

router.get('/', (req, res, next) => {
	try {
		res.send({message: 'Hello'});		
	} catch (err) {
		res.send({ message: "Error", error: err })
	}
})

module.exports = router;