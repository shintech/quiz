#GET questions
curl http://127.0.0.1:8000/api/questions

#GET questions/:id
curl http://127.0.0.1:8000/api/questions/:id

#POST question
 curl -H "Content-Type: application/json" -X POST -d '{"content":"2 + 3 = ?", "answer1":"42", "answer1Correct":false, "answer2":"7", "answer2Correct":false, "answer3":"5", "answer3Correct":true, "answer4":"1,000,000", "answer4Correct":false }' http://127.0.0.1:8000/api/questions

#PUT questions
curl -H "Content-Type: application/json" -X PUT -d '{"name":"Kill Bill"}' http://127.0.0.1:8000/api/questions/2

#DELETE questions
curl -X DELETE http://127.0.0.1:8000/api/questions/1