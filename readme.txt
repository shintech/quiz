#GET questions
curl http://127.0.0.1:8000/api/questions

#GET questions/:id
curl http://127.0.0.1:8000/api/questions/:id

#POST question
 curl -H "Content-Type: application/json" -X POST -d '{"content":"killbill", "answer1":"answer1", "answer2":"answer2","answer3":"answer3","answer4":"answer4"}' http://127.0.0.1:8000/api/questions

#PUT questions
curl -H "Content-Type: application/json" -X PUT -d '{"name":"Kill Bill"}' http://127.0.0.1:8000/api/questions/2

#DELETE questions
curl -X DELETE http://127.0.0.1:8000/api/questions/1