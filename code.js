var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["196d33f9-5abb-4191-a3d3-2197c0cd9367","c9dcd1f1-66a5-4c6d-969f-2f3e4cc35a4b","ab42755d-0df1-44e0-a2e8-8f24d9cb6b02","b7ac7f5c-6999-4cf4-8267-e7100f62dd39","165260ff-3d6a-486b-b1d5-51b29459e948"],"propsByKey":{"196d33f9-5abb-4191-a3d3-2197c0cd9367":{"name":"r a","sourceUrl":"assets/api/v1/animation-library/gamelab/6NYfpZPLRo55E4BW8CrSBVVDlWAP4h5a/category_icons/goldui16_result.png","frameSize":{"x":396,"y":392},"frameCount":1,"looping":true,"frameDelay":4,"version":"6NYfpZPLRo55E4BW8CrSBVVDlWAP4h5a","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":392},"rootRelativePath":"assets/api/v1/animation-library/gamelab/6NYfpZPLRo55E4BW8CrSBVVDlWAP4h5a/category_icons/goldui16_result.png"},"c9dcd1f1-66a5-4c6d-969f-2f3e4cc35a4b":{"name":"st","sourceUrl":"assets/api/v1/animation-library/gamelab/4yYO_IT42.v0HIIpWPdef86pPtR4_TWf/category_icons/goldui28_result.png","frameSize":{"x":396,"y":392},"frameCount":1,"looping":true,"frameDelay":2,"version":"4yYO_IT42.v0HIIpWPdef86pPtR4_TWf","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":392},"rootRelativePath":"assets/api/v1/animation-library/gamelab/4yYO_IT42.v0HIIpWPdef86pPtR4_TWf/category_icons/goldui28_result.png"},"ab42755d-0df1-44e0-a2e8-8f24d9cb6b02":{"name":"","sourceUrl":"assets/api/v1/animation-library/gamelab/wK_xikN23MfezuX3qYzeGKtIHqMrF2eJ/category_board_games_and_cards/cardBack_blue3.png","frameSize":{"x":140,"y":190},"frameCount":1,"looping":true,"frameDelay":2,"version":"wK_xikN23MfezuX3qYzeGKtIHqMrF2eJ","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":140,"y":190},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wK_xikN23MfezuX3qYzeGKtIHqMrF2eJ/category_board_games_and_cards/cardBack_blue3.png"},"b7ac7f5c-6999-4cf4-8267-e7100f62dd39":{"name":"wall1","sourceUrl":"assets/api/v1/animation-library/gamelab/iXz63Eo1uaIi5XtkefDszxi6qzTTCqQm/category_faces/box.png","frameSize":{"x":66,"y":118},"frameCount":3,"looping":true,"frameDelay":4,"version":"iXz63Eo1uaIi5XtkefDszxi6qzTTCqQm","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":198,"y":118},"rootRelativePath":"assets/api/v1/animation-library/gamelab/iXz63Eo1uaIi5XtkefDszxi6qzTTCqQm/category_faces/box.png"},"165260ff-3d6a-486b-b1d5-51b29459e948":{"name":"wall","sourceUrl":"assets/api/v1/animation-library/gamelab/y5x21LxrMhtyUYun4bwNOI7ql3y1cylX/category_faces/box2.png","frameSize":{"x":200,"y":73},"frameCount":3,"looping":true,"frameDelay":4,"version":"y5x21LxrMhtyUYun4bwNOI7ql3y1cylX","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":219},"rootRelativePath":"assets/api/v1/animation-library/gamelab/y5x21LxrMhtyUYun4bwNOI7ql3y1cylX/category_faces/box2.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var w1,w2,w3,w4,w5,w6;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var rb;
var a1,st;

w1 = createSprite(25,75,50,150);
w1.shapeColor = "black";

w2 = createSprite(25,300,50,200);
w2.shapeColor = "black";

w3 = createSprite(200,25,300,50);
w3.shapeColor = "black";

w4 = createSprite(200,375,300,50);
w4.shapeColor = "black";

w5 = createSprite(375,75,50,150);
w5.shapeColor = "black";

w6 = createSprite(375,300,50,200);
w6.shapeColor = "black";

b1 = createSprite(75,275,50,150);
b1.shapeColor = "blue";

b2 = createSprite(250,325,200,50);
b2.shapeColor = "orange";

b3 = createSprite(125,150,50,100);
b3.shapeColor = "green";

b4 = createSprite(200,75,200,50);
b4.shapeColor = "purple";

b5 = createSprite(324.5,175,50,150);
b5.shapeColor = "pink";

b6 = createSprite(175,225,150,50);
b6.shapeColor = "yellow";

b7 = createSprite(275,175,50,150);
b7.shapeColor = "violet";

b8 = createSprite(75,75,50,50);
b8.shapeColor = "skyblue";

b9  = createSprite(200,125,100,50);
b9.shapeColor = "lightgreen";

b10 = createSprite(250,275,200,50);
b10.shapeColor = "brown";

rb = createSprite(50,175,100,50);
rb.shapeColor = "red";


a1 = createSprite(375,125,5,5);
a1.setAnimation("r a");
a1.scale = 0.1;

st = createSprite(25,125,5,5);
st.setAnimation("st");
st.scale = 0.1;


createEdgeSprites();

function draw() {
  background("grey");
  drawSprites();
  
  b1.collide(w1);
  b1.collide(w2);
  b1.collide(w3);
  b1.collide(w4);
  b1.collide(w5);
  b1.collide(w6);
  b1.collide(b2);
  b1.collide(b3);
  b1.collide(b4);
  b1.collide(b5);
  b1.collide(b6);
  b1.collide(b7);
  b1.collide(b8);
  b1.collide(b9);
  b1.collide(b10);
  b1.collide(rb);
  
//----------------------------------------------------------------------------
  
  b2.collide(w1);
  b2.collide(w2);
  b2.collide(w3);
  b2.collide(w4);
  b2.collide(w5);
  b2.collide(w6);
  b2.collide(b1);
  b2.collide(b3);
  b2.collide(b4);
  b2.collide(b5);
  b2.collide(b6);
  b2.collide(b7);
  b2.collide(b8);
  b2.collide(b9);
  b2.collide(b10);
  b2.collide(rb);
  
  //----------------------------------------------------------------------------
  
  b3.collide(w1);
  b3.collide(w2);
  b3.collide(w3);
  b3.collide(w4);
  b3.collide(b1);
  b3.collide(b2);
  b3.collide(w5);
  b3.collide(w6);
  b3.collide(b4);
  b3.collide(b5);
  b3.collide(b6);
  b3.collide(b7);
  b3.collide(b8);
  b3.collide(b9);
  b3.collide(b10);
  b3.collide(rb);
  
  //----------------------------------------------------------------------------
    
  b4.collide(w1);
  b4.collide(w2);
  b4.collide(w3);
  b4.collide(w4);
  b4.collide(b1);
  b4.collide(b2);
  b4.collide(b3);
  b4.collide(w5);
  b4.collide(w6);
  b4.collide(b5);
  b4.collide(b6);
  b4.collide(b7);
  b4.collide(b8);
  b4.collide(b9);
  b4.collide(b10);
  b4.collide(rb);
  
  //------------------------------------------------------------------------
  
  b5.collide(w1);
  b5.collide(w2);
  b5.collide(w3);
  b5.collide(w4);
  b5.collide(b1);
  b5.collide(b2);
  b5.collide(b3);
  b5.collide(b4);
  b5.collide(w5);
  b5.collide(w6);
  b5.collide(b6);
  b5.collide(b7);
  b5.collide(b8);
  b5.collide(b9);
  b5.collide(b10);
  b5.collide(rb);
  
  //---------------------------------------------------------------------------
  
  b6.collide(w1);
  b6.collide(w2);
  b6.collide(w3);
  b6.collide(w4);
  b6.collide(b1);
  b6.collide(b2);
  b6.collide(b3);
  b6.collide(b4);
  b6.collide(b5);
  b6.collide(w5);
  b6.collide(w6);
  b6.collide(b7);
  b6.collide(b8);
  b6.collide(b9);
  b6.collide(b10);
  b6.collide(rb);
  
  //---------------------------------------------------------------------------
  
  b7.collide(w1);
  b7.collide(w2);
  b7.collide(w3);
  b7.collide(w4);
  b7.collide(b1);
  b7.collide(b2);
  b7.collide(b3);
  b7.collide(b4);
  b7.collide(b5);
  b7.collide(b6);
  b7.collide(w5);
  b7.collide(w6);
  b7.collide(b8);
  b7.collide(b9);
  b7.collide(b10);
  b7.collide(rb);
  
  //----------------------------------------------------------------------------
  
  b8.collide(w1);
  b8.collide(w2);
  b8.collide(w3);
  b8.collide(w4);
  b8.collide(b1);
  b8.collide(b2);
  b8.collide(b3);
  b8.collide(b4);
  b8.collide(b5);
  b8.collide(b6);
  b8.collide(b7);
  b8.collide(w5);
  b8.collide(w6);
  b8.collide(b9);
  b8.collide(b10);
  b8.collide(rb);
  
  //---------------------------------------------------------------------------
  
  b9.collide(w1);
  b9.collide(w2);
  b9.collide(w3);
  b9.collide(w4);
  b9.collide(b1);
  b9.collide(b2);
  b9.collide(b3);
  b9.collide(b4);
  b9.collide(b5);
  b9.collide(b6);
  b9.collide(b7);
  b9.collide(b8);
  b9.collide(w5);
  b9.collide(w6);
  b9.collide(b10);
  b9.collide(rb);
  
  //----------------------------------------------------------------------------
  
  b10.collide(w1);
  b10.collide(w2);
  b10.collide(w3);
  b10.collide(w4);
  b10.collide(b1);
  b10.collide(b2);
  b10.collide(b3);
  b10.collide(b4);
  b10.collide(b5);
  b10.collide(b6);
  b10.collide(b7);
  b10.collide(b8);
  b10.collide(b9);
  b10.collide(w5);
  b10.collide(w6);
  b10.collide(rb);
  
  //----------------------------------------------------------------------------
  
  rb.collide(w1);
  rb.collide(w2);
  //rb.collide(w3);
  //rb.collide(w4);
  rb.collide(b1);
  rb.collide(b2);
  rb.collide(b3);
  rb.collide(b4);
  rb.collide(b5);
  rb.collide(b6);
  rb.collide(b7);
  rb.collide(b8);
  rb.collide(b9);
  rb.collide(b10);
  //rb.collide(w5);
  //rb.collide(w6);
  
  
 //-----------------------------------------------------------------------------
 
  if(mousePressedOver(b1))  {
    if(b1.y === 275){
      b1.velocityY = -5;
    }
  if(b1.y <= 270){
    b1.velocityY = 5;
  }
}

//------------------------------------------------------------------------------
  if(mousePressedOver(b2)){
    if(keyDown("LEFT_ARROW")){
     if(b1.y === 275 && b3.y <= 160){
    b2.x = 200;
    }
    else if(b1.y <= 180){
      b2.velocityX = -5;
    }
  }
  if(keyDown("RIGHT_ARROW")){
    b2.velocityX = 5;
  }
  }
  
//----------------------------------------------------------------------------
  
  if(mousePressedOver(b3)){
    if(b3.y === 150 && b6.x === 175){
    b3.velocityY = -5;
  }
  else if(b3.y <= 150){
    b3.velocityY = 5;
  }
  else if(b3.y >=160){
    b3.velocityY =-5;
  }
  else if(b3.y <= 250){
    b3.y === 250;
  }
  }
  
//------------------------------------------------------------------------------
  
  if(mousePressedOver(b4)){
    if(b8.y === 75 && b4.x <= 210 ){
    b4.velocityX = 5;
  }
  else if(b8.y === 75 && b4.x >= 210){
    b4.velocityX = -5;
  }
  else if(b8.y >= 80 && b4.x >= 190){
    b4.velocityX = -5;
  }
  else if(b4.x === 150 && b8.y >= 80){
    b4.velocityX = 5;
  }
  }
  
//----------------------------------------------------------------------------
  
  if(mousePressedOver(b5)){
    if(keyDown("UP_ARROW")){
    if(b4.x === 250 && b5.y === 175){
      b5.velocityY = 0;
    }
    else if(b4.x === 250 && b5.y >= 180){
      b5.y = 175;
    }
    else if(b4.x <= 210){
      b5.velocityY = -5;
    }
  }
  if(keyDown("DOWN_ARROW")){
    if(b2.x === 250 && b10.x === 200){
      b5.y = 225;
    }
    else if(b5.y <= 150 && b10.x === 250){
      b5.velocityY = 5;
    }
    else if(b2.x <= 210 && b10.x <= 210){
      b5.velocityY = 5;
    }
  }
  }
  
//-----------------------------------------------------------------------------
  
  if(mousePressedOver(b6)){
      if(keyDown("LEFT_ARROW")){
    if(b1.y >= 170 && b6.x >= 180 && b3.y <= 160){
    b6.x = 175;
    }

  }
  
  if(keyDown("RIGHT_ARROW")){
    if(b1.x === 75 && b5.y >= 175){
    b6.x = 225;
  }
    else if(b1.y >= 170 && b6.x <= 180 && b5.y <= 130){
      b6.velocityX = 5;
    }
  }
  }
  
  //---------------------------------------------------------------------------
  
  if(mousePressedOver(b7)){
   if(keyDown("UP_ARROW")){
    if(b4.x >= 210 && b7.y ===175){
     b7.velocityY = 0;
    }
    else if(b4.x >= 210 && b7.y >= 180){
      b7.y = 175;
    }
    else if(b4.x <= 160){
      b7.velocityY = -5;
    }
    
  }
  if(keyDown("DOWN_ARROW")){
    if(b2.x >= 190 && b7.y <= 225)
    b7.y = 225;
    else if(b2.x <= 160 && b7.y <= 225){
      b7.velocityY = 5;
    }
    
  } 
  }
  
  
  //---------------------------------------------------------------------------
  
  if(mousePressedOver(b8)){
  if(keyDown("UP_ARROW")){
    b8.velocityY = -5;
  }
  if(keyDown("DOWN_ARROW")){
    if(rb.x >= 150){
    b8.y = 175;
    }
    if(rb.x <= 110){
      b8.velocityY = 5;
    }
  }
  }
  
  //---------------------------------------------------------------------------
  
  if(mousePressedOver(b9)){
    if(b3.y >= 190 ){
      b9.x = 100;
    }
    else if(b7.y >= 220 && b5.y <= 180 && b9.x === 250){
      b9.x = 200;
    }
    else if(b7.y >= 220 && b5.y <= 180 && b9.x === 200){
      b9.x = 250;
    }
    else if(b7.y >= 220 && b5.y >= 220 && b9.x <= 260){
      b9.velocityX = 5;
    }
    else if(b9.x === 300){
      b9.x =200;
    }
  }
  
  //----------------------------------------------------------------------------
  
  if(mousePressedOver(b10)){
  if(keyDown("LEFT_ARROW")){
    if(b1.y === 275 && b3.y <= 210){
    b10.x = 200;
    }
    else if(b1.y <= 180 && b3.y <= 210){
      b10.velocityX = -5;
    }
    
    
  }
  if(keyDown("RIGHT_ARROW")){
    if(b10.x === 200 && b5.y >= 220){
      b10.velocityX = 0;
    }
    else if(b5.y <= 180) {
      b10.velocityX = 5;
    }
  }
  }

  //----------------------------------------------------------------------------
  
  if(mousePressedOver(rb)){
  
    if(b3.y === 150){
    rb.velocityX = 0;
  }
  else if(b3.y <= 110 || b3.y >= 240){
    
    if(rb.x === 50){
      rb.x = 200;
    }
    
  }
  
  if(b5.y <= 270 && b7.y <= 270){
    rb.velocityX = 0;
  }
  else if(b5.y >= 270 && b7.y >= 270){
    rb.velocityX = 5;
  }
 
  }
  
  //----------------------------------------------------------------------------
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
