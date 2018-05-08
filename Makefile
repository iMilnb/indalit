push:
	git push
	aws s3 cp . s3://indalit.es --recursive --exclude='.*'
