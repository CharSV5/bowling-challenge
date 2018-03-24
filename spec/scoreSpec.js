'use strict';

describe('Score', function(){
  var score;
  var frame1;
  var frame2;


  beforeEach(function(){
    score = new Score;
    frame1 = new Frame;
    frame2 = new Frame;
    frame1.play1(2);
    frame1.play2(4);
  });

  it('returns a current score after first completed frame', function(){
    expect(score.totalScore(frame1)).toEqual(6);
  });

  it('returns a current score after second complete frame', function() {
    score.totalScore(frame1)
    frame2.play1(5)
    frame2.play2(3)
    expect(score.totalScore(frame2)).toEqual(14);
  })
});
