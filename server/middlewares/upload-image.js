const aws = require("aws-sdk");
const multer = require("multer");
const multer_s3 = require("multer-s3");

aws.config.update({
	 secretAccessKey:process.env.AWSSecretKey,
	 accessKeyId:process.env.AWSAccessKeyId
})

const s3 = new aws.S3();

const upload =multer({
	storage:multer_s3({
		s3:s3,
		bucket:"amazon-app-v1",
		acl:"public-read",
		metadata:(req,file,cd)=>{
           cb(null,{fieldName:file.fieldName})
		},
		key:(req,file,cb)=>{
			 cb(null,Date.now().toString())
		}
	})
});


module.exports = upload;