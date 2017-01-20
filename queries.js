var Question = require("./db").question;
var Answer = require("./db").answer;

function getAllQuestions(req, res){
  Question.find()
  .populate("answers")
  .exec(function(err, question){
    res.status(200)
      .json(question)
  })
}

function getSingleQuestion(req, res){
  Question.findById(req.params.id)
  .populate("answers")
  .exec(function(err, question){
    res.status(200)
      .json(question)
  })
}

function getQuestionsAnswers(req, res){
  Answer.find()
    .populate('_question')
    .exec(function(err, answer){
      res.status(200)
        .json(answer)
    })
}

function createQuestion(req, res){
  
  var question = new Question({
    content: req.body.content
  });
  
  question.save(function(err, data){ 
    if(err){ console.log(err) }
    var answer1 = new Answer({
      _question: data._id,
      content: req.body.answer1,
      correct: req.body.answer1Correct
    });  
    var answer2 = new Answer({
      _question: data._id,
      content: req.body.answer2,
      correct: req.body.answer2Correct
    });  
    var answer3 = new Answer({
      _question: data._id,
      content: req.body.answer3,
      correct: req.body.answer3Correct
    });  
    var answer4 = new Answer({
      _question: data._id,
      content: req.body.answer4,
      correct: req.body.answer4Correct
    }); 
    answer1.save(function(err){
      if(err){ console.log(err) }
    });
    answer2.save(function(err){
      if(err){ console.log(err) }
    });
    answer3.save(function(err){
      if(err){ console.log(err) }
    });
    answer4.save(function(err){
      if(err){ console.log(err) }
    });
    
    question.answers.push(answer1._id, answer2._id, answer3._id, answer4._id);
    question.save();

    res.status(200)
      .json({ success: data, message: "Created one question...", });
  });



}

function updateQuestion(req, res){
  Question.findById(req.params.id, function(err, question){
    if (err){ res.send(err) }
    question.name = req.body.name;
    question.save(function(err){
      if (err){ res.send(err); }
      res.json({ updated: question, message: "Question updated..."});
    });
  });
}

function removeQuestion(req, res){
  Question.remove({
    _id: req.params.id
  }, function(err, question){
    if (err){
      res.send(err);
    }
    res.json({ removed: question, message: 'Question deleted...'});
  });
}

module.exports = {
  getAllQuestions: getAllQuestions,
  getSingleQuestion: getSingleQuestion,
  createQuestion: createQuestion,
  updateQuestion: updateQuestion,
  removeQuestion: removeQuestion,
  getQuestionsAnswers: getQuestionsAnswers,
};